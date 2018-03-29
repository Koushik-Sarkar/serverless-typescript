import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { Documents } from '../../manage/documents/ping';

export const ping: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
  
  const documents = new Documents(event);
  let response = documents.pingDocumentService();
  cb(null, response);
}
