import {
  parseFirstReading, parseGospel, parseGospelAcclamation,
  parseResponsorialPsalm,
  parseSecondReading
} from "../../src/parse";
import {toArray} from "rxjs/operators";

describe("parseFirstReading", () => {

  const sampleText = ` Third Sunday of Lent
Lectionary: 28
Reading 1 Ex 17:3-7In those days, in their thirst for water,
the people grumbled against Moses,
saying, “Why did you ever make us leave Egypt?
Was it just to have us die here of thirst
with our children and our livestock?”
So Moses cried out to the LORD,
“What shall I do with this people?
a little more and they will stone me!”
The LORD answered Moses,
“Go over there in front of the people,
along with some of the elders of Israel,
holding in your hand, as you go,
the staff with which you struck the river.
I will be standing there in front of you on the rock in Horeb.
Strike the rock, and the water will flow from it
for the people to drink.”
This Moses did, in the presence of the elders of Israel.
The place was called Massah and Meribah,
because the Israelites quarreled there
and tested the LORD, saying,
“Is the LORD in our midst or not?”
Responsorial Psalm Ps 95:1-2, 6-7, 8-9.R. (8)  If today you hear his voice, harden not your hearts.
Come, let us sing joyfully to the LORD;
let us acclaim the Rock of our salvation.
Let us come into his presence with thanksgiving;
let us joyfully sing psalms to him.
R. If today you hear his voice, harden not your hearts.
Come, let us bow down in worship;
let us kneel before the LORD who made us.
For he is our God,
and we are the people he shepherds, the flock he guides.
R. If today you hear his voice, harden not your hearts.
Oh, that today you would hear his voice:
“Harden not your hearts as at Meribah,
    as in the day of Massah in the desert,
Where your fathers tempted me;
    they tested me though they had seen my works.”
R. If today you hear his voice, harden not your hearts.
Reading 2 Rom 5:1-2, 5-8Brothers and sisters:
Since we have been justified by faith,
we have peace with God through our Lord Jesus Christ,
through whom we have gained access by faith
to this grace in which we stand,
and we boast in hope of the glory of God.
And hope does not disappoint,
because the love of God has been poured out into our hearts
through the Holy Spirit who has been given to us.
For Christ, while we were still helpless,
died at the appointed time for the ungodly.
Indeed, only with difficulty does one die for a just person,
though perhaps for a good person one might even find courage to die.
But God proves his love for us
in that while we were still sinners Christ died for us.Verse Before the GospelJn 4:42, 15Lord, you are truly the Savior of the world;
give me living water, that I may never thirst again.
Gospel Jn 4:5-42Jesus came to a town of Samaria called Sychar,
near the plot of land that Jacob had given to his son Joseph.
Jacob’s well was there.
Jesus, tired from his journey, sat down there at the well.
It was about noon.
A woman of Samaria came to draw water.
Jesus said to her,
“Give me a drink.”
His disciples had gone into the town to buy food.
The Samaritan woman said to him,
“How can you, a Jew, ask me, a Samaritan woman, for a drink?”
—For Jews use nothing in common with Samaritans.—
Jesus answered and said to her,
“If you knew the gift of God
and who is saying to you, ‘Give me a drink, ‘
you would have asked him
and he would have given you living water.”
The woman said to him,
“Sir, you do not even have a bucket and the cistern is deep;
where then can you get this living water?
Are you greater than our father Jacob,
who gave us this cistern and drank from it himself
with his children and his flocks?”
Jesus answered and said to her,
“Everyone who drinks this water will be thirsty again;
but whoever drinks the water I shall give will never thirst;
the water I shall give will become in him
a spring of water welling up to eternal life.”
The woman said to him,
“Sir, give me this water, so that I may not be thirsty
or have to keep coming here to draw water.”
Jesus said to her,
“Go call your husband and come back.”
The woman answered and said to him,
“I do not have a husband.”
Jesus answered her,
“You are right in saying, ‘I do not have a husband.’
For you have had five husbands,
and the one you have now is not your husband.
What you have said is true.”
The woman said to him,
“Sir, I can see that you are a prophet.
Our ancestors worshiped on this mountain;
but you people say that the place to worship is in Jerusalem.”
Jesus said to her,
“Believe me, woman, the hour is coming
when you will worship the Father
neither on this mountain nor in Jerusalem.
You people worship what you do not understand;
we worship what we understand,
because salvation is from the Jews.
But the hour is coming, and is now here,
when true worshipers will worship the Father in Spirit and truth;
and indeed the Father seeks such people to worship him.
God is Spirit, and those who worship him
must worship in Spirit and truth.”
The woman said to him,
“I know that the Messiah is coming, the one called the Christ;
when he comes, he will tell us everything.”
Jesus said to her,
“I am he, the one speaking with you.”
At that moment his disciples returned,
and were amazed that he was talking with a woman,
but still no one said, “What are you looking for?”
or “Why are you talking with her?”
The woman left her water jar
and went into the town and said to the people,
“Come see a man who told me everything I have done.
Could he possibly be the Christ?”
They went out of the town and came to him.
Meanwhile, the disciples urged him, “Rabbi, eat.”
But he said to them,
“I have food to eat of which you do not know.”
So the disciples said to one another,
“Could someone have brought him something to eat?”
Jesus said to them,
“My food is to do the will of the one who sent me
and to finish his work.
Do you not say, ‘In four months the harvest will be here’?
I tell you, look up and see the fields ripe for the harvest.
The reaper is already receiving payment
and gathering crops for eternal life,
so that the sower and reaper can rejoice together.
For here the saying is verified that ‘One sows and another reaps.’
I sent you to reap what you have not worked for;
others have done the work,
and you are sharing the fruits of their work.”
Many of the Samaritans of that town began to believe in him
because of the word of the woman who testified,
���He told me everything I have done.”
When the Samaritans came to him,
they invited him to stay with them;
and he stayed there two days.
Many more began to believe in him because of his word,
and they said to the woman,
“We no longer believe because of your word;
for we have heard for ourselves,
and we know that this is truly the savior of the world.”
or
Jn 4:5-15, 19b-26, 39a, 40-42
Jesus came to a town of Samaria called Sychar,
near the plot of land that Jacob had given to his son Joseph.
Jacob’s well was there.
Jesus, tired from his journey, sat down there at the well.
It was about noon.
A woman of Samaria came to draw water.
Jesus said to her,
“Give me a drink.”
His disciples had gone into the town to buy food.
The Samaritan woman said to him,
“How can you, a Jew, ask me, a Samaritan woman, for a drink?”
—For Jews use nothing in common with Samaritans.—
Jesus answered and said to her,
“If you knew the gift of God
and who is saying to you, ‘Give me a drink, ‘
you would have asked him
and he would have given you living water.”
The woman said to him,
“Sir, you do not even have a bucket and the cistern is deep;
where then can you get this living water?
Are you greater than our father Jacob,
who gave us this cistern and drank from it himself
with his children and his flocks?”
Jesus answered and said to her,
“Everyone who drinks this water will be thirsty again;
but whoever drinks the water I shall give will never thirst;
the water I shall give will become in him
a spring of water welling up to eternal life.”
The woman said to him,
“Sir, give me this water, so that I may not be thirsty
or have to keep coming here to draw water.
“I can see that you are a prophet.
Our ancestors worshiped on this mountain;
but you people say that the place to worship is in Jerusalem.”
Jesus said to her,
“Believe me, woman, the hour is coming
when you will worship the Father
neither on this mountain nor in Jerusalem.
You people worship what you do not understand;
we worship what we understand,
because salvation is from the Jews.
But the hour is coming, and is now here,
when true worshipers will worship the Father in Spirit and truth;
and indeed the Father seeks such people to worship him.
God is Spirit, and those who worship him
must worship in Spirit and truth.”
The woman said to him,
“I know that the Messiah is coming, the one called the Christ;
when he comes, he will tell us everything.”
Jesus said to her,
“I am he, the one who is speaking with you.”
Many of the Samaritans of that town began to believe in him.
When the Samaritans came to him,
they invited him to stay with them;
and he stayed there two days.
Many more began to believe in him because of his word,
and they said to the woman,
“We no longer believe because of your word;
for we have heard for ourselves,
and we know that this is truly the savior of the world.”
`;

  it("should get only the first reading", (done) => {
    parseFirstReading(sampleText).subscribe(value => {
      expect(value.type).toBe("first_reading");
      expect(value.reference).toBe("Ex 17:3-7");
      expect(value.text).toBe("In those days, in their thirst for water,\nthe people grumbled against Moses,\nsaying, “Why did you ever make us leave Egypt?\nWas it just to have us die here of thirst\nwith our children and our livestock?”\nSo Moses cried out to the LORD,\n“What shall I do with this people?\na little more and they will stone me!”\nThe LORD answered Moses,\n“Go over there in front of the people,\nalong with some of the elders of Israel,\nholding in your hand, as you go,\nthe staff with which you struck the river.\nI will be standing there in front of you on the rock in Horeb.\nStrike the rock, and the water will flow from it\nfor the people to drink.”\nThis Moses did, in the presence of the elders of Israel.\nThe place was called Massah and Meribah,\nbecause the Israelites quarreled there\nand tested the LORD, saying,\n“Is the LORD in our midst or not?”");
      done();
    });
  });

  it("should get only the responsorial psalm", (done) => {
    parseResponsorialPsalm(sampleText).subscribe(value => {
      expect(value.type).toBe("responsorial_psalm");
      expect(value.reference).toBe("Ps 95:1-2, 6-7, 8-9.");
      expect(value.text).toBe(`R. (8)  If today you hear his voice, harden not your hearts.
Come, let us sing joyfully to the LORD;
let us acclaim the Rock of our salvation.
Let us come into his presence with thanksgiving;
let us joyfully sing psalms to him.
R. If today you hear his voice, harden not your hearts.
Come, let us bow down in worship;
let us kneel before the LORD who made us.
For he is our God,
and we are the people he shepherds, the flock he guides.
R. If today you hear his voice, harden not your hearts.
Oh, that today you would hear his voice:
“Harden not your hearts as at Meribah,
    as in the day of Massah in the desert,
Where your fathers tempted me;
    they tested me though they had seen my works.”
R. If today you hear his voice, harden not your hearts.`);
      done();
    });
  });

  it("should get only the second reading", (done) => {
    parseSecondReading(sampleText).subscribe(value => {
      expect(value.type).toBe("second_reading");
      expect(value.reference).toBe("Rom 5:1-2, 5-8");
      expect(value.text).toBe(`Brothers and sisters:
Since we have been justified by faith,
we have peace with God through our Lord Jesus Christ,
through whom we have gained access by faith
to this grace in which we stand,
and we boast in hope of the glory of God.
And hope does not disappoint,
because the love of God has been poured out into our hearts
through the Holy Spirit who has been given to us.
For Christ, while we were still helpless,
died at the appointed time for the ungodly.
Indeed, only with difficulty does one die for a just person,
though perhaps for a good person one might even find courage to die.
But God proves his love for us
in that while we were still sinners Christ died for us.`);
      done();
    });
  });

  it("should get only the gospel acclamation, or the verse before the bible", (done) => {
    parseGospelAcclamation(sampleText).subscribe(value => {
      expect(value.type).toBe("gospel_acclamation");
      expect(value.reference).toBe("Jn 4:42, 15");
      expect(value.text).toBe(`Lord, you are truly the Savior of the world;
give me living water, that I may never thirst again.`);
      done();
    });
  });

  it("should get two gospel versions", (done) => {
    parseGospel(sampleText)
      .pipe(toArray())
      .subscribe(value => {
        expect(value.length).toBe(2);

        const first = value[0];
        const second = value[1];

        expect(first.type).toBe("gospel");
        expect(first.reference).toBe("Jn 4:5-42");
        expect(first.text).toBe(`Jesus came to a town of Samaria called Sychar,
near the plot of land that Jacob had given to his son Joseph.
Jacob’s well was there.
Jesus, tired from his journey, sat down there at the well.
It was about noon.
A woman of Samaria came to draw water.
Jesus said to her,
“Give me a drink.”
His disciples had gone into the town to buy food.
The Samaritan woman said to him,
“How can you, a Jew, ask me, a Samaritan woman, for a drink?”
—For Jews use nothing in common with Samaritans.—
Jesus answered and said to her,
“If you knew the gift of God
and who is saying to you, ‘Give me a drink, ‘
you would have asked him
and he would have given you living water.”
The woman said to him,
“Sir, you do not even have a bucket and the cistern is deep;
where then can you get this living water?
Are you greater than our father Jacob,
who gave us this cistern and drank from it himself
with his children and his flocks?”
Jesus answered and said to her,
“Everyone who drinks this water will be thirsty again;
but whoever drinks the water I shall give will never thirst;
the water I shall give will become in him
a spring of water welling up to eternal life.”
The woman said to him,
“Sir, give me this water, so that I may not be thirsty
or have to keep coming here to draw water.”
Jesus said to her,
“Go call your husband and come back.”
The woman answered and said to him,
“I do not have a husband.”
Jesus answered her,
“You are right in saying, ‘I do not have a husband.’
For you have had five husbands,
and the one you have now is not your husband.
What you have said is true.”
The woman said to him,
“Sir, I can see that you are a prophet.
Our ancestors worshiped on this mountain;
but you people say that the place to worship is in Jerusalem.”
Jesus said to her,
“Believe me, woman, the hour is coming
when you will worship the Father
neither on this mountain nor in Jerusalem.
You people worship what you do not understand;
we worship what we understand,
because salvation is from the Jews.
But the hour is coming, and is now here,
when true worshipers will worship the Father in Spirit and truth;
and indeed the Father seeks such people to worship him.
God is Spirit, and those who worship him
must worship in Spirit and truth.”
The woman said to him,
“I know that the Messiah is coming, the one called the Christ;
when he comes, he will tell us everything.”
Jesus said to her,
“I am he, the one speaking with you.”
At that moment his disciples returned,
and were amazed that he was talking with a woman,
but still no one said, “What are you looking for?”
or “Why are you talking with her?”
The woman left her water jar
and went into the town and said to the people,
“Come see a man who told me everything I have done.
Could he possibly be the Christ?”
They went out of the town and came to him.
Meanwhile, the disciples urged him, “Rabbi, eat.”
But he said to them,
“I have food to eat of which you do not know.”
So the disciples said to one another,
“Could someone have brought him something to eat?”
Jesus said to them,
“My food is to do the will of the one who sent me
and to finish his work.
Do you not say, ‘In four months the harvest will be here’?
I tell you, look up and see the fields ripe for the harvest.
The reaper is already receiving payment
and gathering crops for eternal life,
so that the sower and reaper can rejoice together.
For here the saying is verified that ‘One sows and another reaps.’
I sent you to reap what you have not worked for;
others have done the work,
and you are sharing the fruits of their work.”
Many of the Samaritans of that town began to believe in him
because of the word of the woman who testified,
���He told me everything I have done.”
When the Samaritans came to him,
they invited him to stay with them;
and he stayed there two days.
Many more began to believe in him because of his word,
and they said to the woman,
“We no longer believe because of your word;
for we have heard for ourselves,
and we know that this is truly the savior of the world.”`);


      expect(second.type).toBe("gospel");
      expect(second.reference).toBe("Jn 4:5-15, 19b-26, 39a, 40-42");
      expect(second.text).toBe(`Jesus came to a town of Samaria called Sychar,
near the plot of land that Jacob had given to his son Joseph.
Jacob’s well was there.
Jesus, tired from his journey, sat down there at the well.
It was about noon.
A woman of Samaria came to draw water.
Jesus said to her,
“Give me a drink.”
His disciples had gone into the town to buy food.
The Samaritan woman said to him,
“How can you, a Jew, ask me, a Samaritan woman, for a drink?”
—For Jews use nothing in common with Samaritans.—
Jesus answered and said to her,
“If you knew the gift of God
and who is saying to you, ‘Give me a drink, ‘
you would have asked him
and he would have given you living water.”
The woman said to him,
“Sir, you do not even have a bucket and the cistern is deep;
where then can you get this living water?
Are you greater than our father Jacob,
who gave us this cistern and drank from it himself
with his children and his flocks?”
Jesus answered and said to her,
“Everyone who drinks this water will be thirsty again;
but whoever drinks the water I shall give will never thirst;
the water I shall give will become in him
a spring of water welling up to eternal life.”
The woman said to him,
“Sir, give me this water, so that I may not be thirsty
or have to keep coming here to draw water.
“I can see that you are a prophet.
Our ancestors worshiped on this mountain;
but you people say that the place to worship is in Jerusalem.”
Jesus said to her,
“Believe me, woman, the hour is coming
when you will worship the Father
neither on this mountain nor in Jerusalem.
You people worship what you do not understand;
we worship what we understand,
because salvation is from the Jews.
But the hour is coming, and is now here,
when true worshipers will worship the Father in Spirit and truth;
and indeed the Father seeks such people to worship him.
God is Spirit, and those who worship him
must worship in Spirit and truth.”
The woman said to him,
“I know that the Messiah is coming, the one called the Christ;
when he comes, he will tell us everything.”
Jesus said to her,
“I am he, the one who is speaking with you.”
Many of the Samaritans of that town began to believe in him.
When the Samaritans came to him,
they invited him to stay with them;
and he stayed there two days.
Many more began to believe in him because of his word,
and they said to the woman,
“We no longer believe because of your word;
for we have heard for ourselves,
and we know that this is truly the savior of the world.”`);
      done();
    });
  });

});
