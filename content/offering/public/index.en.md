---
title: Cloud
weight: 10
ribbon_color: "#ff931e"
description: You would like to deploy your productive applications as fast as
  possible into a Swiss cloud?
features:
  - Shared or Dedicated
  - Start immediately
  - Operated Platform
  - Backup & Monitoring / Maintenance & Updates
  - Community Chat
  - Cloudscale.ch, AWS Frankfurt, Exoscale.ch, Swisscom DCS+
  - Support during office hours
  - Training for developers*
menu:
  main:
    parent: offering
aliases:
  - /en/public.html
  - /en/offering/
---
{{<section class="offering-hero public" header="images/header.svg">}}
APPUiO Cloud is based on OpenShift 4, the latest Kubernetes distribution from Red Hat, and follows the approach "Namespace as a Service".
{{</section>}}

{{<section class="darkblue has-cols">}}

* ![](/images/offer2_advantage4.svg)
  ### Instant On
  Get your own OpenShift namespace in minutes, ready to use.

* ![](/images/offer2_advantage5.svg)
  ### Pay per Use
  Only pay for the resources you actually use; see our price model for more information.

* ![](/images/offer2_advantage6.svg)
  ### Multi Cloud
    The APPUiO Cloud Platform is available in different availability zones: currently cloudscale.ch and exoscale.ch

* ![](/images/offer2_advantage1.svg)
  ### Swissness
  APPUiO is available in different zones, also in Swiss data centers that are ISO27001 certified and operate in accordance with Swiss banking regulators (FINMA).

* ![](/images/offer2_advantage2.svg)
  ### Security
  When using the APPUiO Cloud Platform you're benefiting from SELinux, Cilium, Two-Factor Authentication and Let's Encrypt. The newest Security Updates are applied regularly.

* ![](/images/offer2_advantage3.svg)
  ### Community Support
  Need help? Check out our APPUiO Cloud forums and community chat. For those needing more help, there are support packages available at extra cost.

{{</section>}}

{{<section class="has-cols col-cyan y-narrow">}}

# Included Services

* ### TCP and UDP Traffic

   Depends on the particular APPUiO Cloud zone (service type load balancer).
* ### Let's Encrypt Certificates

   APPUiO enables you to configure valid SSL-certificates signed by “Let’s Encrypt" into your routes at the push of a button. Once successfully registered, APPUiO automatically takes care of updating the certificates (that have a validity period of three months) when necessary.

  * 3 Scale API Management (Beta): API Management solution by Red Hat.
  * database as a service: manually: Postgresql, Mariadb, Mysql
  * WaF as a Service basierend auf Apache mod_sec (Beta)
* ### Persistent Storage

    Depends on the particular APPUiO Cloud zone (see [APPUiO Cloud Pricing](<* https://products.docs.vshn.ch/products/appuio/cloud/pricing.html#_persistent_storage_pvc>)). *
* ### Pre-Installed and Configured Operator

  APPUiO Cloud provides the following OpenShift operators pre-installed and pre-configured, ready to be used:

  * K8up: Kubernetes Backup Operator.
  * [Cert Manager](https://cert-manager.io/): X.509 certificate management for Kubernetes.
* ### User Management

  Organize your namespaces in teams and organizations, and assign users to those teams; control who can access which namespaces at a glance.
* ### APPUiO Community

  Become part of the terrific APPUiO Community including a free membership in the Hannelore fan club.

{{</section>}}

{{<section class="darkblue">}}

# Choose the package that's right for you

{{<calculator>}}

{{<calculator/size name="Small">}}

* A simple website with little traffic
* Minimal CakePHP application with a small database
* Microservice, Go, Node.JS, Springboot, Ruby, PHP, .Net, Python
  {{</calculator/size>}}

{{<calculator/size name="Medium">}}

* More complex website, for example using PHP and a database
* CakePHP application with a medium sized database
* two highly available instances of a micro service
* Keycloak with database
  {{</calculator/size>}}

{{<calculator/size name="Large">}}

* Complex application with several services
* Jenkins build server
* several instances of a highly available micro service, e.g. four instances at the same time
* Complex java application
* Java EE applications JBoss EAP deployed with database
  {{</calculator/size>}}

{{<calculator/size name="X-Large">}}

* Complex applications with heavy load and databases
* Highavailable databases
* Micro-Service Architecture of several services
* Jenkins build infrastructure with multiple buildnodes
  {{</calculator/size>}}

{{</calculator>}}
{{</section>}}

{{<section class="cyan has-cols four col-white y-narrow items-center text-left">}}

# Additional Services

* #### Support Packages

  [More Information](https://products.docs.vshn.ch/products/appuio/cloud/support_packages.html)
* #### Managed Services

  On request
* #### Upgrade on APPUiO Managed or Self Managed

  On request
* #### CI/CD Pipeline Engineering

  On request

  {{</section>}}

{{<section class="offers-two-faq">}}

# Frequently Asked Questions

{{<faq>}}
{{</section>}}

{{<section class="darkblue">}}

# APPUiO CLOUD PLATFORM

<a name="contact"></a>
{{<contact/public>}}
{{</section>}}