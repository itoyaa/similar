from django.shortcuts import render
from django.http import HttpResponse
from django.conf.urls import include

#  Обработчик главной страницы
def index(request): # В request вся доступная информация нашего запроса
    return HttpResponse("Страница приложения game")

def gameRules(request, rules_id):
    return HttpResponse(("Правила игры " + str(rules_id)))