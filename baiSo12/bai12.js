console.log("Hello from Hello WWorld")

// key: value
let object = {
    name: 'Huong',
    age: '18',
    address: 'QN',
    d: function(){
        console.log('Hello Fuction')
    }
};
console.log(`full infor: `, object)
console.log(`Your name: ${object.name}`)
console.log(`call function: `, object.d())
//console.log(`nam array`, object[name])

let a = {};
let b = '';
console.log('type of a', typeof a, 'type of b', typeof b);