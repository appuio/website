---
day: 26
date: "2019-08-26"
month: Aug
title: 10 wissenswerte Fakten zu Kubernetes und OpenShift
summary: Bei APPUiO setzen wir auf OpenShift von Red Hat. OpenShift ist eine Kubernetes Distribution. Kubernetes ist eine Plattform zur Orchestrierung von Container-Systemen. Alles klar? Bist du noch dabei? :-) Wenn ja, dann lies weiter und erfahre im folgenden Blogpost, was Kubernetes, eine Kubernetes Distribution und OpenShift ist und warum wir APPUiO auf den Grundlagen von Kubernetes und OpenShift aufgebaut haben.
featured_image: Kubernetes_OpenShift.png
---
#### 1. Was ist Kubernetes?

Kubernetes ist die Plattform zur Orchestrierung von Container-Systemen. Kubernetes automatisiert das Einrichten, Betreiben und auch das Skalieren von containerisierten Anwendungen. Die Open Source Plattform wird auch mit "K8s" abgekürzt und das Wort Kubernetes kann mit "Steuermann" übersetzt werden.

Zu den Funktionen von Kubernetes zählen unter anderem die Automatisierung von Containern und des Software Rollouts, die Optimierung der eingesetzten Ressourcen, Persistent Storage, Service Discovery, Autoscaling und HA. Im Vergleich zu anderen Orchestrierungsplattformen, wie bspw. Docker Swarm, unterstützt Kubernetes auch andere containerbasierte Virtualisierungssysteme.

Die offizielle Beschreibung von Kubernetes lautet:

_Kubernetes is a portable, extensible open-source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation._

Für das Verständnis dieses Beitrags ist es wichtig zu verstehen, dass es sich bei Kubernetes um eine Plattform handelt und nicht um ein fixfertiges Produkt ab der Stange.

#### 2. Wer steckt hinter Kubernetes und wer entwickelt es weiter?

Kubernetes wurde ursprünglich von Google entwickelt, um die benötigte riesige Infrastruktur für die Suchmaschine bereitzustellen und zu optimieren. Durch den Einsatz von Virtualisierung von Hardware, Cloud Computing, Site Reliability Engineering und Container-Technologien führte die Lösung dazu, dass die bestehende Infrastruktur viel besser ausgelastet wurde. Dies führte zu wesentlich geringeren Kosten der Infrastruktur-Landschaft. Zum Durchbruch verhalf Google Kubernetes aber dadurch, dass Kubernetes als Open Source Lösung zur Verfügung gestellt und an die Cloud Native Computing Foundation (CNCF) gesoendet wurde.

Heute zählt Kubernetes zu den aktivsten Open Source Projekten weltweit und die [Partner-Landschaft](https://kubernetes.io/partners/#kcsp) liest sich wie das Who-is-Who der IT-Welt. 

#### 3. Was ist eine Kubernetes Distribution?

Um die Unterschiede von Kubernetes und OpenShift zu verstehen, muss zuerst der Begriff "Kubernetes Distribution" geklärt werden. Wird Kubernetes direkt aus dem Open Source Kubernetes Projekt installiert, erhält man "nur" die Kernkomponenten (API Server, Controller Manager, Scheduler, Kubelet, kube-proxy). Damit Kubernetes aber auch wirklich nutzbar wird, werden viele weitere Komponenten wie etcd, Ingress Controller, Logging Server, Metrics Collector (z.B. Prometheus), Software Defined Network (SDN) usw. benötigt. Dies ist gut vergleichbar mit Linux: Der Linux Kernel alleine bringt noch nicht viel. Es braucht eine ganze Linux Distribution, die eine Shell, das Paketmanagement, den Bootprozess und vieles mehr zur Verfügung stellt.

_OpenShift ist eine Kubernetes Distribution und macht aus Kubernetes ein Produkt._

Eine "Minimum Viable Kubernetes Distribution" benötigt folgende zusätzliche Komponenten und Tools für einen produktiven Betrieb:

▸** Installations- und Upgrademechanismus:** Für eine automatisierte Installation aller involvierten Komponenten.
▸** SDN (Software Defined Network):** Pods müssen untereinander kommunizieren können, egal wo sie laufen. Dies stellt das SDN sicher.
▸** Ingress Controller:** Damit der Benutzerzugriff auf die auf dem Cluster laufende Applikationen möglich ist.
▸** Authentication:** Eine zentrale Benutzer- und Gruppendatenbank stellt den authentisierten und autorisierten Zugriff zur Verfügung.
▸** Security:** Kubernetes führt Container via Docker oder CRI-O aus. Die Sicherheit auf dem Hostsystem muss entsprechend gewährleistet sein.
▸** Persistent Storage:** Stateful Applikationen wie Datenbanken benötigen persistenten Storage.
▸** Monitoring:** Ständige Überwachung aller Clusterkomponenten und Applikationen.
▸** Backup:** Sicherung der Clusterkomponenten und persistenten Daten.
Optional werden weitere Komponente empfohlen:

▸ Zentrales Logging mit grafischer Aufbereitung und Suchfunktion
▸ Applikations- und Cluster Metrics inkl. Alerting
#### 4. OpenShift als Kubernetes Distribution

Im Kern basiert OpenShift zu 100% auf Kubernetes, bringt aber als Kubernetes Distribution alles mit, was zur Benutzung eines Kubernetes Clusters benötigt wird. Um nur die wichtigsten Funktionen zu nennen:

▸** Operations Tools:** Ein offizieller Weg via Ansible ermöglicht es, den gesamten Lifecycle von OpenShift durchzuführen. Dazu gehört die automatisierte Installation, wie auch Upgrades auf neuere Versionen von OpenShift. Mit OpenShift 4 beginnt eine neue Ära mit einem neuen Installations- und Operationsprozess, basierend auf Kubernetes Operators.
▸** Router:** Der OpenShift Router (Ingress Controller) - basierend auf HAProxy - sorgt dafür, dass der Zugriff auf Applikationen innerhalb des Clusters über HTTP(S) ermöglicht wird.
▸** Multi-Tenancy:** Die im Kern eingebaute Multi-Tenancy über OpenShift Projekte, RBAC und weiteren Konzepten ermöglicht die Benutzung der Plattform durch verschiedene Tenants (Kunden).
▸** Authentication:** Es werden die unterschiedlichsten Authentication Backends unterstützt, allen voran LDAP, ActiveDirectory und viele mehr.
▸** Metrics:** Die mitgelieferte Metrics Komponente sammelt alle verfügbaren Messwerte (RAM, CPU, Netzwerk) der auf dem Cluster laufenden Applikationen und visualisiert diese in der Webkonsole.
▸** Central Logging:** Alle von der Applikation auf stdout geloggten Zeilen werden automatisch von der zentralen Logging Komponente gesammelt und über die Webkonsole dem Benutzer zur Verfügung gestellt.
▸** Security:** Die Plattform ist auf höchste Sicherheit ausgelegt. So sorgen z.B. Sicherheitsmassnahmen im Kernel von Red Hat Enterprise Linux wie SELinux dafür, dass die Sicherheit der Container gewährleistet ist. Weitere Massnahmen wie "Security Context Constraints" (SCC) und das Verhindern von Root Containern sorgen für weitere Sicherheit.
▸** Builds und Pipelines:** Direkt im Cluster integrierte Build- und Pipeline-Funktionalitäten ermöglichen einen komplett integrierten CI/CD Workflow.
▸** Webkonsole:** Alle Vorgänge auf dem Cluster werden für den Anwender der Plattform in einer Webkonsole graphisch dargestellt und ermöglichen einen einfachen und schnellen Einstieg in die Benutzung von Kubernetes.
▸** SDN:** Das mitgelieferte Software Defined Networking sorgt für die Konnektivität zwischen den auf der Plattform laufenden Pods und für eine angemessene Netzwerksicherheit mit Network Policies.
▸** Container Registry:** Docker / Container Images werden in der mitgelieferten Registry gespeichert und zum Deployment auf die Worker Nodes benutzt.
Alle diese von Haus aus mitgelieferten Funktionalitäten lassen sich zu jedem Kubernetes Cluster hinzufügen, was jedoch mit einem hohen Aufwand verbunden ist. Dies ist vergleichbar mit dem Bau einer eigenen Linux Distribution, wie z.B. das ["Linux From Scratch"](http://www.linuxfromscratch.org/) veranschaulicht. Für Kubernetes existiert eine ähnliche Anleitung, genannt ["Kubernetes The Hard Way"](https://github.com/kelseyhightower/kubernetes-the-hard-way).

#### 5. OpenShift als PaaS

Die Stärke von Kubernetes liegt in der Container Orchestrierung. Zusätzlich dazu bietet OpenShift klassische Platform-as-a-Service (PaaS) Funktionen. Eine davon ist das automatische Builden und Deployen von Applikationscode direkt ab einem Git Repository. Trotzdem hat man als Anwender der Plattform dank der grossen Flexibilität immer die Wahl, ob man die integrierten Buildfunktionen nutzen oder doch lieber ausserhalb des Clusters builden möchte. Dies lässt sich für jedes Deployment entscheiden. So können auf einem Cluster beide Arten verwendet werden.

#### 6. OpenShift als Upstream zu Kubernetes

Viele Entwicklungen in Kubernetes stammen ursprünglich aus OpenShift. Als bestes Beispiel lässt sich RBAC (Role Based Access Control) nennen. Dieses Feature ist seit der ersten OpenShift-Version Bestandteil und wurde sukzessive in Kubernetes eingebaut. RBAC ist seit Kubernetes Version 1.6 fester Bestandteil von Kubernetes. Auch das OpenShift "Route"- oder das "DeploymentConfiguration"-Objekt hat die heutigen Objekte "Ingress" bzw. "Deployment" in Kubernetes massgeblich mitgeprägt.

Da OpenShift zu 100% auf Kubernetes basiert, werden auch alle Kubernetes Native Workloads unterstützt, wie z.B. das "Deployment"- oder das "Ingress"-Objekt.

Schaut man etwas genauer auf die [Contributor-Statistiken](https://k8s.devstats.cncf.io/d/9/companies-table?orgId=1), dann stellt man fest, dass Red Hat die Nummer 2 der Contributor-Firmen ist (nur Google ist noch weiter vorn). Somit ist Red Hat massgeblich an der Entwicklung von Kubernetes beteiligt. Mit dem Kauf der Firma CoreOS hat sich Red Hat geballtes Kubernetes Know-how angeeignet. Das Ergebnis der CoreOS Integration in Red Hat ist die Verschmelzung von OpenShift und Tectonic zu OpenShift Version 4.

#### 7. Alternativen zu OpenShift

OpenShift ist nicht die einzige Kubernetes Distribution auf dem Markt. Ein kurzer Vergleich zeigt die Unterschiede:

▸ ** Cloud Vendor Kubernetes:**Die grossen Clouds bieten ihre eigenen Kubernetes Distributionen als Service an. Diese sind auf die jeweiligen Clouds zugeschnitten und werden von den Anbietern gepflegt. Eine Installation auf der eigenen Private Cloud oder auf anderen Public Clouds ist nicht möglich.
▸ [Amazon Elastic Container Service for Kubernetes (Amazon EKS)](https://aws.amazon.com/de/eks/)
▸ [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine/)
▸ [Azure Kubernetes Service (AKS)](https://azure.microsoft.com/de-de/services/kubernetes-service/)
▸ [IBM Cloud Kubernetes Service](https://www.ibm.com/cloud/container-service)
▸ [ Alibaba Cloud Container Service for Kubernetes](https://www.alibabacloud.com/de/product/kubernetes)
▸ **[Rancher:](https://rancher.com/kubernetes/)**Seit der Version 2.0 fokussiert sich Rancher zu 100% auf Kubernetes und bietet als grosse Stärke eine Multi-Cluster Verwaltungsfunktion. So können mit Rancher Kubernetes Cluster in der Cloud (z.B. auf Amazon oder Google) zentral verwaltet werden, wie auch Kubernetes Cluster mit der "Rancher Kubernetes Engine" auf eigene VMs. Mit dem Webinterface gestaltet sich das Aufsetzen eines neuen Clusters sehr einfach und Applikationsdeployments mittels Helm sind auch direkt verfügbar.
▸ **[Canonical / Ubuntu Kubernetes](https://ubuntu.com/kubernetes)** (Charmed Kubernetes): Plattform basierend auf Ubuntu, welches Juju als Installationstool verwendet. In Partnerschaft mit Google und Rancher wird in Zukunft eine Hybrid-Cloud-Lösung angeboten.
▸ **[SUSE CaaS-Plattform:](https://www.suse.com/de-de/products/caas-platform/)** Eine neue Plattform, basierend auf SUSE MicroOS. Mittels Salt wird die Konfigurationsverwaltung sichergestellt. Unter folgendem Link kann am Beta Programm teilgenommen werden:[ SUSE CaaS Platform Beta.](https://www.suse.com/betaprogram/caasp-beta/)
Weitere Kubernetes Distributionen aufgelistet:

▸ **[Kontena Pharos](https://www.kontena.io/pharos/)**
▸ **[Cisco Container Platform](https://www.cisco.com/c/en/us/products/cloud-systems-management/container-platform/index.html/)**
▸ **[NetApp Kubernetes Service](https://cloud.netapp.com/kubernetes-service)**
▸ Und noch mehr aus der Kubernetes Dokumentation: [Getting started](https://kubernetes.io/docs/setup/)
#### 8. Vendor Lock-ins

Ein sehr wichtiger zu beachtender Aspekt ist der Cloud- und/oder Vendor-Lock-In. Viele der Kubernetes Distributionen haben ihre eigene Eigenschaften, die unter Umständen nicht miteinander kompatibel sind. Am Beispiel der "Cloud-Vendor"-Distributionen: Diese können nur in der entsprechenden Cloud benutzt werden. Möchte man jedoch einen Hybrid-Cloud-Ansatz verfolgen, ist dies durch den Lock-In nicht möglich. Im Gegenzug ermöglicht eine selbst installierbare Distribution wie OpenShift diese Option.

Reine Open Source Distributionen ohne Herstellersupport sind für produktive Umgebungen nicht zu empfehlen.

#### 9. APPUiO - Swiss Container Platform

Dem aufmerksamen Leser ist bestimmt aufgefallen, dass zwischen der "Minimum Viable Kubernetes Distribution" und OpenShift gewisse Diskrepanzen bestehen. Genau dort setzt APPUiO an: Wir veredeln OpenShift zu einer vollständigen, production-ready Kubernetes Distribution, indem wir Managed Services anbieten. Wir überwachen und sichern den Clusterstatus automatisch, kümmern uns um regelmässige Updates, beheben Fehler, stellen Persistent Storage zur Verfügung und helfen mit unserem Know-how das Beste aus der Plattform herauszuholen. Durch unsere Erfahrung im Setup und Betrieb von OpenShift Clustern rund um die Welt, bieten wir Managed OpenShift Cluster auf nahezu jeder Public, Private oder On-Premise Cloud an. APPUiO hilft gerne bei der Evaluation, Integration und Betrieb und unterstützt mit ihrer langjährigen Kubernetes und OpenShift Erfahrung.

#### 10. Wo kann ich mehr erfahren?

Am [ Cloud Native Meetup vom 28. August 2018](https://www.meetup.com/de-DE/Cloud-Native-Computing-Switzerland/events/251026175/) haben wir übers Thema Kubernetes Distribution berichtet. Die Slides dazu sind auf [Speaker Deck](https://speakerdeck.com/tobru/the-anatomy-of-a-kubernetes-distribution) zu finden. Ein empfehlenswerter Blogpost zum Thema Kubernetes Distributionen (auf Englisch) findet ihr hier: [10 most important differences between OpenShift and Kubernetes](https://cloudowski.com/articles/10-differences-between-openshift-and-kubernetes/).

Wenn du mehr über OpenShift erfahren willst, besuche uns an unserem Stand am Red Hat Forum Zürich am 10. September 2019 - 8:00 bis 18:00 im StageOne Zürich-Oerlikon.

Das gesamte APPUiO-Team freut sich auf deinen Besuch!


