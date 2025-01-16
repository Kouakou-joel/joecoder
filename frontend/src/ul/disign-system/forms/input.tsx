/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { Typography } from "../typography/typography";

interface Props{
    type?: "text"| "email"| "password" | "url",
    placeholder?: string,
    disabled?: boolean,
    isLoading?: boolean,
    register?: any,
    errors?:Record<string, any>,
    errorrMsg?: string,
    id?: string,
    required?: boolean,
    isAutocomplete?: boolean,
    label?: string,
}
export const Input =({
    type = "text",
    placeholder,
    isLoading,
    id = "",
    register,
    errors ={},
    errorrMsg="Tu dois enseigner ce champs",
    label,
    isAutocomplete = false,
}: Props) =>{
    return ( 
    <div className="space-y-2">
        {label && (
            <Typography variant="caption3" component="div"
            theme={errors[id] ? "danger" : "gray"}
             className="block text-gray-700">
                {label}
            </Typography>
        )}
        
     <div className="flex items-center">
     {type === "url" &&(
            <div className="border-gray-400 border-y bg-gray-500/40 p-2 border-l rounded-l text-gray-500">
                httttp://
            </div>
        )}

        <input
        type={type}
        className={clsx(
            type === "url" ? "rounded-r": "rounded",
            isLoading && "cursor-not-allowed",
            errors[id] 
            ? "placeholder-alerts-danger text-alerts-danger border-alerts-danger" 
            : "placeholder-gray-500",
            "border-gray-300 focus:border-primary px-3 p-2 border  w-full font-light focus:outline-none"
            
        )}
        placeholder={placeholder}
        disabled={isLoading}
        zz
        {...(register &&
        register(id, {
            required: {
                value: true,
                message: errorrMsg,
            }
        }))}
        autoComplete={isAutocomplete? "on" : "off"}

    />
     </div>
    { errors[id]  && (
       <Typography variant="caption4" component="div" theme="danger">
        {errors[id]?.message}
       </Typography>
    )}
    </div>
    )
};