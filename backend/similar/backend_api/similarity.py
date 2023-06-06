import pandas as pd
import random

ANSWER = pd.read_csv(
    '/Users/itoya/Downloads/words_for_for_masha.csv', index_col='Unnamed: 0')
POSSIBLE_WORDS = set(ANSWER.index)


class Similarity:
    def __init__(self, game_num: int):
        assert isinstance(game_num, int)
        game_num = game_num % 1000
        self.answer = ANSWER.columns[game_num]

    def guess_word(self, guess: str):
        guess = guess.lower().strip()
        if guess not in POSSIBLE_WORDS:
            return -1
        if guess == self.answer:
            return 100
        return ANSWER.loc[guess, self.answer]

    def get_hint(self):
        top30 = ANSWER[self.answer].sort_values().iloc[-32:-1]
        random_hint_number = random.randint(1, 30)
        return top30.index[random_hint_number]

    def get_answer(self):
        return self.answer
