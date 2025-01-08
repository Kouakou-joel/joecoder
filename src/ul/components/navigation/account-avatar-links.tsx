import { useAuth } from "@/context/AuthUserContext";
import { Avatar } from "@/ul/disign-system/avatar/avatar"
import { Typography } from "@/ul/disign-system/typography/typography";
import Link from "next/link"

export const AccountAvatarLinks = () => {
    const {authUser} = useAuth();

    const {photoURL, displayName} = authUser;
    
    return(
        <Link href="/mon-espace"
        className="flex items-center gap-2"
        >
        <Avatar src={photoURL}
         alt=  {displayName ?  `avatar de ${displayName}`:
         "avatar utilisteur" 
         } size="large"
         />
        <div className="flex-col max-w-[160px]">
            <Typography
            variant="caption2"
            
            component="span"
            className="flex truncate"
            >
            {displayName? displayName: "Bienvenue"}
            </Typography>
            <Typography
            variant="caption4"
            
            component="span"
            theme="gray"
           className="flex"
            >
            Mon compte
            </Typography>
        </div>
        </Link>
    );
}