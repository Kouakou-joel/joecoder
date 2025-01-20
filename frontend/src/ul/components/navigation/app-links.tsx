import { AppLinks } from "@/types/app-links";
import { RiGithubFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";

export const footerApplicatoLinks: AppLinks[] = [
    {
        label: 'Accueil',
        baseUrl: '/#',
        type: 'internal',
    },
    {
        label: 'Projet',
        baseUrl: '/#',
        type: 'internal',
    },
    {
        label: 'Jeo coder',
        baseUrl: 'https://www.linkedin.com/feed/?trk=404_page',
        type: 'external',
    },
    {
        label: 'Formation',
        baseUrl: 'https://youtube.com/@JojoMignon-d5n',
        type: 'external',
    }
];
export const footerFormationLinks: AppLinks[] = [
    {
        label: 'CUG',
        baseUrl: '/#',
        type: 'internal',
    },
    {
        label: 'Confidencialite',
        baseUrl: '/#',
        type: 'internal',
    },
    {
        label: 'A propos',
        baseUrl: '/#',
        type: 'internal',
    },
    {
        label: 'Contact',
        baseUrl: 'https://www.facebook.com/profile.php?id=100076540940260',
        type: 'internal',
    }
];
export const footerUserLinks: AppLinks[] = [
    {
        label: 'Mon espace',
        baseUrl: '/#',
        type: 'external',
    },
    {
        label: 'Connexion',
        baseUrl: '/connexion',
        type: 'internal',
    },
    {
        label: 'Inscription',
        baseUrl: '/connexion/inscription',
        type: 'internal',
    },
    {
        label: 'Mot de passe ',
        baseUrl: '/connexion/mot-de-passe-oublie',
        type: 'internal',
    }
];
export const footerSocialLinks: AppLinks[] = [
    {
        label: 'Youtube',
        baseUrl: 'https://youtube.com/@JojoMignon-d5n',
        type: 'external',
        icon: RiYoutubeFill,
    },
    {
        label: 'Instagram',
        baseUrl: 'https://youtube.com/@JojoMignon-d5n',
        type: 'external',
        icon: RiInstagramFill,
    },
    {
        label: 'Facebook',
        baseUrl: 'https://www.facebook.com/profile.php?id=100076540940260',
        type: 'external',
    },
    {
        label: 'Github',
        baseUrl: 'https://github.com/Kouakou-joel',
        type: 'external',
        icon: RiGithubFill,
    }
];

export const footerLinks = [
    {
        label: 'App',
        data: footerApplicatoLinks,
    },
    {
        label: 'Formation',
        data: footerFormationLinks,
    },
    {
        label: 'Mon espace',
        data: footerUserLinks,
    },
    {
        label: 'Réseaux sociaux',
        data: footerSocialLinks,
    },
];