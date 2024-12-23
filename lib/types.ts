export interface AdminSettings {
    theme: string;
    currency: string;
}

export interface LoginAdmin {
    username:string;
    password:string;
}


export interface Admin {
    id:string;
    username:string;
    fullname: string;
    mobile: string;
    email: string;
    avatar: string;
    isActive:boolean;
    lastLoginAt:string
    role:Role
}

export interface Role {
    id: string;
    code: string;
    label: string;
    short: string;
    description: string;
    isActive:boolean;
}