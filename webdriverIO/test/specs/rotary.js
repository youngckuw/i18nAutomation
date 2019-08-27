const assert = require('assert');
const using = require('jasmine-data-provider');
const dataProvider = require('../testData/dataProvider');
const aboutPage = require('../pageObjects/about.page');

describe('Rotary.org about page', () => {
    using(dataProvider.targetLanguages, (data, description) => {
        it('should display texts in ' + description + ' language', async () => {
            await aboutPage.navigateTo(data.lang);
            const pageContent = await aboutPage.pageContent();
            await assert.equal(pageContent, data.expected);
        });
    })
});