import { APIGatewayEvent, Context } from 'aws-lambda';
import { HttpRequest } from '../../service/porject'

export class Documents{
    private _event:APIGatewayEvent;
    private projectService:HttpRequest; 
    private _context:Context;
    constructor(event, context){
        this._event = event;
        this._context = context;
        this.projectService = new HttpRequest('/project/GetProjectCount');
    }

    pingDocumentService(){
        const response = {
            statusCode: 200,
            body: JSON.stringify({
              message: 'Inside: Document node is working fine',
              input: this._event,
              context: this._context
            }),
          };
        return response;
    }
    async getAllProjectsCount(){
        let statusCode: any;
        let queryParams = '?accountId=11616210&userLicenseType=2&isFavorite=1';
        let result = await this.projectService.get(this._event.headers,queryParams);
        if(result.error){
            statusCode = 500;
        } else {
            statusCode = 200;
        }
        console.log('testing');
        const response = {
            statusCode: statusCode,
            body: {
                data: JSON.stringify(result.data),
                error: JSON.stringify(result.error) 
            }
        }
        console.log(response);
        return response;
    }
}