import { Timestamp } from "firebase/firestore";

export interface userInterface {
    uid: string;
    email: string;
    displayName: string | null;
    photoURL: string;
    phoneNumber: string | null;
    emailVerified: boolean;
    userDocument?: UserDocument;
}

export interface UserDocument {
    uid: string;
    email: string;
    creation_Date: Timestamp;
    how_to_login: string;
}