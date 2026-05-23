// let a = '10'
// let a: number | boolean | string;
// a = 10;
// a = true;
// a = "Umayer Ahamd"

// // function dd(a:number, b:number): void {}
// const b =  (a:number, b:number): void => {}

// interface User {
//     name: string,
//     email: string,
//     password: string,
//     age?: number
// }

// const a = (obj: User) => {
//     // obj.email
// }

// a({name: "Umayer", email: 'umayer@gmail.com', password: "abcd"})

// interface User {
//     name: string;
//     email: string;
//     password: string;
// }
// interface Admin extends User {
//     age: number,
//     role: boolean,
// }
// interface My extends Admin {
//     salary?: number
// }

// const b = (obj: My) => {

// }

// b({name:"Umayer",email:'umayer@gmail.com',password:"abcd",age:21,role:false})

// interface a {
//     age: number
// }
// interface a {
//     name: string;
// }

// const b = (obj: a) => {

// }

// b({age:21, name: "umayer"})

// type v = number | string;

// let a:v;
// a = "hello"

// type v = string | number

// function dd(obj: v){}

// dd(10)

// type User = {
//     name: string,
//     email: string,
// }

// type Admin = User & {
//     getDetails(user: string): void
// }

// const b = (a: Admin): void => {
//     a.getDetails
// }

interface User {
    name: string,
    email: string,
}

interface Admin extends User {
    getDetails(user: string): void
}

const b = (a: Admin): void => {
    a.getDetails
}