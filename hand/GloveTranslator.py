import serial
import time


class GloveTranslator:

    def __init__(self, port, baudrate) -> None:
        self.glove = serial.Serial(port, baudrate)
        self.reads = []

        self.middleRange = 200
        self.lowRange = 100

        # fingers are represented from pinky to thumb
        self.letters = {
            '11113': 'A',  # ['low', 'low', 'low', 'low', 'high']: 'A',
            '33333': 'B',  # ['high', 'high', 'high', 'high', 'high']: 'B',
            # ['middle', 'middle', 'middle', 'middle', 'middle']: 'C',
            '22222': 'C',
            # ['middle', 'middle', 'middle', 'high', 'middle']: 'D',
            '22232': 'D',
            '11111': 'E',  # ['low', 'low', 'low', 'low', 'low']: 'E',
            '33322': 'F',  # ['high', 'high', 'high', 'middle', 'middle']: 'F',
            '11133': 'G',  # ['low', 'low', 'low', 'high', 'high']: 'G',
            '11332': 'H',  # ['low', 'low', 'high', 'high', 'middle']: 'H',
            '31111': 'I',  # ['high', 'low', 'low', 'low', 'low']: 'I',
            '11333': 'K',  # ['low', 'low', 'high', 'high', 'high']: 'K',
        }

    def mapSignal(self, n):
        return '1' if n < self.lowRange else '2' if n < self.middleRange else '3'

    def close(self):
        self.glove.close()

    def requestSample(self):
        self.glove.write(b"request")
        time.sleep(.1)

    def decodeSample(self, sample: list) -> chr:
        translatedSample = ""
        for s in sample:
            translatedSample += self.mapSignal(s)
        return self.letters[translatedSample]

    def readSample(self):
        return self.glove.readline().decode('UTF-8  ')
