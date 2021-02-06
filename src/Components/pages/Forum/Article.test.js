import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Article from './Article';
import ArticleView from './ArticleView';

const article = {
  username: 'John',
  subject: 'Litter kitter kitty litty little kitten big roar',
  body:
    // eslint-disable-next-line max-len
    'I bet my nine lives on you-oooo-ooo-hooo annoy the old grumpy cat, start a fight and then retreat to wash when i lose for prow?? ew dog you drink from the toilet, yum yum warm milk hotter pls, ouch too hot or sit by the fire and plan your travel so chase laser, tuxedo cats always looking dapper.',
  date: '21/11/2019',
  url: ['www.url.com'],
  tags: ['cat, kitty, roar'],
  responses: [
    {
      date: '22/11/2019',
      name: 'Kate',
      message:
        // eslint-disable-next-line max-len
        "Shove bum in owner's face like camera lens stare at ceiling light so snuggles up to shoulders or knees and purrs you to sleep but why dog in house?",
    },
  ],
};

describe('Article data is visible in the article view', () => {
  it('Should render username', () => {
    render(<ArticleView data={article} />);
    const username = screen.getByText(/John/i);
    expect(username).toBeInTheDocument();
  });

  it('Shoud find existing response', () => {
    render(<ArticleView data={article} toggle />);
    const commentedUser = screen.queryAllByText('Kate');
    expect(commentedUser).toHaveLength(1);
  });
});

describe(`Toggle comment textfield with 'write a comment' button`, () => {
  it('Should open toggle box when button is clicked', () => {
    render(<Article data={article} />);
    const openButton = screen.getByText('Write a comment');
    fireEvent.click(openButton);

    const commentBox = screen.getByText('create');
    expect(commentBox).toBeInTheDocument();
  });

  it('Should close toggle box when cancel button is clicked', () => {
    render(<Article data={article} />);
    const openButton = screen.getByText('Write a comment');
    fireEvent.click(openButton);

    const closeButton = screen.getByText('cancel');
    fireEvent.click(closeButton);

    const commentBox = screen.queryAllByText('create');
    expect(commentBox).toHaveLength(0);
  });
});
