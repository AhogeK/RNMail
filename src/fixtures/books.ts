import { Book } from "@/models";
import { LoremIpsum } from "lorem-ipsum";
import shortid from "shortid";

const Books: Array<Book> = [];

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const capitalizeFirstLetter = ([first, ...rest]: string) => first.toLowerCase() + rest.join("");

for (let i = 0; i < 100; ++i) {
  Books.push({
    id: shortid.generate(),
    name: capitalizeFirstLetter(
      lorem.generateSentences(Math.round(Math.random() * 4)),
    ),
  });
}

export default Books;
