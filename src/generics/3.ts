function merge<T extends object, U extends object> (objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
}
const merged = merge({ name: "Pit" }, { age: 20 })
 console.log(merged)