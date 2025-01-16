
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { useToggle } from "@/hoock/use-toggle";
import { firestoreUpdateDocument } from "@/api/firestore";
import { useAuth } from "@/context/AuthUserContext";
import { toast } from "react-toastify";
import { useState } from "react";
import { updateUserIdentificationData } from "@/api/authentification";
import { Container } from "@/ul/components/container/container";
import { OnboardingTabs } from "../tabs/onboading-tabs";
import { Typography } from "@/ul/disign-system/typography/typography";
import { OnboardingFooter } from "../footer/onboarding-footer";
import { UploadAvatar } from "../uplode-avatar/uplode-avatar";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/config/firebase-config";

export const AvatarStep = ({
  prev,
  next,
  isFirstStep,
  isLastStep,
  stepsList,
  getCurrentStep,
}: BaseComponentProps) => {
  const authUser = useAuth();
  const { value: isLoading, toggle } = useToggle();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result || null);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateUserDocument = async (photoURL: string) => {
    try {
      const body = { photoURL };
      await updateUserIdentificationData(authUser.authUser.uid, body);

      const { error } = await firestoreUpdateDocument("users", authUser.authUser.uid, body);

      if (error) {
       toast.error(error.message);
      }
      toast.success("Avatar mis à jour avec succès");
      next();
    }catch {
      toast.error("Une erreur inconnue est survenue");
    } finally {
      toggle();
    }
  };

  const handleImageUpload = () => {
    if (selectedImage) {
      toggle();
      const storageRef = ref(storage, `users-medias/${authUser.authUser.uid}/avatar/avatar-${authUser.authUser.uid}`);
      const uploadTask = uploadBytesResumable(storageRef, selectedImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
            toast.success("Avatar téléchargé avec succès");
        },
        (error) => {
          console.error("Erreur de téléchargement", error);
          toast.error("Une erreur est survenue lors du téléchargement de l'image");
          toggle();
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await updateUserDocument(downloadURL);
          } catch (error) {
            toast.error("Erreur lors de la récupération de l'URL de l'image");
            console.error("Erreur", error);
          } finally {
            toggle();
          }
        }
      );
    } else {
      toast.warn("Veuillez sélectionner une image de votre profile");
    }

  };

  return (
    <div className="relative pb-[91px] h-screen">
      <div className="h-full overflow-auto">
        <Container className="grid grid-cols-12 h-full">
          <div className="relative z-10 flex items-center col-span-6 py-10 h-full">
            <div className="space-y-5 pb-4.5 w-full">
              <OnboardingTabs tabs={stepsList} getCurrentStep={getCurrentStep} />
              <Typography variant="h1" component="h1">
                Dernière étape! 😏
              </Typography>
              <Typography variant="body-base" component="p" theme="gray">
                C est sûr, tu as une tête à être sur dev studios et des startups.
                Mais tu as besoin de ta plus belle photo de profil pour que tout le monde voie
                à quel point tu es incroyable et capable de créer des choses qui te ressemblent.
                Utilise une photo de ton choix et clique sur le bouton de téléchargement.
              </Typography>
            </div>
          </div>
          <div className="flex items-center col-span-6 h-full">
            <div className="flex justify-end w-full">
              <UploadAvatar
                imagePreview={imagePreview}
                handleImageSelect={handleImageSelect}
                isLoading={isLoading}
                uploadProgress={uploadProgress}
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter
        prev={prev}
        next={handleImageUpload}
        isFirstStep={isFirstStep()}
        isLastStep={isLastStep()}
      />
    </div>
  );
};
