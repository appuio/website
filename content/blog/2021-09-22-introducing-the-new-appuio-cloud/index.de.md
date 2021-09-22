---
title: "Wir stellen vor: Die neue APPUiO Cloud"
date: 2021-09-22
featured_image: appuio_cloud_230921.png
summary: Wir freuen uns, APPUiO Cloud, neue Mitglied der
  APPUiO-Produktfamilie, ankündigen zu können. APPUiO Cloud ist der Nachfolger
  des erfolgreichen APPUiO Public PaaS (Platform as a Service) Produkts, das
  seit 2016 im Einsatz ist.
---
## Was ist APPUiO Cloud?

APPUiO Cloud ist eine komplette Überarbeitung von APPUiO Public und bietet ein komplettes, aber einfaches "OpenShift 4 Project As A Service" ("O4PaaS") Produkt in einer gemeinsamen Infrastruktur. Wir nennen es manchmal einfach "Namespace as a Service (NSaaS)".

APPUiO Cloud wird die folgenden Funktionen haben:

* Verfügbar in verschiedenen Infrastructure as a Service (IaaS)-Anbietern, was echte Multi-Cloud-Bereitstellungen ermöglicht: Möchtest du einen Cluster in Zürich für die Produktion und einen anderen für Entwicklung und Tests bei einem anderen Anbieter in Genf verwenden? Überhaupt kein Problem.
* Du bezahlst nur für das, was du tatsächlich nutzt; Du nutzt deine Pods (Container) nicht oft? Keine Sorge, für diese Leerlaufzeiten brauchen Sie nicht zu bezahlen.
* Einfache Anmeldung: Erstelle ein Konto, gib deine Kreditkartendaten ein, und der Zugang ist sofort einsatzbereit.
* Vollständige Selbstverwaltung über die Kubernetes-API: Erstelle zum Beispiel selbst neue Namespaces mit der oc/kubectl-CLI oder als Teil deiner CI/CD-Pipeline für Feature-Branch-Bereitstellungen.
* Kollaborationsfunktionen inklusive: Erstelle eine Organisation, unterteile sie in Teams und lade deine Entwickler zu einem oder mehreren Projekten ein.
* Einmalige Anmeldung bei allen APPUiO Cloud-Diensten, geschützt durch Zwei-Faktor-Authentifizierung (2FA).

Mehr Informationen für ein technisch versiertes Publikum:

* Basiert auf der neuesten Version von Red Hat [OpenShift Container Platform 4](https://www.redhat.com/en/technologies/cloud-computing/openshift).
* Powered by [Project Syn](https://syn.tools/).
* Persistent Storage mit freundlicher Genehmigung von [Rook](https://rook.io/), sowohl im RWO- als auch im RWX-Modus.
* Backups mit [K8up](https://k8up.io/), VSHNs eigenem Kubernetes Backup Operator.

## Für wen ist APPUiO Cloud?

Wir haben APPUiO Cloud als schnelle, kostengünstige Lösung für DevOps-Teams entwickelt, die sofortigen und erschwinglichen Zugang zu einem OpenShift 4-Projekt benötigen, ohne sich um die Installation und Wartung eines vollständigen OpenShift 4-Clusters kümmern zu müssen. Sie eignet sich für die Bedürfnisse von DevOps- und IT-Teams in verschiedenen Branchen:

* Startups in Branchen wie Fintech, Gesundheitswesen, soziale Medien und anderen.
* Schulungsunternehmen, die ihren Studenten Kubernetes- oder Cloud-Native-Konzepte beibringen.
* Unabhängige DevOps-Ingenieure.
* Freiberufliche Entwickler von Cloud-Native-Anwendungen.

APPUiO Cloud bietet den Nutzern dieser Gruppen ein einfaches, sicheres und sofort einsatzbereites OpenShift 4-Projekt, das vollständig mit den bequemsten Standardeinstellungen konfiguriert ist.

## Interessiert?

APPUiO Cloud wird offen entwickelt. Sie können mehr darüber auf unserer [Produkt-Website](https://products.docs.vshn.ch/products/appuio/cloud/index.html) lesen, und wir werden weitere Neuigkeiten in diesem Blog veröffentlichen, sobald wir mit der Entwicklung vorankommen.

Viele Teile von APPUiO Cloud sind bereits quelloffen, einschliesslich des in Arbeit befindlichen Systemdesigns, das in unserer [Knowledge Base](https://kb.vshn.ch/appuio-cloud/) und auf GitHub, über unsere [Dokumentation](https://github.com/appuio/appuio-io-docs) und das Projekt Syn [APPUiO Cloud Commodore Component](https://github.com/appuio/component-appuio-cloud) verfügbar ist.

## Häufig gestellte Fragen

**Wann wird APPUiO Cloud verfügbar sein?**\
Wir planen, APPUiO Cloud im Oktober 2021 für ausgewählte Beta-Nutzer und im ersten Quartal 2022 für die Öffentlichkeit freizugeben.

**Welche Zonen werden mit APPUiO Cloud verfügbar sein?**\
Die erste Zone wird auf [cloudscale.ch](http://cloudscale.ch) laufen, die zweite auf [Exoscale](https://www.exoscale.com/), weitere werden in Kürze folgen. Bleibe dran für Updates!

**Wie viel wird APPUiO Cloud kosten?**\
Du zahlst nur für das, was du tatsächlich nutzt (metered billing). Es wird einen Preis pro Speicherplatz geben, der von deiner Arbeitslast genutzt wird. Die genauen Preise werden bald bekannt gegeben.

**Welchen Support wird es für APPUiO Cloud geben?**\
APPUiO Cloud-Kunden können die [APPUiO Cloud-Foren](https://github.com/appuio/appuio-cloud-community/discussions) für Hilfe und Support nutzen. Ausserdem wird eine vollständige Dokumentation mit allen erforderlichen Informationen zur Verfügung gestellt, um Ihre Anwendungen auf APPUiO Cloud schnell und bequem zu betreiben.

**Wie kann ich meine Daten in der APPUiO Cloud sichern?**\
Unser K8up-Backup-Operator kann die Daten in Ihren PVCs auf einem beliebigen Restic-kompatiblen Speicher, wie AWS S3, Minio und anderen, sichern.

**Ich bin ein aktueller APPUiO Public-Nutzer, muss ich zu APPUiO Cloud migrieren?**\
Ja. Wir unterstützen dich bei der Migration Ihrer Workloads entweder auf einen APPUiO Managed oder Self-Managed Cluster oder auf die neue APPUiO Cloud.

**Wie wird migriert?**\
Es wird eine umfassende Dokumentation für die Migration zur Verfügung gestellt, und wir bieten Support-Pakete für die Migration an.

**Kann ich meine Anwendungen mit dem oc OpenShift 4 Kommandozeilen-Client auf der APPUiO Cloud bereitstellen?**\
Ja, du kannst dich anmelden und dein OpenShift 4-Projekt mit jedem Standardtool, das mit OpenShift 4 kompatibel ist, bearbeiten.

**Ich bin an APPUiO Cloud interessiert. Wo kann ich mich anmelden?**\
Gib deine E-Mail-Adresse in [dieses Formular](https://share.hsforms.com/1Hfs9Dm93S_2iq4Ul61jR6A48awa) ein, und wir werden dich kontaktieren, sobald die Registrierung für APPUiO Cloud geöffnet wird. Vielen Dank für deine Unterstützung!
