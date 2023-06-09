import unittest
from unittest.mock import patch
from similarity import Similarity

class TestSimilarity(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.similarity = Similarity(123)  # Set up a Similarity instance for testing

    def test_guess_word_correct_guess(self):
        result = self.similarity.guess_word('apple')
        self.assertEqual(result, 100)

    def test_guess_word_incorrect_guess(self):
        result = self.similarity.guess_word('banana')
        self.assertEqual(result, 0)

    def test_guess_word_invalid_guess(self):
        result = self.similarity.guess_word('invalid')
        self.assertEqual(result, -1)

    @patch('random.randint')
    def test_get_hint(self, mock_randint):
        mock_randint.return_value = 5
        hint = self.similarity.get_hint()
        self.assertEqual(hint, 'hint5')

    def test_get_answer(self):
        answer = self.similarity.get_answer()
        self.assertEqual(answer, 'correct_answer')

if __name__ == '__main__':
    unittest.main()
