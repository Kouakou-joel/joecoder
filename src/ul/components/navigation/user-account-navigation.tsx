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
        <Box className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
                <Typography variant="caption2" weight="medium">
                    <ActiveLink href="/mon-compte">Mon compte</ActiveLink>
                </Typography>
                <Typography variant="caption2" weight="medium">
                    <ActiveLink href="/mon-compte/mes-projets">Mes projets</ActiveLink>
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
