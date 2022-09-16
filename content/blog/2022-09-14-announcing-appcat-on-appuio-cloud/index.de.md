---
title: Ankündigung von AppCat auf APPUiO Cloud
date: 2022-09-14
featured_image: appuio-slides-4-.png
summary: "Wir freuen uns, die sofortige Verfügbarkeit des VSHN Application Catalog (oder kurz “AppCat”) auf APPUiO Cloud bekannt zu geben."
---

Der VSHN AppCat ist ein Cloud Native-Marktplatz, welcher Services von Anbietern wie Amazon AWS, Google Cloud, Microsoft Azure, [Aiven.io](http://aiven.io/), [Exoscale](https://www.exoscale.com/) oder [cloudscale.ch](http://cloudscale.ch/) sowie Managed Services von VSHN anbietet. Diese Services können ganz einfach als Kubernetes-Ressourcen angefordert und in jeden GitOps- oder CI/CD-Workflow integriert werden. Bestelle Services so, wie du deine Anwendung auf Kubernetes bereitstellen würdest! Mit dem VSHN Application Catalog konzentrierst du dich auf deine Anwendung, und wir kümmern uns um das Bootstrapping und den Betrieb der benötigten Services.

Der erste AppCat-Services, der ab sofort verfügbar ist, ist der [Object Storage Bucket](https://products.docs.vshn.ch/products/appcat/objectstorage.html)-Services in der [APPUiO Cloud Zone LPG 2](https://portal.appuio.cloud/zones/cloudscale-lpg-2). Er ermöglicht es Entwicklern, schnell [S3](https://en.wikipedia.org/wiki/Amazon_S3)-kompatible Storage Buckets in [cloudscale.ch](http://cloudscale.ch) bereitzustellen. Wir werden den Services bald auch in der [Exoscale CH-GVA-2 0 Zone](https://portal.appuio.cloud/zones/exoscale-ch-gva-2-0) aktivieren.

Wir werden in Kürze weitere AppCat-Services einführen. [Lass uns wissen](https://www.vshn.ch/kontakt/), welche anderen Services du gerne in AppCat sehen würdest und ob du daran interessiert wärst, AppCat in deinem eigenen [APPUiO Managed](https://www.appuio.ch/offering/managed/) Cluster zu betreiben.

Weitere Informationen über AppCat findest du auf der [Website unserer Produkte](https://products.docs.vshn.ch/products/appcat/index.html) und in der [APPUiO Cloud Dokumentation](https://docs.appuio.cloud/appcat/index.html).

AppCat basiert auf [Crossplane](https://crossplane.io/) und [Project Syn](https://syn.tools/) und ist 100% Open Source! Schau dir die Projekte [provider-cloudscale](https://github.com/vshn/provider-cloudscale), [provider-exoscale](https://github.com/vshn/provider-exoscale) und [component-appcat](https://github.com/vshn/component-appcat) auf GitHub an.
