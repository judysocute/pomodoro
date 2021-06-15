// @flow
class ListNode<T> {
  item: T;

  next: ?ListNode<T>;

  constructor(item: T) {
    this.item = item;
    this.next = null;
  }
}

class LinkedList<T> {
  first: ListNode<T>; // first node

  constructor(firstItem: T) {
    this.first = new ListNode(firstItem);
  }

  static of(arr: Array<T>): LinkedList<T> {
    let newList: LinkedList<T> = new LinkedList(arr[0]);
    arr.forEach((item, idx) => {
      if (idx === 0) {
        newList = new LinkedList(item);
      } else {
        newList.add(item);
      }
    });
    return newList;
  }

  // get the size of list
  size(): number {
    let count: number = 0;
    let last = this.first;

    while (last) {
      last = last.next;
      count += 1;
    }
    return count;
  }

  /**
   * check the index is bigger then the current list size or not
   * @param {number} index - number to check
   * @throw index over the size of list
   */
  checkSize(index: number) {
    const size = this.size();
    if (index >= size) {
      throw new Error(`Index: ${index}, Size: ${size}`);
    }
  }

  get(index: number): T {
    this.checkSize(index);
    return this.findElemOf(index);
  }

  findNode(index: number): ListNode<T> {
    let count = 0;
    let last: ListNode<T> = this.first;
    while (count < index && last.next) {
      last = last.next;
      count += 1;
    }
    return last;
  }

  findElemOf(index: number): T {
    return this.findNode(index).item;
  }

  append(node: ListNode<T>): void {
    let last: ListNode<T> = this.first;
    while (last.next) { // find lastest node
      last = last.next;
    }
    last.next = node;
  }

  add(element: T): void {
    const node: ListNode<T> = new ListNode(element);
    if (this.first === null) {
      this.first = node;
    } else {
      this.append(node);
    }
  }

  removeByIndex(index: number): void {
    let newIndex = index;
    try {
      // check if the index is bigger then current list size
      this.checkSize(newIndex - 1);
    } catch (err) {
      newIndex = this.size(); // change index to last
    }
    this.findNode(newIndex - 1).next = this.findNode(newIndex + 1);
  }

  addToIndex(index: number, item: T): void {
    let newIndex = index;
    try {
      // check if the index is bigger then current list size
      this.checkSize(newIndex - 1);
    } catch (err) {
      newIndex = this.size(); // change index to last
    }
    const node = new ListNode(item);
    node.next = this.findNode(newIndex);

    if (newIndex > 0) {
      this.findNode(newIndex - 1).next = node;
    } else {
      this.first = node;
    }
  }
}

export default LinkedList;
