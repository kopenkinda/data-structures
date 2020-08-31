import { LinkedList } from '../src/LinkedList'

describe('Empty LinkedList test suite', () => {
  const list = new LinkedList();
  it('Should be defined', () => {
    expect(list).toBeDefined();
  })

  it('Should add new value to the list', () => {
    list.push('item');
    expect(list.tail).toStrictEqual({
      value: 'item',
      next: null,
    })
  })

  it('Size should update properly', () => {
    expect(list.size).toBe(1);
  })
})

describe('Pre-initialized LinkedList test suite', () => {
  const list = new LinkedList([1, 2, '3']);

  it('Should be defined', () => {
    expect(list).toBeDefined();
  });

  it('List\'s head should be defined', () => {
    expect(list.head).toBeDefined();
  });

  it('List\'s head value should be properly set', () => {
    expect(list.head?.value).toEqual(1);

  });

  it('List\'s values should be accessible through .next', () => {
    expect(list.head?.next?.next?.value).toEqual('3');

  });

  it('List\'s size should be properly calculated', () => {
    expect(list.size).toEqual(3);
  });

  it('List\'s tail should be equal to the last element of the List', () => {
    expect(list.tail).toStrictEqual({
      value: '3',
      next: null,
    });
  });

  

  it('Should be possible to iterate over the items', () => {
    const computed_values = [];
    for (const item of list) computed_values.push(item);
    expect(computed_values).toEqual([1, 2, '3'])
  })

  it('Should properly clear the list', () => {
    list.clear();
    expect(list.size).toBe(0);
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
  })
});