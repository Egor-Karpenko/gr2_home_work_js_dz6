/*Напишите функцию get_count_days(date) , которая будет считать количество дней до Нового года от date, 
  если оно задано, иначе посчитать количество дней от текущей даты*/

let date1 = new Date('2021,11,31');
let date2 = new Date('2021,10,09');
let calk = date1 - date2;
console.log(calk / (24 * 60 * 60 * 1000));