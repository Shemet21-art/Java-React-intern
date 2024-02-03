import { Button, Checkbox } from "@mui/material";
import { Task } from "../TodoList/TodoList";

type PropsType = {
  item: Task;
  onDelete: (id: number) => void;
  onOpenModal: (task: Task) => void;
  onCheckTask: (id: number) => void;
};

function TaskItem({ item, onDelete, onOpenModal, onCheckTask }: PropsType) {
  return (
    <div
      style={{
        opacity: item.checked ? 0.5 : 1,
        textDecoration: item.checked ? "line-through" : "none",
      }}
      key={item.id}
    >
      <p>{item.todo}</p>
      <Button onClick={() => onDelete(item.id)}> delete</Button>
      <Button onClick={() => onOpenModal(item)}> Change</Button>
      <Checkbox onClick={() => onCheckTask(item.id)} />
    </div>
  );
}

export default TaskItem;
