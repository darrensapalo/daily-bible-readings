import { concatMap, map } from "rxjs/operators";
import { downloadPage } from "./download";
import {
  getScriptures
} from "./parse";
import { getUrl } from "./url";

const url = getUrl(new Date());
downloadPage(url)
  .pipe(
    concatMap(getScriptures),
    // mergeMap(structuredParse)
  )
  .subscribe(console.log, console.error);
