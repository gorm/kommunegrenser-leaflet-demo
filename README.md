# Demo kommunegrenser 

Demo (liten) på bruk av leaflet mapping API med norske kommunegrenser hentet fra kartsverkets N5000 illustrasjonskart. 

# Filene

## fireinntekter.tsv 

Inneholder datafil med kommunegrenser eksportert fra N5000 illustasjonskart i Shapefile. Pålagt et datafelt over Frie Inntekter som er hentet ut fra regneark

## convert.js 

Konverterer fra tsv til json. Krever node med TSV modulen

## data.js 

Konvertert ved hjelp av convert.js fra tsv til json

## index.html 

Demo med JavaScript kode for å tenge kommunepolygonene på kartet. 

