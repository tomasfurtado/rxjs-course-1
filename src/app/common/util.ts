import { Observable } from "rxjs";

export function createHttpObservable(url: string): Observable<any> {
  return new Observable((observer) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP request failed");
        }
        return response.json();
      })
      .then((body) => {
        observer.next(body);
        observer.complete();
      })
      .catch((err) => {
        observer.error(err);
      });
  });
}
