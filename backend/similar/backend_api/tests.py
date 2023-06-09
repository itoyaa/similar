from django.test import TestCase
from rest_framework.test import APIRequestFactory

from .views import SimilarityView, HintView, AnswerView


class SimilarityViewTest(TestCase):
    def setUp(self):
        self.factory = APIRequestFactory()
        self.view = SimilarityView.as_view()

    def test_similarity_view(self):
        request = self.factory.get('/similarity/', {'gameNum': '123', 'guess': 'example'})
        response = self.view(request)
        self.assertEqual(response.status_code, 200)
        self.assertIn('similarity', response.data[0])


class HintViewTest(TestCase):
    def setUp(self):
        self.factory = APIRequestFactory()
        self.view = HintView.as_view()

    def test_hint_view(self):
        request = self.factory.get('/hint/', {'gameNum': '123'})
        response = self.view(request)
        self.assertEqual(response.status_code, 200)
        self.assertIn('hint', response.data[0])


class AnswerViewTest(TestCase):
    def setUp(self):
        self.factory = APIRequestFactory()
        self.view = AnswerView.as_view()

    def test_answer_view(self):
        request = self.factory.get('/answer/', {'gameNum': '123'})
        response = self.view(request)
        self.assertEqual(response.status_code, 200)
        self.assertIn('answer', response.data[0])
