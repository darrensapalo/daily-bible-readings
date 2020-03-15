export interface LiturgyOfWordSection<E extends "first_reading"|"responsorial_psalm"|"second_reading"|"gospel_acclamation"|"gospel"> {
  type: E;
  reference: string;
  text: string;
}

export interface LiturgyOfWord {
  first_reading: LiturgyOfWordSection<"first_reading">[];
  responsorial_psalm: LiturgyOfWordSection<"responsorial_psalm">[];
  second_reading: LiturgyOfWordSection<"second_reading">[];
  gospel_acclamation: LiturgyOfWordSection<"gospel_acclamation">[];
  gospel: LiturgyOfWordSection<"gospel">[];
}
