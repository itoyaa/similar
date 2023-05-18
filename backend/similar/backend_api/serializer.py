from rest_framework import serializers

from .models import Similarity

class SimilaritySerializer(serializers.ModelSerializer):
    class Meta:
        model = Similarity
        fields = ['guess', 'similarity', 'anwser', 'game_num']