import userFirebaseAuth from "@/hoock/user-firebase-auth";
import { UserDocument } from "@/types/user";
import { createContext, useContext } from "react";

const init = {
    uid: "",
    displayName: "",
    email: "",
    photoURL: "",
    emailVerified: false,
    phoneNumber: "",
    userDocument: {} as UserDocument,


}
const AUthUserContext = createContext({
    authUser: init,
    authUserIsLoading: true,

})
interface props {
    children: React.ReactNode;
}
export function AuthUserPovider({ children }: props) {
    const auth = userFirebaseAuth();
    return (
        <AUthUserContext.Provider value={{
            authUser: auth.authUser as {
                uid: string;
                email: string;
                displayName: string;
                photoURL: string;
                phoneNumber: string;
                emailVerified: boolean;
                userDocument: UserDocument;
            },
            authUserIsLoading: auth.authUserIsLoading,
        }}>
            {children}
        </AUthUserContext.Provider>
    )
}

export const useAuth = () => useContext(AUthUserContext);