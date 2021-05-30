// @flow
declare type Task = {
  id: string,
  name: string,
  desc: string,
  /**
   * time consuming
   * ex.
   *   1 * 60 * 60  * 24
   */
  totalSecond: number,
}

declare export var ReactComponent: React$Node;
