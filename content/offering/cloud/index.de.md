---
title: Cloud
weight: 10
ribbon_color: "#ff931e"
description: Du willst in wenigen Minuten einen einsatzbereiten OpenShift-Namespace bekommen und nur für die Ressourcen bezahlen, die du tatsächlich nutzt?
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
  - /public
  - /offering/
---

{{< cloud_header header="images/header.svg" logo="images/appuio_cloud_rgb.png" footer="images/footer.svg" description="APPUiO Cloud basiert auf OpenShift 4, der aktuellsten Kubernetes Distribution von Red Hat und verfolgt den Ansatz Namespace as a Service." >}}

* ![](/images/offer2_advantage4.svg)
  ### Instant On
  Bekomme in wenigen Minuten deinen eigenen OpenShift-Namespace, der sofort einsatzbereit ist.

* ![](/images/offer2_advantage5.svg)
  ### Pay per Use
  Bezahle nur für die Ressourcen, die du tatsächlich nutzt; Weitere Informationen findest du in unserem [Preismodell](https://products.docs.vshn.ch/products/appuio/cloud/pricing.html).

* ![](/images/offer2_advantage6.svg)
  ### Multi Cloud
  Die APPUiO Cloud Plattform ist in verschiedenen Cloud Providern (Zonen) verfügbar: Derzeit auf [cloudscale.ch](https://www.cloudscale.ch/) und [Exoscale](https://www.exoscale.com/).

* ![](/images/offer2_advantage1.svg)
  ### Swissness
  APPUiO ist in verschiedenen Zonen verfügbar, auch in ISO27001-zertifizierten und nach FINMA-Richtlinien gebauten Rechenzentren in der Schweiz.

* ![](/images/offer2_advantage2.svg)
  ### Security
  Auf der APPUiO Cloud Plattform profitierst du von SELinux, Cilium, Two-Factor Authentication und Let’s Encrypt. Regelmässig werden die neuesten Security Updates eingespielt.

* ![](/images/offer2_advantage3.svg)
  ### Community Support
  Du brauchst Hilfe? Besuche unser [APPUiO Cloud Forum](https://discuss.appuio.cloud/) oder unseren [Community Chat](https://community.appuio.ch). Falls du weitere Hilfe benötigst, beraten wir dich gerne über unsere [kostenpflichtigen Support Pakete](https://products.docs.vshn.ch/products/appuio/cloud/support_packages.html).

{{</ cloud_header >}}

{{<section class="has-cols col-darkblue2 darkblue y-narrow">}}

# Im Angebot enthalten

* ### TCP und UDP Ingress Traffic

  Mit dem [Kubernetes Service Type Load Balancer](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer) kann jeder Service (TCP und UDP) im Internet erreichbar gemacht werden. Die Verfügbarkeit ist Abhängig von der jeweiligen APPUiO Cloud Zone an.
* ### Let's Encrypt Zertifikate

  APPUiO erlaubt es dir, mittels “[Let’s Encrypt](https://letsencrypt.org/)" per Knopfdruck echte SSL-Zertifikate in deine Routen zu konfigurieren. Nach erfolgter Aktivierung sorgt APPUiO für die Aktualisierung dieser Zertifikate, die 3 Monate gültig sind. Vor Ablauf werden sie automatisch erneuert.
* ### Persistent Storage

  Verschiedene Storage Klassen erlauben den Bezug von Persistent Storage. Der Verfügbare Storage unterscheidet sich je nach Zone. In der [APPUiO Cloud User Dokumentation](https://docs.appuio.cloud/user/explanation/storage-classes.html) ist ersichtlich, welche Storage Klassen verfügbar sind.
* ### Vorinstallierte und konfigurierte Kubernetes Operator

  APPUiO Cloud stellt die folgenden Kubernetes Operator vorinstalliert und vorkonfiguriert zur Verfügung, die sofort verwendet werden können:

  * [K8up](https://k8up.io/): Kubernetes Backup Operator.
  * [Cert Manager](https://cert-manager.io/): X.509-Zertifikatsverwaltung für Kubernetes.
* ### Benutzerverwaltung

  Organisiere deine Benutzer in Teams und Organisationen und weise diesen verschiedene Berechtigungen zu; kontrolliere auf einen Blick, wer auf welche Namespaces zugreifen kann.
* ### APPUiO Community

  Werde Teil der grandiosen APPUiO Community inklusive einer kostenlosen Mitgliedschaft im Hannelore-Fanclub.

{{</section>}}

{{<section>}}

# Preisrechner

<iframe width="100%" height="450" src="https://pricing.appuio.cloud/calculator?title=<empty>&style=appuio" style="border: none"></iframe>

{{</section>}}

{{<section class="cyan has-cols two col-white items-center title-only">}}

# Zusätzliche Services
## Auf Anfrage

* #### Support Pakete
  [weitere Informationen](https://products.docs.vshn.ch/products/appuio/cloud/support_packages.html)
* #### Managed Services
* #### Upgrade auf Managed oder Self Managed
* #### CI/CD Pipeline Engineering


{{</section>}}

{{<section class="offers-two-faq">}}

# Häufig gestellte Fragen

{{<faq tag="cloud">}}
{{</section>}}

{{<section class="darkblue">}}
<a name="contact"></a>

# APPUiO CLOUD PLATFORM

{{<contact/cloud>}}
{{</section>}}
