import { SearchPage } from '../pageObjects/SearchPage';
import { t } from 'testcafe';

fixture `Home Page`
    .page('https://www.skyscanner.com.au/')

test('Search Return Flights [search.default.anonymous.user]', async() => {
    await SearchPage.selectDepartureCity('Brisbane');
    await SearchPage.selectArrivalCity('Beunos Aires')
    await SearchPage.selectDepartureDate();
    await SearchPage.selectReturnDate(t.ctx.setDay + 2);
    await SearchPage.applyPassengar();
    await SearchPage.clickSeach();
});

test('Search One Way Trip', async() => {
    await SearchPage.selectDepartureCity('Brisbane');
    await SearchPage.selectOneWay();
    await SearchPage.selectDepartureDate();
    await SearchPage.applyPassengar();
    await SearchPage.clickSeach();
})
