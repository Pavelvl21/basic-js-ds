const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  data = null;
  left = null;
  right = null;


  root() {
    if (!this.data) {
      return null;
    }

    return this;
  }

  #setLeft(data) {
    if (!this.left) {
      this.left = new BinarySearchTree();
    }

    this.left.add(data);
  }

  #setRight(data) {
    if (!this.right) {
      this.right = new BinarySearchTree();
    }

    this.right.add(data);
  }

  #setRoot(data) {
    this.data > data ? this.#setLeft(data) : this.#setRight(data);
  }

  add(data) {
    !this.data ? this.data = data : this.#setRoot(data);
  }

  has(data) {
    const root = this.data;
    const left = this.left;
    const right = this.right;

    if (root === data) {
      return true;
    }

    if (root > data && left) {
      return left.has(data);
    }

    if (root < data && right) {
      return right.has(data);
    }

    return false;
  }

  find(data) {
    const root = this.data;
    const left = this.left;
    const right = this.right;

    if (root === data) {
      return this;
    }

    if (root > data && left) {
      return left.find(data);
    }

    if (root < data && right) {
      return right.find(data);
    }

    return null;
  }

  
  remove(data) {
    return this.#remove(this, data);
  }

  #remove(node, data) {
    if (!node) {
      return null;
    }

    if (data > node.data) {
      node.right = node.#remove(node.right, data);
      return node;
    }

    if (data < node.data) {
      node.left = node.#remove(node.left, data);
      return node;
    }

    if (data === node.data) {
      if (!node.left && !node.right) {
        node.data = null;
      }
      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      node.data = node.right.min();
      node.right = node.#remove(node.right, node.data);

      return node;
    }
  }


  min() {
    const root = this.data;
    const left = this.left;

    if (!left) {
      return root;
    }

    if (left && !left.data) {
      return root;
    }

    if (left) {
      return left.min();
    }

    return null;
  }

  max() {
    const root = this.data;
    const right = this.right;

    if (!right) {
      return root;
    }

    if (right && !right.data) {
      return root;
    }

    if (right) {
      return right.max();
    }

    return null;
  }
}

module.exports = {
  BinarySearchTree
};