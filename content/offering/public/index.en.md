---
title: Public
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
Benefit from APPUiO Public for your productive applications or for flexible, standardized development environments. All components are standardized highly available.
{{</section>}}

{{<section class="darkblue has-cols">}}

* ![](/images/offer2_advantage1.svg)

  ### Swissness

  APPUiO is operated in Swiss data centres certified to ISO27001 and in accordance with swiss banking regulators (FINMA) guidelines and is subject to Swiss law.
* ![](/images/offer2_advantage2.svg)

  ### Security

  When using the APPUiO Public Platform you're benefiting from SELinux, Federation Authentication and Let's Encrypt. The newest Security Updates are applied regularly.
* ![](/images/offer2_advantage3.svg)

  ### Support

  You're getting personal support, as well as frequent maintenance and updates of servers. Backup and monitoring are part of the deal. Furthermore, our community is at your disposal in the chat.
* ![](/images/offer2_advantage4.svg)

  ### Self-Service

  By using our Self-Service portal you’re creating, resizing, deleting and managing your environments at the push of a button. You’re having full control over your platform.
* ![](/images/offer2_advantage5.svg)

  ### Pay per Use

  Costs for the APPUiO Public Platform are calculated per hour. You only pay what you were actually using. There are no setup-costs.
* ![](/images/offer2_advantage6.svg)

  ### Hybrid Cloud

    There are two availability-zones on the APPUiO Public Platform: One in Switzerland and another one on AWS in Germany, including use of their services.
  {{</section>}}

{{<section class="has-cols col-cyan y-narrow">}}

# Included Services

* ### Backup and Monitoring

   We’re backing all relevant data up once a day. Additional, available resources are visible in the portal. On https://status.appuio.ch you can have a look at the current state of the Public Platform at all times.
* ### TCP and UDP Traffic

   With APPUiO, it’s possible to route Non-HTTP-Traffic into Public Clusters. This allows for customer IPs to be bound to services and provide for example databases, LDAP servers or SSH services publicly.
* ### Let's Encrypt Certificates

   APPUiO enables you to configure valid SSL-certificates signed by “Let’s Encrypt" into your routes at the push of a button. Once successfully registered, APPUiO automatically takes care of updating the certificates (that have a validity period of three months) when necessary.
* ### Secure Docker Builds

   Our platform allows for the running of Docker Image Native as Docker Build. To achieve this, we extracted the build-environment.Builds are running in dynamically created, strictly separated VMs per client apart from the cluster. Additionally to our secure builds, our extension enables Docker Multi-Stage Builds. These help to optimise Dockerfiles and make them both simpler and easier to read.
* ### Managed Services

   There is a first platform software, which were offering on our Public Platform as a service. We’re building the software according to your wishes and are operating it a a managed service:

  * 3 Scale API Management (Beta): API Management solution by Red Hat.
  * database as a service: manually: Postgresql, Mariadb, Mysql
  * WaF as a Service basierend auf Apache mod_sec (Beta)
* ### Persistent Storage (File based)

    On APPUiO Pubilc we offer persistent storage as file-based storage based on GlusterFS.
  {{</section>}}

{{<section class="cyan has-cols two col-darkblue y-narrow shared-vs-dedicated">}}

# Shared vs. Dedicated Platform

Our APPUiO Public Platform exists on shared infrastructure or as a dedicated node for you alone. Choose between the two offers depending on your needs.

* ### Shared

   Order your Public Platform on a shared infrastructure through our self service portal. You receive an OpenShift-project with unlimited GB memory.

   [ORDER SHARED](#offer-shared)
* ### Dedicated

   You want a dedicated node and wish to independently manage several projects? That is exactly what APPUiO dedicated with unlimited projects starting at 16 GB memory offers you.

   [ORDER DEDICATED](#contact)

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

* #### SLA Office Hours

   Support times: 09:00-12:00 and 13:00-18:00 Uhr (5x8), Reaction time: 2h, Availability: 99%

   *included*
* #### SLA 24/7

   Support times: 7x24, Reaction time: 1h, Availability: 99,5%

   *according to the arrangement*
* #### Persistent Storage

   per GB/day

   *0.0935 CHF*
* #### TCP und UDP Ingress

    per Service/day

    *0.35 CHF*
  {{</section>}}

{{<section class="offers-two-faq">}}

# Frequently Asked Questions

{{<faq>}}
{{</section>}}

{{<section class="darkblue">}}

# APPUiO PUBLIC PLATFORM

<a name="contact"></a>
{{<contact/public>}}
{{</section>}}