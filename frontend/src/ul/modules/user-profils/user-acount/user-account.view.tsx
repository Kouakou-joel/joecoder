import { Typography } from "@/ul/disign-system/typography/typography"
import { UserAccountForm } from "./user-acount-fom"
import { FormType } from "@/types/form"

interface props{
    form: FormType;
}
export const UserAccountView= ({form}: props) => {
    
   
    return (
        <div className="space-y-6">
            <Typography 
            variant="h1"
            component="h1"
            >
                Mon compte
            </Typography>
            <UserAccountForm 
            form = {form}
            /> 
        </div>
    )
}