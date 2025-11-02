# 🌀 Kobra - Flip Sensor Card

Welkom bij de **flip-sensor-card** voor Home Assistant! 🏠💡  
Deze custom kaart wisselt automatisch tussen meerdere sensoren, zoals:  
- 🌡️ Binnentemperatuur  
- ☀️ Buitentemperatuur  
- 💧 Luchtvochtigheid  
- Andere sensoren naar keuze  

De kaart draait in een mooie **flip-animatie**, zodat je meerdere waarden compact op je dashboard kunt tonen. 🌀✨

---

## 📸 Voorbeeld

![Flip Sensor Card animatie](flip-animation.gif)  
*Of screenshot: screenshot.png*

type: custom:flip-sensor-card
entities:
  - sensor.woonkamer_temperatuur_2
  - sensor.buienradar_temperature
names:
  - Binnen
  - Buiten
interval: 3000
show_icons: true
icons:
  - mdi:home-thermometer
  - mdi:weather-sunny
icon_size: 2em

---

## 💻 Installatie

1. Voeg de JS als resource toe in Lovelace:

```yaml
resources:
  - url: https://roy75.github.io/Kobra/flip-sensor-card.js
    type: module






