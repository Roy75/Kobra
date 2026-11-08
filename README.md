# Kobra Black

A true black Home Assistant theme with a blue accent, made for AMOLED and OLED screens such as phones, tablets and wall panels.

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://hacs.xyz/docs/faq/custom_repositories)

## Credits

Kobra Black is based on [AMOLED Blue](https://github.com/JuanMTech/amoled_blue) by [JuanMTech](https://github.com/JuanMTech). The original repository was archived in 2023. All credit for the original design and color palette goes to him.

## What's different from AMOLED Blue

- Replaced the obsolete `paper-*` variables with the variables current Home Assistant versions use
- Added `rgb-*` variants, so tile cards, sliders and card features pick up the accent color
- Added `state-*-active-color` variables, so active lights, switches, fans and covers show in blue
- Added a subtle card border, because cards are hard to tell apart from a pure black background
- Added colors for the code editor
- Fixed a typo in `sidebar-selected-text-color`

## Colors

| Role | Color |
| --- | --- |
| Background | `#000000` |
| Secondary background | `#0D0D0D` |
| Accent | `#5F9BEA` |
| Text | `#BDC1C6` |
| Secondary text | `#8E9399` |
| Card border | `#1A1A1A` |

## Installation

### Preparation

Make sure your `configuration.yaml` loads themes from the `themes` folder:

```yaml
frontend:
  themes: !include_dir_merge_named themes
```

Restart Home Assistant after adding this.

### HACS

1. Open HACS and go to the menu (three dots) → **Custom repositories**
2. Add `https://github.com/Roy75/Kobra` and choose **Theme** as the type
3. Search for **Kobra Black** and download it
4. Run the `frontend.reload_themes` action, or restart Home Assistant

### Manual

1. Copy `themes/kobra_black.yaml` to the `themes` folder in your Home Assistant config folder
2. Run the `frontend.reload_themes` action from **Developer tools → Actions**

## Enable the theme

Open your **Profile** in Home Assistant and choose **Kobra Black** under **Theme**.

To use it on a single dashboard view, add it to the view:

```yaml
views:
  - title: Home
    theme: Kobra Black
```
