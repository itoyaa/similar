import pandas as pd

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
