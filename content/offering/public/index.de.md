---
title: Cloud
weight: 10
ribbon_color: "#ff931e"
description: Du willst in kürzester Zeit deine produktiven Applikationen in eine
  Cloud deployen?
features:
  - Shared oder Dedicated
  - Sofort starten
  - Betriebene Plattform
  - Backup & Monitoring / Wartung & Updates
  - Community Chat
  - Cloudscale.ch, Exoscale.ch, Swisscom DCS+
  - Support während Bürozeiten
  - Schulungen für Entwickler*
menu:
  main:
    parent: offering
aliases:
  - /public.html
  - /offering/
---

{{<section class="offering-hero public" header="images/header.svg">}}
Nutze APPUiO Cloud für deine produktiven Applikationen oder für flexible, standardisierte Entwicklungsumgebungen. Alle Komponenten sind standardmässig hochverfügbar.
{{</section>}}

{{<section class="darkblue has-cols">}}
- ![](/images/offer2_advantage1.svg)
  ### Swissness
  APPUiO wird in ISO27001-zertifizierten und nach FINMA-Richtlinien gebauten Rechenzentren in der Schweiz betrieben und untersteht schweizerischem Recht.

- ![](/images/offer2_advantage2.svg)
  ### Security
  Auf der APPUiO Public Platform profitierst du von SELinux, Federation Authentication und Let’s Encrypt. Regelmässig werden die neuesten Security Updates eingespielt.

- ![](/images/offer2_advantage3.svg)
  ### Support
  Du erhältst persönlichen Support sowie regelmässige Wartung und Updates der Server. Backup und Monitoring sind inklusive. Zudem steht dir unsere Community im Chat zur Verfügung.

- ![](/images/offer2_advantage4.svg)
  ### Self-Service
  Über unser Self-Service Portal kannst du deine Projekte auf Knopfdruck jederzeit anlegen, vergrössern, löschen und verwalten. Du hast die volle Kontrolle über deine Plattform.

- ![](/images/offer2_advantage5.svg)
  ### Pay per Use
  Die Kosten für die APPUiO Public Platform werden stündlich berechnet. Dabei bezahlst du nur, was du auch effektiv genutzt hast. Es gibt keine Setup-Kosten.

- ![](/images/offer2_advantage6.svg)
  ### Hybrid Cloud
  Die APPUiO Public Platform verfügt über zwei Availability Zonen - eine in der Schweiz und eine auf AWS in Deutschland inkl. Nutzung ihrer Services.
{{</section>}}

{{<section class="has-cols col-cyan y-narrow">}}
# Im Angebot enthalten
-
  ### Backup und Monitoring
  Wir erstellen einmal täglich ein Backup aller relevanten Daten. Zudem sind im Portal die verfügbaren Ressourcen ersichtlich. Auf status.appuio.ch siehst du jederzeit den Status der Public Plattform.
-
  ### TCP und UDP Traffic
  Mit APPUiO kannst du Non-HTTP-Traffic in Public Cluster routen. So können Kunden IPs an Services anbinden und beispielsweise Datenbanken, LDAP Server, SSH Server öffentlich zur Verfügung stellen.
-
  ### Let's Encrypt Zertifikate
  APPUiO erlaubt es dir, mittels “Let’s Encrypt" einfach per Knopfdruck echte SSL-Zertifikate in deine Routen zu konfigurieren. Nach erfolgter Registrierung sorgt APPUiO für die Aktualisierung der Lets Encrypt-Zertifikate, die 3 Monate gültig sind, und ersetzt diese automatisch nach Ablauf.
-
  ### Secure Docker Builds
  Unsere Plattform erlaubt es, Docker Image Native als Docker Builds laufen zu lassen. Dafür haben wir die Buildumgebung extrahiert. Die Builds laufen in dynamischen, abgeschotteten VMs pro Mandant ausserhalb des Clusters. Zusätzlich zu den sicheren Builds, erlaubt unsere Erweiterung Docker Multi-Stage Builds. Docker Multi-Stage Builds helfen Dockerfiles zu optimieren und sie einfacher und lesbarer zu machen.
-
  ### Managed Services
  Auf Wunsch bieten wir dir zusätzliche Managed Services an, wie zum Beispiel: Database as a Service (PostgreSQL, MariaDB, MySQL).

-
  ### Persistent Storage (File based)
  Auf APPUiO Public bieten wir persistent Storage als File-based Storage auf Basis von GlusterFS.
{{</section>}}

{{<section class="cyan has-cols two col-darkblue y-narrow shared-vs-dedicated">}}
# Shared vs. Dedicated Platform

Unsere APPUiO Public Platform gibt es auf geteilter Infrastruktur oder als dedizierter Node für dich alleine. Wähle je nach deinen Bedürfnissen zwischen den beiden Angeboten.

-
  ### Shared
  APPUiO Public kannst du durch unser Selfservice-Portal auch auf geteilter Infrastruktur bestellen. Du erhältst ein OpenShift-Projekt mit beliebig viel GB Memory.

  [Shared bestellen](#offer-shared)

-
  ### Dedicated
  Du willst einen dedizierten Node und mehrere Projekte verwalten? Dann nutze APPUiO Dedicated mit beliebig vielen Projekten ab 16 GB Memory.

  [Dedicated bestellen](#contact)


{{</section>}}

{{<section class="darkblue">}}
<a name="offer-shared"></a>
# Die passende Grösse für deine Public Platform

{{<calculator>}}

{{<calculator/size name="Small">}}
- Einfache Website mit geringen Zugriffen
- Minimale CakePHP-Applikation mit kleiner Datenbank
- Micro Service, GO Node.JS, Springboot, Ruby, PHP, .Net, Python
{{</calculator/size>}}

{{<calculator/size name="Medium">}}
- Komplexere Website bspw. mit PHP und einer Datenbank
- CakePHP-Applikation mit mittlerer Datenbank
- zwei Instanzen hochverfügbar eines Micro Services
- Keycloak mit Datenbank
{{</calculator/size>}}

{{<calculator/size name="Large">}}
- Komplexe Applikation mit mehreren Services
- Jenkins Build Server
- mehrere Instanzen hochverfügbar eines Micro Services, bspw. vier Instanzen zur gleichen Zeit
- Komplexe Java Applikation
- Java EE Applikation JBoss EAP deployed mit Datenbank
{{</calculator/size>}}

{{<calculator/size name="X-Large">}}
- Komplexe Applikationen mit grösserer Last und Datenbanken
- Hochverfügbare Datenbanken
- Micro Service Architektur, etliche Services
- Jenkins Build Infrastruktur mit diversen Buildnodes
{{</calculator/size>}}

{{</calculator>}}
{{</section>}}

{{<section class="offers-two-faq">}}
# Häufig gestellte Fragen
{{<faq tag="public">}}
{{</section>}}

{{<section class="darkblue">}}
<a name="contact"></a>

# APPUiO PUBLIC PLATFORM
{{<contact/public>}}
{{</section>}}
