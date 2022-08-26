const { createSlice } = require("@reduxjs/toolkit");

const notificationSlice = createSlice({
  name: "Notification ",
  initialState: {
    notifications: []
  },
  reducers: {
    addNotification: (state, action) => {
      state.notifications = [...state.notifications, { ...action.payload }]
      return state
    },
    removeNotification: (state, action) => {
      state.notifications.filter(no => no.id !== action.payload.id)
      return state
    }
  }
})
export const { addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
