const dayjs = require('dayjs')
dayjs().format();

const dayPicker = () => {
    var now = dayjs();
    console.log(now)
    return now;
};


const { $y, $M, $D, $d } = dayPicker()   

const [ year, month, day, timeStamp ] = [$y, $M, $D, $d];
// const year = $Y;
// const month = $M;
// const day = $D;

const monthMappings = [
    // Leap year not in this
    { name: "January", month: 1, days: 31 },
    { name: "February", month: 2, days: 28 },
    { name: "March", month: 3, days: 31 },
    { name:"April",  month: 4, days: 30 },
    { name: "May", month: 5, days: 31 },
    { name: "June", month: 6, days: 30 },
    { name: "July", month: 7, days: 31 },
    { name: "August", month: 8, days: 31 },
    { name: "Septempber", month: 9, days: 30 },
    { name: "October", month: 10, days: 31 },
    { name: "November", month: 11, days: 30 },
    { name: "December", month: 12, days: 31 }
]

determineAutomaticSelectionDate = (date = timeStamp) => {
    const determineDaysByMonth = monthMappings.find(({name, month, days}) => {
         //     return something === days.js().month() ? 
    //     month[0].day :
    //     28 - 
    // })
    // date <= monthMappings
        console.log(name, month, days)
    })
    return determineDaysByMonth; 
}

determineAutomaticSelectionDate();