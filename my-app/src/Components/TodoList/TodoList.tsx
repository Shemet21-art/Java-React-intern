import { ChangeEvent, useState } from "react";
import BaseInput from "../BaseInput/BaseInput";
import { Button, Checkbox } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Task = {
  id: number;
  todo: string;
  checked: boolean;
};

function TodoList() {
  const [inputValue, setInputvalue] = useState("");
  const [modalInputValue, setModalInputValue] = useState("");
  const [listTasks, setListTasks] = useState<Task[] | any>([]);
  const [idTask, setIdTask] = useState<null | number>(null);
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const openModal = (item: Task) => {
    setOpen(true);
    setSelectedTask(item);
    setModalInputValue(item.todo);
  };

  const onSave = () => {
    const updatedList = listTasks.map((item: Task) => {
      if (item.id === selectedTask?.id) {
        return {
          ...item,
          todo: modalInputValue,
        };
      }
      return item
    });
    setListTasks(updatedList)
    setOpen(false)
  };

  const selectTodoIdForEdit = (id: Task["id"]) => {
    console.log(id);
    setIdTask(id);
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputvalue(e.target.value);
  };

  const onChangeModalInput = (e: ChangeEvent<HTMLInputElement>) => {
    setModalInputValue(e.target.value);
  };

  function addTask() {
    const newTask = {
      id: Math.random(),
      todo: inputValue,
      checked: false,
    };
    const updatedList = [...listTasks, { ...newTask }];
    setListTasks([...updatedList]);
  }

  function handleDelete(id: number) {
    const newList = listTasks.filter((item: any) => item.id !== id);
    setListTasks(newList);
  }

  const checkTask = (id: Task["id"]) => {
    setListTasks(
      listTasks.map((item: any) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      })
    );
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <BaseInput
          value={inputValue}
          onChange={onChangeInput}
          label={"Add task "}
        />
        <Button onClick={addTask}>Add Task</Button>
        {listTasks.map((item: any) => {
          return (
            <div
              style={{
                opacity: item.checked ? 0.5 : 1,
                textDecoration: item.checked ? "line-through" : "none",
              }}
              key={item.id}
            >
              <p>{item.todo}</p>
              <Button onClick={() => handleDelete(item.id)}> delete</Button>
              <Button onClick={() => openModal(item)}> Change</Button>
              <Checkbox onClick={() => checkTask(item.id)} />
            </div>
          );
        })}
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <BaseInput
              value={modalInputValue}
              onChange={onChangeModalInput}
              label={selectedTask?.todo || ""}
            />
            <Button onClick={onSave}>Change</Button>
          </form>{" "}
        </Box>
      </Modal>
    </>
  );
}

export default TodoList;
