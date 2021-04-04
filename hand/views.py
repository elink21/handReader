from django.shortcuts import render
from django.http import JsonResponse

from . import GloveTranslator as Glove

# Create your views here.


glove = Glove.GloveTranslator("COM5", 9600)


def home(request):
    return render(request, 'interface.html')


def requestSample(request):
    glove.requestSample()
    letter = glove.readSample()
    print(letter)
    return JsonResponse({'letter':letter.decode("utf-8")[0]})
