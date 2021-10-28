---
day: 16
date: "2020-06-16"
month: Jun
title: Productive workload with OpenShift 4
summary: Almost a year after the initial release of OpenShift 4, we believe the OpenShift Container Platform (OCP) version 4.4 is ready for productive workloads.
featured_image: Produktiver_Workload.png
---
Our experience has shown that it made sense to wait with upgrades - or in the case of OpenShift 4 with migrations - until all the initial issues of the new major release were resolved. Therefore, since the first release 4.1 we have put all OpenShift versions through their paces and checked their maturity level. Right at the beginning we wrote a [blog post](https://appuio.ch/blog.html#2019-Aug-29) about the essential differences to version 3. Subsequently, VSHN and Puzzle, the companies behind APPUiO, gained experience with the new versions. For example, some engineers from VSHN spent a week dedicated to testing the latest version on their [managed platform](/en/offering/managed/). At Puzzle, experience was gained during a [mid-week](https://appuio.ch/blog.html#2020-Jan-30) (a "project week" of the middleware team) on how best to support customers with [self-managed platforms](/offering/self-managed/). We shared this experience with our community at our last APPUiO BeerUp.

**Advantages of switching to OpenShift 4**

From our point of view, the latest OpenShift version brings many advantages for both the operator and the user.

Meanwhile, the level of maturity of the newly appointed operators leaves little to be desired. For the operation of a cluster, updates are on the one hand much faster and on the other hand much easier and more stable. This also simplifies operations, as operators can react to changes and correct them if necessary. Operators are a new concept also for the operation of applications as users of OpenShift. This new world of course requires a training period until debugging feels as easy as it used to be for deployments.

The switch from Docker to Buildah for container builds now allows to build container images in a more secure way. This is a welcome innovation for all multitenant clusters such as public platform providers and corporate clusters with multiple users. With the introduction of the OpenShift Service Mesh, developers in particular will gain new insight and new possibilities to visualize, secure and optimize the communication of their applications.

A list of the [latest features](https://docs.openshift.com/container-platform/4.4/release_notes/ocp-4-4-release-notes.html) can be found here.

**Self Managed**

If the customer chooses our Self Managed product, we help him to set up the container platform, pass on our know-how and provide support in engineering and automating deployments (CI/CD).

We have already set up various OpenShift 4.3 and 4.4 platforms, whether for an public administration in Basel or an authority in Bern. We have also performed first migrations from OpenShift 3.11 to 4.3. Because there is no upgrade path, a new cluster must be built and the workload migrated. We have also already been able to implement this for various customers, e.g. [BLS](https://www.puzzle.ch/referenzen/openshift-plattform-fuer-die-bls-ag).

**Managed**

If the customer decides in favour of our Managed product, we take over the setup and additionally the operation of the container platform. In order to ensure that operations run smoothly and are automated to a large extent, a wide variety of processes must be adapted and automated. The platform must first be accurately tested. Because this takes some time, the roadmap for managed clusters is as follows, depending on the infrastructure:

▸ Google GCP Q2 2020
▸ cloudscale.ch Q3 2020
▸ Azure Q3 2020
▸ AWS Q3 2020
▸ Exoscale Q4 2020
▸ VMware Q4 2020
▸ Hyper-V Q4 2020
**Public**

For our Public product, which is dependent on the automated processes and testing of the Managed product, there will be a beta program in Q3. Customers are welcome to participate. You get early access to the OpenShift 4 platform and can test your applications on it. If you are interested in OpenShift 4, you can register for the Early Access Program here.

<!--[if lte IE 8]> <script charset="utf-8" type="text/javascript" src="https://js.hsforms.net/forms/v2-legacy.js"></script> <![endif]-->
**Trainings and Techlabs**

Of course our [APPUiO Techlab also runs on the new OpenShift version](https://appuio.ch/blog.html#2020-Mar-18). If you would like to learn more about OpenShift 4 and Operators in an afternoon, please [register here](/techlabs/openshift/). Starting this summer, we will be conducting another Techlab, the Application Migration and Modernization (AMM) Techlab. It shows you how to bring applications from your system landscape onto the new container platform. Furthermore our training material for the Operations and the Apps on OpenShift training is on the latest OpenShift version.

Do you need support with your platform or would you like to build a new platform? Get in touch with us and we will have a coffee or a beer together (can also be done remotely). Please contact us on [hello@appuio.ch](mailto:hello@appuio.ch).


