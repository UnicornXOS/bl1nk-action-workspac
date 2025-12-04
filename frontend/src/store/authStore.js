// In a real app, you would use a state management library like Zustand or Redux.
// This is a simplified example using a plain object.

export const authStore = {
  user: null,

  setUser(user) {
    this.user = user;
  },

  clearUser() {
    this.user = null;
  }
};
