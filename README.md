# locelace config example

```yaml
- type: 'custom:soft-ui-sensor-card-small'
    background: transparent
    innershadow: enable
    iconemboss: enable
    entities:
    - entity: sensor.salone_temperatura
        name: Soggiorno
        icon: 'mdi:thermometer'
        innershadow: enable
    - entity: sensor.salone_umidita
        name: Esterno
        icon: 'mdi:thermometer'
        
        
```
![all](examples/UNADJUSTEDNONRAW_mini_14.jpg)

## Install

### Manual install

1. Download and copy `soft_ui_sensor_card_small.js` from (https://https://github.com/madmicio/soft_ui) into your `config/www` directory.

2. Add a reference to `soft_ui_sensor_card_small.js` inside your `ui-lovelace.yaml` or at the top of the *raw config editor UI*:

  ```yaml
  resources:
    - url: /local/soft_ui_sensor_card_small.js
      type: module
  ```

### Main Options
| Name | Type | Default | Supported options | Description |
| -------------- | ----------- | ------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` | string | **Required** | `custom:soft_ui_sensor_card_small` | Type of the card |
| `entities` | string | optional | entity | list of entitity |
| `innershadow` | object list | optional | enable/disable | enable - disable innershadow in the card |
| `iconemboss` | object | optional | enable/disable | enable - disable icon emboss effect |

### entity Options
| Name | Type | Default | Supported options | Description |
| -------------- | ----------- | ------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entity` | string | **Required** | `custom:soft_ui_sensor_card_small` | Type of the card |
| `entities` | string | optional | `sensor.ac` | entity_id |
| `name` | string | optional | `External temperature` | Define the name of the sensor |
| `icon` | string | optional | `mdi:themometer` | Icon to display. Will be overriden by the icon defined in a state |
