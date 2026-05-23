// let a = '10'
// let a: number | boolean | string;
// a = 10;
// a = true;
// a = "Umayer Ahamd"

// // function dd(a:number, b:number): void {}
// const b =  (a:number, b:number): void => {}

interface User {
    name: string,
    email: string,
    password: string,
}

const a = (obj: User) => {}

a({name: "Umayer", email: 'umayer@gmail.com', password: "abcd"})