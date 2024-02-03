import { ChangeEvent, useState } from "react";
import BaseInput from "../BaseInput/BaseInput";
import { Button } from "@mui/material";
import Modal from "../Modal/Modal";
import TaskItem from "../TaskItem/TaskItem";

export type Task = {
  id: number;
  todo: string;
  checked: boolean;
};

function TodoList() {
  const [inputValue, setInputvalue] = useState<string>("");
  const [modalInputValue, setModalInputValue] = useState<string>("");
  const [listTasks, setListTasks] = useState<Task[]>([]);
  const [open, setOpen] = useState<boolean>(false);
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
      return item;
    });
    setListTasks(updatedList);
    setOpen(false);
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
        {listTasks.map((item: Task) => (
          <TaskItem
            onCheckTask={checkTask}
            onDelete={handleDelete}
            onOpenModal={openModal}
            item={item}
            key={item.id}
          />
        ))}
      </div>
      <Modal
        onChange={onChangeModalInput}
        onClose={() => setOpen(false)}
        onSave={onSave}
        open={open}
        value={modalInputValue}
      />
    </>
  );
}

export default TodoList;
