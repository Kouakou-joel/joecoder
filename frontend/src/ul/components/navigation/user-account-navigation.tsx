import { Box } from "@/ul/disign-system/box/box";
import { Typography } from "@/ul/disign-system/typography/typography";
import { ActiveLink } from "./active-link";
import { Button } from "@/ul/disign-system/button/button";
import { toast } from "react-toastify";
import { firebaseLogoutUser } from "@/api/authentification";

export const UseAccountNavigation = () => {
    const handleLogoutUser = async () => {


        const { error } = await firebaseLogoutUser();
        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Déconnexion réussie!")
        }
    }
    return (
        <Box className="flex flex-col gap-7 max-sm:mx-24 max-lg:mx-24 max-xl:mx-40 max-sm:w-max max-lg:w-max max-xl:w-max">
            <div className="flex flex-col gap-3 max-sm:px-32 max-lg:px-28">
                <Typography variant="caption2" weight="medium">
                    <ActiveLink href="/mon-espace">Mon compte</ActiveLink>
                </Typography>
                <Typography variant="caption2" weight="medium">
                    <ActiveLink href="/project">Mes projets</ActiveLink>
                </Typography>


            </div>
            <Button
                action={handleLogoutUser}
                variant="danger">
                Deconnexion
            </Button>
        </Box>
    )
}; 
