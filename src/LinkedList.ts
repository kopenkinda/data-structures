/**
 * A linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next.
 * It is a data structure consisting of a collection of nodes which together represent a sequence.
 *
 * @export
 * @class LinkedList
 * @template T
 */
export class LinkedList<T> {
  private _head: LinkedListNode<T> | null = null;
  private _count: number = 0;

  /**
   * Returns the head (first node) of the list.
   *
   * @readonly
   * @type {(LinkedListNode<T> | null)}
   * @memberof LinkedList
   */
  get head(): LinkedListNode<T> | null {
    return this._head;
  }

  private setHead(item: LinkedListNode<T> | null) {
    if (item === null) throw new Error('Invalid value');
    this._head = item;
  }
  /**
   * Returns the tail (last node) in the list.
   *
   * @readonly
   * @type {(LinkedListNode<T> | null)}
   * @memberof LinkedList
   */
  get tail(): LinkedListNode<T> | null {
    let node = this._head;
    while (node !== null && node.next !== null) node = node.next;
    return node
  }

  /**
   * Returns the size (amount of elements) of the list.
   *
   * @readonly
   * @type {number}
   * @memberof LinkedList
   */
  get size(): number {
    return this._count;
  }

  /**
   * Clears the list of it's nodes and updates the count.
   *
   * @memberof LinkedList
   */
  clear(): void {
    this._count = 0;
    this._head = null;
  }

  /**
   * Sets list tail to a new node and adds a reference to it in the previous tail.
   *
   * @param {T} item
   * @returns {LinkedList<T>}
   * @memberof LinkedList
   */
  public push(item: T): LinkedList<T> {
    const node: LinkedListNode<T> = {
      value: item,
      next: null
    }
    if (this.tail !== null) {
      this.tail.next = node;
    } else {
      this.setHead(node);
    }
    this._count++;
    return this;
  }

  /**
   * Creates an instance of LinkedList.
   * Can be initialized with a type, otherwise the type is set to unknown
   * Can be initialized with an array of elements as parameter, automatically converts each element to a LinkedListNode<T>.
   *
   * @param {(T[] | null)} [items=null]
   * @memberof LinkedList
   * @constructor
   */
  constructor(items: T[] | null = null) {
    if (items !== null) {
      for (const item of items) {
        this.push(item);
      }
    }
  }
}

/**
 * Stores a value T, and a reference to the next node.
 * If there is no next node, the node is set to null.
 *
 * @interface LinkedListNode
 * @template T
 */
interface LinkedListNode<T> {
  value: T,
  next: LinkedListNode<T> | null
}