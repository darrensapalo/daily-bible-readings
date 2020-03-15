import cheerio from 'cheerio';
import {EMPTY, Observable, zip} from "rxjs";
import {LiturgyOfWord, LiturgyOfWordSection} from "./interfaces";
import {map, toArray} from "rxjs/operators";

export function getScriptures(html: string): string {
  const $ = cheerio.load(html, {});
  // noinspection SpellCheckingInspection
  const text = $(".contentarea").text();
  return text;
}

export function removeFooterText(text: string): string {
  text = text.replace(/Lectionary for Mass for Use in the Dioceses of the United States, second typical edition.*\n$/g, "");
  text = text.replace(/Get the Daily Readings every morning$/g, "");
  text = text.replace(/Name:/g, "");
  text = text.replace(/Your email address:\*/g, "");
  text = text.replace(/Privacy Terms\*/g, "");
  text = text.replace(/I Agree that the data I provided to complete this.*\n/g, "");
  text = text.replace(/Correct invalid entries.*\n/g, "");
  text = text.replace(/Please enter all required fields.*\n/g, "");
  text = text.replace(/Get the Daily Readings every morning.*\n/g, "");

  return text;
}

export function removeRepetitiveNewlines(text: string): string {
  text = text.replace(/\n\n/g, "");
  text = text.replace(/\n\n/g, "");
  return text;
}

export function structuredParse(text: string): Observable<LiturgyOfWord> {

  const firstReadings = parseFirstReading(text).pipe(toArray());
  const responsorialPsalms = parseResponsorialPsalm(text).pipe(toArray());
  const secondReadings = parseSecondReading(text).pipe(toArray());
  const gospelAcclamations = parseGospelAcclamation(text).pipe(toArray());
  const gospels = parseGospel(text).pipe(toArray());

  return zip(firstReadings, responsorialPsalms, secondReadings, gospelAcclamations, gospels).pipe(
    map(result => ({
      first_reading: result[0],
      responsorial_psalm: result[1],
      second_reading: result[2],
      gospel_acclamation: result[3],
      gospel: result[4]
    }))
  );

}

export function parseFirstReading(text: string): Observable<LiturgyOfWordSection<"first_reading">> {
  return EMPTY;
}

export function parseResponsorialPsalm(text: string): Observable<LiturgyOfWordSection<"responsorial_psalm">> {
  return EMPTY;
}

export function parseSecondReading(text: string): Observable<LiturgyOfWordSection<"second_reading">> {
  return EMPTY;
}

export function parseGospelAcclamation(text: string): Observable<LiturgyOfWordSection<"gospel_acclamation">> {
  return EMPTY;
}

export function parseGospel(text: string): Observable<LiturgyOfWordSection<"gospel">> {
  return EMPTY;
}
