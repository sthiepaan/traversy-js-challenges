class HashTable {
	constructor(limit = 10) {
		this.storage = [];
		this.limit = limit;
	}

	#hash(key, max) {
		let hash = 0;

		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}

		return hash % max;
	}

	set(key, val) {
		const hash = this.#hash(key, this.limit);

		if (this.storage[hash]) {
			let inserted = false;

			for (let i = 0; i < this.storage[hash].length; i++) {
				if (this.storage[hash][i][0] !== key) continue;

				this.storage[hash][i][1] = val;
				inserted = true;
			}

			if (inserted) return;

			this.storage[hash].push([key, val]);
		} else {
			this.storage[hash] = [[key, val]];
		}
	}

	get(key) {
		const hash = this.#hash(key, this.limit);

		if (!this.storage[hash]) return;

		for (let i = 0; i < this.storage[hash].length; i++) {
			if (this.storage[hash][i][0] !== key) continue;

			return this.storage[hash][i][1];
		}
	}

	remove(key) {
		const hash = this.#hash(key, this.limit);

		if (!this.storage[hash]) return;

		if (this.storage[hash].length === 1 && this.storage[hash][0][0] === key) {
			delete this.storage[hash];
		} else {
			for (let i = 0; i < this.storage[hash].length; i++) {
				if (this.storage[hash][i][0] !== key) continue;

				delete this.storage[hash][i];
			}
		}
	}
}

module.exports = HashTable;
