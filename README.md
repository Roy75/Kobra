# 🌀 Kobra - Flip Sensor Card

Welkom bij de **flip-sensor-card** voor Home Assistant! 🏠💡  
Deze custom kaart wisselt automatisch tussen meerdere sensoren, zoals:  
- 🌡️ Binnentemperatuur  
- 🏠 Buitentemperatuur  
- 💧 Luchtvochtigheid
- 💡 Verbruik
- ☀️ Zonnepanelen
- Andere sensoren naar keuze  

De kaart draait in een mooie **flip-animatie**, zodat je meerdere waarden compact op je dashboard kunt tonen. 🌀✨

---

# 📸 Voorbeeld van de kaart

![Flip Sensor Card animatie](flip-animation.gif)  
*Of screenshot: screenshot.png*

# 📝 Beschikbare opties

- `entities` - lijst met sensor entity_id’s 🔢  
- `names` - optionele namen voor elke sensor 🏷️     
- `interval` - tijd in milliseconden tussen flips ⏱️ (standaard 3000)

---

# 🛠️ Installatie

 **Voeg de JS als resource toe in Lovelace:**

resources:
  - url: https://roy75.github.io/Kobra/flip-sensor-card.js
    type: module

---

# 💻 Voorbeeld YAML-configuratie

```yaml
type: custom:flip-sensor-card
entities:
  - sensor.woonkamer_temperatuur_2
  - sensor.buienradar_temperature
names:
  - Binnen
  - Buiten
interval: 3000












