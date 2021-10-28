---
day: 16
date: "2020-06-16"
month: Jun
title: Produktiver Workload mit OpenShift 4
summary: Fast ein Jahr nach dem ersten Release von OpenShift 4 sind wir der Meinung, dass die OpenShift Container Platform (OCP) in der Version 4.4 bereit für produktiven Workload ist.
featured_image: Produktiver_Workload.png
---
Unsere Erfahrungen haben gezeigt, dass es durchaus sinnvoll war, mit Upgrades - oder im Fall von OpenShift 4 mit Migrationen - zu warten, bis alle Kinderkrankheiten des neuen Major Releases behoben sind. Daher haben wir seit dem ersten Release 4.1 alle OpenShift Versionen auf Herz und Nieren getestet und den Reifegrad überprüft. Gleich zu Beginn haben wir einen [Blogpost](https://www.appuio.ch/en/blog/2019-08-29-openshift-4/) zu den wesentlichen Unterschieden zur 3er-Version geschrieben. Anschliessend haben VSHN und Puzzle, die Firmen hinter APPUiO, Erfahrungen mit den neuen Versionen gesammelt. So haben sich z.B. einige Engineers von VSHN eine Woche dediziert Zeit genommen und die neueste Version auf ihre [Managed Plattform](/offering/managed/) geprüft. Bei Puzzle wurden Erfahrungen an der [mid-week](https://www.appuio.ch/en/blog/2019-08-29-openshift-4/) (eine "Projektwoche" des Middleware-Teams) gesammelt, wie bei [Self Managed Plattformen](/offering/self-managed/) der Kunde am besten unterstützt werden kann. Diese Erfahrungen haben wir auch an unserem letzten APPUiO BeerUp mit unserer Community geteilt.

**Vorteile eines Wechsels auf OpenShift 4**

Aus unserer Sicht bringt die neueste OpenShift Version viele Vorteile für den Betreiber als auch für den Anwender.

Der Reifegrad der neu eingesetzten Operators lässt unterdessen kaum noch zu wünschen übrig. Für den Betrieb eines Clusters werden Updates einerseits wesentlich schneller und andererseits ungemein einfacher und stabiler. Auch der Betrieb wird so vereinfacht, da die Operators auf Veränderungen reagieren und diese bei Bedarf korrigieren können. Operators sind ein neues Konzept auch für den Betrieb von Applikationen als Anwender von OpenShift. Diese neue Welt benötigt natürlich eine Einarbeitungszeit bis sich auch das Debugging so einfach anfühlt wie bei Deployments bisher.

Der Umstieg von Docker auf Buildah für Container Builds ermöglicht es nun, auf sicherere Art und Weise Container Images zu bauen. Dies ist für alle Multitenant-Cluster wie Public Plattform-Anbieter und firmeninterne Cluster mit mehreren Benutzern eine erfreuliche Neuerung. Mit der Einführung des OpenShift Service Mesh erhalten insbesondere Entwickler einen neuen Einblick und neue Möglichkeiten, die Kommunikation ihrer Applikationen zu visualisieren, abzusichern und zu optimieren.

Eine Liste der [neuesten Features](https://docs.openshift.com/container-platform/4.4/release_notes/ocp-4-4-release-notes.html) findet ihr hier.

**Self Managed**

Entscheidet sich der Kunde für unser Self Managed Produkt, helfen wir ihm beim Aufbau der Container Plattform, geben unser Know-How weiter und unterstützen beim Engineering sowie beim Automatisieren von Deployments (CI/CD).

Dabei haben wir bereits verschiedene OpenShift 4.3 und 4.4 Plattformen aufgebaut, sei es bei einer Verwaltung in Basel oder einem Amt in Bern. Weiter haben wir erste Migrationen von OpenShift 3.11 auf 4.3 durchgeführt. Weil es keinen Upgrade-Pfad gibt, muss ein neuer Cluster aufgebaut und der Workload migriert werden. Dies konnten wir ebenfalls bereits bei verschiedenen Kunden umsetzen, z.B. bei der [BLS](https://www.puzzle.ch/referenzen/openshift-plattform-fuer-die-bls-ag).

**Managed**

Entscheidet sich der Kunde für unser Managed Produkt, übernehmen wir den Aufbau und zusätzlich den Betrieb der Container Plattform. Damit der Betrieb reibungslos und weithin automatisiert vonstattengeht, müssen verschiedenste Prozesse angepasst und automatisiert werden. Die Plattform muss zuerst akkurat getestet werden. Weil dies etwas Zeit in Anspruch nimmt, sieht die Roadmap für die Managed Cluster je nach Infrastruktur wie folgt aus:

▸ Google GCP Q2 2020
▸ cloudscale.ch Q3 2020
▸ Azure Q3 2020
▸ AWS Q3 2020
▸ Exoscale Q4 2020
▸ VMware Q4 2020
▸ Hyper-V Q4 2020
**Public**

Für unsere Public Cloud, welche abhängig von den automatisierten Abläufen und dem Testing des Managed Produkts ist, wird es im Q3 ein Beta-Programm geben. Gerne dürfen Kunden daran teilnehmen. Dabei erhältst du Early Access auf die OpenShift 4 Plattform und kannst deine Applikationen darauf testen. Falls du dich für OpenShift 4 interessierst, kannst du dich hier für das Early Access Programm anmelden.

<!--[if lte IE 8]> <script charset="utf-8" type="text/javascript" src="https://js.hsforms.net/forms/v2-legacy.js"></script> <![endif]-->
**Schulungen und Techlabs**

<<<<<<< Updated upstream
Natürlich läuft unser [APPUiO Techlab auch auf der neuen OpenShift Version](https://appuio.ch/blog.html#2020-Mar-18). Falls du an einem Nachmittag mehr über OpenShift 4 und Operators erfahren möchtest, darfst du dich gerne hier [anmelden](https://appuio.ch/techlabs.html). Ab dem Sommer werden wir ein weiteres Techlab durchführen, das [Application Migration and Modernization (AMM) Techlab](https://appuio.ch/ammtechlab.html). Es zeigt dir auf, wie du Applikationen deiner Systemlandschaft auf die neue Container Plattform bringst. Weiter sind unsere Schulungsunterlagen für die Operations und die Apps on OpenShift Schulung auf der neusten OpenShift Version.
=======
Natürlich läuft unser [APPUiO Techlab auch auf der neuen OpenShift Version](https://www.appuio.ch/en/blog/2020-03-18-neu-techlab-auf-openshift-4-3/). Falls du an einem Nachmittag mehr über OpenShift 4 und Operators erfahren möchtest, darfst du dich gerne hier [anmelden](/techlabs/openshift/). Ab dem Sommer werden wir ein weiteres Techlab durchführen, das [Application Migration and Modernization (AMM) Techlab](/techlabs/amm/). Es zeigt dir auf, wie du Applikationen deiner Systemlandschaft auf die neue Container Plattform bringst. Weiter sind unsere Schulungsunterlagen für die Operations und die Apps on OpenShift Schulung auf der neusten OpenShift Version.
>>>>>>> Stashed changes

Brauchst du Unterstützung mit deiner Plattform oder möchtest gerne eine neue Plattform aufbauen? Melde dich bei uns und wir trinken gemeinsam einen Kaffee oder ein Bier (geht auch remote). Melde dich bei [hello@appuio.ch](mailto:hello@appuio.ch).


