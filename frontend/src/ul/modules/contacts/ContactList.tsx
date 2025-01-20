import { useEffect, useState } from "react";
import { Button } from "@/ul/disign-system/button/button";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { db } from "@/config/firebase-config"; // Assurez-vous d'importer votre configuration Firebase
import { collection, getDocs } from "firebase/firestore";

interface Contact {
    id: string;
    name: string;
    email: string;
}

export const ContactList = () => {
    const [contacts, setContacts] = useState<Contact[]>([]); // État pour stocker les contacts
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const contactsCollection = collection(db, "contacts"); // Remplacez "contacts" par le nom de votre collection
                const snapshot = await getDocs(contactsCollection);
                const contactsList = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Contact[]; // Assurez-vous que les données correspondent à l'interface Contact
                setContacts(contactsList);
            } catch (error) {
                console.error("Erreur lors de la récupération des contacts:", error);
                toast.error("Une erreur est survenue lors de la récupération des contacts.");
            }
        };

        fetchContacts();
    }, []);

    const handleSendMessage = async () => {
        if (!selectedContact) {
            toast.error("Veuillez sélectionner un contact.");
            return;
        }

        // Simuler l'envoi d'un message
        try {
            const response = await fetch("https://your-api-endpoint.com/send-message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: selectedContact.name,
                    email: selectedContact.email,
                    message: "Votre message ici", // Vous pouvez remplacer par un message dynamique
                }),
            });

            if (!response.ok) {
                throw new Error("Erreur lors de l'envoi du message");
            }

            toast.success(`Message envoyé à ${selectedContact.name} !`);
            router.push("/thank-you"); // Rediriger vers une page de remerciement
        } catch (error) {
            console.error("Erreur:", error);
            toast.error("Une erreur est survenue lors de l'envoi de votre message.");
        }
    };

    return (
        <div>
            <h2>Liste des Contacts</h2>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <span>{contact.name} ({contact.email})</span>
                        <Button 
                        action={() => setSelectedContact(contact)}
                        >Sélectionner</Button>
                    </li>
                ))}
            </ul>
            <Button action={handleSendMessage} variant="accent">
                Envoyer un message
            </Button>
        </div>
    );
}; 