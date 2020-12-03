class _Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		// Set initial data.
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	enqueue(data) {
		// Add some data to the queue.
		const node = new _Node(data);

		this.length++;

		if (this.first === null) {
			this.first = node;
		}
		if (this.last) {
			this.last.next = node;
		}

		this.last = node;
		return node.value;
	}

	dequeue() {
		// Remove some data from the queue.
		if (this.first === null) {
			return;
		}

		this.length--;

		const node = this.first;
		this.first = this.first.next;

		if (node === this.last) {
			this.last = null;
		}

		return node.value;
	}

	show() {
		// Return the next item in the queue.
		if (this.first === null) {
			return null;
		}

		return this.first.value;
	}

	all() {
		// Return all items in the queue.
		const values = [];
		let finished = false;
		let current = this.first;

		while (finished === false) {
			if (current === null) {
				finished = true;
				break;
			}

			values.push(current.value);
			current = current.next;
		}

		return values;
	}
}

module.exports = Queue;
