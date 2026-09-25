Tu wrzucaj zdjęcia użyte na stronie. Docelowy format to **webp** — pliki wgrywamy już skonwertowane.

Konwencja nazw i parametrów:
- galeria: `galeria-1.webp`, `galeria-2.webp`, ... (numeracja ciągła, dopisujemy kolejne numery),
- hero: `hero.webp` (szerokość 1290 px), portret trenerki: `zofia.webp` (508 x 1100 px),
- galeria: dłuższy bok maks. 1200 px, jakość ok. 82, waga pliku poniżej 300 KB.

Konwersję robi `convert_photos.py` (tryby: `gallery`, `hero`, `portrait`). Każde nowe zdjęcie musi mieć polski `alt`
opisujący scenę, wpis `<img ... loading="lazy" />` w sekcji `#galeria` w `index.html` i przejść podgląd na gałęzi `zm-*`.
Oryginały (jpg) trzymamy poza repozytorium i kasujemy po wdrożeniu zmiany na `main`.
