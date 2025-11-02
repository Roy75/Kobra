# 🌀 Kobra - Flip Sensor Card

Welkom bij de **flip-sensor-card** voor Home Assistant! 🏠💡  
Deze custom kaart wisselt automatisch tussen meerdere sensoren, zoals:  
- 🌡️ Binnentemperatuur  
- 🏠 Buitentemperatuur  
- 💧 Luchtvochtigheid
- 💡 Verbruik
- ☀️ Zonnepanelen
- 💻 Processor
- 💽 Geheugen
- Andere sensoren naar keuze  

De kaart draait in een mooie **flip-animatie**, zodat je meerdere waarden compact op je dashboard kunt tonen. 🌀✨

---

# 📸 Voorbeeld van de kaart

![Flip Sensor Card animatie](flip-animation.gif)  

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

Ga naar Instellingem - Dashboards, klik op de 3 puntjes rechtsboven, dan op "Bronnen", "+ Hulpbron Toevoegen".

---

# 💻 Voorbeeld YAML-configuratie

```yaml
type: custom:flip-sensor-card
entities:
  - sensor.temperatuur_serverkast_temperature
  - sensor.patchkast_electric_consumption_w_3
  - sensor.ups_power
names:
  - Temperatuur Patchkast
  - Vermogen Patchkast
  - Vermogen UPS
interval: 3000





type: custom:flip-sensor-card
entities:
  - sensor.woonkamer_temperatuur
  - sensor.buienradar_temperature
names:
  - Binnentemperatuur
  - Buitentemperatuur
interval: 3000












