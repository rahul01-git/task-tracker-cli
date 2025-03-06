const fs = require("fs");
const tasksFile = "./tasks.json";

if (!fs.existsSync(tasksFile)) fs.writeFileSync(tasksFile, "[]", "utf8");

const getTasks = () => JSON.parse(fs.readFileSync(tasksFile, "utf8")) || [];
const saveTasks = (tasks) =>
  fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2), "utf8");

const getTaskById = (id) => {
  const tasks = getTasks();
  const index = tasks.findIndex((task) => task.id === id);
  return { tasks, task: index !== -1 ? tasks[index] : null, index };
};

const addTask = (description) => {
  const tasks = getTasks();
  tasks.push({
    id: tasks.length + 1,
    description,
    status: "todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  saveTasks(tasks);
  console.log("Task added successfully");
};

const listTasks = (status = null) => {
  const tasks = status
    ? getTasks().filter((task) => task.status === status)
    : getTasks();
  console.log(`${status?.toUpperCase() || "All"} Tasks:`);
  tasks.forEach(({ id, description }) => console.log(`${id}. ${description}`));
};

const updateTask = (id, description) => {
  const { tasks, task } = getTaskById(id);
  if (task) {
    task.description = description;
    task.updatedAt = new Date();
    saveTasks(tasks);
    console.log("Task updated successfully");
  } else console.log("Task not found");
};

const deleteTask = (id) => {
  let tasks = getTasks().filter((task) => task.id !== id);
  saveTasks(tasks);
  console.log("Task deleted successfully");
};

const updateStatus = (id, status) => {
  const { tasks, task } = getTaskById(id);
  if (task) {
    task.status = status;
    task.updatedAt = new Date();
    saveTasks(tasks);
    console.log(`Task marked as ${status}`);
  } else console.log("Task not found");
};

module.exports = {
  addTask,
  listTasks,
  updateTask,
  deleteTask,
  updateStatus,
};
