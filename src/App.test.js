import { render, screen } from "@testing-library/react";
import ArticleView from "./Components/Forum/ArticleView";

const article = {
  username: "John",
  subject: "Litter kitter kitty litty little kitten big roar",
  body:
    "I bet my nine lives on you-oooo-ooo-hooo annoy the old grumpy cat, start a fight and then retreat to wash when i lose for prow?? ew dog you drink from the toilet, yum yum warm milk hotter pls, ouch too hot or sit by the fire and plan your travel so chase laser, tuxedo cats always looking dapper.",
  date: "21/11/2019",
  url: ["www.url.com"],
  tags: ["cat, kitty, roar"],
  responses: [
    {
      date: "22/11/2019",
      name: "Kate",
      message:
        "Shove bum in owner's face like camera lens stare at ceiling light so snuggles up to shoulders or knees and purrs you to sleep but why dog in house?",
    },
  ],
};

test("renders learn react link", () => {
  render(<ArticleView data={article} />);
  const linkElement = screen.getByText(/John/i);
  expect(linkElement).toBeInTheDocument();
});
