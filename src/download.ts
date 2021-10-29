import axios from 'axios';
import { defer, from, Observable } from "rxjs";
import { map } from "rxjs/operators";

export function downloadPage(url: string): Observable<string> {

  const getPage$ = defer(() => from(axios.get(url, {})));
 
  return getPage$.pipe(
    map((response) => response.data as string),
  )
}
