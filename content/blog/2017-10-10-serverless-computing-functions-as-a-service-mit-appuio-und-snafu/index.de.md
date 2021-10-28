---
day: 10
date: "2017-10-10"
month: Okt
title: Serverless Computing / Functions as a Service mit APPUiO und Snafu
summary: Was ist Serverless, auch FaaS (Function as a Service) genannt?
---
Die Begriffe "Serverless" und "FaaS (Function as a Service)" werden in jüngerer Zeit immer öfter in Artikeln erwähnt. Um was geht es eigentlich bei diesem Thema? Unter "FaaS" versteht man die Möglichkeit, eine Programmfunktion "in der Cloud" zu betreiben. Dabei speichert der Entwickler die gewünschte Funktion (egal in welcher Programmiersprache abgefasst, so lange vom Anbieter unterstützt) im FaaS Service der Wahl und ruft diese z.B. über HTTP oder einen Servicebus auf. Dabei muss der Benutzer der Funktion sich weder um die Ausführungsumgebung, Skalierung noch die Konfigurationsdetails eines Applikationsservers kümmern. Daher kommt auch der Begriff "Serverless", welcher sagen möchte, dass die Funktion "einfach läuft", sozusagen ohne Server. Eine Funktion kann eine einfache "Eingabe-Verarbeitung-Ausgabe" Funktion sein, komplexe Berechnungen durchführen oder Daten aus anderen externen Diensten beziehen, verarbeiten und speichern.




Der Einsatz von FaaS macht vor allem dann Sinn, wenn es sich um eine spezialisierte Funktion handelt, welche von diversen Microservices verwendet wird. Auch ökonomisch lässt sich der Einsatz von Funktionen in der Cloud gut begründen: Bezahlt wird für der einzelne Funktionsaufruf (je nach Anbieter). Wird die Funktion nicht genutzt, fallen auch keine Kosten an. Dies ist ein "echtes" Cloud Modell, ganz im Sinne von "Pay per Use".






#### Unser Beitrag mit APPUiO und ZHAW SPLab

Zusammen mit dem ZHAW [Service Prototyping Lab (SPLab)](https://blog.zhaw.ch/icclab/category/labs/splab/) arbeiten wir im Rahmen eines KTI ([Kommission für Technologie und Innovation](https://www.kti.admin.ch/kti/de/home.html)) Projekts unter dem Namen "[MOSAIC](https://blog.zhaw.ch/icclab/mosaic/)" an Lösungen rund ums Thema FaaS auf APPUiO. Neben einigen Papers (verlinkt im Blogpost von SPLab "[Snafu – The Swiss Army Knife of Serverless Computing](https://blog.zhaw.ch/icclab/snafu-the-swiss-army-knife-of-serverless-computing/)") entstand auch ein neues Open Source Projekt: [snafu - Snake Functions. The Swiss Army Knife of Serverless Computing](https://github.com/serviceprototypinglab/snafu). Das Projekt bietet nebst einer lokale Entwicklungsumgebung auch eine Ausführungsumgebung, um Funktionen auf APPUiO zu betreiben. Dabei lassen sich auch Funktionen z.B. von AWS Lambda, Google Cloud Functions oder OpenWhisk importieren und exportieren. So hilft das Tool sowohl beim Entwickeln von Funktionen für die Cloud als auch bei deren Betrieb.






#### Serverless Tools

Natürlich gibt es nicht nur Snafu. Es sind mittlerweile eine ganze Reihe von Kandidaten am Markt:




* [Kubeless](http://kubeless.io/) von Bitnami (ehemals Skippbox)



* [Fission](http://fission.io/) von Platform9 Systems



* [IronFunctions](http://open.iron.io/) von [Iron.io](http://Iron.io)


* [Funktion](https://funktion.fabric8.io/) von Fabric8 / Red Hat



* [OpenWhisk](http://openwhisk.incubator.apache.org/) von der Apache Foundation (Incubator Projekt)
Erst vor kurzem hat sich Red Hat für Apache OpenWhisk entschieden, wie sie in einem Blogpost darlegen: [Red Hat and Apache OpenWhisk](https://developers.redhat.com/blog/2017/06/07/red-hat-and-apache-openwhisk/). Der Plan ist, OpenWhisk als Bestandteil von OpenShift zu integrieren. Es bleibt definitv spannend auf dem Markt, welchen wir sehr nahe verfolgen. Unser Ziel ist es, Funktionen in der Cloud auf APPUiO anbieten zu können und das mit dem passenden Werkzeug.






#### Snafu - Swiss Army Knife of Serverless Computing

Snafu kann einerseits als lokale Entwicklungsumgebung dienen, andrerseits aber auch zum Betrieb von Funktionen auf OpenShift. Eine Besonderheit von Snafu ist die Unterstützung des Im- und Exports von Funktionen anderer Anbieter und Tools, wie z.B. AWS Lambda, Google Cloud Functions oder OpenWhisk. Es kann auch dazu benutzt werden, Funktionen zwischen verschiedenen Umgebungen zu migrieren.




Architekturdiagramm von Snafu:




![continuous process](Archsnafu.png)




Und so bekommt man Snafu auf die lokale Entwicklungsumgebung (Anleitung für Linux oder MacOS):




1 Code clonen

```
git clone https://github.com/serviceprototypinglab/snafu.git
cd snafu
```

2 Python Virtualenv erstellen

```
python -m venv --prompt snafu pyvenv
. pyvenv/bin/activate
```

3 Dependencies installieren

```
pip install pyesprima flask
```

4 Snafu benutzen

```
% ./snafu [-h]
% ./snafu --executor <e> --logger <l> --convention <c>
```

Am Beispiel der mitgelieferten Hello World Funktion:



```
./snafu --executor=inmemory --logger=csv --connector=cli functions/helloworld.py
» module: functions/helloworld.py
  function: helloworld.helloworld
+ logger: csv
+ executor: java
+ executor: c
+ executor: javascript
+ executor: inmemory
+ connector: cli
Function name:helloworld.helloworld
[1503929132.298][140259308811456][function:helloworld.helloworld]
[1503929132.298][140259308811456][response:helloworld.helloworld/[]]
[1503929132.298][140259308811456][result:Hello, .]
[1503929132.298][140259308811456][time:0.003ms]
[1503929132.298][140259308811456][overalltime:0.011ms]
Hello, .
Function name:^C
Terminated.
```

In diesem Beispiel wird die Funktion `helloworld.helloworld` interaktiv ausgeführt und die Ausgabe nach `stdout` geschrieben. Die Datei `snafu.csv` beinhaltet nun eine Information über den Aufruf der Funktion für eine spätere Auswertung, wie z.B. zur Verrechnung.






#### Snafu auf OpenShift / APPUiO

Snafu kann in verschiedenen Modi betrieben werden. Einer davon ist die direkte Ausführung von Funktionen, welche im Filesystem gespeichert sind. Das erste Beispiel demonstriert diesen Modus, wobei die auszuführende Funktion in einer [ConfigMap](https://docs.openshift.org/latest/dev_guide/configmaps.html) (Kubernetes Objekt zur Speicherung der Applikationskonfiguration) gespeichert und Snafu über einen Volume Mount zur Verfügung gestellt wird. Die Speicherung von Funktionen in einer ConfigMap ist als Proof-of-Concept zu verstehen, für einen produktiven Betrieb sind in diesem Beispiel wichtige Themen wie Source Code in Git, CI/CD Rollback, etc. nicht berücksichtigt.




Mit folgenden zwei Schritten wird eine einfache Hello World Funktion auf OpenShift deployed:

1 Neues OpenShift Projekt erstellen oder bei APPUiO bestellen


2 OpenShift Template initialisieren:

```
PROJECT=<myproject>
oc -n $PROJECT process -f https://raw.githubusercontent.com/serviceprototypinglab/snafu/master/openshift/snafu-template.yaml | oc -n $PROJECT create -f -
```

Damit ist Snafu installiert und läuft. Das Beispiel startet die Funktion helloworld.helloworld aus der ConfigMap "functions" und stellt sie auf APPUiO unter [http://snafu-$PROJECT.appuioapp.ch/invoke/helloworld.helloworld](http://snafu-$project.appuioapp.ch/invoke/helloworld.helloworld) zur Verfügung. Um nun eigene Funktionen zu installieren, editiert man die ConfigMap "functions" und startet den Pod neu, z.B. durch Löschen oder Auslösen eines neuen Deployments. Snafu selbst ist in der ConfigMap "config" konfiguriert.




Ein weiterer Modus ist der sogenannte "Control Mode". In diesem verhält sich Snafu wie z.B. ein Amazon Lambda Backend und kann entsprechend mit den AWS Tools benutzt werden. Das folgende Beispiel zeigt, wie Snafu als AWS Lambda-kompatibler Dienst auf OpenShift deployed werden kann:






1 Neues OpenShift Projekt erstellen oder bei APPUiO bestellen


2 OpenShift Template initialisieren:

```
PROJECT=<myproject>
oc -n $PROJECT process -f https://raw.githubusercontent.com/serviceprototypinglab/snafu/master/openshift/snafu-control-template.yaml | oc -n $PROJECT create -f -
```

3 [AWS CLI](https://github.com/aws/aws-cli) verwenden

```
aws configure
# AWS Access Key ID [None]: mykey
# AWS Secret Access Key [None]: myaccesskey
# Default region name [None]: invalid
# Default output format [None]:
alias aws="aws --endpoint-url http://snafu-control-$PROJECT.appuioapp.ch"
aws lambda list-functions
aws lambda invoke --function-name lambda.lambda_handler --payload '{"event": "test"}' ./test.out
cat test.out
Hello from Lambda
```

#### Weiterführende Informationen

Hat dieser Beitrag Ihr Interesse an Serverless / Functions as a Service geweckt? Gerne beantworten wir Ihre Fragen und helfen bei der Implementation: [hello@appuio.ch](mailto:hello@appuio.ch) oder [info@vshn.ch](mailto:info@vshn.ch).




**Weitere Informationen zu Snafu können hier gefunden werden:**

* [https://blog.zhaw.ch/icclab/files/2014/07/serverless-2017-jun.web_.pdf](https://blog.zhaw.ch/icclab/files/2014/07/serverless-2017-jun.web_.pdf): Serverless Applications: Tools, Languages, Providers and (Research) Challenges
* [https://arxiv.org/abs/1701.05945](https://arxiv.org/abs/1701.05945): Exploiting the Cloud Control Plane for Fun and Profit
* [https://blog.zhaw.ch/icclab/snafu-the-swiss-army-knife-of-serverless-computing/](https://blog.zhaw.ch/icclab/snafu-the-swiss-army-knife-of-serverless-computing/): Snafu – The Swiss Army Knife of Serverless Computing
* [https://blog.zhaw.ch/icclab/research-directions-for-faas/](https://blog.zhaw.ch/icclab/research-directions-for-faas/): Research Directions for FaaS
* [https://blog.zhaw.ch/icclab/running-google-cloud-functions-in-openshift/](https://blog.zhaw.ch/icclab/running-google-cloud-functions-in-openshift/): Running Google Cloud Functions in OpenShift








