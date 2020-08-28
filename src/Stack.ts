export class StackOverflowError extends Error {
  constructor(message: string = "Maximum stack size exceeded") {
    super(message);
    this.name = "StackOverflowError";
  }
};

export class InvalidStackSizeError extends Error {
  constructor(message: string = "Maximum Stack Size should be more than or equal to 0") {
    super(message);
    this.name = "InvalidStackSizeError";
  }
};

export class Stack<T> {
  private _elements: T[] = [];
  private _max_size: number = Number.MAX_VALUE;

  constructor(elements: T[] = [], max_size: number = Number.MAX_VALUE) {
    if (max_size >= 0)  {
      this._max_size = max_size;
    } else {
      throw new InvalidStackSizeError();
    }
    for(const element of elements) this.push(element);
  }

  public push(element: T) {
    if (this.length <= this._max_size) {
      this._elements.push(element);
    } else {
      throw new StackOverflowError();
    }
  }

  public pop(): T | null {
    const element = this._elements[this.length - 1];
    this._elements.length = this.length - 1;
    return element;
  }

  public peek(): T | null {
    return this._elements[this.length - 1] || null;
  }

  public clear(): void {
    this._elements = [];
  }

  get length() {
    return this._elements.length;
  }

  get values(): Generator<T> {
    return this._values();
  }

  private* _values(): Generator<T> {
    for (let i = this.length - 1; i >= 0; i--) {
      const element = this._elements[i];
      yield element;
    }
  }
}