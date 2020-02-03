soft ui general card
========

---

**Example:**\


```yaml
- type: 'custom:soft-ui-general_panel_card'
  background: transparent
  innershadow: enable
  iconemboss: enable
  entities:
    - entity: sensor.salone_temperatura
      name: Soggiorno
      icon: 'mdi:thermometer'
      min: -10
      max: 50
      innershadow: enable
      cardtype: sensor
    - entity: sensor.salone_umidita
      name: Esterno
      icon: 'mdi:water-percent'
      min: 0
      max: 100
      cardtype: sensor
    - entity: light.luce_bagno_piccolo
      name: luce del pc
      icon: 'mdi:lightbulb-outline'
      cardtype: light
      label: led
```

![all](examples/soft_ui_style.png)
soft_ui style


![all](examples/flat_style.png)
flat style
