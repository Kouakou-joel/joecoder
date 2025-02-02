import clsx from "clsx";

interface props {

    children:React.ReactNode;
    className?: string;
}
export const Container = ({ children, className}: props) => {
    return (
        <div className={clsx( 
         "space-y-5 mx-auto max-sm:px-4 max-lg:px-10 w-full max-w-7xl",
         className
         )}>
            {children}
        </div>
    );
}