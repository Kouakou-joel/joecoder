import { Typography } from "@/ul/disign-system/typography/typography";
import { Container } from "../container/container";
import { Logo } from "@/ul/disign-system/logo/logo";
import { Button } from "@/ul/disign-system/button/button";
import Link from "next/link";
import { ActiveLink } from "./active-link";
import { useAuth } from "@/context/AuthUserContext";
import { AccountAvatarLinks } from "./account-avatar-links";
import { useState } from "react";

export const Navigation = () => {
    const { authUser } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const authenticationSystem = (
        <div className="flex items-center gap-2">
            <Button baseUrl="/connexion" size="small" >Connexion</Button>
            <Button baseUrl="/connexion/inscription" size="small" variant="secondary">Rejoindre</Button>
        </div>
    )

    return (
        <div className="border-gray-400 shadow-md border-b-2 max-sm:w-max max-lg:w-max max-xl:w-max">
            <Container className="flex justify-between items-center gap-7 max-sm:px-32 max-xl:px-10 py-3">
                <Link href="/" className="max-sm:pr-96 max-xl:pr-72">
                    <div className="flex items-center gap-2.5">
                        <Logo size="small" />
                        <div className="flex flex-col">
                            <div className="font-extrabold text-[24px] text-gray-700">
                                Joe Coder
                            </div>
                            <Typography theme="gray" variant="caption4" component="div" >
                                Trouve de l inspiration & recois  des freedbacks !
                            </Typography>
                        </div>
                    </div>
                </Link>
                {/* Menu pour écrans larges */}
                <div className="sm:flex items-center gap-4 hidden">
                    <Typography variant="caption3" component="div" className="flex items-center gap-7" >
                        <ActiveLink href="/projects"> Projects</ActiveLink>
                        <ActiveLink href="/formation"> Formation</ActiveLink>
                        <ActiveLink href="/contacts"> Contacts</ActiveLink>
                    </Typography>
                    {!authUser ? authenticationSystem : <AccountAvatarLinks />}
                </div>
                {/* Bouton pour le menu mobile */}
                <div className="flex items-center sm:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-700 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </Container>
            {/* Menu déroulant pour mobile */}
            {menuOpen && (
                <div className="border-gray-300 sm:hidden border-t">
                    <div className="flex flex-col items-start gap-4 p-4">
                        <ActiveLink href="/projects">Projet</ActiveLink>
                        <ActiveLink href="/formation">Formation</ActiveLink>
                        <ActiveLink href="/conctat">Contact</ActiveLink>
                        {!authUser ? authenticationSystem : <AccountAvatarLinks />}
                    </div>
                </div>
            )}
        </div>
    );
}

