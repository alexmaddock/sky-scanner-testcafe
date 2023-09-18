const dayjs = require('dayjs')
// dayjs().format();

const timeStampObject = () => {
    var now = dayjs();
    return now;
};

const { $y, $M, $D, $d } = timeStampObject()   

const [ year, month, day, timeStamp ] = [$y, $M, $D, $d];

const monthMappings = [
    // Leap year not included
    [{ collections: {monthName: "January", monthNum: 1, totalDays: 31 }}], // need to add current day to this I think for later use
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
let fortnight = 14;
let remainingDaysInMonth;

const determineAppropriateMonth = () => {

    let appropriateMonthSelection;

    monthMappings.forEach((/*: {month, monthNum, totalDays}*/ [monthList], i) => {
        const { collections, collections: { monthName, monthNum, totalDays } } = monthList;
        let index = i + 1; // bring index out of 0 bounds starting position
        index++ // for next month iteration selection
        remainingDaysInMonth = totalDays - currentDay;
    
        if(monthNum == currentMonth) {
            console.log(`Computed month matches collection at month name: ${monthName}, and month number: ${monthNum}`);
            console.log(`NUBMER of days left for month is ${remainingDaysInMonth}`);
            return remainingDaysInMonth < fortnight ?
            appropriateMonthSelection = monthMappings[i+1]
            : appropriateMonthSelection = monthMappings[index]
        }

    });

    // Need to take this out of an array like structure
    return appropriateMonthSelection[0];
}

determineAppropriateMonth();

module.exports = {
    determineAppropriateMonth
}

/** ------------------------------------------------------------------------------------------------------------------------------------------------ */




// let c = (x)=> x*x;

// let a = () => {
//     return b = (input) => {return input};
// }


// const selectDate = (isDateSuitable) => (date) => {

    

//     computedDate().toString()
    
//     return newlyCraftedDate => {
//         return determineAppropriateMonth()
//     }

// }

// const lookUpCurrentMonth () => {

// }


// const isDayOfMonthIdeal = () => {
//     let currentMonth = month;
//     let currentDay = day;
//     let fortnight = 14;
//     let remainingDaysInMonth;


// } 