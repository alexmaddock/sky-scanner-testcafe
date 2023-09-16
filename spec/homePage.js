import { HomePage } from '../pageObjects/HomePage';

fixture `Home Page`
    .page('https://www.skyscanner.com.au/')

test('Search Return Flights [search.anonymous.user]', async() => {

    await HomePage.selectDepartureCity('Sydney');
    // await HomePage.selectArrivalCity('Beunos Aires')
    // await HomePage.selectDepartureDate();
    // await HomePage.selectReturnDate();
    // await HomePage.applyPassengar();
    // await HomePage.clickSeach();

});
