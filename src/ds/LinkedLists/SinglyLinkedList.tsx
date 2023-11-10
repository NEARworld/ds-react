import { Node } from "./Node";

interface ISinglyLinkedList {
  append: (value: number) => undefined | Node;
}

export class SinglyLinkedList implements ISinglyLinkedList {
  head: null | Node;

  constructor() {
    this.head = null;
  }

  append(value: number) {
    const newNode = new Node(value);

    if (this.head === null) return (this.head = newNode);

    let currentNode: Node = this.head;

    while (currentNode.next) currentNode = currentNode.next;
    currentNode.next = newNode;
  }

  *traverse() {
    if (this.head === null) return;
    let currentNode: Node | null = this.head;
    while (currentNode) {
      yield currentNode;
      currentNode = currentNode.next;
    }
  }
}
