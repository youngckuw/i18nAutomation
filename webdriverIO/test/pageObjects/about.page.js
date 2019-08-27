const franc = require('franc');

module.exports = {
    // potential improvements with regex
    navigateTo(url = 'en') {
        return browser.url(`https://www.rotary.org/${url}/about-rotary`);
    },

    async pageContent() {
        // get texts on a rendered page
        const pageContentElement = await $('#page-content');
        const pageContentText = await pageContentElement.getText();
        await console.log(`\n\n\n${pageContentText}\n\n\n`);
        // franc to identify langauge
        return franc(pageContentText);
    }
}