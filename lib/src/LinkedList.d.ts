export declare class LinkedList<T> {
    private _head;
    private _count;
    get head(): LinkedListNode<T> | null;
    private setHead;
    get tail(): LinkedListNode<T> | null;
    get size(): number;
    clear(): void;
    push(item: T): LinkedList<T>;
    constructor(items?: T[] | null);
}
interface LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;
}
export {};
//# sourceMappingURL=LinkedList.d.ts.map