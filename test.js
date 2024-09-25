const list = {
    x: ['a', 'b', 'c', 'd', 'e'],
    y: ['c', 'd'],
    z: ['e'],
};


const keys = Object.keys(list)

console.log(keys.map((key) => `id: ${key}`))
