import istech from '../../assets/images/istech.png';
import pcc from '../../assets/images/pcc.png';
import cbi from '../../assets/images/cbi.webp';

const Experience = [
    {
        icon: cbi,
        height: '39%',
        margin: true,
        date: 'August 2022 - January 2022',
        title: 'Junior Microsoft Consultant @CBI',
        subtitle: 'Casablanca, MA',
        body: ['Pre-Sales.', 'Management of MWP Microsoft subscriptions (CSP).', 'Supporting customers in building Microsoft offers.']
    },
    {
        icon: istech,
        height: '35%',
        margin: true,
        date: 'April 2023 - July 2023',
        title: 'Web Developer @IS-TECH',
        subtitle: 'Casablanca, MA',
        body: [
            'Design and development of interactive web applications.',
            'Using ReactJS and Laravel as core technologies.',
            'Creation of reusable components.',
            'Integration with external APIs.'
        ]
    },
    {
        icon: pcc,
        height: '100%',
        margin: false,
        date: 'July 2022 - September 2022',
        title: 'Web Developer @Palmeraie Country Club',
        subtitle: 'Casablanca - Bouskoura, MA',
        body: [
            'Successful design and implementation of a dynamic web application dedicated to membership and subscription management.',
            'Using a technology suite including HTML, CSS, JavaScript, PHP and MySQL to create a seamless user experience.',
            'Contributed to the creative direction and user-centered design of the application.'
        ]
    }
];

export default Experience;
