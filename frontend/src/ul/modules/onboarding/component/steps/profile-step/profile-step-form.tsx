import { FormType } from "@/types/form";
import { Input } from "@/ul/disign-system/forms/input";
import { Texteara } from "@/ul/disign-system/forms/textaera";


interface props{
    form: FormType;
}
export const ProfileStepForm = ({form}: props) =>{
    const { errors, register, isLoading } = form;

return(
  <form className="space-y-4 w-full max-w-md">
    <Input
      type="text"
      label="Nom d'utilisateur"
      placeholder="Joe coder"
      register={register}
      isLoading={isLoading}
      errors={errors}
      id="displayName"
      errorrMsg="Tu dois renseigner ce champs"
 
    />

<Input
      type="text"
      label="Expertise"
      placeholder="Developpeur front-end react freelance "
      register={register}
      isLoading={isLoading}
      errors={errors}
      id="expertise"
      errorrMsg="Tu dois renseigner ce champs obligatoire"
 
    />
   <Texteara
    rows={5}
      label="Biographie"
      placeholder="Developpeur front-end react 😎"
      register={register}
      isLoading={isLoading}
      errors={errors}
      id="biography"
      errorrMsg="indique une description de toi et ton parcours..."
    />
  </form>
);
}