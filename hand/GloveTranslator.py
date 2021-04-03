import serial


class GloveTranslator:

    def __init__(self, port, baudrate) -> None:
        self.glove = serial.Serial(port, baudrate)
        self.reads = []
