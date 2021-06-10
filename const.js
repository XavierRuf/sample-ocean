import Nia from './public/Ellipse.png';
import Galya from './public/Galya.png';
import Fedya from './public/Fedya.png';
import Vasiliy from './public/Vasiliy.png'
import John from './public/John.png'
import Andy from './public/andy-cart-img.png';

const cardsData = [{
    key: 'bitcoin',
    title: 'Responsive Design',
    footer: 'You’ll Learn A Lot From This Task',
    name: 'btc'
},

{
    key: 'ethereum',
    title: 'Mobile Friendly ',
    footer: 'Don’t Forget About Small Devices',
    name: 'eth'
}
];

const card = [{
    img: Andy,
    name:'Andy',
    position:'Head Of UX Design',
    description:'“The Style Of This Test Task Matches The Style That You Will Be Making Real Job In.”'
    }]
const comments = [{
    avatar: Nia,
    name: 'Nia',
    text: '“This task can be perfect for students from FIT”'
}, {
    avatar: Galya,
    name: 'Abigale',
    text: "“I am so sexy, that men are doing  test tasks for me for free.”"
}, {
    avatar: Fedya,
    name: 'Fedya',
    text: '“Kuku Epta. EZ Task.”'
}]

const coderComments = [
    {avatar: John,name:'John Kennedy',text:'Wow, this test task is absolutely amazing! Loved it!',time:'05:20',rating:3},
    {avatar:Vasiliy,name:'Vasiliy Igorsky',text:'Holy cow, developers rock, but I missed the 5 stars button.',time:'14:30',rating:4}
]

export const constants = {
cardsData,
comments,
card,
coderComments
};