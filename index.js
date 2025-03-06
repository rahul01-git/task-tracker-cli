const {
  listTasks,
  addTask,
  updateTask,
  deleteTask,
  updateStatus,
} = require("./options");

const parseId = (arg) => {
  const id = parseInt(arg, 10);
  if (isNaN(id)) {
    console.log("Please provide a valid task ID.");
    return null;
  }
  return id;
};

const args = process.argv.slice(2);
const cmd = args[0];

const ACTIONS = {
  ADD: "add",
  UPDATE: "update",
  DELETE: "delete",
  LIST: "list",
  LIST_TODO: "todo",
  LIST_DONE: "done",
  LIST_IN_PROGRESS: "in-progress",
  MARK_DONE: "mark-done",
  MARK_IN_PROGRESS: "mark-in-progress",
};

switch (cmd) {
  case ACTIONS.LIST: {
    const filter = args[1];
    if (filter) {
      if (
        ![
          ACTIONS.LIST_TODO,
          ACTIONS.LIST_DONE,
          ACTIONS.LIST_IN_PROGRESS,
        ].includes(filter)
      ) {
        console.log("Invalid filter");
        break;
      }
    }
    listTasks(filter || null);
    break;
  }

  case ACTIONS.ADD:
    const description = args.slice(1).join(" ");
    description
      ? addTask(description)
      : console.log("Provide a task description.");

    break;

  case ACTIONS.UPDATE: {
    const id = parseId(args[1]);
    const newDescription = args.slice(2).join(" ");
    if (id && newDescription) updateTask(id, newDescription);
    break;
  }

  case ACTIONS.DELETE: {
    const id = parseId(args[1]);
    if (id) deleteTask(id);
    break;
  }

  case ACTIONS.MARK_DONE:
  case ACTIONS.MARK_IN_PROGRESS: {
    const id = parseId(args[1]);
    if (id)
      updateStatus(idx, cmd === ACTIONS.MARK_DONE ? "done" : "in-progress");
    break;
  }

  default:
    console.log("Invalid action");
}
