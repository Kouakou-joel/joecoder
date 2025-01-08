import clsx from "clsx";

interface props {
    children: React.ReactNode;
    className?: string;
    padding_x?: string;
    padding_y?: string;

}
export const Box = ({
    children,
    className,
    padding_x = "9",
    padding_y = "9" }
    : props) => {
    return (
        <div className={clsx(
            "relative border-gray-400 p-6 border rounded-md w-full",
            className,
            `px-${padding_x}
             py-${padding_y}`
        )}>
            {children}
        </div>
    );
}