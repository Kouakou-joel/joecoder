import { AppLinks } from "@/types/app-links";
import { RiFacebookBoxFill, RiGithubFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";

export const footerApplicatoLinks: AppLinks[] = [
    {
        label: 'Accueil',
        baseUrl: '/#',
        type: 'external',
    },
    {
        label: 'Project',
        baseUrl: '/#',
        type: 'external',
    },
    {
        label: 'Jeo coder',
        baseUrl: '/#',
        type: 'external',
    },
    {
        label: 'Formation',
        baseUrl: '/https://youtube.com/@JojoMignon-d5n',
        type: 'internal',
    }
];
export const footerFormationLinks: AppLinks[] = [
    {
        label: 'CUG',
        baseUrl: '/#',
        type: 'external',
    },
    {
        label: 'Confidencialite',
        baseUrl: '/#',
        type: 'external',
    },
    {
        label: 'A propos',
        baseUrl: '/#',
        type: 'external',
    },
    {
        label: 'Contact',
        baseUrl: '/https://youtube.com/@JojoMignon-d5n',
        type: 'external',
    }
];
export const footerUserLinks: AppLinks[] = [
    {
        label: 'Mon espace',
        baseUrl: '/#',
        type: 'external',
    },
    {
        label: 'connexion',
        baseUrl: '/#',
        type: 'external',
    },
    {
        label: 'inscription',
        baseUrl: '/#',
        type: 'internal',
    },
    {
        label: 'mot de passe ',
        baseUrl: '/https://youtube.com/@JojoMignon-d5n',
        type: 'internal',
    }
];
export const footerSocialLinks: AppLinks[] = [
    {
        label: 'youtube',
        baseUrl: '//https://youtube.com/@JojoMignon-d5n',
        type: 'external',
        icon: RiYoutubeFill,
    },
    {
        label: 'instagram',
        baseUrl: '//https://youtube.com/@JojoMignon-d5n',
        type: 'external',
        icon: RiInstagramFill,
    },
    {
        label: 'linkedin',
        baseUrl: '//https://youtube.com/@JojoMignon-d5n',
        type: 'external',
    },
    {
        label: 'github',
        baseUrl: '/https://youtube.com/@JojoMignon-d5n',
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