// prettier-ignore
import dgm from '../../assets/images/imagee.png';
import gds from '../../assets/images/gds.png';

const projects = [
    {
        image: dgm,
        title: 'Digital Mind Agency',
        body: ' A Static Website for an agency named "Digital Mind", showing their services and projects also the team members.',
        chips: [
            {
                index: 4,
                label: 'Html',
                color: 'black',
                bg: 'white'
            }
        ]
    },
    {
        image: dgm,
        title: 'title',
        body: ' Developed a financial management web app for SOSIPO Association, automating processes, enhancing transparency, and boosting efficiency. Achieved financial stability and member satisfaction.',
        chips: [
            {
                label: 'React',
                color: 'primary'
            },
            {
                label: 'SQL',
                color: 'secondary'
            }
        ]
    },
    {
        image: gds,
        title: 'Gestion de Stock',
        body: ' Developed a financial management web app for SOSIPO Association, automating processes, enhancing transparency, and boosting efficiency. Achieved financial stability and member satisfaction.',
        chips: [
            {
                label: 'React',
                color: 'primary'
            },
            {
                label: 'SQL',
                color: 'secondary'
            }
        ]
    }
];

export default projects;
