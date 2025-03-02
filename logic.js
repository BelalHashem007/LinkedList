const LinkedList = function () {
  let head = null;
  let tail = null;

  function prepend(value) {
    if (head == null) {
      head = node(value, head);
      tail = head;
    } else head = node(value, head);
  }
  function append(value) {
    if (head == null) prepend(value);
    else {
      let tmp = head;
      while (tmp.nextNode != null) tmp = tmp.nextNode;
      tmp.nextNode = node(value);
      tail = tmp.nextNode;
    }
  }
  function size() {
    let tmp = head;
    let size = 0;
    while (tmp != null) {
      size++;
      tmp = tmp.nextNode;
    }
    return console.log("Size of the linked list is : " + size);
  }
  function at(index) {
    let tmp = head;
    for (let i = 0; i < index; i++) {
      tmp = tmp.nextNode;
    }
    return { value: tmp.value, nextNode: tmp.nextNode ? "{object}" : null };
  }
  function toString() {
    let tmp = head;
    while (tmp != null) {
      console.log(`(${tmp.value}) -> `);
      tmp = tmp.nextNode;
    }
    console.log("null");
  }
  function myHead() {
    return { value: head.value, nextNode: head.nextNode ? "{object}" : null };
  }
  function myTail() {
    return tail;
  }
  return { append, prepend, size, at, toString, myHead, myTail };
};

const node = function (value = null, nextNode = null) {
  return { value, nextNode };
};

export { LinkedList };
