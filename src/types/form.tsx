export interface FormType {
    control?: any;
    errors: any;
    handleSubmit: any;
    register: any;
    reset?: any;
    isLoading: boolean;
    onSubmit: any;
}

export interface RegisterFormFielsType{
    email: string;
    password: string;
    how_to_login: string;
}
export interface LoginFormFielsType{
    email: string;
    password: string;
  
}
export interface FogetPasswordFormFielsType{
    email: string;
    
}
