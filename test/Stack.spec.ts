import { Stack } from '../src/Stack'

describe('Empty Stack test suite', () => {
  const stack = new Stack<number>();
  it('should add an element to the stack', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
  })
  it('should add another element to the stack', () => {
    stack.push(101);
    expect(stack.peek()).toBe(101);
    expect(stack.length).toBe(2);
  })
  it('should properly return all elements', () => {
    const computed_values = [];
    for (const element of stack.values)
      computed_values.push(element);
    expect(computed_values).toEqual([101, 10]);
  })
  it('should properly remove an element from the stack', () => {
    expect(stack.pop()).toBe(101);
    expect(stack.peek()).toBe(10);
    expect(stack.length).toBe(1);
  })
  it('should properly clear the stack', () => {
    stack.clear();
    expect(stack.length).toBe(0);
    expect(stack.peek()).toBeNull();
  })
})

describe('Pre-initialized Stack test suite', () => {
  const stack = new Stack<number>([10, 20, 30]);
  it('should properly initialize the values', () => {
    const computed_values = [];
    for (const element of stack.values) 
      computed_values.push(element);
    expect(computed_values).toEqual([30, 20, 10]);
  })
});