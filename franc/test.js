var franc = require('franc')

// quotes from "Universal Declaration of Human Rights"
const langData = {
    // EFIGS
    English: 'All human beings are born free and equal in dignity and rights.',
    French: 'Tous les êtres humains naissent libres et égaux en dignité et en droits.',
    Italian: 'Tutti gli esseri umani nascono liberi e uguali in dignità e diritti.',
    German: 'Alle Menschen werden frei und gleich in Würde und Rechten geboren.',
    Spanish: 'Todos los seres humanos nacen libres e iguales en dignidad y derechos.',

    // Non-latin based langs
    Myamar: 'အားလုံးလူသားအခမဲ့နှင့်ဂုဏ်သိက္ခာနှင့်အခွင့်အရေးများအတွက်တန်းတူမွေးဖွားနေကြသည်။',
    MandarinChinese: '人人生而自由，在尊嚴和權利上一律平等。',
    Hindi: 'सभी मनुष्य मर्यादा और अधिकारों में स्वतंत्र और समान पैदा होते हैं।',

    // Non-characters
    Punc: ' !@#$%',
    Nums: '12345'
}

Object.values(langData).forEach(text => {
    console.log(`Sample text is: \n${text} \nOutput is: \n${franc(text)}\n`);
});