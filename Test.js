//29.02.2020 12.03.2010
function isDateValid(date){
return hasTenDigits(date)
   && rightPunctuation(date)
   && isDayValid(date)
   && isMonthValid(date)
   && isYearValid(date)
}

function hasTenDigits(date){
    console.log(date.length)
    return date.length === 10;
}

function rightPunctuation(date){
   if (date.charAt(2)=="." && date.charAt(5)==".") return true 
}

function isYearValid(date){
    const year = date.slice(6,10)
    console.log(year)
    return year.length === 4 && year >= '0000' && year <= '9999'
}

function isMonthValid(date){
    const month = date.slice(3,5)
    console.log(month)
    return month.length === 2 && month >= '01' && month <= '12'
}

function isDayValid(date){
    const day = date.slice(0,2)
    const month = date.slice(3,5)
    const year = date.slice(6,10)
    console.log(day)
    if (day > '31') return false
    else if (day.length === 2 && day >= '01' && day <= '28') return true
    else if (month != '02') {
        return day <= '30' || month !== '04' && month !== '06' && month !== '09' && month !== '11';
    }
    else return day == '29' && isLeapYear(year)
    
}

function isLeapYear(year){
    
    console.log(year)
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
