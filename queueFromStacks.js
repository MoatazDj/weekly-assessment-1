////////////////////////////////////////////////////////////
// This is an implementation of a Stack using ECMAScript 6
////////////////////////////////////////////////////////////
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

////////////////////////////////////////////////////////////
// Implement a Queue using Stacks using EcmaScript 6 Syntax
////////////////////////////////////////////////////////////

class Queue {

  constructor() {
    this.storage={}
    this.start=0;
    this.end=0;
  }
  size(){
    return this.end-this.start
  }
  enqueue(value){
    this.storage[this.end]=value
    this.end++
  }
  dequeue(){
    if((this.end-this.start) > 0){
      var deletedVal = this.storage[this.start]
      delete this.storage[this.start]
      this.start++
      return deletedVal
     }
  }
}

