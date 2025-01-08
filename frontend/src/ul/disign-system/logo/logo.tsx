import clsx from "clsx";

interface props {
    size?: "very-small" | "small" | "medium" | "large";

}
export const Logo = ({ size = "medium" }: props) => {
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

    }
    return (
        <div>
            <svg
              width={SizeLogo}
              height={SizeLogo}
              fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48" >
                <circle cx="24" cy="24" r="20" fill="#2979ff"></circle><circle cx="24" cy="19" r="4" fill="#2962ff"></circle><path fill="#2962ff" d="M24,26c0,0-9,0-9,5.727C15,35,16.636,35,24,35s9,0,9-3.273C33,26,24,26,24,26z"></path><circle cx="24" cy="18" r="4" fill="#fff"></circle><path fill="#fff" d="M24,25c0,0-9,0-9,5.727C15,34,16.636,34,24,34s9,0,9-3.273C33,25,24,25,24,25z"></path>
            </svg>
        </div>
        // <Image src="/logo.png" alt="Logo" width={logoSize} height={logoSize} />
    );
}