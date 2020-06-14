/**
 * Para criar: name, email, password
 */

 interface TechObject {
     title: string;
     experience: number;
 }

 interface CreateUserData {
     name?: string;
     email: string;
     password: string;
     techs: Array<string | TechObject>
 }

 export default function createuser({ name = '', email, password }: CreateUserData) {
     const user = {
         name,
         email,
         password
     }

     return user;
 }