import { Typography } from "@/ul/disign-system/typography/typography";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router"
import { RiHome3Line } from "react-icons/ri";

export const Breadcrumbs = () => {
    const router = useRouter();
    const aspath = router.asPath.split('?')[0];
    const segments = aspath.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    segments[0] = "accueil";
    const view = segments.map((path, index) => (
        <div key={index} className="flex items-center">
            <Link href={index >= 0 ? `/${segments.slice(1, index + 1).join("/")}` : "/"}>
                <Typography component="span" variant="caption3"
                    className={clsx(
                        "hover:text-gray-700 capitalize animate",
                        path === lastSegment ? "text-gray" : "text-gray-400"
                    )}>
                    {path === "accueil" ? <RiHome3Line className="inline -mt-1" /> : path.replace(/-/g, " ")}
                </Typography>
            </Link>
            {index < segments.length - 1 && (
                <Typography component="span" variant="caption2" className="ml-2 text-gray-500">
                    /
                </Typography>
            )}
        </div>
    ));

    return (
        <div className="flex items-center gap-2 ml-16 py-4">{view}</div>
    );
};