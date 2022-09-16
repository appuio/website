---
title: Announcing AppCat on APPUiO Cloud
date: 2022-09-14
featured_image: appuio-slides-4-.png
summary: "We’re happy to announce the immediate availability of the VSHN Application Catalog (or “AppCat” for short) on APPUiO Cloud."
---

We’re happy to announce the immediate availability of the **VSHN Application Catalog** (or **“AppCat”** for short) on APPUiO Cloud.

The VSHN AppCat is a Cloud Native marketplace offering services from providers like Amazon AWS, Google Cloud, Microsoft Azure, [Aiven.io](http://Aiven.io), [Exoscale](https://www.exoscale.com/), or [cloudscale.ch](http://cloudscale.ch), as well as managed services from VSHN. These services can be quickly requested as Kubernetes resources and integrated into any GitOps or CI/CD workflow. Provision services like you would deploy your application on Kubernetes! With the VSHN Application Catalog, you focus on your application, and we take care of bootstrapping and operating the services it needs.

The first AppCat service, available immediately, is the [Object Storage Bucket](https://products.docs.vshn.ch/products/appcat/objectstorage.html) service in the [APPUiO Cloud zone LPG 2](https://portal.appuio.cloud/zones/cloudscale-lpg-2). It allows developers to quickly provision [S3-compatible](https://en.wikipedia.org/wiki/Amazon_S3) storage buckets in cloudscale.ch. We will soon enable the service in the [Exoscale CH-GVA-2 0](https://portal.appuio.cloud/zones/exoscale-ch-gva-2-0) zone.

We will roll out new AppCat services shortly; [let us know](https://www.vshn.ch/en/contact/) what other services you would like to see in AppCat, and if you’d be interested in running AppCat in your own [APPUiO Managed](https://www.appuio.ch/en/offering/managed/) cluster.

You can find more information about AppCat on our [products’ website](https://products.docs.vshn.ch/products/appcat/index.html) and the [APPUiO Cloud documentation](https://docs.appuio.cloud/appcat/index.html).

AppCat is based on [Crossplane](https://crossplane.io/) and [Project Syn](https://syn.tools/) and is 100% open source! Check out the [provider-cloudscale](https://github.com/vshn/provider-cloudscale), [provider-exoscale](https://github.com/vshn/provider-exoscale), and [component-appcat](https://github.com/vshn/component-appcat) projects on GitHub.
