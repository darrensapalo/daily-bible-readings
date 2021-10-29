export type SectionType = "first_reading"|"responsorial_psalm"|"second_reading"|"gospel_acclamation"|"gospel";

/**
 * A Section represents a portion of the bible.
 */
export interface Section {
  /**
   * Determines whether or not this is first reading, second reading, gospel acclaimation, gospel etc.
   */
  type: SectionType;

  /**
   * Determines the biblical reference; e.g. John 3:16
   */
  reference: string;

  /**
   * The contents of the biblical scripture.
   */
  text: string;
}

/**
 * A LiturgyOfWord is a structure that holds on to a single celebration's scripture.
 */
export interface LiturgyOfWord {
  first_reading: Section[];
  responsorial_psalm: Section[];
  second_reading: Section[];
  gospel_acclamation: Section[];
  gospel: Section[];
}
