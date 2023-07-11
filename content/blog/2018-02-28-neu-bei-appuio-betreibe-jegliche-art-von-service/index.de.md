---
day: 28
date: "2018-02-28"
month: Feb
title: 'Neu bei APPUiO: Betreibe jegliche Art von Service'
summary: Von Beginn an unterstützt APPUiO dank OpenShift jegliche Art von Applikationen. Neu ist sogar der Zugriff vom Internet via TCP oder UDP auf die Services möglich.
---
Durch die Containertechnologie ist es möglich, nahezu jede Applikation auf APPUiO zu deployen. Die grösste Einschränkung war bis jetzt, dass der Zugriff vom Internet aus nur über HTTP oder HTTPS möglich war. Das ist ab sofort anders! Wir unterstützen neu den Zugriff vom Internet via TCP oder UDP auf jede Art von Applikation, die auf APPUiO läuft.

#### Und so funktioniert es

Da sich Services im Moment noch nicht über das OpenShift Webinterface erstellen lassen, muss dies über den Command Line Client oc gemacht werden. Dies ist aber ganz einfach:



1. Anmelden an APPUiO

```
oc login console.appuio.ch
```



2. Service erstellen (Beispiel mit TCP)

```
oc -n MYPROJECT create service loadbalancer mytcpservice --tcp=587:587
```

Hinweis: Dieser so erstellte Service selektiert automatisch alle Pods mit dem Label app=mytcpservice



3. Zugewiesene externe IP Adresse abrufen

```
oc -n MYPROJECT describe service mytcpservice
```

Die IP Adresse findet man im Feld "External IPs".



Nun ist der Service, der in den vom Service selektierten Pods läuft, über die automatisch zugewiesene externe IP-Adresse und dem definierten Port erreichbar.



Die offizielle Dokumentation zu diesem Feature ist unter [docs.appuio.cloud](https://docs.appuio.cloud/user/how-to/non-http-services.html) zu finden. Ein solcher Service mit einer öffentlichen IP-Adresse kostet CHF 0.35 pro Tag. Bei Fragen stehen wir jederzeit unter [support@appuio.ch](mailto:support@appuio.ch?Subject=non-http) zur Verfügung. Wir helfen auch gerne bei der Implementation Ihres Services auf APPUiO.


