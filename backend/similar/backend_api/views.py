from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializer import SimilaritySerializer
from .similarity import Similarity


class SimilarityView(APIView):
    def get(self, request):
        game_num = request.GET.get('gameNum')
        guess = request.GET.get('guess')
        game = Similarity(int(game_num))
        return Response([{
            'similarity': game.guess_word(guess)
        }])


class HintView(APIView):
    def get(self, request):
        game_num = request.GET.get('gameNum')
        game = Similarity(int(game_num))
        return Response([{
            'hint': game.get_hint()
        }])


class AnswerView(APIView):
    def get(self, request):
        game_num = request.GET.get('gameNum')
        game = Similarity(int(game_num))
        return Response([{
            'answer': game.get_answer()
        }])
