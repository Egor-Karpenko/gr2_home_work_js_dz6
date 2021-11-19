/*Написать функцию, которая находит разницу в днях между двумя заданными датами. 
Например, заданные даты «20/01/2010» и «15/01/2010», функция должна вернуть число 5. Разницу в днях необходимо считать по модулю.*/

function get_count_days(date1, date2) {
    if (date1 instanceof Date && date2 instanceof Date) {
        let result = 0;
        let start = date1.getTime();
        let ms_finish = date2.getTime();


        if (ms_start > ms_finish) {
            let temp = ms_start;
            ms_start = ms_finish;
            ms_finish = temp;
        }
        for (let ms_current_date = ms_start; ms_current_date <= ms_finish; ms_current_date += MS_DAY) {
            let ms_current_date = new Date(ms_current_date);
            let ms_current_date = current_date.getTime()
        }
        return result;
    }
    return null;
}
date1 = new Date('2010-01-20');
date1 = new Date('2010-01-15');
