# Psim Sposobem 🐾

Strona-wizytówka trenerki psów **Zofii Krzemińskiej**.

- **Domena docelowa:** [psimsposobem.pl](https://psimsposobem.pl)
- **Hosting:** GitHub Pages
-
- **Socjale:** Instagram / TikTok / Facebook — `psimsposobem`

## Status

Prototyp (statyczny HTML/CSS/JS). Do uzupełnienia później:
- [ ] Zdjęcia (folder `assets/`)
- [ ] Szczegółowa oferta i cennik
- [ ] E-mail i telefon kontaktowy
- [ ] Linki do realnych profili w social media
- [ ] Mapa dojazdu

## Uruchomienie lokalne

```bash
python -m http.server 8000
```

Następnie otwórz http://localhost:8000

## Struktura

```
index.html      # cała treść strony
css/style.css   # style
js/main.js      # menu mobilne + drobiazgi
assets/         # zdjęcia (do dodania)
CNAME           # domena dla GitHub Pages
```

## Publikacja na GitHub Pages (gdy będziesz gotów)

1. Utwórz repo i wypchnij pliki.
2. Settings → Pages → Source: `main` / root.
3. W ustawieniach DNS domeny dodaj rekordy A na GitHub Pages oraz rekord CNAME `www`.
