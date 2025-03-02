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
    return size;
  }

  function at(index) {
    let tmp = head;
    for (let i = 0; i < index; i++) {
      if (tmp == null) break;
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  function pop() {
    if (head == null) return;
    if (head == tail) {
      head = tail = null;
    } else {
      const nodeBeforeTail = at(size() - 2);
      nodeBeforeTail.nextNode = null;
      tail = nodeBeforeTail;
    }
  }

  function contains(value) {
    let tmp = head;
    while (tmp != null) {
      if (tmp.value == value) {
        return true;
      }
      tmp = tmp.nextNode;
    }
    return false;
  }

  function find(value) {
    let tmp = head;
    let index = 0;
    while (tmp != null) {
      if (tmp.value == value) {
        return index;
      }
      index++;
      tmp = tmp.nextNode;
    }
    return null;
  }

  function insertAt(value, index) {
    if (head == null) return console.log("List is empty");
    const nodeAtIndex = at(index);
    if (nodeAtIndex == null) return console.log("Out of Bounds");
    if (nodeAtIndex == head && nodeAtIndex == tail) {
      head = node(value, nodeAtIndex);
    } else if (nodeAtIndex == head) {
      head = node(value, nodeAtIndex);
    } else if (nodeAtIndex == tail) {
      nodeAtIndex.nextNode = tail = node(value);
    } else {
      const nodeBeforeIndex = at(index - 1);
      nodeBeforeIndex.nextNode = node(value, nodeAtIndex);
    }
  }

  function removeAt(index) {
    if (head == null) return console.log("List is empty");
    const nodeAtIndex = at(index);
    if (nodeAtIndex == null) return console.log("Out of Bounds");
    if (nodeAtIndex == head) {
      head = nodeAtIndex.nextNode;
    } else if (nodeAtIndex == tail) {
      const nodeBeforeIndex = at(index - 1);
      nodeBeforeIndex.nextNode = nodeAtIndex.nextNode;
      tail = nodeBeforeIndex;
    } else {
      const nodeBeforeIndex = at(index - 1);
      nodeBeforeIndex.nextNode = nodeAtIndex.nextNode;
    }
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

  return {
    append,
    prepend,
    size,
    at,
    toString,
    myHead,
    myTail,
    pop,
    contains,
    find,
    insertAt,
    removeAt,
  };
};

const node = function (value = null, nextNode = null) {
  return { value, nextNode };
};

export { LinkedList };
