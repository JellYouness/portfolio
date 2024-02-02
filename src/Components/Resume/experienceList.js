import istech from '../../assets/images/istech.png';
import pcc from '../../assets/images/pcc.png';
import cbi from '../../assets/images/cbi.webp';

const Experience = [
    {
        icon: cbi,
        height: '39%',
        margin: true,
        date: 'Aout 2022 - Janvier 2022',
        title: 'Consultant Microsoft Junior @CBI',
        subtitle: 'Casablanca, MA',
        body: [
            'Avant-Vente.',
            'Gestion des souscriptions MWP Microsoft (CSP).',
            'Accompagnement les clients pour la construction des offres Microsoft.'
        ]
    },
    {
        icon: istech,
        height: '35%',
        margin: true,
        date: 'Avril 2023 - Juillet 2023',
        title: 'Web Developer @IS-TECH',
        subtitle: 'Casablanca, MA',
        body: [
            "Conception et développement d'applications web interactives",
            'Utilisation de ReactJS et Laravel comme technologies principales ',
            'Création de composants réutilisables',
            'Intégration avec des API externes'
        ]
    },
    {
        icon: pcc,
        height: '100%',
        margin: false,
        date: 'Juillet 2022 - Septembre 2022',
        title: 'Web Developer @Palmeraie Country Club',
        subtitle: 'Casablanca - Bouskoura, MA',
        body: [
            "Conception et mise en œuvre réussies d'une application web dynamique dédiée à la gestion des membres et des abonnements.",
            "Utilisation d'un ensemble technologique comprenant HTML, CSS, JavaScript, PHP et MySQL pour créer une expérience utilisateur fluide.",
            "Contribution à la direction créative et à la conception centrée sur l'utilisateur de l'application."
        ]
    }
];

export default Experience;
