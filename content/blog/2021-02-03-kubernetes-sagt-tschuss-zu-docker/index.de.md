---
title: Kubernetes sagt "tschüss" zu Docker...
date: 2021-02-03
featured_image: appuio_2021-02-03-kubernetes-sagt-tschuss-zu-docker.jpg
summary: Kubernetes wird den Support für die Docker Container Engine mit der
  Version 1.20 abschalten. In Version 1.22 wird Docker als runtime für
  Containers nicht mehr unterstützt (läuft aber noch). Ab Version 1.23 wird sie
  komplett entfernt. Kubernetes wird nach wie vor die gleichen Container Images
  ausführen, da es den Open Container Initiative (OCI) Standard verwendet,
  welcher auch von der Docker Runtime verwendet wurde.
---
**Mitteilungen der beiden Hauptakteuren**

* [Kubernetes](https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/)
* [Docker](https://www.docker.com/blog/what-developers-need-to-know-about-docker-docker-engine-and-kubernetes-v1-20/)

## Du arbeitest mit OpenShift oder Rancher?

Dann wird sich für dich nicht viel ändern. [OpenShift](https://www.openshift.com/) hat in der Version 4 Docker bereits durch [cri-o](https://cri-o.io/) und [podman](https://podman.io/) ersetzt. Auf der anderen Seite arbeitet [Rancher](https://rancher.com/products/rancher/) an einer Roadmap um sicher zu stellen, dass alle bereitgestellten Cluster auf einer CRI-kompatiblen Runtime laufen.

**Mitteilungen der beiden Kubernetes-Distributoren:**

* [Red Hat OpenShift](https://www.openshift.com/blog/kubernetes-is-removing-docker-support-kubernetes-is-not-removing-docker-support)
* [Rancher](https://support.rancher.com/hc/en-us/articles/360053308831-Rancher-Operational-Advisory-Related-to-deprecation-of-dockershim-in-Kubernetes-v1-20)

## Fazit

Alles in allem sind die Änderungen längerfristig vorteilhaft. Durch das ausschliessen von dockershim wird die Kommunikation zwischen interface und runtime direkter. Mit [containerd](https://containerd.io/), cri-o und podman wird die Docker-Binary sauber abgelöst. Für einige wird das ein wenig Arbeit bedeuten, für die meisten aber, wird sich nicht viel ändern.

Alternativ zu Docker gibt es mittlerweile mächtige Tools wie..

* [buildah](https://buildah.io/), um Container Images zu erstellen
* podman, um Container lokal laufen zu lassen
* cri-o, um Container auf Kubernetes laufen zu lassen.
* [Skopeo](https://github.com/containers/skopeo), das hauptsächlich für das pullen, pushen und syncen von Images zwischen Registries oder zwischen Registries und Nodes verwendet wird.