/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { Typography } from "../typography/typography"

interface props {
    rows: number,
    placeholder?: string,
    disabled?: boolean,
    isLoading?: boolean,
    register?: any,
    errors?: any,
    errorrMsg?: string
    id?: string,
    required?: boolean,
    isAutocomplete?: boolean,
    label?: string,
}

export const Texteara = ({
    rows = 5,
    placeholder,
    disabled = false,
    isLoading,
    id = "",
    register,
    errors = {},
    errorrMsg = "Tu dois enseigner ce champs",
    label,
    isAutocomplete = false,
}: props) => {
   
 return (
        <div className="space-y-2">
        {label && (
            <Typography variant="caption3" component="div"
            theme={errors[id] ? "danger" : "gray"}
             className="block text-gray-700">
                {label}
            </Typography>
        )}
        <textarea
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
            className={clsx(
                isLoading ? "bg-gray-200 focus:right-gray-300 cursor-not-allowed":"bg-white",
                errors[id]
                ? "border-alerts-danger focus:border-alerts-danger" 
                : "border-gray-300 focus:border-primary",
                "p-4 border rounded focus:ring-1 w-full font-light focus:outline-none"
                )}
                {...(register &&
                register(id, {
                    required: {
                        value: false,
                        message: errorrMsg,
                    }
                })
            )}
            autoComplete={isAutocomplete? "on" : "off"}
                 />
                 { errors[id]  && (
                    <Typography variant="caption4" component="div" theme="danger">
                     {errors[id]?.message}
                    </Typography>
                 )}
        </div>
        
    );

}  