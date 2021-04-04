import serial
import time


class GloveTranslator:

    def __init__(self, port, baudrate) -> None:
        self.glove = serial.Serial(port, baudrate)
        self.reads = []

    def close(self):
        self.glove.close()

    def requestSample(self):
        self.glove.write(b"request")
        time.sleep(.1)

    def readSample(self):
        return self.glove.readline()

