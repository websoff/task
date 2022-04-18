// 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
// (например n=4 , 1+2+3+4)
function sum(N){
    let sum = 0;
    for(let i = 0;i<=N;i++){
        sum=sum+i;
    }
    console.log(sum)
}

// 2.1 Создать объект student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
    const student = {
        name: 'Vlad',
        lastName: 'Pakhomov',
        male: 'man',
        contakts : {
            email: 'pahomov14041996@gmail.com',
            phoneNumber: '0667822647'
        }
    }
// 2.2 Создать объект университета, который содержит свойства, о факультете и кафедре.
    const univer = {
        facultet: "Історічний факультет",
        cafedra: "Кафедра соціальної педагогіки та спеціальної освіти"
    }
// 2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
    const studentInUniver = Object.assign(student, univer);
// 2.4 Реализовать функцию вывода на экран всю информацию о студенте
    function getInfo (obj){
        return obj
    }

// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
    let arr = [];
    function pushArr(Number){
        for(let i = 1;i<=Number;i++){
            arr.push(Math.floor(Math.random()*100));
        }
        return arr;
    }
// 3.2 Вывести элементы с четными индексами (четные числа делятся на 2 без остатка)
    const result = []; 
    function indexOfArr(arr){
        for(let i = 0;i<arr.length;i+=2){
            result.push(arr[i])
       }
       return result
    }
       
// 3.3 Вывести только четные элементы 
    const elements = [];
    function elementsOfArr(arr){
        for(let elem of arr){
            if(elem%2 == 0){
                elements.push(elem);
            }
        }
        return elements;
    }
// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)
const arrZero = [];
    function func(arr){
        for(let i = 0;i<arr.length;i++){
            if(arr[i] == 0){
                arrZero.push(i);
                console.log(i);
            }
        }
        return arrZero;
    }

// 3.5 Подсчитать количество нулевых элементов
function lengthZero (){
    return arrZero.length;
}

// 4 Создать классы:
// - Книга (автор, название, год издания, издательство)
class Book {
    constructor(autor, name,year,izdatel) {
      this.autor = autor;
      this.name = name;
      this.year = year;
      this.izdatel = izdatel;
    }
  }

  let tlotr = new Book('Tolkien','The Lord of The Rings',2002,'ЄКСМО'); 
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
class ElectronicBook extends Book {
    constructor(autor, name,year,izdatel,format,electronicCode){
        super(autor,name,year,izdatel);
        this.format = format;
        this.electronicCode = electronicCode;
    }
  }
let electronicVersionTLOTR = new ElectronicBook('Tolkien','The Lord of The Rings',2002,'ЄКСМО','PDF',1408);
// 5
// Требуется написать функцию, выводящую в консоль числа от 1 до n, где n —
// это целое число, которая функция принимает в качестве параметра, с
// такими условиями:
function fizzbuzz(n){
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
          console.log('fizz or buzz?')
          // вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
        }else if(i % 3 === 0) {
          console.log('fizz')
          // вывод fizz вместо чисел, кратных 3;
        }else if(i % 5 === 0) {
          console.log('buzz')
          // вывод buzz вместо чисел, кратных 5;
        }else{
          console.log(i)
        }
    }
}


