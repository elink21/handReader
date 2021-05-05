from django.shortcuts import render
from django.http import JsonResponse, response

from . import GloveTranslator as Glove


glove = Glove.GloveTranslator("COM5", 57600)


def home(request):
    
    return render(request, 'interface.html')


def requestSample(request):
    
    glove.requestSample()
    sample = glove.readSample()
    sample = [int(s) for s in sample.split(" ")]
    print(sample)
    letter = glove.decodeSample(sample)
    
    
    #Sending to Screen Matrix
    glove.writeToScreen(letter)
    
    #Sending response to client
    return JsonResponse(letter)
