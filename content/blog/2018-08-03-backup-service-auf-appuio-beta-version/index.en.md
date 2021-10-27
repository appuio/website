---
day: 3
date: "2018-08-03"
month: August
title: Backup Service auf APPUiO - Beta Version
summary: |
  Der Backup Service auf APPUiO geht in die Beta Version.
---
Ab sofort bieten wir auf APPUiO einen voll integrierten Backup Service an. Der Backup Service speichert die Daten eines persistenten Volumes (PVC) regelmässig auf einen S3-Objektspeicher der Wahl. Als Anwender der Plattform definiert man selber, wo (Cloud-Anbieter und geographisch) die Daten gespeichert werden sollen. Wir empfehlen den Object Storage von cloudscale.ch.

Technisch basiert der Backup Service auf [Restic](https://restic.net/) und wird über einen Backup Operator gesteuert.

In der Beta Version wird noch kein aktives Monitoring der Backups gemacht und es fallen keine zusätzlichen Kosten zum Backup Storage an. Sobald der Backup Service die Beta Version beendet hat informieren wir über das Preismodell.

Aktuell werden automatisch alle "ReadWriteMany" PVCs im Backup gespeichert. Geplant ist, dass auch andere Volumes wie Datenbanken konsistent ins Backup aufgenommen werden können.

Die Dokumentation ist unter [docs.appuio.ch](https://docs.appuio.ch/en/latest/baas.html) zu finden. Über ein Feedback unter [support@appuio.ch](support@appuio.ch) freuen wir uns.


