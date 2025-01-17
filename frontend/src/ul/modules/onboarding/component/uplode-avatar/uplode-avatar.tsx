import { Avatar } from "@/ul/disign-system/avatar/avatar"
import { clsx } from "clsx";
import { RiCamera2Fill } from "react-icons/ri"

interface props {
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    imagePreview: string | ArrayBuffer | null;
    isLoading: boolean;
    uploadProgress: number;
}
export const UploadAvatar = ({
    handleImageSelect,
    imagePreview,
    isLoading,
    uploadProgress,

}: props) => {

    const uploadProgressBarStyle = `fixed top-0 h-1 w-full bg-secondary animate ${
        uploadProgress > 0 ? "" : "hidden"
        }`;

    return (
        <div className="flex items-center gap-5">
            <div className={uploadProgressBarStyle} style={{ width: `${uploadProgress}%` }} />
            <label
    className={clsx(
        "inline-block bg-primary px-[18px] py-[15px] rounded text-white transition duration-200",
        {
            "cursor-pointer hover:bg-primary-400": !isLoading,
            "cursor-not-allowed opacity-60": isLoading,
        }
    )}
    aria-disabled={isLoading} // Accessibilité pour indiquer que le bouton est désactivé
>
    <div className="flex items-center gap-2">
        <RiCamera2Fill size={24} className="pt-1" />
        <span>Choisir un fichier</span>
    </div>

    <input
        type="file"
        disabled={isLoading} // Désactive le champ si isLoading est vrai
        onChange={handleImageSelect}
        className="hidden" // Cache l'input mais conserve son accessibilité
    />
</label>

            <Avatar
                size="extra-large"
                alt="avatar"
                src={
                    imagePreview ?
                        typeof imagePreview === "string" ?
                            imagePreview : String(imagePreview) :
                        "/assets/images/imagecamera.jpg"}
            />
        </div>
    )
}