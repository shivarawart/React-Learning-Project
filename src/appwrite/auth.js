import conf from '../config/conf.js'

import { Client, Account, ID } from "appwrite";


export class AuthServices{
    clint = new Client();
    account;
    constructor(){
        this.clint
            .setEndpoint(conf.appwriteURL) 
            .setProject(conf.ProjectId)
       
            this.account = new Account(this.clint);

    }
    async createAccount(email,password,name){
        try {
            const userAccount  =  await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if(userAccount){
                return this.login(email,password);


                //               }else{
             }else{
                 return userAccount;
                    // return null;
                }
        } catch (error) {
            console.error("Error creating account:", error);
            throw error;
        }
    }
   
    async login(email,password){
        try{
           return await this.account.createEmailSession(email,password);
        }
    catch(error){
            console.error("Error logging in:", error);
            throw error;
        }
    }


    async getCreateUser(){
        try{
            return await this.account.get();
        }catch(error){
            console.error("Error getting user:", error);
            throw error;
        }
        return null;

    }
    async logout(){
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            console.error("Error logging out:", error);
            throw error;
        }
    }


}


const authServices = new AuthServices();


export default authServices;