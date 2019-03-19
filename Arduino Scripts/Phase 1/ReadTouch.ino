/**
 * Read Signals from touch sensor and display it to serial monitor
 * @author MadhavBahlMD
 * @date 19/03/2019
 */

const int touchSensor = 9;
boolean currentState = LOW;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(touchSensor, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  currentState = digitalRead(touchSensor);
  Serial.print("\nCurrent State: ");
  Serial.print(currentState);
  delay (500);
}