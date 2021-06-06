import { configureStore } from '@reduxjs/toolkit';
import missionReducer from 'features/tasks/missionSlice';

export default configureStore({
  reducer: {
    mission: missionReducer,
  },
});
