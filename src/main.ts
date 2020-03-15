import {getUrl} from "./url";
import {downloadPage} from "./download";
import {map, mergeMap} from "rxjs/operators";
import {
  getScriptures,
  removeFooterText,
  removeRepetitiveNewlines, structuredParse
} from "./parse";

const url = getUrl(new Date());
downloadPage(url)
  .pipe(
    map(getScriptures),
    map(removeFooterText),
    map(removeRepetitiveNewlines),
    // mergeMap(structuredParse)
  )
  .subscribe(console.log, console.error);
