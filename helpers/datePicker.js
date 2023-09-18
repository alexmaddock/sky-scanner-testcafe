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
    [{ collections: {month: "January", monthNum: 1, totalDays: 31 }}],
    [{ collections: {month: "February", monthNum: 2, totalDays: 28 }}],
    [{ collections: {month: "March", monthNum: 3, totalDays: 31 }}],
    [{ collections: {month:"April",  monthNum: 4, totalDays: 30 }}],
    [{ collections: {month: "May", monthNum: 5, totalDays: 31 }}],
    [{ collections: {month: "June", monthNum: 6, totalDays: 30 }}],
    [{ collections: {month: "July", monthNum: 7, totalDays: 31 }}],
    [{ collections: {month: "August", monthNum: 8, totalDays: 31 }}],
    [{ collections: {month: "September", monthNum: 9, totalDays: 30 }}],
    [{ collections: {month: "October", monthNum: 10, totalDays: 31 }}],
    [{ collections: {month: "November", monthNum: 11, totalDays: 30 }}],
    [{ collections: {month: "December", monthNum: 12, totalDays: 31 }}]
]

let currentMonth = month;
let currentDay = day;
let fortnight = 14;
let remainingDaysInMonth;

const determineAppropriateMonth = () => {

    let appropriateMonthSelection;

    monthMappings.forEach((/*: {month, monthNum, totalDays}*/ [monthList], i) => {
        const { collections, collections: { month, monthNum, totalDays } } = monthList;
        let index = i + 1; // bring index out of 0 bounds starting position
        index++ // for next month iteration selection
        remainingDaysInMonth = totalDays - currentDay;
    
        if(monthNum == currentMonth) {
            console.log(`Computed month matches collection at month name: ${month}, and month number: ${monthNum}`);
            console.log(`NUBMER of days left for month is ${remainingDaysInMonth}`);
            return remainingDaysInMonth < fortnight ?
            appropriateMonthSelection = monthMappings[i+1]
            : appropriateMonthSelection = monthMappings[index]
        }

    });

    return appropriateMonthSelection;
}


export default determineAppropriateMonth;

