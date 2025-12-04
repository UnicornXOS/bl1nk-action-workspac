export const taskStore = {
  tasks: [],

  setTasks(tasks) {
    this.tasks = tasks;
  },

  addTask(task) {
    this.tasks.push(task);
  }
};
