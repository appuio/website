---
day: 14
date: "2017-07-14"
month: Jul
title: Ein Jahr Techlabs – ein Rückblick
summary: In 15 Techlabs konnten wir über 120 Interessierte von OpenShift begeistern.
---
**Seit [meinem ersten Rückblick auf ein APPUiO & OpenShift Techlab](https://www.puzzle.ch/blog/articles/2016/07/18/rueckblick-auf-das-openshift-tech-lab-in-zuerich) sind unterdessen ein Jahr und 14 weitere Techlabs vergangen. Und wie das so ist, verändert sich in einer so langen Zeit immer ziemlich viel: OpenShift liegt mittlerweile in Version 3.5 vor und weist im Vergleich zu der damaligen Version 3.1 ein weitaus mächtigeres und intuitiveres Webinterface auf. Einiges ist in dieser Zeit aber auch gleich geblieben, unter anderem das Interesse an unseren Techlabs.**

Durch das Update von OpenShift auf die Version 3.4 hat sich bei APPUiO viel verändert. Dank des intuitiveren Webinterface ist nun vieles via Mausklick machbar. Dies setzt insbesondere die Einstiegshürde für Entwickler etwas tiefer. Dass diese Einstiegshürde aber dennoch relativ hoch ist, zeigt die Anzahl Teilnehmende und das Interesse an unseren APPUiO & OpenShift-Techlabs in Bern und Zürich. Die Entwickler besuchen unsere Techlabs nach wie vor rege und lernen dort hands-on die wichtigsten Schritte, wie eine Applikation in die Cloud gebracht wird.

Andere Dinge sind seit einem Jahr gleich geblieben: so beispielsweise die Container-Grundkonzepte. Oder auch meine Freude, zu sehen, wie die Teilnehmenden immer wieder von Neuem über die technischen Möglichkeiten von OpdenShift begeistert sind. Auch gewisse Fragen tauchen im Rahmen der Techlabs immer wieder auf. Eine der häufigsten ist es, wie denn nun die eigens geschriebene Applikation auf OpenShift deployed werden kann. Hierfür gibt es grundsätzlich drei Möglichkeiten:




* OpenShift erstellt mithilfe des integrierten Source-to-Image-Frameworks den Applikations-Pod aus dem reinen Sourcecode. Dabei wird automatisch erkannt, um welche Sprache es sich handelt.
* OpenShift baut den Applikations-Pod mithilfe eines zur Verfügung gestellten Dockerfiles. Dabei wird das Docker Image zuerst gebuildet, in die interne Registry gepusht und anschliessend deployt.
* OpenShift schnappt sich ein bereits gebuildetes Docker Image und deployt dieses. (siehe auch [reference architecture](https://access.redhat.com/articles/2897391))




![APPUiO OpenShift S2I Deployment Pipeline](/images/Blog-Cover-Openshift-03-980x654.png)_Beispiel eines eigens gestrickten S2I-Deployments mit vorhergehendem Build in Jenkins. Die einfachere Variante ist natürlich, ein bereits bestehendes S2I-Script zu verwenden._

Eine ebenfalls häufig gestellte Frage ist, wie lange unsere Labs im Anschluss an den Nachmittag ausprobiert werden können: lange, sehr lange. Unsere Labs sind auf [GitHub](https://github.com/appuio/techlab/) zu finden und eines unserer zusätzlichen Labs beschreibt [das Einrichten einer eigenen OpenShift-Entwicklungsumgebung](https://github.com/appuio/techlab/blob/lab-3.4/additional-labs/development_environment.md). Dem Ausprobieren zu Hause oder am eigenen Arbeitsplatz steht also nichts im Weg. Und natürlich freuen wir uns auch über Contributions oder Issues, damit wir das Techlab weiter verbessern können.

Die nächsten Techlabs finden im August und September statt. Wir freuen uns über viele Teilnehmende und sind gespannt auf neue, lehrreiche Erfahrungen!

**Eckdaten Techlabs:**

APPUiO & OpenShift Techlab Bern:


 Wann: Donnerstag, 24. August 2017 ab 14:00 Uhr (Ende ca. 17:30 Uhr)


 Wo: Belpstrasse 37, 3007 Bern (3. Stock)


[Anmeldung](https://app.hatchbuck.com/OnlineForm/71621425243)




 APPUiO & OpenShift Techlab Zürich:


 Wann: Donnerstag, 28. September 2017 ab 14:00 Uhr (Ende ca. 17:30 Uhr)


 Wo: Neugasse 10, 8005 Zürich


[Anmeldung](https://app.hatchbuck.com/OnlineForm/71621425242)


