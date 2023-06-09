import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Game } from '../Game';

describe('Game component', () => {
  test('renders header', () => {
    render(<Game />);
    const header = screen.getByText('Similar');
    expect(header).toBeInTheDocument();
  });

  test('adds new word to the word list', () => {
    render(<Game />);
    const input = screen.getByPlaceholderText('Enter a word');
    const addBtn = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(addBtn);

    const wordItem = screen.getByText('test');
    expect(wordItem).toBeInTheDocument();
  });

  test('displays victory message and resets the game', () => {
    render(<Game />);
    const input = screen.getByPlaceholderText('Enter a word');
    const addBtn = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'answer' } });
    fireEvent.click(addBtn);

    const victoryMessage = screen.getByText('Congratulations!');
    expect(victoryMessage).toBeInTheDocument();

    const restartBtn = screen.getByText('Restart');
    fireEvent.click(restartBtn);

    const inputAfterReset = screen.getByPlaceholderText('Enter a word');
    expect(inputAfterReset).toBeInTheDocument();
  });
});
