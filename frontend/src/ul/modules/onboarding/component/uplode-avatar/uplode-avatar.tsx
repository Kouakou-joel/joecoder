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

    const uploadProgressBarStyle = `fixed top-0 h-1 w-full bg-secondary animate ${uploadProgress}`;

    return (
        <div className="flex items-center gap-5">
            <div className={uploadProgressBarStyle} style={{ width: `${uploadProgress}%` }} />
            <label className={clsx(
                isLoading ? "cursor-not-allowed" : "cursor-pointer",
                "intine-block bg-primary hover:bg-primary-400 px-[18px] py-[15px] rounded text-white"
            )}
            >
                <div className="flex items-center gap-2">
                    <RiCamera2Fill size={24} className="pt-1" />
                    <span>Choisir un fichier</span>
                </div>

                <input type="file" 
                disabled ={isLoading}
                onChange={handleImageSelect}
                 className="hidden" />

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