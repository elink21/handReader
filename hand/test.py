from . import GloveTranslator as Glove



arduino = Glove.GloveTranslator("COM5", 9600)

print(arduino.requestSample())


arduino.close()
