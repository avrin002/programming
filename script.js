//  task1


// function calc() {

//     let num = 12
//     let num2 = 8
//     return console.log(num * num2)
// }
// calc()


// task 2
// function calc() {

//     let num = 10
//     let num2 = 2
//     let x = num / num2
//     return console.log(x)
// }
// calc()


// function calc() {

//     let num = 20
//     let num2 = 17
//     return console.log(num + num2)

// }
// calc()


// 4)
// function info() {
//     var name
//     var surname
//     var year

//     name = 'Fuad'
//     surname = 'Rasulov'
//     year = 1999
//     var info = name + ' ' + surname + ' ' + year
//     return console.log(info);
// }
// info()

// let num = 17
// let num2 = 12
// let result = num / num12


// function calc() {
//     let a = 1,
//         b = 1;
//     let c = ++a;
//     let d = b++;
//     return console.log(c)
//     return console.log(d)
//     return console.log(b);
// }
// calc()

// function calc() {
//     let a = 2;
//     let x = 1 + (a *= 2)
//     return console.log(x)
// }
// calc()


// TASK 4
// console.log('test1', test); // test1 stringdir gorsenecek test ise undefined 
// {
//     let test = "something"
//     console.log('test2', test); // test2 something gorsenecek 
// }
// console.log('test3', test); // test 3 stringdir gorsenecek digeri ise undefined 


// console.log('test1', test); // test1 stringdir gorsenecek test ise undefined 
// {
//     var test = "something"
//     console.log('test2', test); // test2 gorsenecek stringdir something de stringdir gorsenecek 
// }
// console.log('test3', test); // test3 stringdir test variable ise undefined  




// function info() {
//     let name = "Ulfat"
//     let surname = 'Zakirli'
//     let year = 2000
//     year = "2000"
//     let city
//     let qualification = null
//     let obj = { name: 'ulfat' }
//     let arr = ['a', 'b', 'c']
//     return console.log(typeof obj, typeof arr)
// }
// info()

// TASK 6

// 1)

// function arr() {
//     const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
//     let sum = 0
//     for (let i = 0; i < arr1.length; i++) {
//         sum += arr1[i]
//     }
//     return console.log(sum);
// }
// arr()

// function example() {
//     const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
//     const addnum = arr1.push(10, 88)
//     console.log(arr1);
//     const removenumbers = arr1.shift()
//     arr1.shift()
//     return console.log(arr1);
// }
// example()

// TASK 8
// function numbercalc() {
//     const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
//     let even = []
//     numbers.forEach(element => {
//         if (element % 1 == 0)
//             even.push(element)
//     })
//     return console.log(`Even numbers in an array are: ${even}`)
// }
// numbercalc()

// function calodd() {
//     const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
//     let odds = numbers.filter((numb) => numb % 2 === 1)
//     return console.log(odds);
// }
// calodd()


// TASK 10
// function myself() {
//     const myself = {
//         FirstName: 'Fuad',
//         Surname: 'Rasulov',
//         Age: 24,
//         Gender: 'Male',
//         City: {
//             Region: 'Baku',
//             Street: 'Binagadi'
//         }
//     }
//     myself.FirstName = 'Jony'
//     return console.log(myself.Gender, myself.City);

// }
// myself()