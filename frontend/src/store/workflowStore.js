export const workflowStore = {
  workflows: [],

  setWorkflows(workflows) {
    this.workflows = workflows;
  },

  addWorkflow(workflow) {
    this.workflows.push(workflow);
  }
};
