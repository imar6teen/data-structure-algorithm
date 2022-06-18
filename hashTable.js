class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
    this.length = 0;
  }

  /**
   *
   * @param {String} key
   */
  #hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  print() {
    this.buckets.forEach((val, index) => {
      console.log(index, val);
    });
  }

  add(key, value) {
    let index = this.#hash(key);
    let isInserted = this.buckets[index];
    if (isInserted) {
      this.buckets[index].push([key, value]);
    } else {
      this.buckets[index] = [[key, value]];
    }
  }

  get(key) {
    let index = this.#hash(key);
    let bucket = this.buckets[index];
    return bucket.find((obj) => obj[0] === key)[1];
  }
}

const obj = new HashTable(10);

obj.add("aimar", "anand");
obj.add("amiar", "ananda");
obj.add("ariam", "dnana");
obj.add("hh", "jj");
console.log(obj.get("hh"));
// obj.print();
