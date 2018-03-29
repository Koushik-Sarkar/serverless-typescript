import { APIGatewayEvent } from 'aws-lambda';

export class Documents{
    private _event:APIGatewayEvent;
    constructor(event){
        this._event = event;
    }

    pingDocumentService(){
        const response = {
            statusCode: 200,
            body: JSON.stringify({
              message: 'Inside: Document node is working fine',
              input: this._event,
            }),
          };
        return response;
    }
}