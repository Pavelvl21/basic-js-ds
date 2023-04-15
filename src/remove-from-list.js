const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

ListNode.prototype.filterList = function(k) {
  if (!this) {
    return null;
  }

  if (this.value === k) {
    return this.next ? this.next.filterList(k) : null;
  }

  if (this.next) {
    this.next = this.next.filterList(k);
  }

  return this;
};

function removeKFromList(l, k) {
  return l.filterList(k);
}

module.exports = {
  removeKFromList
};
