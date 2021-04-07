from django.shortcuts import render
from django.http import JsonResponse

from . import GloveTranslator as Glove

# Create your views here.


glove = Glove.GloveTranslator("COM5", 9600)


def home(request):
    return render(request, 'interface.html')


def requestSample(request):
    glove.requestSample()
    sample = glove.readSample()
    sample = [int(s) for s in sample.split(" ")]
    print(sample)
    letter = glove.decodeSample(sample)

    return JsonResponse({'letter': letter})
