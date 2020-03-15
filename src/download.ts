import {Observable} from "rxjs";
import http from "http";

export function downloadPage(url: string) {

  return new Observable<string>(subscriber => {
    // console.log("Downloading " + url);
    const operation = http.get(url, (response) => {
      // console.log("Received response " + url);
      let body = "";
      response.on('data', chunk => (body = body + chunk));
      response.on('end', () => {
        subscriber.next(body);
        subscriber.complete();
      });
    });

    operation.setTimeout(5000, () => {
      operation.abort();
    });

    subscriber.add(() => {
      operation.abort();
    })
  })
}
