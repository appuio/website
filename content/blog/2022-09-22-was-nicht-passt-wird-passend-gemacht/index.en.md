---
title: Was nicht passt, wird passend gemacht
date: 2022-09-22
featured_image: appuio-slides-1-.png
summary: APPUiO durfte die TBF & Partner AG, in Form vom Self-Managed Offering,
  beim Aufbau einer passenden Kubernetes-Distribution On-Prem unterstützen.
  Welche Distribution ausgewählt und wie dabei vorgegangen wurde, liest du in
  dieser Referenz.
---
Im ersten Schritt führten zwei Container-Engineers von APPUiO mit der TBF einen Architekturworkshop durch. Hauptziel des Workshops war es, das Zielbild gemeinsam zu definieren und somit den Grundstein für das Projekt zu legen. Mit Hilfe eines Fragekatalogs konnten wichtige Punkte betrachtet und geklärt werden. So bekräftigte sich die anfängliche Tendenz, SUSE Rancher als passende Distribution einzusetzen. Auf Wunsch von TBF wurde zusätzlich VMware Tanzu Community Edition als mögliche Option geprüft. Aufgrund fehlender Reife des Produkts in Verbindung mit den Kundenanforderungen wurde jedoch davon abgeraten.

Rancher gewann das Rennen unter anderem wegen folgenden Punkten:

* Rancher bietet ein zentral geregeltes Multi-Cluster-Management.
* Es existiert eine Benutzeroberfläche, über welche beinahe alles gemacht werden kann.
* Für die Worker Nodes kann Ubuntu verwendet werden, was eine nahtlose Integration in die bisherige Linux Umgebung der TBF sicherstellte.
* Die Schlankheit der Rancher Control Plane ist ein grosser Vorteil (sowohl Rancher Management Cluster als auch die RKE2 Kubernetes Distribution als solches).
* Der volle Funktionsumfang ist kostenlos nutzbar.
* Es besteht eine grosse Community (Oftmals wurden bereits Issues entdeckt und erhält umgehend “Support" von der Community).

In den Tagen nach dem Architekturworkshop machten sich die APPUiO-Engineers daran, die definierte Architektur auszuarbeiten und in einem Architekturdokument festzuhalten. Zentral hierbei waren die TBF-Umsysteme, wie beispielsweise Gitlab, DNS, VMware vSphere Infrastruktur und Loadbalancer. Diese sollten von der neuen Architektur optimal genutzt werden können.

Nach weiteren Rücksprachen mit der TBF und verschiedenen Anpassungen wurde die kundenspezifische Architektur finalisiert. Mit Hilfe einer To-do-Liste bereitete die TBF die Umgebung so vor, dass der Cluster-Aufbau in maximal drei Tagen vonstattengehen konnte.

Die Umsetzung lief wie folgt ab: Damit die Installation starten konnte, wurde zu Beginn der Bastion Host konfiguriert. Anschliessend folgte die Installation des Rancher Management Clusters inklusive vSphere Cloud Provider, Cilium und Nginx Ingress. Zusätzlich wurde das Backup und Monitoring aktiviert, sowie das Active Directory angebunden. Im nächsten Schritt wurde der Dev- sowie der Prod-Cluster aufgebaut. Hierbei wurde neben den normalen Cluster-Komponenten auch eine Backup-Lösung, ein Logging-Stack sowie eine Monitoring Lösung konfiguriert. Zum Schluss wurden im Dev-Cluster verschiedene Gitlab Runner auf dedizierten Builder-Nodes gestartet, damit der Softwarelieferant von TBF seine Pipelines testen konnte.