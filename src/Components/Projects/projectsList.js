// prettier-ignore
import dgm from '../../assets/images/imagee.png';
import gds from '../../assets/images/gds.png';
import gdm from '../../assets/images/gdm.png';
import tabibi from '../../assets/images/tabibi.png';
import istech from '../../assets/images/istech.png';
////
import bootstrap from '../../assets/Techs/bootstrap.svg';
import css from '../../assets/Techs/css.svg';
import figma from '../../assets/Techs/figma.svg';
import github from '../../assets/Techs/github.svg';
import html from '../../assets/Techs/html.svg';
import js from '../../assets/Techs/js.svg';
import laravel from '../../assets/Techs/laravel.svg';
import mysql from '../../assets/Techs/mysql.svg';
import php from '../../assets/Techs/php.svg';
import tailwind from '../../assets/Techs/tailwind.svg';
import vscode from '../../assets/Techs/vscode.svg';
import react from '../../assets/Techs/react.svg';
import mui from '../../assets/Techs/mui.svg';

const projects = [
    {
        image: tabibi,
        title: 'Tabibi - Gestion des Urgences',
        body: "Conception et Développement d'une application Web médicale moderne pour la Gestion des Urgences (TABIBI), presenté comme projet de fin des études universitaires.",
        chips: [
            {
                img: react
            },
            {
                img: mui
            },
            {
                img: laravel
            },
            {
                img: mysql
            }
        ],
        preview: '/projects/tabibi',
        github: 'https://github.com/JellYouness/Tabibi'
    },
    {
        image: istech,
        title: 'IS-TECH - Club Manager',
        body: "Conception et Développement d'une application Web moderne pour la Gestion des Clubs (Membres, Abonnements, Acces...).",
        chips: [
            {
                img: react
            },
            {
                img: mui
            },
            {
                img: laravel
            },
            {
                img: mysql
            }
        ],
        preview: 'https://github.com/JellYouness/Tabibi',
        github: 'https://github.com/JellYouness/Tabibi'
    },
    {
        image: dgm,
        title: 'Digital Mind Agency',
        body: ' A Static Website for an agency named "Digital Mind", showing their services and projects also the team members. Made with Html, Css and JavaScript.',
        chips: [
            {
                img: html
            },
            {
                img: css
            },
            {
                img: bootstrap
            },
            {
                img: js
            }
        ],
        preview: 'https://jellyouness.github.io/Digital-Mind-Agency/',
        github: 'https://github.com/JellYouness/Digital-Mind-Agency'
    },
    {
        image: gdm,
        title: 'PCC Membership management',
        body: "Conception et réalisation d'une application web pour la gestion des membres et les abonnements de l'entreprise Palmeraie Country Club.",
        chips: [
            {
                img: html
            },
            {
                img: css
            },
            {
                img: bootstrap
            },
            {
                img: js
            },
            {
                img: php
            },
            {
                img: mysql
            }
        ],
        preview: '/projects/pcc-membership-management',
        github: 'https://github.com/JellYouness/Gestion-des-membres'
    },
    {
        image: gds,
        title: "OPTIM'STOCK - Stock Manager",
        body: "Conception et develepoment d'une application web de gestion de stock d'une entreprise.",
        chips: [
            {
                img: html
            },
            {
                img: css
            },
            {
                img: bootstrap
            },
            {
                img: js
            },
            {
                img: php
            },
            {
                img: mysql
            }
        ],
        preview: '/projects/stock-manager',
        github: 'https://github.com/JellYouness/Stock-Management'
    }
];

export default projects;
