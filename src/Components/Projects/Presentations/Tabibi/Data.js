import login from '../../../../assets/images/tabibi/Login.png';
import home from '../../../../assets/images/tabibi/Home.png';
import dashboard from '../../../../assets/images/tabibi/dashboard.png';

import pat1 from '../../../../assets/images/tabibi/Patient1.png';
import pat2 from '../../../../assets/images/tabibi/Patient2.png';
import pat3 from '../../../../assets/images/tabibi/Patient3.png';
import med1 from '../../../../assets/images/tabibi/Medecin1.png';
import med2 from '../../../../assets/images/tabibi/Medecin2.png';
import spec1 from '../../../../assets/images/tabibi/Spec1.png';
import spec2 from '../../../../assets/images/tabibi/Spec2.png';
import urg from '../../../../assets/images/tabibi/Urgence.png';
import sous from '../../../../assets/images/tabibi/SousType.png';
import cat from '../../../../assets/images/tabibi/Categorie.png';

import users from '../../../../assets/images/tabibi/Users.png';
import ajoutCons from '../../../../assets/images/tabibi/AjoutCons.png';
import consulte from '../../../../assets/images/tabibi/Consulté.png';
import nonconsulte1 from '../../../../assets/images/tabibi/NonConsulte1.png';
import nonconsulte2 from '../../../../assets/images/tabibi/NonConsulte2.png';
import histM from '../../../../assets/images/tabibi/Historique MDC.png';
import histP from '../../../../assets/images/tabibi/Historique PAT.png';
import voirM from '../../../../assets/images/tabibi/VoirMedecin.png';
import voirP from '../../../../assets/images/tabibi/VoirPatient.png';

const FR = {
    title: 'TABIBI : Gestion des Urgences',
    introductionHeading: 'Introduction',
    introductionText:
        "TABIBI est un projet innovant qui exploite des technologies avancées pour améliorer l'accès aux soins de santé et révolutionner la gestion des patients et des médecins. Développée par JELLOULI Youness, cette plateforme web et mobile propose une gamme de fonctionnalités révolutionnaires pour répondre aux besoins spécifiques du système de santé marocain.",
    features: 'Fonctionnalités',
    emergencyManagementTitle: 'Gestion des Urgences',
    emergencyManagementFeatures: [
        "Instructions de premiers secours : Sauvez des vies avec des guides détaillés et intuitifs en cas d'urgence.",
        'Informations vitales et conseils : Accédez à des informations fiables et à des conseils médicaux préventifs pour une meilleure gestion de la santé.'
    ],
    medicalAdviceTitle: 'Conseils Médicaux',
    medicalAdviceFeatures: [
        "Consultations à distance : Bénéficiez de l'expertise de professionnels de la santé certifiés 24/7.",
        'Questions et réponses personnalisées : Obtenez des réponses claires et précises à vos questions médicales depuis le confort de votre domicile.'
    ],
    patientManagementTitle: 'Gestion des Patients',
    patientManagementFeatures: [
        'Dossier médical numérique : Stockez et gérez vos informations médicales de manière sécurisée et confidentielle.',
        'Suivi des rendez-vous et ordonnances : Organisez vos soins médicaux et optimisez votre traitement.'
    ],
    communicationAndCollaborationTitle: 'Communication et Collaboration',
    communicationAndCollaborationFeatures: [
        "Plateforme d'échange sécurisée : Facilitez la communication entre les patients et les médecins pour une meilleure coordination des soins.",
        "Partage d'informations médicales : Accélérez le diagnostic et optimisez le traitement grâce au partage sécurisé de données."
    ],
    benefitsTitle: 'Avantages',
    benefits1Title: "Amélioration de l'accès aux soins de santé: ",
    benefits2Title: "Gain de temps et d'efficacité: ",
    benefits3Title: 'Meilleure qualité des soins: ',
    benefits4Title: 'Réduction des coûts: ',
    benefits1:
        'TABIBI offre une solution inclusive et accessible pour tous, tenant compte des diversités socio-économiques et culturelles du Maroc.',
    benefits2: 'Simplifiez la gestion des patients et optimisez le travail des médecins avec des outils numériques puissants.',
    benefits3: 'Promouvoir une communication fluide et un suivi personnalisé pour des soins médicaux optimaux.',
    benefits4: "Diminuez les dépenses superflues et optimisez l'allocation des ressources dans le système de santé.",
    technologiesUsedTitle: 'Technologies Utilisées',
    technologiesUsedFrontend: 'React, MaterialUI.',
    technologiesUsedBackend: 'Laravel',
    technologiesUsedDatabase: 'MySQL',
    technologiesUsedDevelopmentTools: 'Git, Composer, MySQL WorkBench, Postman',
    overviewTitle: 'Aperçu',
    conclusionTitle: 'Conclusion',
    conclusionText:
        "TABIBI s'engage à révolutionner le paysage de la santé au Maroc en offrant une plateforme numérique intuitive, accessible et efficace. En s'appuyant sur des technologies de pointe et une compréhension approfondie des besoins du secteur, TABIBI aspire à améliorer la qualité des soins, renforcer la relation entre les patients et les médecins, et contribuer à un système de santé plus efficace et durable."
};

const EN = {
    title: 'TABIBI: A Digital Platform to Revolutionize Healthcare',
    introductionHeading: 'Introduction',
    introductionText:
        'TABIBI is an innovative project that leverages advanced technologies to improve access to healthcare and revolutionize the management of patients and doctors. Developed by Hoceine El Idrissi, this web and mobile platform offers a range of revolutionary features to meet the specific needs of the Moroccan healthcare system.',
    features: 'Features',
    emergencyManagementTitle: 'Emergency Management',
    emergencyManagementFeatures: [
        'First aid instructions and gestures: Save lives with detailed and intuitive guides in case of emergency.',
        'Vital information and advice: Access reliable information and preventive medical advice for better health management.'
    ],
    medicalAdviceTitle: 'Medical Advice',
    medicalAdviceFeatures: [
        'Remote consultations: Benefit from the expertise of certified healthcare professionals 24/7.',
        'Personalized questions and answers: Get clear and precise answers to your medical questions from the comfort of your home.'
    ],
    patientManagementTitle: 'Patient Management',
    patientManagementFeatures: [
        'Digital medical record: Store and manage your medical information securely and confidentially.',
        'Tracking appointments and prescriptions: Organize your medical care and optimize your treatment.'
    ],
    communicationAndCollaborationTitle: 'Communication and Collaboration',
    communicationAndCollaborationFeatures: [
        'Secure exchange platform: Facilitate communication between patients and doctors for better care coordination.',
        'Sharing medical information: Speed up diagnosis and optimize treatment through secure data sharing.'
    ],
    benefitsTitle: 'Benefits',
    benefits1Title: 'Improvement of access to healthcare',
    benefits2Title: 'Time and efficiency gains ',
    benefits3Title: 'Better quality of care ',
    benefits4Title: 'Cost reduction ',
    benefits1:
        'TABIBI offers an inclusive and accessible solution for everyone, taking into account the socio-economic and cultural diversities of Morocco.',
    benefits2: 'Simplify patient management and optimize the work of doctors with powerful digital tools.',
    benefits3: 'Promote smooth communication and personalized follow-up for optimal medical care.',
    benefits4: 'Reduce unnecessary expenses and optimize resource allocation in the health system.',
    technologiesUsedTitle: 'Technologies Used',
    technologiesUsedFrontend: ' React, MaterialUI.',
    technologiesUsedBackend: ' Laravel',
    technologiesUsedDatabase: ' MySQL',
    technologiesUsedDevelopmentTools: ' Git, Composer, MySQL WorkBench, Postman',
    overviewTitle: 'Overview',
    conclusionTitle: 'Conclusion',
    conclusionText:
        'TABIBI is committed to revolutionizing the health landscape in Morocco by offering an intuitive, accessible and effective digital platform. By relying on cutting-edge technologies and a deep understanding of the needs of the sector, TABIBI aspires to improve the quality of care, strengthen the relationship between patients and doctors and contribute to a more efficient and sustainable health system.'
};

const imgs = [
    {
        src: login,
        name: 'Login Page:'
    },
    {
        src: home,
        name: 'Home Page:'
    },
    {
        src: dashboard,
        name: 'Dashboard:'
    },
    {
        src: pat1,
        name: 'Administrateur:'
    },
    {
        src: pat2
    },
    {
        src: pat3
    },
    {
        src: med1
    },
    {
        src: med2
    },
    {
        src: spec1
    },
    {
        src: spec2
    },
    {
        src: urg
    },
    {
        src: sous
    },
    {
        src: cat
    },
    {
        src: users,
        name: 'Super Admin:'
    },
    {
        src: ajoutCons
    },
    {
        src: consulte,
        name: 'Prestataire:'
    },
    {
        src: nonconsulte1
    },
    {
        src: nonconsulte2
    },
    {
        src: histM
    },
    {
        src: histP
    },
    {
        src: voirM
    },
    {
        src: voirP
    }
];

export { EN, FR, imgs };
