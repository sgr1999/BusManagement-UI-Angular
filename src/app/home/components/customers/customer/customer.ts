export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    customerId: number;
    firstName: string;
    lastName:string;
    userName:string;
    password:string;
    mobileNumber?: string;
    gender?: string;
    age?: number;
}
