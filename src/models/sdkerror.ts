export class SDKError extends Error {
  statusCode: number;
  body: string;
  rawResponse: Response;

  constructor(message: string, response: Response, body: string = "") {
    const statusCode = response.status;

    let bodyString = "";
    if (body.length > 0) {
      bodyString = `\n${body}`;
    }

    super(`${message}: Status ${statusCode}${bodyString}`);
    this.statusCode = statusCode;
    this.body = body;
    this.rawResponse = response;
    this.name = "SDKError";
  }
}
