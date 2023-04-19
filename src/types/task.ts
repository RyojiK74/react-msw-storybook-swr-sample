export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
};

export type TaskStatus = "done" | "in-progress" | "todo" | "archived";
