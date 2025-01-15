import Image from "next/image";

interface Props {
    size?: "very-small" | "small" | "medium" | "large";
}

export const Logo = ({ size = "medium" }: Props) => {
    let SizeLogo: number;

    switch (size) {
        case "very-small":
            SizeLogo = 30;
            break;
        case "small":
            SizeLogo = 61;
            break;
        case "medium":
            SizeLogo = 88;
            break;
        case "large":
            SizeLogo = 140;
            break;
        default:
            SizeLogo = 88; // Par défaut, si aucune taille valide n'est fournie
    }

    return (
        <div>
            <Image
                width={SizeLogo}
                height={SizeLogo}
                src="/assets/svg/1592b05d-ea32-46b1-b85b-a14e0e368a47.jpg"
                alt="Logo"
                className="rounded-full"
            />
        </div>
    );
};
