import clsx from "clsx";
import { Typography } from "../typography/typography";

interface Props{
    type?: "text"| "email"| "password",
    placeholder?: string,
    disabled?: boolean,
    isLoading?: boolean,
    register?: any,
    errors?:Record<string, any>;
    errorrMsg?: string
    id?: string,
    required?: boolean,
    isAutocomplete?: boolean
}
export const Input =({
    type = "text",
    placeholder,
    disabled = false,
    isLoading,
    id = "",
    register,
    errors ={},
    required ,
    errorrMsg="Tu dois enseigner ce champs",
    isAutocomplete = false,
}: Props) =>{
    return ( 
    <div>
        
        <input
        type={type}
        className={clsx(
            isLoading && "cursor-not-allowed",
            errors[id] 
            ? "placeholder-alerts-danger text-alerts-danger" 
            : "placeholder-gray-500",
            "border-gray-300 focus:border-primary px-3 p-2 border rounded w-full font-light focus:outline-none"
            
        )}
        placeholder={placeholder}
        disabled={isLoading}
        {...(register &&
        register(id, {
            required: {
                value: required,
                message: errorrMsg,
            }
        }))}
        autoComplete={isAutocomplete? "on" : "off"}

    />
    { errors[id]  && (
       <Typography variant="caption4" component="div" theme="danger">
        {errors[id]?.message}
       </Typography>
    )}
    </div>
    )
};