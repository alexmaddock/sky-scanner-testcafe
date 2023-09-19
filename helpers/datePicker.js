import dayjs from 'dayjs' // ES 2015
dayjs().format();

const timeStampObject = () => {
    var now = dayjs();
    return now;
};

const { $y, $M, $D, $d } = timeStampObject()   

const [ year, month, day, timeStamp ] = [$y, $M, $D, $d];

const monthMappings = [
    // Leap year not included
    [{ collections: {monthName: "January", monthNum: 1, totalDays: 31 }}],
    [{ collections: {monthName: "February", monthNum: 2, totalDays: 28 }}],
    [{ collections: {monthName: "March", monthNum: 3, totalDays: 31 }}],
    [{ collections: {monthName:"April",  monthNum: 4, totalDays: 30 }}],
    [{ collections: {monthName: "May", monthNum: 5, totalDays: 31 }}],
    [{ collections: {monthName: "June", monthNum: 6, totalDays: 30 }}],
    [{ collections: {monthName: "July", monthNum: 7, totalDays: 31 }}],
    [{ collections: {monthName: "August", monthNum: 8, totalDays: 31 }}],
    [{ collections: {monthName: "September", monthNum: 9, totalDays: 30 }}],
    [{ collections: {monthName: "October", monthNum: 10, totalDays: 31 }}],
    [{ collections: {monthName: "November", monthNum: 11, totalDays: 30 }}],
    [{ collections: {monthName: "December", monthNum: 12, totalDays: 31 }}]
]

let currentMonth = month;
let currentDay = day;
let fortnight = 14; // maybe push this to 21 days
let remainingDaysInMonth;

const determineAppropriateDate = () => {

    let appropriateMonthSelection;

    monthMappings.forEach((/*: {month, monthNum, totalDays}*/ [monthList], i) => {
        const { collections, collections: { month, monthNum, totalDays } } = monthList;
        let index = i + 1; // bring index out of 0 bounds starting position
        index++ // for next month iteration selection
        remainingDaysInMonth = totalDays - currentDay;
    
        if(monthNum == currentMonth) {
            console.log(`Computed month matches collection at month name: ${month}, and month number: ${monthNum}`);
            console.log(`Number of days left for month is ${remainingDaysInMonth}`);
            return remainingDaysInMonth < fortnight ?
            appropriateMonthSelection = monthMappings[i+1]
            : appropriateMonthSelection = monthMappings[index]
        }

    });

    return appropriateMonthSelection[0];
}


export default determineAppropriateDate;

/**
 * This function needs work. If you book ahead with last months date it may fail due
 * to date offsetting. Need to calculate for month end differences
 * 
 * Consider inversing ternary logic opertor to be greater than and swapping the consequent
 * and alternative expressions to return a safe date range when needing to book return date
 * after departure date.
 * 
 * Consider pushing fortnight to 3 week range for greater safeguard
 * 
 * Skyscanner has other issues to resolve. Some dates on the front end cannot be selected
 * and calendar cannot be scrolled to future months with ">" icon. Further logic to try overcome
 * 
 */