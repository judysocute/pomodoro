// @flow

export function getNextIndex(tasks: Array<Task>, currentIndex: number) {
  return (currentIndex + 1) % tasks.length;
}

export function sortTasks(tasks: Array<Task>) {
  return tasks.sort((a, b) => a.order - b.order);
}
