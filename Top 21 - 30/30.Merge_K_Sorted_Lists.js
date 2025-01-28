function mergeLists(lists) {
  let heap = new MinPriorityQueue();
  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) heap.enqueue(lists[i], lists[i].val);
  }

  let dummy = new ListNode(0);
  let curr = dummy;

  while (heap.size() > 0) {
    let { element, priority } = heap.dequeue();
    curr.next = element;
    if (element.next) heap.enqueue(element.next, element.next.val);
    curr = curr.next;
  }

  return dummy.next;
}
