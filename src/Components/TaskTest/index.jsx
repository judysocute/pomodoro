// @flow
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from 'features/tasks/missionSlice';

function TaskTest() {
  const tasks: Array<Task> = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();
  return (
    <div>
      {tasks.map((task) => <p key={task.id}>{task.name}</p>)}
      <button
        type="button"
        onClick={() => dispatch(removeTask('a001'))}
      >
        Remove Task
      </button>
    </div>
  );
}

export default TaskTest;
