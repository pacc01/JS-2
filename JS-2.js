//Задание 1
let c = 5+5
console.log(c)

//Задание 2
let f = 5*5
console.log(f)

//Задание 3
let b = 5 < 0
let a = 5 > 0
console.log(b)
console.log(a)

//Задание 4
let d = 60;
let g = 40;
let h = 60 + 40;
let i = 60 * 40;
let k = 60 / 40;
let t = 60 - 40;
let p = 60 % 40;
console.log([h,i,k,t,p])

//Задание 5
let x = true;
let y = false;
let w = x > y;
let r = x < y;
let o = x == y;
let q = x != y;
console.log([w,r,o,q])

//Задание 6
let age = 14;
if (age > 17) {
    console.log('Совершеннолетний');
   
} else {
    console.log('Несовершеннолетний');
  
}
//Задание 7
function printSquares (num1,num2) {
    console.log ('Квадрат первого числа',({$num1}), num1*num1)
    console.log ('Квадрат второго числа',({$num2}), num2*num2)
}

//Задание 8
let counter = 0
let num = counter += 5
console.log(num)

//Задание 9
let text =('Привет мир!'!='Привет Россия')
console.log(text)

//Задание 10
function sumArray(arr) {
 let sum = 0;
 for (let i = 0;i < arr.length;i++)
 {   
    sum += arr[i];
 }
  return sum;
}
let numbers = [1,2,4]
console.log (sumArray(numbers));

//Задание 11
let isAdult =true
age = 18
let message = (age>=18) ? console.log(isAdult):console.log(!isAdult)

//Задание 2.1
let test = prompt('Введите ваш возраст',)
   if (test >= 18) {
    console.log('Вы можете пройти тестирование на вождение!');
} else {
    console.log('Вы не можете пройти тестирование на вождение!');
  
}
//Задание 2.2 
let string = prompt ('Введите в строку') 
if (string.trim() === "")
    console.log ("Строка пустая")
else {
    console.log ('Строка не пустая')
}

//Задание 3.1
function sum (a,b) {
return a + b
}

// Задание 3.2 
function getStringLength (str) {
    return str.length
}

// Задание 3.3
function addNumbers (num1,num2) {
    return num1 + num2
}

//Задание 3.4
function filterNumbersGreaterThan (numbers,threshold) {
    return numbers.filter (num => num > threshold);
}


