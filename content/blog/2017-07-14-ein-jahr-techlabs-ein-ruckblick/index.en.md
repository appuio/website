---
day: 14
date: "2017-07-14"
month: Jul
title: One Year of Techlabs in Retrospect
summary: ""
---
**It has been a year since [my first retrospection onto an APPUiO & OpenShift Techlab](https://www.puzzle.ch/blog/articles/2016/07/18/rueckblick-auf-das-openshift-tech-lab-in-zuerich); a year and fourteen additional techlabs. And as it's common in such a long time, a lot of things have changed: OpenShift has meanwhile graduated to version 3.5 and its webinterface, compared to version 3.1 back then, has become a lot more powerful and intuitive. But then there are things that remained constant as well, not least among them the lively interest in our Techlabs.**

When we updated OpenShift to version 3.4 a lot of things changed for APPUiO. Due to the more intuitive webinterface many operations are now accomplishable by the click of a mouse. This helps new developers to get acquainted. Nevertheless, it’s obvious that there still are quite a few challenges for starting with APPUiO, as demonstrated by the sheer number of participants and the unbroken interest in our Techlabs in both Berne and Zurich. Developers are still participating in large numbers and learning the most important steps to deploying applications into the cloud hands-on.

Other things have stayed tried-and-true, among them the basic concepts of containers. But also my happiness seeing participants getting excited about the technical possibilities they’re offered by OpenShift. And then there are some matters that keep coming up during the Techlabs. One of the questions raised most often is how to to deploy your specifically coded applications onto OpenShift. There are three fundamental ways to do that:




* OpenShift compiles the application-pod from the pure source-code, using the integrated Source-to-Image-Framework. During this process, it automatically identifies the language in question.
* OpenShift builds the application-pod using a provided Docker-file. To do that, the Docker image is built, pushed into the internal registry and finally deployed.
* OpenShift simply uses a pre-built Docker image and deploys it. (see also: [reference architecture](https://access.redhat.com/articles/2897391))




![APPUiO OpenShift S2I Deployment Pipeline](/images/Blog-Cover-Openshift-03-980x654.png)_Example of a specifically built S2I-Deployment, including the preceding build in Jenkins. The more frugal way is of course to use an already existing S2I script._

Another question posed often is for just how long our labs are available after the lab. The answer to that one is simple: For as long as you need them. Our labs are downloadable from [GitHub](https://github.com/appuio/techlab/) and one of our additional labs describes in-depth [how to establish your own OpenShift application development environment](https://github.com/appuio/techlab/blob/lab-3.4/additional-labs/development_environment.md). This should remove all obstacles to give it a try at home or at work. And of course, in true Open-Source-fashion we’re glad to receive contributions and issues in order to keep improving our Techlabs.

Piqued your interest? The next Techlabs will take place in August and September. We’re looking forward to many participants and are excited for new, informative experiences.

**Key Data Techlabs:**

APPUiO & OpenShift Techlab Berne:


 When: Thursday, August 24th, 14:00 (lasting until ca. 17:30)


 Where: Belpstrasse 37, 3007 Bern, 3rd storey (or 4th floor for our American friends)


[Registration](https://app.hatchbuck.com/OnlineForm/71621425243)




 APPUiO & OpenShift Techlab Zurich:


 When: Thursday, September 28th, 14:00 (lasting until ca. 17:30)


 Where: Neugasse 10, 8005 Zurich


[Registration](https://app.hatchbuck.com/OnlineForm/71621425242)


