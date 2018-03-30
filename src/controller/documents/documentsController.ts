import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { Documents } from '../../manage/documents/ping';

export const ping: Handler = async (event: APIGatewayEvent, context: Context, cb: Callback) => {
  
  const documents = new Documents(event, context);
  let response = await documents.getAllProjectsCount();
  console.log("Koushik");
  cb(null, response);
}
