import { Task } from "../../types";
import { Result } from "../../types/result";

const TASK_LOCAL_STORAGE_KEY = "TASKS";

export const addTask = ({
  title,
  description,
}: Omit<Task, "id" | "status">): Result<Task, Error> => {
  const tasks = getTasks();

  const newTask: Task = {
    id: new Date().toISOString(),
    title,
    description,
    status: "todo",
  };

  const newTasks = [...tasks, newTask];
  try {
    localStorage.setItem(TASK_LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  } catch (e) {
    if (e instanceof Error) {
      return { ok: false, error: e };
    }

    return { ok: false, error: new Error("Unknown Error") };
  }
  return { ok: true, value: newTask };
};

export const getTasks = () => {
  const tasksJSON = localStorage.getItem(TASK_LOCAL_STORAGE_KEY);

  if (tasksJSON === null) {
    return [];
  }

  return JSON.parse(tasksJSON) as Task[];
};
