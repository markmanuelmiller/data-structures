class Stack {
  constructor() {
    this.store = [];
    this.length = 0;
  }

  /**
   * @param
   * @returns length
   */
  push(item) {
    this.store[this.length] = item;
    this.length += 1;
    return this.length;
  }

  /**
   * @param
   * @returns item
   *
   * Does not need to delete the item in array since we are tracking pointer
   */
  pop() {
    if (this.length === 0) return undefined;
    this.length -= 1;
    const item = this.store[this.length];
    // this.store.length = this.length;
    return item;
  }

  peek() {
    return this.store[this.length - 1];
  }

  clear() {
    this.length = 0;
  }

  length() {
    return this.length;
  }
}
