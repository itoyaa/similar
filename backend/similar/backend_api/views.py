from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializer import SimilaritySerializer
from .models import Similarity

class SimilarityView(APIView):
    def get(self, request):
        output = [
            {
                'guess': output.guess,
                'similarity': output.similarity,
                'anwser': output.anwser,
                'game_num': output.game_num,
            }
        ]