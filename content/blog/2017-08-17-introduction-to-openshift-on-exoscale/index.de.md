---
day: 17
date: "2017-08-17"
month: Aug
title: Introduction to OpenShift on Exoscale
summary: OpenShift is to Kubernetes similar to what a Linux distribution is to the kernel. In this blogpost we show how to integrate OpenShift on <a target="_new" href="https://www.exoscale.ch">Exoscale</a>
---
The world is talking about the [Kubernetes Project](https://kubernetes.io/) - but did you hear about OpenShift? It’s an open source product based on the open source projects Kubernetes and Docker plus a container builder/registry, and a Web GUI to manage it all. This blog post will introduce you to OpenShift and give some hints why to use it, how to get started, and where you can get professional support and managed services.

#### What is OpenShift and why should you use it?

It describes itself as “the industry’s most secure and comprehensive enterprise-grade container platform based on industry standards, Docker and Kubernetes”. It’s much more than that - it gives you a complete Kubernetes cluster with many cool features: integrated build pipelines, Docker Registry, Application router (for getting traffic into the cluster), security based on RBAC and SELinux, Web Console for easy access, central logging of all Pod output, Metrics to measure Pod performance, Installation and upgrade using Ansible Playbooks, Source-to-Image builds, and much much more.

As a Linux distribution acts to the Linux Kernel, OpenShift is a Kubernetes distribution with all the needed tools and tricks to make full use of it.

OpenShift comes in two flavors:




* [OpenShift Container Platform](https://www.openshift.com/container-platform/): Software product to install in your data center and get support by Red Hat.
* [OpenShift Origin](https://www.openshift.org/): The open source upstream project with a very active GitHub [repository](https://github.com/openshift/origin).
![continuous process](feature_process.svg)

OpenShift enables you to develop faster - after committing your changes in GIT it solves container image build, storage, deploy, scaling, monitoring, and logging for you so you don’t have to do it. The integrated build and deployment processes help you get the developed application to the customer as fast as possible. It enables you to deploy hourly or even faster, and scale computing resources per project automatically with your user base.

#### How to get started?

There are many many ways to get started, here are a few hints and examples:




* Install your own OpenShift cluster for example on Exoscale with the official [Ansible Playbooks](https://github.com/openshift/openshift-ansible). By using these playbooks you learn to customize every inch of the installation and configuration, and they also help you upgrade from one version to another. Documentation about these playbooks can be found inside the Git repository or on the [documentation page](https://docs.openshift.org/latest/install_config/install/advanced_install.html).
* Start a local OpenShift cluster on your workstation with [Minishift](https://github.com/minishift/minishift) (based on Minikube) or with the fancy command oc cluster up. Just download the client binary from the GitHub [releases page](https://github.com/openshift/origin/releases), unpack it, and then run the oc cluster up command. This will launch a complete OpenShift instance on your local Docker Engine:
```
% oc cluster up
Starting OpenShift using openshift/origin:v3.6.0 ...
Pulling image openshift/origin:v3.6.0
Pulled 1/4 layers, 28% complete
Pulled 2/4 layers, 83% complete
Pulled 3/4 layers, 88% complete
Pulled 4/4 layers, 100% complete
Extracting
Image pull complete
OpenShift server started.

The server is accessible via web console at:
    https://127.0.0.1:8443

You are logged in as:
    User: developer
    Password: <any value>

To login as administrator:
    oc login -u system:admin
% oc new-app https://github.com/appuio/example-php-sti-helloworld.git
[...]
% oc expose svc example-php-sti-helloworld
[...]
% curl -s http://example-php-sti-helloworld-myproject.127.0.0.1.nip.io/ | grep title
    APPUiO PHP Demo
```

* Have a look at the APPUiO [Techlabs](https://github.com/appuio/techlab) on GitHub which is a free step-by-step introduction to get started. We offer free [half-day workshops](https://appuio.ch/techlabs.html).
* The APPUiO [Microservices Example](http://docs.appuio.ch/en/latest/services/01_introduction.html) documentation gives some insight for developers on how a Microservice application can be built and deployed on OpenShift, describing tools like Gitlab CI and Jenkins for the build pipelines.




There is a lot of documentation available from upstream. It’s a great source to read about every little detail. You’ll find documentation for both the [OpenShift Container Platform](https://docs.openshift.com/) and [OpenShift Origin](https://docs.openshift.org/). APPUiO also provides a [community-driven documentation](http://docs.appuio.ch/en/latest/services/01_introduction.html).

This blog post was originally published on the [Exoscale blog](https://www.exoscale.ch/syslog/2017/08/15/intro-openshift-exoscale/).


