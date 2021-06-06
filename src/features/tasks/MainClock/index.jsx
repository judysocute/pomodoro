// @flow
import React, { useState, useEffect } from 'react';
import './index.css';
import { toTimeString } from 'utils/time';
import Notify from 'assets/img/notify.svg';
import Start from 'assets/img/start.svg';
import Next from 'assets/img/next.svg';
import { useSelector, useDispatch } from 'react-redux';
import { nextTask } from 'features/tasks/missionSlice';
import ProgressBar from './ProgressBar';

function MainClock() {
  const dispatch = useDispatch();
  const { tasks, currentIndex }: Mission = useSelector((state) => state.mission);
  const task = tasks[currentIndex];

  const [passedTime, setPassedTime] = useState(0);
  const [timerId, setTimerId] = useState(0);

  function startTimer() {
    if (timerId === 0) {
      const id = window.setInterval(() => {
        setPassedTime((prevCount) => prevCount + 1);
      }, 1000);
      setTimerId(id);
    }
  }
  function stopTimer() {
    window.clearInterval(timerId);
    setTimerId(0);
  }

  useEffect(() => {
    const { totalSecond } = task;
    if (totalSecond - passedTime <= 0) {
      stopTimer();
    }
  }, [passedTime]);

  return (
    <div className="main-clock text-primary font-main relative inline-block">
      <ProgressBar
        task={task}
        passedTime={passedTime}
        radius={200}
        fillColor="transparent"
        baseStrokeColor="#F2F0C9"
        strokeColor="#A2050563"
      />
      <h3 className="text-2xl text-center mt-28">
        {task.name}
      </h3>
      <h3 className="text-6xl tracking-widest text-center mt-8">
        {toTimeString(task.totalSecond - passedTime)}
      </h3>
      <div className="flex justify-center mt-14">
        <button type="button" className="mx-2.5 cursor-pointer focus:outline-none z-10">
          <img src={Notify} alt="Notify" width="50" className="hover:opacity-50" />
        </button>
        <button type="button" className="mx-2.5 cursor-pointer focus:outline-none z-10" onClick={startTimer}>
          <img src={Start} alt="Start" width="50" className="hover:opacity-50" />
        </button>
        <button type="button" className="mx-2.5 cursor-pointer focus:outline-none z-10" onClick={() => dispatch(nextTask())}>
          <img src={Next} alt="Next" width="50" className="hover:opacity-50" />
        </button>
      </div>
    </div>
  );
}

export default MainClock;
