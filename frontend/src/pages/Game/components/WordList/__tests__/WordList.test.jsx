import React from 'react';
import { render, screen } from '@testing-library/react';
import { WordList } from '../WordList';

describe('WordList component', () => {
  test('renders a list of words', () => {
    const wordList = [
      { word: 'apple', similarity: 80 },
      { word: 'banana', similarity: 70 },
      { word: 'cherry', similarity: 90 },
    ];

    render(<WordList wordList={wordList} />);

    const words = screen.getAllByTestId('word-item');
    expect(words).toHaveLength(3);

    expect(words[0]).toHaveTextContent('apple');
    expect(words[0]).toHaveTextContent('80%');

    expect(words[1]).toHaveTextContent('banana');
    expect(words[1]).toHaveTextContent('70%');

    expect(words[2]).toHaveTextContent('cherry');
    expect(words[2]).toHaveTextContent('90%');
  });
});
