# Task Tracker CLI

A simple command-line interface (CLI) task tracker built using Node.js. This tool helps you manage tasks efficiently with commands to add, update, delete, mark status, and list tasks.

## Task From
[Roadmap Website](https://roadmap.sh/projects/task-tracker)

## Usage

### Adding a new task
```sh
task-cli add "Buy groceries"
```
**Output:**
```
Task added successfully
```

### Updating and deleting tasks
#### Update a task:
```sh
task-cli update 1 "Buy groceries and cook dinner"
```
#### Delete a task:
```sh
task-cli delete 1
```

### Marking a task as in progress or done
#### Mark a task as in progress:
```sh
task-cli mark-in-progress 1
```
#### Mark a task as done:
```sh
task-cli mark-done 1
```

### Listing tasks
#### List all tasks:
```sh
task-cli list
```
#### List tasks by status:
```sh
task-cli list done
```
```sh
task-cli list todo
```
```sh
task-cli list in-progress
```
