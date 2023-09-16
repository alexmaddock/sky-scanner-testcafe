//https://stackoverflow.com/questions/17931571/freeze-screen-in-chrome-debugger-devtools-panel-for-popover-inspection
// https://stackoverflow.com/questions/17931571/freeze-screen-in-chrome-debugger-devtools-panel-for-popover-inspection/23096743#23096743


import { ClientFunction } from 'testcafe';

// This is a draft quick cut function to help freeze disappearing elements in the browser. 
// In Chrome console setTimeout(() => {debugger}, 5000); freezes the DOM to traverse
const setWindowTimeoutLimit = ClientFunction(() => {
    return newPromise(resolve => {
        // window.setTimeout(resolve, 5000);
        window.setTimeout(() => {debugger}, 5000);
        // window.setTimeout(function(){$("#debugFreeze").attr("data-rand",Math.random())},5000);
    })
})

// 