/*  Напишите функцию get_count_work_days(date1, date2), которая будет считать количество рабочих дней между двумя заданными датами.*/

let date_1 = '2021-10-01';
let date_2 = '2021-10-10';

function stringToDate(dateString) {
    dateString = dateString.split('-');
    return new Date(dateString[0], dateString[1] - 1, dateString[2]);
}

function get_count_work_days(date1, date2) {
    date1 = stringToDate(date1);
    date2 = stringToDate(date2);
    result_date = (date2 - date1) / (MS_DAY * MS_HOUR * MS_MINUTE * MS_SECOND) + 1;

    weeks = 0;
    for (i = 0; i < result_date; i++) {
        if (date1.getDay() == 0 || date1.getDay() == 6) weeks++;
        date1 = date1.valueOf();
        date1 += MS_DAY * MS_HOUR * MS_MINUTE * MS_SECOND;
        date1 = new Date(date1);
    }
    return result_date - weeks;
}
console.log('Количество рабочих дней : ', get_count_work_days(date_1, date_2));