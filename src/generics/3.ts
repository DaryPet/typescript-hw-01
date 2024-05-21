function merge<T, U> (objA: T, objB: U) {
    return Object.assign({}, objA, objB);
}
const merged = merge({ name: "Pit" }, { age: 20 })
 console.log(merged)