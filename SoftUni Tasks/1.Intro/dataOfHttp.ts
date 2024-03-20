class DataOfHttp {
   method: string;
   uri: string;
   version: string;
   message: string;
   response: string = 'undefined';
   fulfilled: boolean = false;

   constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
   }
}

const httpData = new DataOfHttp('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(httpData);