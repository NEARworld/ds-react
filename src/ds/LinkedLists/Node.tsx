export class Node {
  value: number;
  next: null | this;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}
