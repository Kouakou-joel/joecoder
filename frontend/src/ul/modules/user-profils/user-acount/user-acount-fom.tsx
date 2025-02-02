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
    // const [subscribersCount, setSubscribersCount] = useState<number>(0);

    // useEffect(() => {
    //     const fetchSubscribersCount = async () => {
    //         try {
    //             const response = await fetch("/#");
    //             if (!response.ok) {
    //                 throw new Error("Erreur lors de la récupération du nombre d'abonnés");
    //             }
    //             const data = await response.json();
    //             setSubscribersCount(data.count);
    //         } catch (error) {
    //             console.error("Erreur:", error);
    //         }
    //     };

    //     fetchSubscribersCount();
    // }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex justify-between items-center py-5">
                <div>{/*avatar*/}</div>

                <div className="flex items-end gap-1">
                    <Typography
                    variant="h1"
                    component="div"
                    className="text-gray-700"
                    >
                        0
                        {/* {subscribersCount} */}
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
                        label="Linkedin"
                        placeholder="linkedin.com/Devs-stu..."
                        isLoading={isLoading}
                        id="linkedin"
                        register={register}
                        errors={errors}
                        errorrMsg="Tu doit indiquer ton pofile linkedin"
                        required={false}
                    />
                    <Input
                        type="url"
                        label="Github"
                        placeholder="githube.com/DevStudi..."
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
                    rows={10}
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