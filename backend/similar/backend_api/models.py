from django.db import models
# from django.contrib.postgres.fields import ArrayField

# есть фиксированное количество предобученных игр
# каждой игре соотвествует таблица, созданная по модели Similarity


class Similarity(models.Model):
    # слово, которое потенциально может ввести пользователь
    guess = models.CharField(max_length=40)
    # число, характеризующее, насколько введденное слово похоже на загаданное
    similarity = models.IntegerField()
    # загаданное слово
    anwser = models.CharField(max_length=40)
    # номер (идентификатор игры)
    game_num = models.IntegerField()


# чтобы при обновлении ничего не терялось,
# будет хранить в БД сессии пользователей
class Game(models.Model):
    # номер игры, в которую играл пользователь
    game_num = models.IntegerField(blank=True)
    # загаданное слово
    anwser = models.CharField(max_length=40, blank=True)
    # токен игры
    token = models.CharField(max_length=50, default=None)
    # стейт игры
    # state = ArrayField(ArrayField(models.CharField(max_length=40)))
    # время начала сессии
    time_create = models.DateTimeField(auto_now_add=True)
