import { Selector, t } from 'testcafe';

const NavigationComponents = {

        header: Selector('header'),
    
        clickJobSearchTab: async function() {
            const jobSearchTab = this.header.find('class').withText('Job Search')
            await t.click(jobSearchTab)
        },
    
        clickProfileSearchTab: async function() {
            const profileTab = this.header.find('class').withText('Profile')
            await t.click(profileTab)
        },
    
        clickCareerTab: async function() {
            const careerTab = this.header.find('class').withText('careerTab')
            await t.click(careerTab)
        },
    
        clickCompanyReviewsTab: async function() {
            const companyReviewsTab = this.header.find('class').withText('Company Reviews')
            await t.click(companyReviewsTab)
        },

        // OR

        selectTab: async function(term) {
            const tabLocator = this.header.find('nav').nth(2).withAttribute('role', 'navigation');
            const tabFilter = tabLocator.find('li').withText(term);
            await t.click(tabFilter);
        }
    }

export default NavigationComponents;