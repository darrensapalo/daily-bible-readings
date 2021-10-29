import cheerio from "cheerio";
import { Observable } from "rxjs";
import { Section, SectionType } from "./domain";

/**
 * 
 * @param html The source contents of a page
 * @returns An observable that emits scripture sections
 */
export function getScriptures(html: string): Observable<Section> {
  return new Observable((subscriber) => {
    const $ = cheerio.load(html, {});

    let sections = $(".b-verse .innerblock");

    console.log("Found sections", sections.length);

    let sectionIndex = 0;

    while (sectionIndex < sections.length) {
      const section = sections[sectionIndex++];

      console.log("currently at section index", sectionIndex);

      let paragraphs = $(section).find(".content-body p");

      if (paragraphs == null) {
        throw new Error("Failed to find paragraphs on the page");
      }

      let paragraphIndex = 0;

      let stringBuilder = "";

      const result: Section = {
        type: determineSection(section),
        text: "",
        reference: "",
      };

      while (paragraphIndex < paragraphs.length) {
        const paragraph = paragraphs[paragraphIndex++];

        const htmlFiltered = $(paragraph).html();

        if (htmlFiltered == null) {
          throw new Error("Failed to find paragraphs on the verse");
        }

        const processed = htmlFiltered.replace(/<br>/gi, " ");
        const sub$ = cheerio.load(processed, {});
        stringBuilder += sub$.text();
      }

      result.text = stringBuilder;
      subscriber.next(result);
    }

    subscriber.complete();
  });
}

export function determineSection(element: any): SectionType {
  return "gospel";
}