import { addTask as addTaskRepository } from "../../repository/task/index";

export const addTask = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const result = addTaskRepository({ title, description });

  return result;
};
