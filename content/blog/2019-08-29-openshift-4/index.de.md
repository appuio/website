---
day: 29
date: "2019-08-29"
month: Aug
title: OpenShift 4
summary: |-
  Seit Juni dieses Jahres ist OpenShift 4.1 verfügbar, der erste öffentlich zugängliche Release von Red Hat (Version 4.0 war ein rein interner Release).
  Wir möchten dir mit einer Blogpost-Serie Informationen, Erfahrungsberichte, Empfehlungen sowie Tipps und Tricks weitergeben, damit du frühzeitig über die nötigen Informationen verfügst. Zusätzlich werden wir verschiedene Events wie beerups oder Techtalks organisieren, damit du detailliertere und technischere Berichte erhältst.
  Falls du in deinem Unternehmen Unterstützung benötigst oder wir dir mögliche Wege zu OpenShift 4 aufzeigen sollen, darfst du dich gerne bei uns melden.
  Starten wir mit ein paar Grundlagen zu OpenShift 4.
featured_image: OpenShift4.png
---
#### Entwickler-Tools

Mit OpenShift 4 ändert sich viel und doch nicht, zumindest aus Entwicklersicht. Die Verwendung von OpenShift 4 wird nichts bis fast nichts ändern. Um das Leben eines Entwicklers zu vereinfachen, hat Red Hat ein Tool ` odo ` entwickelt, welches nur die für Entwickler relevanten ` oc-`Befehle enthalten wird. Ausserdem wird mit dem [Red Hat CodeReady Workspaces](https://developers.redhat.com/products/codeready-workspaces/overview) eine "Kubernetes-native developer workspace server and IDE" zur Verfügung gestellt, um das Entwickeln von auf OpenShift lauffähigen Applikationen zu vereinfachen.

#### Installation

Die Installation von OpenShift 4 wurde stark vereinfacht. Mit dem einfachen Befehl `openshift-install create cluster` kann der Installationsassistent gestartet werden. Ohne weiteres Zutun fragt dieser die benötigten Konfigurationsparameter ab, die er nicht selbst herausfinden kann. Für alles andere werden vernünftige Defaults verwendet und so automatisch die Referenzarchitektur eingehalten.

Die Control Plane Hosts werden immer mit Red Hat CoreOS (RHCOS) aufgesetzt, bei den restlichen besteht die Wahl zwischen RHCOS und klassischem RHEL. Der Vorteil der Verwendung von RHCOS besteht darin, dass OpenShift das Betriebssystem selbst verwalten und somit auch automatisch aktualisieren kann.

Auf unterstützten Plattformen ist der Installer in der Lage, die gesamte zugrundeliegende Infrastruktur selbst zu provisionieren. Diese Art von Installation wird mit IPI (Installer Provisioned Infrastructure) bezeichnet und stellt die empfohlene Installationsvariante dar. Bei der anderen Art von Installation, UPI (User Provisioned Infrastructure), wird die Infrastruktur, wie es der Name bereits andeutet, selbst aufgebaut und dem Installer zur Verfügung gestellt.

Updates können neu über die Web Console durchgeführt werden, wobei zwischen drei Channels (stable, pre-release, nightly) ausgewählt werden kann.

Schaut man unter die Haube von OpenShift 4, fällt auf, dass nebst der Kernkomponente Kubernetes die Container Engine ausgewechselt wurde. Anstelle von Docker kommt neu [CRI-O](https://cri-o.io/) zum Einsatz. CRI-O verwendet als darunter liegende Container Runtime `runc`, wie dies auch Docker tut, und ist komplett [OCI](https://www.opencontainers.org/)-compliant. Beispielsweise können mit Docker gebaute Images auch mit CRI-O problemlos gestartet werden - also kein Grund zur Sorge in dieser Hinsicht. Einer der Gründe für diesen Wechsel war, den monolithischen Docker-Daemon in einzelne Tools mit jeweils einem bestimmten Zweck aufzuteilen, ganz gemäss der Unix-Philosophie. So wurden nebst CRI-O die Container Tools [buildah](https://buildah.io/), [Podman](https://podman.io/) und [skopeo](https://github.com/containers/skopeo) ins Leben gerufen und sind schon seit einiger Zeit verfügbar.

#### Update von OpenShift 3 auf 4

Das Wichtigste vorweg: Es wird kein Update-Pfad von OpenShift 3 auf 4 geben. Red Hat stellt aber ein Migrations-Tool zur Verfügung, welches nicht nur die Kubernetes Ressourcen, sondern sogar die Daten von Persistent Volumes migrieren kann. Dabei wird S3 Storage als Zwischenspeicher verwendet. Das Migrations-Tool unterstützt neben Migrationen von Version 3 auf 4 auch Migrationen zwischen unterschiedlichen v4 Clustern.

#### Operators

Dass Operators ein wesentlicher Bestandteil von OpenShift 4 sein werden, ist bereits weitherum bekannt. Was Operators aber genau sind, wohl noch weniger: Ein Operator ist eine Methode für die Paketierung, das Deployment sowie die Verwaltung von Kubernetes-nativen Applikationen. Eine Kubernetes-native Applikation ist eine Applikation, welche sowohl auf Kubernetes deployt wie auch über die Kubernetes API verwaltet werden kann.

Ein Operator ist grundsätzlich ein Custom Controller, wobei der Controller zu den Kernkonzepten von Kubernetes gehört. Er vergleicht regelmässig den gewünschten mit dem effektiven Zustand einer oder mehrerer Ressourcen auf dem Cluster und korrigiert diesen falls nötig. Ähnlich wie dies auch Puppet tut. Ein Operator selbst läuft als Pod auf dem Cluster.

Operators übernehmen in OpenShift 4 eine zentrale Rolle. Sie sind für die Steuerung und Überwachung von so ziemlich jeder einzelnen Komponente verantwortlich, darunter auch kritische Netzwerk- und Credential-Dienste. Wiederum ein Operator übernimmt die Verwaltung aller dieser Operators, der sog. Cluster Version Operator. Nebst diesen vom Cluster Version Operator verwalteten Plattform-Operators können auch Applikationen Gebrauch vom Operator Framework machen. Sie werden allerdings nicht vom Cluster Version Operator, sondern vom Operator Lifecycle Manager (OLM) verwaltet. Eine Übersicht verfügbarer Operators ist auf [OperatorHub.io](https://operatorhub.io/) ersichtlich. Analog zu bspw. dem in Rancher integrierten App Catalog für Charts, ist auch der OperatorHub in OpenShift 4 integriert und ermöglicht eine einfache, grafische Installation über die Web Console.

#### Operator Framework

Operators können aber auch selbst geschrieben werden, bspw. mithilfe des Operator Frameworks. Das Framework unterstützt Helm, Ansible sowie Go, wobei jede Variante natürlich seine eigenen Vor- und Nachteile hat:

Helm ist sehr einfach zu schreiben, da kein Code geschrieben werden muss. Zudem wird auch kein Tiller mehr benötigt.
Ansible ist für Betreiber die erste Wahl, da meist bereits Ansible-Know How vorhanden ist.
Go stellt zwar die vermutlich herausforderndste, dafür, aufgrund seiner vollwertigen Programmiersprache, aber auch die mächtigste und flexibelste Variante dar.
Der sog. Capability Level dieser Varianten wird in folgender Abbildung aufgezeigt. Der Capability Level veranschaulicht, welche Phasen unterstützt werden.

![Capability level](operator-capability-level-transparent-bg.png)#### OpenShift Container Storage

Red Hat beschreibt den OpenShift Container Storage, oder kurz RHOCS oder OCS, als "Add-On for OpenShift for running stateful apps". Während OCS unter OpenShift 3 noch aus Gluster und Heketi bestand, um dynamisch Persistent Volumes zu allozieren, soll diese Aufgabe die Kombination aus [Rook](https://rook.io/), [Ceph](https://ceph.io/) und [NooBaa](https://www.noobaa.io/) übernehmen. Gründe für diesen Wechsel seien insbesondere das beachtliche Momentum hinter der Entwicklung von Rook sowie der aus Sicht Red Hat zunehmende Fokus auf Object Storage, welcher von NooBaa in Form einer S3-kompatiblen API abgedeckt wird. Wie auch schon bei Version 3 werden ein Independent sowie ein Converged Mode angeboten. OCS kann also als externer Storage Cluster oder aber direkt auf OpenShift selbst installiert werden. Anders als beim Gluster-Heketi-Stack soll neu der Storage via CSI (Container Storage Interface) angebunden werden können.

Geplant ist, OpenShift Container Storage 4 mit OCP Version 4.2 zu veröffentlichen, welches wiederum in Q3 2019 geplant ist. OpenShift Container Storage 3.X soll noch bis Juni 2022, gleich wie OpenShift Container Platform 3.X, [supportet sein](https://access.redhat.com/support/policy/updates/openshift/). Wie bereits bei OpenShift 3 wird RHOCS auch auf v4 durch die OpenShift Storage Addon-Subscription abgedeckt. Wer also bereits im Besitz einer solchen ist, ist mit OpenShift 4 bereits abgedeckt.

#### Service Mesh

Das OpenShift Service Mesh besteht nicht nur, wie häufig angenommen, aus [Istio](https://istio.io/), sondern zudem aus [Kiali](https://www.kiali.io/), [Jaeger](https://www.jaegertracing.io/) sowie [Envoy Proxy](https://www.envoyproxy.io/). Das Service Mesh ermöglicht besseres Tracking und Management der Kommunikation zwischen Services und Pods, indem ein Envoy Proxy als Sidecar-Container in die Pods hinzugefügt wird. Envoy stellt dabei die Data Plane innerhalb des Service Mesh dar. Die Control Plane (nicht zu verwechseln mit der OpenShift Control Plane) ist verantwortlich für die Verwaltung und Konfiguration der Envoy Proxies um den Traffic zu routen wie auch Policies anzuwenden. Diese Konstellation ergibt ein Netzwerk von Services mit Load Balancing, Service-zu-Service-Authentifizierung, Monitoring und mehr. Code-Änderungen an der Applikation sind dabei keine bis nur wenige notwendig.

#### Pipelines

OpenShift Pipelines setzt auf [Tekton](https://tekton.dev/), welches vorher unter dem Namen Knative Build-Pipeline bekannt war. Die Idee dahinter ist, cloud-native CI/CD unter Kubernetes zur Verfügung zu stellen. Dabei werden die verschiedenen für eine Pipeline benötigten Komponenten (wie auch die Pipeline selbst) als Custom Resources angelegt und können so via `kubectl`/`oc` administriert werden. Gem. Roadmap soll mit Version 4.2 ein Tech Preview und mit 4.3 die GA-Version erhältlich sein.

#### Serverless

Auch "serverless" darf natürlich nicht fehlen, welches mit [Knative](https://knative.dev) realisiert wird. Gemäss Roadmap soll mit Version 4.2 ein Tech Preview und mit 4.3 die GA-Version erhältlich sein. Was FaaS bedeutet kannst du im [Blogpost](https://appuio.ch/blog.html#2017-Okt-10) von Tobru nachlesen.

#### Schlusswort

Die aufgeführten Neuerungen sind natürlich nicht abschliessend, daher kann sich ein Blick in die [Release Notes von OpenShift 4.1](https://access.redhat.com/documentation/en-us/openshift_container_platform/4.1/html-single/release_notes/index) oder in einen der vielen anderen Artikel, Blogposts etc. lohnen. Mit OpenShift 4.2 wird der wohl erste Release veröffentlicht, der die meistgefragten Features und Unterstützungen mitbringt. Ein [kurzer Blick](https://access.redhat.com/documentation/en-us/openshift_container_platform/4.1/html-single/release_notes/index) lohnt sich also auf alle Fälle. Wir von APPUiO werden weiter Erfahrung mit dem brandneuen OpenShift-Release, auch in Zusammenarbeit mit unseren Kunden, sammeln und in eine bestmögliche Unterstützung umsetzen.


