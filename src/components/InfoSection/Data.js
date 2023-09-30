import image1 from '../../images/svg-1.svg'
import image2 from '../../images/svg-2.svg'
import image3 from '../../images/svg-3.svg'

export const homeObjectOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description:
        'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',

    buttonLabel: 'Get started',

    // To change the order make is "true"

    imgStart: false,
    
    // ********
    img: image1,
    alt: 'car',
    dark: true,
    primary: true,
    darkText: false

};


export const homeObjectTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description:
        'We have you covered no matter where you are located.All you need is an internet connection and a phone or computer.',
    buttonLabel: 'Learn More',

    // To change the order make is "true"

    imgStart: true,

    img: image2,
    alt: 'cPiggybank',
    dark: false,
    primary: false,
    darkText: true

};


export const homeObjectThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Team',
    headline: 'Creating an account is extremly easy',
    description:
        'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Start Now',

    // To change the order make is "true"

    imgStart: false,

    img: image3,
    alt: 'Paper',
    dark: false,
    primary: false,
    darkText: true

};