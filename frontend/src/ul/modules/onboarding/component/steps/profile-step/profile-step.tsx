import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/ul/components/container/container";
import { Typography } from "@/ul/disign-system/typography/typography";
import { OnboardingTabs } from "../../tabs/onboading-tabs";
import { ProfileStepForm } from "./profile-step-form";
import { SubmitHandler, useForm } from "react-hook-form";
import { onboardingProfileFormFielsType } from "@/types/form";
import { useToggle } from "@/hoock/use-toggle";
import { firestoreUpdateDocument } from "@/api/firestore";
import { useAuth } from "@/context/AuthUserContext";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { updateUserIdentificationData } from "@/api/authentification";

export const ProfileStep = ({
  prev,
  next,
  isFirstStep,
  isLastStep,
  stepsList,
  getCurrentStep,
}: BaseComponentProps) => {
  const authUser = useAuth();
  const { value: isLoading, setValue: setIsLoading } = useToggle();

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset,
    setValue,
  } = useForm<onboardingProfileFormFielsType>();

  useEffect(() => {
    if (authUser.authUser?.userDocument) {
      const fieldsToUpdate: (keyof onboardingProfileFormFielsType)[] = [
        "displayName",
        "expertise",
        "biography",
      ];
      fieldsToUpdate.forEach((field) => {
        if (authUser.authUser.userDocument[field]) {
          setValue(field, authUser.authUser.userDocument[field]);
        }
      });
    }
  }, [authUser.authUser?.userDocument, setValue]);

  const handleUpdateUserDocument = async (
    formData: onboardingProfileFormFielsType
  ) => {
    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.authUser.uid,
      formData
    );
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    reset();
    next();
    toast.success("Profil mis à jour avec succès");
  };

  const onSubmit: SubmitHandler<onboardingProfileFormFielsType> = async (
    formData
  ) => {
    setIsLoading(true);

    const { displayName, expertise, biography } = authUser.authUser.userDocument;

    const hasChanged =
      displayName !== formData.displayName ||
      expertise !== formData.expertise ||
      biography !== formData.biography;

    if (hasChanged) {
      if (displayName !== formData.displayName) {
        const result = await updateUserIdentificationData(authUser.authUser.uid, {
          displayName: formData.displayName,
        });

        if (result?.error) {
          setIsLoading(false);
          toast.error(result.error.message);
          return;
        }
        toast.success("Nom d'utilisateur mis à jour");
      }

      await handleUpdateUserDocument(formData);
    } else {
      toast.info("Aucune modification détectée");
      setIsLoading(false);
      return;
    }
  };

  return (
    <div className="relative pb-[91px] h-screen">
      <div className="h-full overflow-auto">
        <Container className="grid grid-cols-12 h-full">
          <div className="relative z-10 flex items-center col-span-6 py-10 h-full">
            <div className="space-y-5 pb-4.5 w-full">
              <OnboardingTabs
                tabs={stepsList}
                getCurrentStep={getCurrentStep}
              />
              <Typography variant="h1" component="h1">
                Présente-toi ! 😏
              </Typography>
              <Typography variant="body-base" component="p" theme="gray">
                Remplis ton profil et confirme ton identité. Cela te permettra
                de participer plus facilement aux étapes suivantes. Ton profil
                est public et ne contient pas ton mot de passe. Ton identité est
                unique et ne peut pas être modifiée.
              </Typography>
            </div>
          </div>
          <div className="flex items-center col-span-6 h-full">
            <div className="flex justify-end w-full">
              <ProfileStepForm
                form={{
                  control,
                  errors,
                  onSubmit,
                  register,
                  isLoading,
                  handleSubmit,
                }}
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter
        prev={prev}
        next={handleSubmit(onSubmit)}
        isFirstStep={isFirstStep()}
        isLastStep={isLastStep()}
        isLoading={isLoading}
      />
    </div>
  );
};
