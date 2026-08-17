// when from literal then not singleton and when from constructor then singleton
//objects are expandable
//object literals
// Object.create  this is the constructor method
const id1=Symbol('gendi')
const id2=Symbol('gendui')
const user={
    name:"RAj",
    age:56,
    [id1]:100,
    [id2]:200,
    "phone":"sdfsafd",    // this cant be accesed using dots
    email:"hiesh@gmail.com" 
}   //object

console.log(user.name)
console.log(user["name"])

// Object.freeze(user)//no changes can made now in it or not any kind of overwriting will be done

// use ${this} for interpolation in functions allows to acces all the key in object

user.greeting=function(){
    console.log(`hey there ${this.name}`)
}
