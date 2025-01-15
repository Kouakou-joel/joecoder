export interface FormType {
    control?: any;
    errors: any;
    handleSubmit: any;
    register: any;
    reset?: string | boolean;
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
export interface onboardingProfileFormFielsType{
    displayName: string,
    expertise: string,
    biography: string,
   
}
export interface UserProfileFormFielsType{
    displayName: string,
    expertise: string,
    biography: string,
    github: string,
    linkedin: string,
    twitter: string,
    facebook: string,
}
