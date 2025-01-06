import { auth, db } from "@/config/firebase-config"
import { UserDocument, userInterface } from "@/types/user";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react"

export default function userFirebaseAuth() {
    const [authUser, setAuthUser] = useState<userInterface | null>(null);
    const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true);

    const formatAuthUser = (user: User | userInterface) => ({
        uid: user.uid,
        email: user.email || "",
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
        phoneNumber: user.phoneNumber || "",
        emailVerified: user.emailVerified || false,
    });
    const getUserDocument = async (user: userInterface) => {
        if(auth.currentUser) {
           const documentRef = doc(db, "users", auth.currentUser.uid );
           const compactUser = user;
           onSnapshot(documentRef, async (doc)=> {
            if(doc.exists()) {
                compactUser.userDocument = doc.data() as UserDocument;
            }
            setAuthUser((prevAuthUser) => ({
                    ...prevAuthUser,
                    ...compactUser,
                  
            }));
            setAuthUserIsLoading(false);
           })
    }
}
    const authStateChanged = async (authState: userInterface | User | null) => {
        if (!authState) {
            setAuthUser(null);
            setAuthUserIsLoading(false);
            return;
        } 
            setAuthUserIsLoading(true);
            const formattedUser = formatAuthUser(authState);
            await getUserDocument(formattedUser);

    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, authStateChanged);
        return () => unsubscribe();

    }, [])
    return {
        authUser,
        authUserIsLoading
    }

}