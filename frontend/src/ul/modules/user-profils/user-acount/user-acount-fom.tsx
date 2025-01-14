import { FormType } from "@/types/form";
import { Button } from "@/ul/disign-system/button/button";
import { Input } from "@/ul/disign-system/forms/input";
import { Texteara } from "@/ul/disign-system/forms/textaera";
import { Typography } from "@/ul/disign-system/typography/typography";


interface props {
    form: FormType;
}
export const UserAccountForm = ({ form }: props) => {
    const { register, errors, isLoading, onSubmit, handleSubmit } = form;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            <div className="flex justify-between items-center py-5">
                <div>{/*avatar*/}</div>

                <div className="flex items-end gap-1">
                    <Typography
                    variant="h1"
                    component="div"
                    className="text-gray-700"
                    >
                        857
                    </Typography>
                    <Typography
                    variant="caption4"
                    component="div"
                    className="mb-3 text-gray-700"
                    >
                        Abonnes
                    </Typography>
                </div>
            </div>
            <div className="gap-6 grid grid-cols-12">
                <div className="space-y-4 col-span-6">
                    <Input
                        type="text"
                        label="Pseudo"
                        placeholder="Joe coder..."
                        isLoading={isLoading}
                        id="displayName"
                        register={register}
                        errors={errors}
                        errorrMsg="Tu doit reseigner un pseudo"
                    />
                    <Input
                        type="text"
                        label="Expertise"
                        placeholder="Ton mode de developpement"
                        isLoading={isLoading}
                        id="expertise"
                        register={register}
                        errors={errors}
                        errorrMsg="Tu doit reseigner ton expertise"
                    />

                </div>
                <div className="space-y-4 col-span-6">
                    <Input
                        type="url"
                        label="linkedin"
                        placeholder="linkedin.com/Devs-studios"
                        isLoading={isLoading}
                        id="expertise"
                        register={register}
                        errors={errors}
                        errorrMsg="Tu doit indiquer ton pofile linkedin"
                        required={false}
                    />
                    <Input
                        type="url"
                        label="Github"
                        placeholder="githube.com/DevStudios"
                        isLoading={isLoading}
                        id="github"
                        register={register}
                        errors={errors}
                        errorrMsg="Tu doit indiquer ton pofile github"
                        required={false}
                    />
                </div>
            </div>
            <div>
                <Texteara
                    rows={16}
                    label="Biographie"
                    placeholder="Developpeur front-end react ��"
                    register={register}
                    isLoading={isLoading}
                    id="biographie"
                    errors={errors}
                    errorrMsg="Tu doit reseigner ton biographie"
                    required={false}
                />
            </div>
            <div className="flex justify-end">
                <Button
                    type="submit" disabled={isLoading}
                >
                    {isLoading ? "Chargement..." : "Enregistrer"}
                </Button>
            </div>
        </form>
    );
}