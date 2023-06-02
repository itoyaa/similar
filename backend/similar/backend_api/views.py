from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializer import SimilaritySerializer
from .similarity import Similarity


class SimilarityView(APIView):
    def get(self, request):
        game_num = request.GET.get('gameNum')
        guess = request.GET.get('guess')
        similarity = Similarity(int(game_num))
        return Response([{
            'similarity': similarity.guess_word(guess)
        }])
