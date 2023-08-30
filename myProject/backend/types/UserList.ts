export interface UserList {
    id:number;
    user_nume: string;
    user_prenume: string;
    user_email: string;
    user_password: string;
    user_data_nastere: Date;
    data_adaugare?: Date;
}