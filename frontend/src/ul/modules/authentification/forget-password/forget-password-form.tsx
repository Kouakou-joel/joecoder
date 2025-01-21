import { FormType } from "@/types/form";
import { Button } from "@/ul/disign-system/button/button";
import { Input } from "@/ul/disign-system/forms/input";

interface Props {
    form: FormType;
}
export const ForgetPasswordForm = ({form}:Props) => {
    const {
        errors,
        register,
        isLoading,
        onSubmit,
        handleSubmit,
     } = form;
    return (

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-sm:space-y-8 max-lg:space-y-8 max-xl:space-y-10 pt-8 pb-5">
        <Input
            type="email"
            placeholder="joecoder@gmail.com"
            isLoading={isLoading}
            id="email"
            register={register}
            errors={errors}
           
        />

        <Button type="submit" isLoading={isLoading} fullwidth>Reinitialiser le mot de passee</Button>
    </form>
    )
};