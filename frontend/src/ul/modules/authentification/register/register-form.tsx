import { FormType } from "@/types/form";
import { Button } from "@/ul/disign-system/button/button";
import { Input } from "@/ul/disign-system/forms/input";

interface Props {
    form: FormType;
}
export const RegisterForm = ({ form }: Props) => {
    const {
        errors,
        register,
        isLoading,
        onSubmit,
        handleSubmit
     } = form;
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-8 pb-5">
            <Input
                type="email"
                placeholder="joecoder@gmail.com"
                isLoading={isLoading}
                id="email"
                register={register}
                errors={errors}
                errorrMsg="Tu dois renseigner ce champs"
            />
            <Input
                type="password"
                placeholder="Mot de passe"
                isLoading={isLoading}
                id="password"
                register={register}
                errors={errors}
                errorrMsg="Tu dois renseigner ce champs"
            />
            <Input
                placeholder="Comment nous as-tu connus "
                isLoading={isLoading}
                id="how_to_login"
                register={register}
                errors={errors}
                errorrMsg="Tu dois renseigner ce champs"
            />
            <Button type="submit" disabled={isLoading} fullwidth>
                S inscrire
            </Button>
        </form>
    );
};