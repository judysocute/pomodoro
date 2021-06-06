// @flow
declare type Task = {
  id: number,
  name: string,
  desc: string,
  /**
   * time consuming
   * ex.
   *   1 * 60 * 60 * 24
   */
  totalSecond: number,
  order: number,
  daily?: boolean,
}

declare type Mission = {
  tasks: Array<Task>,
  completedTasks: Array<Task>,
  currentIndex: number,
  nextIndex: number,
}
