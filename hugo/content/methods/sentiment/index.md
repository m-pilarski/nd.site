---
title: Sentimentanalyse
subtitle: Automatisierte Erkennung von Stimmungen in Texten
figtitle: 🌡️
date: '2024-11-25T14:25:49+01:00'
toc_show: true
draft: true
---


## Was ist Sentimentanalyse?

Die Sentimentanalyse, auch bekannt als Stimmungsanalyse oder Opinion Mining, ist eine Methode zur automatisierten Erkennung und Bewertung der Emotionen und Meinungen, die in Textdaten zum Ausdruck kommen. Dabei ist das Ziel die Wahrnehmung eines Textes zu quantifizieren -- also zu beurteilen, ob ein Text, wie beispielsweise eine Produktbewertung, ein Kundenfeedback oder ein Social-Media-Beitrag, positiv, negativ oder neutral ist. Dies wird üblicherweise auf einer Skala von -1 bis 1, also von sehr negativ bis sehr positiv.

## Methoden der Sentimentanalyse

Um die Vorteile der Sentiment-Analyse zu nutzen, gibt es zwei bewährte Ansätze: die lexikonbasierte Methode und die machine-learning-basierte Methode. Beide haben spezifische Stärken und Schwächen, die im Folgenden beleuchtet werden:

### Lexikonbasierte Sentimentanalyse

Die lexikonbasierte Sentimentanalyse ist die traditionelle Form des Verfahrens, bei der vorab definierte Wörterlisten, sogenannte Sentimentlexika, verwendet werden, um die Stimmung eines Textes zu bestimmen.

#### Funktionsweise

Diese Lexika enthalten Wörter, die mit positiven oder negativen Gefühlen assoziiert sind, oft mit einem entsprechenden Gewicht, das die Stärke des Ausdrucks angibt.

Zur Bewertung werden die Wörter des Textes mit den Einträgen des Lexikons (bspw. SentiWS oder German Polarity Clues) abgeglichen. Die aggregierten Gewichte der Wörter aus dem Lexikon geben schließlich die Gesamtstimmung des Textes wieder.

#### Vor- und Nachteile

{{< fa-ul >}}
{{< fa-solid-li icon=\"thumbs-up\" color=\"#39b185\" >}} Die lexikonbasierte Sentimentanalyse ist aufgrund ihrer einfachen Implementierung und des geringen Bedarfs an Rechen- und Speicherkapazität besonders für kleine Unternehmen mit begrenzten Ressourcen attraktiv.{{< /fa-solid-li >}}
{{< fa-solid-li icon=\"thumbs-down\" color=\"#cf597e\" >}} Allerdings stößt sie in komplexen Szenarien schnell an ihre Grenzen, da sie Schwierigkeiten hat, den Kontext und die Mehrdeutigkeit von Wörtern korrekt zu erfassen. Eine Phrase wie „nicht schlecht" kann beispielsweise fälschlicherweise als negativ interpretiert werden, obwohl sie im Kontext positiv gemeint ist.{{< /fa-solid-li >}}
{{< /fa-ul >}}

#### Ausprobieren

<iframe id="iframec944c404" scrolling="no" loading="lazy" style="width: 100%; height: 400pt;">
</iframe>
<script>$(document).ready(function(){  $('iframe#iframec944c404').attr('src', 'https://shiny.dsjlu.wirtschaft.uni-giessen.de/senti_dict/');});</script>
<script>var domains = ['https://shiny.dsjlu.wirtschaft.uni-giessen.de'];iframeResize(  {waitForLoad: false, license: 'GPLv3', checkOrigin: domains},   '#iframec944c404');</script>

{{< div class=\"pb-4\" >}} {{< /div >}}

### Machine-Learning-Basierte Sentimentanalyse

Im Gegensatz zu lexikonbasierten Ansätzen bieten vortrainierte Modelle, die auf allgemeinen Sprachmodellen wie BERT (Bidirectional Encoder Representations from Transformers) basieren, eine fortschrittliche Möglichkeit zur Sentimentanalyse.

#### Funktionsweise

Diese Modelle lernen aus einer Vielzahl von Beispielen und liefern auch in unbekannten Domänen oder bei komplexen sprachlichen Strukturen, wie Sarkasmus, verlässlichere Ergebnisse. Sie sind nicht auf spezifische Lexika angewiesen und können durch Fine-Tuning flexibel an unterschiedliche Anwendungsfälle angepasst werden, was sie besonders leistungsstark und vielseitig macht.

#### Ausprobieren

<iframe id="iframede8fe906" scrolling="no" loading="lazy" style="width: 100%; height: 400pt;">
</iframe>
<script>$(document).ready(function(){  $('iframe#iframede8fe906').attr('src', 'https://shiny.dsjlu.wirtschaft.uni-giessen.de/senti_trans/');});</script>
<script>var domains = ['https://shiny.dsjlu.wirtschaft.uni-giessen.de'];iframeResize(  {waitForLoad: false, license: 'GPLv3', checkOrigin: domains},   '#iframede8fe906');</script>
