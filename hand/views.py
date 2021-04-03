from django.shortcuts import render
from . import GloveTranslator as Glove
# Create your views here.


glove = Glove.GloveTranslator("COM1", 9600)


def home(request):
    return render(request, 'interface.html')
