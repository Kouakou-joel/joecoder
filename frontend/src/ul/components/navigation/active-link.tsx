import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface Props {
    href: string;
    children: React.ReactNode;
}

export const ActiveLink = ({ href, children }: Props) => {
    const router = useRouter();

    const isActive: boolean = useMemo(() => {
        return router.asPath === href;
    }, [router.asPath, href]); // Remplacement de `router.pathname` par `router.asPath`

    return (
        <Link
            href={href}
            className={clsx(isActive && "font-medium text-primary")}
        >
            {children}
        </Link>
    );
};
