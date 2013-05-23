# Demo kommunegrenser 

Demo (liten) på bruk av leaflet mapping API med norske kommunegrenser hentet fra kartverkets N5000 illustrasjonskart http://www.statkart.no/Kart/Kartdata/Vektorkart/N5000/

# Filene

## fireinntekter.tsv 

Inneholder datafil med kommunegrenser eksportert fra N5000 illustasjonskart i Shapefile. Lagt til en kolonne med frie inntekter. 

## convert.js 

Konverterer fra tsv til json. Krever node med TSV modulen installert

## data.js 

Konvertert ved hjelp av convert.js fra TSV til JSON.

## index.html 

Demo med JavaScript kode for å tenge kommunepolygonene på kartet.

