import conf from '../config/conf.js';

import { Client,ID, Databases,Storage, Query } from 'appwrite';

export class Service{
    Client = new Client ();
    databases;
    bucket;


    constructor(){
           this.Client
           .setEndpoint(conf.appwriteURL)
            .setProject(conf.ProjectId);
            this.databases = new Storage(this.Client);
            this.bucket = new Storage(this.Client);

    }

    async createPost({title,slug,content,feturedImage,status,userId}){
        try{
            return await this.databases.createDocument(
                conf.databaseId,
                conf.collectionId,
                slug,{
                    tite,
                    slug,
                    content,
                    feturedimage,
                    status,
                    userId,

                }
            )
        }catch(error){
            throw new Error("error", error);
            
        }
    }


    async updatePost(slug,{title,content,feturedImage,status,userId}){
        try {
           return await this.databases.updateDocumnt(
            conf.databaseId,
            conf.collectionId,
            slug,
            {
                tite,
                content,
                feturedImage,
                status,
            }
           )
        } catch (error) {
            
        }
    }
       

    async deletePost(slug){
        try {
            return await this.databases.deleDocument(
            conf.databaseId,
            conf.collectionId,
            slug,
        )
        return true 

        } catch (error) {
            return false
        }
    }


    async getpost(slug){
      try {
          return await this.databases.getDocument(
              conf.databaseId,
            conf.collectionId,
            slug,
            
        )
        return true
      } catch (error) {
        throw (error)
        return false
      }
    }

    async getPosts(Queries = [Query.equal("sataus")]){
        try {
            return await this.databases.listDocuments(
                  conf.databaseId,
             conf.collectionId,
             Queries,
           
            )
            
        } catch (error) {
            
        }
    }

    async uplodeFile(file){
        try {
            return await this.bucket.createFile(
                conf.apiKey,
                ID.unique(),
                file
            )
        } catch (error) { 
            throw (error)
        }

    }

    async deletefile(fileID){
        try {
            return await this.bucket.deleteFile(
                conf.apiKey,
                fileID
            )
            return true
        } catch (error) {
            console.log("appwrite delete file")
            return false

        }
    }
     
    async getfile(fileID){
         try {
            return await this.bucket.getFile(
                conf.apiKey,
                fileID
            )
            return true
        } catch (error) {
            console.log("appwrite delete file")
            return false

        }
    }
    }



    


const service = new service();

export default service;