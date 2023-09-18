import { Selector, t } from 'testcafe';
// import NavigationComponents from '../componentObjects/NavigationComponents';
// import dotenv from 'dotenv';
import determineLocation from '../helpers/determineLocation';
import determineAppropriateDate from '../helpers/datePicker';

// dotenv.config();

const originInputLabel = Selector('#originInput-label');
const originInputTextBox = Selector('#originInput-menu');
const destinationInputLabel = Selector('#destinationInput-label');
const destinationInputTextBox = Selector('#destinationInput-menu');
const datePickerBox = (month) =>  Selector('#DatePickerDesktop').find('div').withAttribute('aria-lable', month);
const clearButton = Selector('button').withAttribute('data-testid', 'clear button');

export const HomePage = {

    selectDepartureCity: async(city = determineLocation || 'Sydney', {verifySearchHomePage = false} = {}) => {

        if(verifySearchHomePage) {
            validateSearchPage();
        }
        
        await t.click(originInputLabel);
        await t.click(originInputTextBox);
        await t.typeText(originInputLabel, city, {replace: true});
        await t.click(originInputTextBox.find('li').withText(city));
    },
    
    selectArrivalCity: async(city = 'Beunos Aires') => {
        await t.click(destinationInputLabel);
        await t.typeText(destinationInputLabel, city, {replace: true});
        await t.click(destinationInputTextBox.find('li').withText(city));
    },

    selectDepartureDate: async(chooseDay = dayjs().date(), {focusForwardMonth = true, isDomestic = false} = {}) => {
        // First iteration of departure defaults to middle of next calendar month. This is most likely scenario
        if(focusForwardMonth = false) {
            // isMonthAppropriate() // safeguard selection here
        }
        
        const { collections: { monthName, monthNum, totalDays }} = determineAppropriateMonth();
        await t.click(datePickerBox(month.withText(chooseDay)));

    },

    selectReturnDate: async() => {},

    applyPassengar: () => {},

    clickSeach: async() => {
        const searchButton = Selector('button').withText(/search/i);
        t.click(searchButton);
    }

}

const validateSearchPage = async() => {
    await t.expect(Selector('#header-logo-link')).exists.ok
    await t.expect(Selector('#LogInText').innerText).contains(/log in/i)

    const departureCityInputField = Selector('#originInput-input')
    await t.expect(departureCityInputField.exists).ok();
    let determinStateOfDepartureField = () => {
        if(departureCityInputField.innerText === null || departureCityInputField.innerText === undefined) {
            return
        }
        else {
            return departureCityInputField.innerText
        }
    }
    console.log('The city departure location is:', departureCityInputField.innerText)
}
