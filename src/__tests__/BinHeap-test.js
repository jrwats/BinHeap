'use strict';
const BinHeap = require('../BinHeap');

function heapSort(input, cmp) {
  const heap = new BinHeap(cmp);
  for (let i of input) {
    heap.push(i);
  }
  return Array(heap.size())
    .fill()
    .map(_ => heap.pop());
}

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function shuffle(input) {
  const result = input.slice();
  for (let i in result) {
    swap(result, i, Math.floor(Math.random() * result.length));
  }
  return result;
}

const range = N => [...Array(N).keys()];

describe('BinHeap test', () => {
  it('min-heap by default', () => {
    expect(heapSort([5, 2, 3, 1, 9, 4, 6, 8, 7, 0])).toEqual(range(10));
    expect(heapSort(range(22).reverse())).toEqual(range(22));
    expect(heapSort(range(100).reverse())).toEqual(range(100));
    expect(heapSort(shuffle(range(100)))).toEqual(range(100));
  });

  it('user-defined comparators', () => {
    const maxSort = input => heapSort(input, (a, b) => b - a);
    expect(maxSort([5, 2, 3, 1, 9, 4, 6, 8, 7, 0])).toEqual(
      range(10).reverse(),
    );
    expect(maxSort(range(100).reverse())).toEqual(range(100).reverse());
    expect(maxSort(shuffle(range(100)))).toEqual(range(100).reverse());
  });

  it('largish input', () => {
    const input = range(100000); // 100k
    expect(heapSort(shuffle(input))).toEqual(input);
  });
});
