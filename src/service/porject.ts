import * as request from "request-promise-native";
import { Configs } from '../config/configs';

export class HttpRequest{
    
    private baseUrl:string;
    private queryString:string;
    private stageUrl:string;
    constructor(baseUrl:string){
        this.baseUrl = baseUrl;
        this.stageUrl = Configs.projectLinkBaseURL;
        console.log(Configs.projectLinkBaseURL);
    }

    async get(headers,queryString?:string){
        this.queryString = queryString?queryString:'';
        let options = {
            // url: this.url,
            uri: this.stageUrl + this.baseUrl + this.queryString,
            headers: {
                TokenKey: headers.TokenKey,
            },
            json: true
        };
        let result = {
            data: {},
            error:{}
        }
        try{
            result.data = await request.get(options);
        }catch(error){
            result.error = error.message;
        }
        return result;
    }
}

