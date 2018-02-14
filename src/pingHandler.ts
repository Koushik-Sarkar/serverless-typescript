import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

export const ping: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Node is working fine',
      input: event,
    }),
  };

  cb(null, response);
}
