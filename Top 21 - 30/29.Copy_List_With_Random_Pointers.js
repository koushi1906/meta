function copyList(head) {
  if (!head) return [];
  let copy_map = new Map();
  let temp = head;

  while (temp) {
    copy_map.set(temp, new Node(temp.val));
    temp = temp.next;
  }

  temp = head;
  while (temp) {
    copy_map.get(temp).next = copy_map.get(temp.next) || null;
    copy_map.get(temp).random = copy_map.get(temp.random) || null;
    temp = temp.next;
  }

  return copy_map.get(head);
}
