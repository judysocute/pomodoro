// @flow
import { createSlice } from '@reduxjs/toolkit';
import { getNextIndex, sortTasks } from 'utils/task';

export const missionSlice = createSlice({
  name: 'mission',
  initialState: {
    tasks: [
      {
        id: 1,
        desc: 'Take everything off your desk',
        name: 'Clean up the desk',
        totalSecond: 60 * 10,
        order: 1,
      },
      {
        id: 2,
        desc: 'Read everything you can get your hands on',
        name: 'Study English',
        totalSecond: 60 * 50,
        order: 2,
      },
      {
        id: 3,
        desc: 'Make a anonymous chat project for my resume',
        name: 'Finished Websocket API',
        totalSecond: 60 * 75,
        order: 3,
      },
    ],
    completedTasks: [],
    currentIndex: 0,
    nextIndex: 0,
    prevId: 0,
    nextId: 0,
  },
  reducers: {
    addTask: (state, action) => {
      const newTasks: Array<Task> = [
        ...state.value,
        action.payload,
      ];
      state.tasks = sortTasks(newTasks);
    },
    removeTask: (state: Mission, action: { payload: number }) => {
      const { tasks, currentIndex } = state;
      const newTasks: Array<Task> = tasks.filter((item) => item.id !== action.payload);
      state.tasks = sortTasks(newTasks);
      state.nextIndex = getNextIndex(tasks, currentIndex);
    },
    completedTask: (state: Mission, action: { payload: number }) => {
      const { tasks, currentIndex } = state;
      const completedTask = tasks.find((item) => item.id !== action.payload);
      if (completedTask) {
        state.completedTasks.push(completedTask);
        state.nextIndex = getNextIndex(tasks, currentIndex);
      }
    },
    nextTask: (state: Mission) => {
      const { tasks, currentIndex } = state;
      state.currentIndex = getNextIndex(tasks, currentIndex);
    },
  },
});

export const { addTask, removeTask, nextTask } = missionSlice.actions;

export default missionSlice.reducer;
