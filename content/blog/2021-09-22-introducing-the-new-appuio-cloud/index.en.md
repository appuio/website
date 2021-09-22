---
date: 2021-09-23
featured_image: appuio_cloud_230921.png
summary: We are thrilled to announce APPUiO Cloud, the new member of the APPUiO
  family of products. APPUiO Cloud is the heir to the successful APPUiO Public
  PaaS (Platform as a Service) product in service since 2016.
---
## What is APPUiO Cloud?

APPUiO Cloud is a complete overhaul of APPUiO Public, offering a complete yet simple "OpenShift 4 Project As A Service" ("O4PaaS") product, in a shared infrastructure. We sometimes simply call it "Namespace as a Service (NSaaS)".

APPUiO Cloud will have the following features:

* Available in different Infrastructure as a Service (IaaS) providers, allowing for true multi-cloud deployments: would you like to use one cluster in Zürich for production, and another for development and testing on a different provider in Geneva? No problem at all.
* Only pay for what you actually use; not using your Pods (containers) much? Don’t worry, you won’t have to pay for those idle hours.
* Simple sign-in: create an account, enter your credit card details, and your access will be ready to use immediately.
* Full self-service, all through the Kubernetes API; for example, create new namespaces yourself using the oc/kubectl CLI or as part of your CI/CD pipeline for feature branch deployments.
* Collaboration features included: create an organization, subdivide it in teams, and invite your developers to one or many projects.
* Single sign-on to all APPUiO Cloud services, protected with Two-Factor Authentication (2FA).

More information for a technically-savvy audience:

* Based on the latest Red Hat [OpenShift Container Platform 4](https://www.redhat.com/en/technologies/cloud-computing/openshift) release.
* Powered by [Project Syn](https://syn.tools/).
* Persistent Storage courtesy of [Rook](https://rook.io/), in both RWO and RWX modes.
* Backups powered by [K8up](https://k8up.io/), VSHN’s own Kubernetes Backup Operator.

## Who is APPUiO Cloud for?

We designed APPUiO Cloud as a fast, cost-effective solution for DevOps teams needing immediate and affordable access to an OpenShift 4 project, without having to care about the installation and maintenance of a full OpenShift 4 cluster. It suits the needs of DevOps and IT teams in various industries:

* Startups in industries such as Fintech, healthcare, social media, and others.
* Training companies teaching Kubernetes or Cloud Native concepts to their students.
* Independent DevOps engineers.
* Freelance Cloud Native app developers.

APPUiO Cloud provides users in these groups with a simple, secure, ready-to-use OpenShift 4 project, fully configured with the most convenient defaults.

## Interested?

APPUiO Cloud is being developed in the open. You can read more about it in our [products website](https://products.docs.vshn.ch/products/appuio/cloud/index.html), and we are going to publish more news in this blog as we move forward with its development.

Many pieces of APPUiO Cloud are already open source, including the work-in-progress system design, available at our [Knowledge Base](https://kb.vshn.ch/appuio-cloud/) and on GitHub, through our [documentation](https://github.com/appuio/appuio-io-docs) and the Project Syn [APPUiO Cloud Commodore Component](https://github.com/appuio/component-appuio-cloud).

## Frequently Asked Questions

**When will APPUiO Cloud be available?**\
We plan to release APPUiO Cloud to selected beta users in October 2021, and to the public in the first quarter of 2022.

**What zones will be available with APPUiO Cloud?**\
The first zone will be running at [cloudscale.ch](http://cloudscale.ch), the second one will be at [Exoscale](https://www.exoscale.com/), but more will follow shortly after. Stay tuned for updates!

**How much will APPUiO Cloud cost?**\
You only pay for what you actually use (metered billing). There will be a price per memory used by your workload. Exact pricing will be announced soon.

**What support will be available for APPUiO Cloud?**\
APPUiO Cloud customers will be able to use the [APPUiO Cloud forums](https://github.com/appuio/appuio-cloud-community/discussions) for help and support. A full documentation suite will also be provided, with all required information to run your applications on APPUiO Cloud quickly and conveniently.

**How do I backup my data on APPUiO Cloud?**\
Our K8up backup operator can backup data in your PVCs to any restic compatible storage, such as AWS S3, Minio, and more.

**I am a current APPUiO Public user, do I have to migrate to APPUiO Cloud?**\
Yes. We will help you migrate your workloads either to an APPUiO Managed or Self-Managed cluster, or to the new APPUiO Cloud.

**How do we migrate?**\
A comprehensive documentation for the migration will be made available, and we offer support packages for migration help.

**Am I able to deploy my apps with the oc OpenShift 4 command line client on APPUiO Cloud?**\
Yes, you will be able to login and operate on your OpenShift 4 project using any standard tool compatible with OpenShift 4.

**I am interested in APPUiO Cloud. Where do I sign up?**\
Enter your e-mail in [this form](https://share.hsforms.com/1Hfs9Dm93S_2iq4Ul61jR6A48awa), and we will contact you as soon as the registration for APPUiO Cloud opens. Thanks for your support!