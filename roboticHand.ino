int fingers[5]={A0,A1,A2,A3,A4};
int reads[5]={0};

String request;

void setup() {
  for(int i=0;i<5;i++){
    pinMode(fingers[i],INPUT);
  }
  // put your setup code here, to run once:
  Serial.begin(57600);
  Serial.print("Ingresar mensaje");
  message.toCharArray(charArray,BUF_SIZE);
  P.begin();
  P.displayText(charArray, scrollAlign, scrollSpeed, scrollPause, scrollEffect, scrollEffect);
  
}

void loop() {
  // put your main code here, to run repeatedly:

  for(int i=0;i<5;i++){
    reads[i]= analogRead(fingers[i]);
  }


  if(Serial.available())
  {
      request= Serial.readString();
      delay(200);
      Serial.print(reads[0]);
      Serial.print(" ");
      Serial.print(reads[1]);
      Serial.print(" ");
      Serial.print(reads[2]);
      Serial.print(" ");
      Serial.print(reads[3]);
      Serial.print(" ");
      Serial.print(reads[4]);
      Serial.print("\n");

      message= Serial.readString();

      message.toCharArray(charArray,BUF_SIZE);
      //Displaying new data
  }

  if (P.displayAnimate())
  {
    //Updating text
    P.displayText(charArray, scrollAlign, scrollSpeed, scrollPause, scrollEffect, scrollEffect);
  }
}
