# system24 for spicetify

A port of [refact0r's system24](https://github.com/refact0r/system24) Discord theme to [Spicetify](https://spicetify.app): tui-style square panels separated by gaps, 2px borders that light up on hover, panel labels sitting on the borders, DM Mono, and ascii titles on playlist, album and artist headers.

Built against Spotify 1.3.6 and Spicetify 2.46.4. Spotify 1.3.6 obfuscates most class names and Spicetify doesn't remap them yet, so the theme hooks onto ids and `data-testid` attributes instead.

## Color schemes

- `system24`: the original grey and purple palette
- `bloodmoon`: the BloodMoon colors from the spicetify [text](https://github.com/spicetify/spicetify-themes/tree/master/text) theme

## Install

```bash
git clone https://github.com/OkilSaber/system24-spicetify ~/.config/spicetify/Themes/system24
spicetify config current_theme system24 color_scheme system24
spicetify apply
```

Switch scheme:

```bash
spicetify config color_scheme bloodmoon && spicetify apply
```

## Options

At the top of `user.css`:

- `--gap`, `--border-thickness`: panel spacing and border width
- `--ascii-titles: on | off`: ascii font on headers
- `--oneko: on | off`: the [oneko](https://github.com/adryd325/oneko.js) cat sitting on the progress bar (the marketplace snippet no longer works on Spotify 1.3.6)

The cover-colored backgrounds of the Spicy Lyrics extension are hidden to keep the flat look; remove the `spicy-dynamic-bg` block to get them back.

## Credits

[system24](https://github.com/refact0r/system24) and [midnight](https://github.com/refact0r/midnight-discord) by refact0r, MIT.
