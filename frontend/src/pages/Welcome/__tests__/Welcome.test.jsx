import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Welcome } from '../Welcome';

describe('Welcome component', () => {
  test('renders header and description', () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );

    const header = screen.getByText('Similar');
    const description = screen.getByText(
      'Привет! В этой игре тебе нужно угадать слово, которое загадал компьютер.'
    );

    expect(header).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test('toggles select game section', () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );

    const toggleButton = screen.getByText('Выбрать игру');
    expect(screen.queryByText('Спрятать')).not.toBeInTheDocument();

    fireEvent.click(toggleButton);

    expect(screen.getByText('Спрятать')).toBeInTheDocument();
  });

  test('navigates to the game', () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );

    const startButton = screen.getByText('Начать!');
    fireEvent.click(startButton);

  });
});
