import { Selector, t } from 'testcafe';
import dayjs from 'dayjs';
import determineLocation from '../helpers/determineLocation';
import determineAppropriateDate from '../helpers/datePicker';

const { collections: { monthName, monthNum, totalDays } } = determineAppropriateDate();

const originInputLabel = Selector('#originInput-label');
const originInputTextBox = Selector('#originInput-menu');
const destinationInputLabel = Selector('#destinationInput-label');
const destinationInputTextBox = Selector('#destinationInput-menu');
const departureDateBox = Selector('span').withText(/depart/i);
const returnDateBox = Selector('span').withText(/return/i);
const selectButton = Selector('button').withText(/select/i);
const searchButton = Selector('button').withText(/search/i);
const travellerBox = Selector('button').withAttribute('data-testid', 'traveller-button');
const clearButton = Selector('button').withAttribute('data-testid', 'clear button');

const datePicker = (month) =>  Selector('div').withAttribute('aria-label', month);

export const SearchPage = {

    selectDepartureCity: async(city = determineLocation || 'Sydney', {verifySearchSearchPage = false} = {}) => {

        if(verifySearchSearchPage) {
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

    selectDepartureDate: async(chooseDay = dayjs().date(), {chooseNextMonth = false, isDomestic = false} = {}) => {

        if(chooseNextMonth) {
            // isMonthAppropriate() // safeguard selection here
            // await t.click(searchButton); 
        }
        
        await t.click(departureDateBox);
        await t.click(datePicker(monthName).find('button').withText(chooseDay.toString()));

        t.ctx.setDay = chooseDay;
    },

    selectReturnDate: async(chooseDay = dayjs().date() + 2) => {
        // Safeguard date is a quick solution. More logic is needed for this

        await t.click(returnDateBox);
        await t.click(datePicker(monthName).find('button').withText(chooseDay.toString()));
        await t.click(selectButton);

    },

    applyPassengar: async ({cabinClass = /economy/i, passengarType = [], passengarNumber = [], _default = true} = {}) => {

        if(_default) {
            await t.expect(travellerBox.innerText).contains("1 Adult, Economy");
            return;
        }

        // Further logic needed here to map passenger types and numbers for selection

    },

    clickSeach: async() => {
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
