# BinHeap
A binary heap with a simple native-array-based implementation.

## Constructor `BinHeap([cmp])`
The constructor takes an optional comparator.
If provided, the comparator should behave similar to the comparator passed to `Array.prototype.sort`. 

Specifically:

If `cmp(a, b) < 0`, then `a` comes before `b`

If `cmp(a, b) > 0`, then `b` comes before `a`

### Example
```js
// Priority queue where a greater priority is more important
const BinHeap = require('bin-heap-js');

let priorityQueue = new BinHeap((a,b) => b.priority - a.priority); // max-heap
priorityQueue.push({name: "job C", job: ..., priority: 5});
priorityQueue.push({name: "job A", job: ..., priority: 99});
priorityQueue.push({name: "job B", job: ..., priority: 10});
proces(priorityQueue.pop()); // job A
proces(priorityQueue.pop()); // job B
proces(priorityQueue.pop()); // job C
```
### DEFAULT
The default comparator provided will work as a min-heap for numbers:
```
(a,b) => a - b
```

## Methods
* **push(item)** Push item onto heap
* **pop()** Pop "top-most" item on heap
* **peek()** Return "top-most" item on heap
* **size()** Number of elements in the heap
