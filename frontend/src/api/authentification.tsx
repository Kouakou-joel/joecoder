/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, sendPasswordResetEmail,
    sendEmailVerification
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "@/config/firebase-config";

export const firebaseCreateUser = async (email: string, password: string) => {

    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password

        );
        return { data: userCredential.user };

    } catch (error) {

        const firebaseError = error as FirebaseError;
        return {
            error: {

                code: firebaseError.code,
                message: firebaseError.message,
            },

        };
    }
};

export const firebaseSignInUser = async (email: string, password: string) => {

    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password

        );
        return { data: userCredential.user };

    } catch (error) {

        const firebaseError = error as FirebaseError;
        return {
            error: {

                code: firebaseError.code,
                message: firebaseError.message,
            },


        };
    }
};

export const firebaseLogoutUser = async () => {

    try {
        await signOut(auth);
        return { data: true };

    } catch (error) {

        const firebaseError = error as FirebaseError;
        return {
            error: {

                code: firebaseError.code,
                message: firebaseError.message,
            },


        };
    }
};

export const sendEmailVerificationProccedure = async () => {

    if (auth.currentUser) {
        try {

            await sendEmailVerification(auth.currentUser);
            return { data: true };

        } catch (error) {

            const firebaseError = error as FirebaseError;
            return {
                error: {

                    code: firebaseError.code,
                    message: firebaseError.message,
                },
            }
        }
    }
    else {
        return {
            error: {
                code: "unknown",
                message: "Aucun utilisateur connecté"
            }
        }
    }
};

export const sendEmailToResetPasswod = async (email: string) => {

    try {

        await sendPasswordResetEmail(auth, email);
        return { data: true };

    } catch (error) {

        const firebaseError = error as FirebaseError;
        return {
            error: {

                code: firebaseError.code,
                message: firebaseError.message,
            },

        };
    }
};

export const updateUserIdentificationData = async (uid: string, data: any) => {
    try {
        const response = await fetch("https://console.firebase.google.com/project/joecoder-29421/functions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                uid: uid,
                data: data,
            }),
        });
        
        if (!response.ok) {
            const errorResponse = await response.json();
            const firebaseError = errorResponse as FirebaseError;
            return {
                error: {
                    code: firebaseError.code,
                    message: firebaseError.message,
                },
            }
        }
        return { data: true };
    } catch (error) {
        
    }
};