/*Напишите функцию get_tomorrow(), которая возвращает завтрашнее число в формате 26 ноября 2019г*/

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

let today = new Date();
let tomorrow = new Date(today.getTime() + (MS_DAY * MS_HOUR * MS_MINUTE * MS_SECOND));
let dayTomorrow = tomorrow.getDate();
let monthTomorrow = tomorrow.getMonth() + 1;
let yearTomorrow = tomorrow.getFullYear();
console.log(dayTomorrow, monthTomorrow, yearTomorrow)