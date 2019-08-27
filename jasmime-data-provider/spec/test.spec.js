const using = require('jasmine-data-provider');
const franc = require('franc')

describe('i18n tests', () => {
    const objectDataProvider = {
        'Macedonian': {sample: 'Сите човечки суштества се раѓаат слободни и еднакви во достоинство и права.', expected: 'mkd'},
        'English': {sample: 'All human beings are born free and equal in dignity and rights.', expected: 'eng'},
        'Arabic': {sample: 'يولد جميع الناس أحرارًا متساوين في الكرامة والحقوق.', expected: 'arb'},
        'Georgian': {sample: 'ყველა ადამიანი იბადება თავისუფალი და თანაბარი ღირსებისა და უფლებებით.', expected: 'kat'},
        'Japanese': {sample: 'すべての人間は自由に生まれ、尊厳と権利において平等です。', expected: 'jpn'},
    };

    using(objectDataProvider, (data, description) => {
        it(`should detect ${description} languages`, () => {
            const i18nData = franc(data.sample);
            expect(i18nData).toEqual(data.expected);
        });
    });
});