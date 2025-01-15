import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface props {
    href: string;
    children: React.ReactNode;
}
export const ActiveLink = ({ href, children }: props) => {
    const router = useRouter();

    const isActive: boolean = useMemo(() =>{
        return router.asPath === href;
    },[router.pathname, href,]);

    return (

        <Link
            href={href}
            className={clsx(isActive && "font-medium text-primary")}
        >
            {children}
        </Link>
    );
}