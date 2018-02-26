---
title: "Continuous Delivery Pipelines auf APPUiO"
date: 2017-10-13
tags: example
---

<p class="blog-lead">The only thing we know about the future is that it will be different.\" - Peter Drucker</p>
<p>Continuous Integration, Continuous Deployment und Continuous Delivery sind sehr populäre Begriffe in Zeiten von DevOps, der agilen Software Entwicklung und der Digitalisierung. Die genaue Bedeutung und Definition werden immer noch im Internet diskutiert. Mit diesem Blogpost möchten wir euch den Begriff Continuous Delivery näher bringen und euch aufzeigen, wie wir zusammen mit verschiedenen Kunden auf APPUiO den ganzen Prozess komplett automatisiert haben. Die Kunden sind nun in der Lage ihren Code, ihre Features und Bugfixes innerhalb von kürzester Zeit automatisch zu testen und in die Produktion zu deployen.</p>
<p>"Early and continuous delivery" von wertbringender Software - so definierte das Agile Manifesto (eine Verkündung der 12 Prinzipien der iterativen Softwareentwicklung) bereits 2001 die Zufriedenstellung des Kundens. Der Begriff Continuous Delivery steht für einen komplexen Ablauf, welcher voll automatisiert und auf Wunsch per Knopfdruck ausgeführt werden soll. Continuous Delivery soll helfen, neue Features, Konfigurationen oder Bugfixes schnell und sicher in die Produktion zu bringen. Dies erlaubt ein frühes Feedback vom Kunden und dadurch eine schnelle Reaktion auf veränderte Marktanforderungen. Der komplette Releaseprozess soll automatisiert ablaufen und dadurch reproduzierbar und auditierbar werden. Automatisierte Tests sollen dabei helfen, Fehler früh zu erkennen und zu beheben. Continuous Delivery heisst also schneller am Markt zu sein, Inhalte eines Releases zu verkleinern und dadurch das Risiko zu reduzieren. Höhere Qualität, weniger Kosten, ein besseres Produkt und glücklichere Teams sind das Resultat.</p>
<h4>Continuous Delivery hat folgende Eigenschaften:</h4>
<ul>
<li>Vollständige Automatisierung der gesamten Pipeline vom Auschecken des Codes bis zum Deployment in die Produktion, um alle Arten von Changes, Features, Bugs, Configuration Changes etc. zuverlässig, sicher und schnell den Benutzern zur Verfügung zu stellen. Einzig die Freigabe für die Produktion wird manuell gemacht zwecks zusätzlicher Kontrolle.

<li>Jeder Commit der die CI-/CD-Pipeline erfolgreich durchläuft ist ein potentieller Release.<br></li>

<li>Im Gegensatz zu Continuous Deployment wird der Schritt vom Deployment in die Produktion manuell per Knopfdruck ausgelöst. So kann aus fachlicher oder technischer Sicht entschieden werden, welcher Release wann in Produktion geht. Im Rahmen von Continuous Deployment werden sämtliche potentielle Releases direkt und vollautomatisch in Produktion überführt. Konzepte wie Canary Releasing, Rolling Update, Blue-Green Deployment müssen in hochverfügbaren Umgebungen umgesetzt werden.<br></li>

<li>Möglichst identische Umgebungen für Entwicklung, Testing, Integration und Produktion.<br></li>
</ul>
Weiterführende Informationen findet ihr im Buch von Jez Humble “Continuous Delivery” oder auf seiner WebPage <a href="http://www.continuousdelivery.com">continuousdelivery.com</a>.
<br><br>
<h4>Vorteile von Continuous Delivery</h4>

<p><b>Weniger manuelle Tasks, geringere Kosten:</b> Durch die Automatisierung des Releaseprozesses braucht es nicht mehr Stunden, um Code zu paketieren, in die Stages du deployen und manuell zu testen. Diese Schritte werden auf Knopfdruck ausgeführt und reduzieren den Aufwand massiv.<br>
<br>
<b>Kürzere Reaktionszeiten/Time-to-Market (schnelleres Feedback, "Fail-fast"):</b> Continuous Delivery (CD) bietet uns die Möglichkeit, täglich Features bis in die Produktion einzuspielen. Daher müssen wir nicht mehr auf ein Wartungsfenster in ferner Zukunft warten. Wir sind mit Neuigkeiten schnell am Markt, schaffen uns einen Marktvorteil, erkennen Fehler viel früher und erhalten zeitnah Rückmeldung von unseren Kunden.<br>
<br>
<b>Risikominimierung durch kleinere Releases und automatisierte Tests:</b> Wie z.B. der DevOps Report von Puppet empirisch nachweist, sind die Risiken durch Continuous Delivery massiv kleiner. Kleine, mehrmals täglich ausgerollte Releases, die Möglichkeit, schnell auf Probleme reagieren zu können sowie die gut dokumentierten Änderungen minimieren das Risiko drastisch. Früh erkannte Fehler sind schneller zu beheben und daher oft weniger schmerzhaft.<br>
<br>
<b>Reproduzierbarkeit dank Infrastructure as Code:</b> Durch die Automatisierung ist jede Änderung dokumentiert und kann zu jederzeit rückgängig gemacht werden. Die Infrastruktur, der Code, wird aus einem Repository gebuildet und ist daher versioniert.<br>
<br>
<b>Kundenzufriedenheit steigt:</b> Weil bereits kleinste Änderungen dem Kunden zur Verfügung gestellt werden können, kann sein Feedback kontinuierlich in die Entwicklung einfliessen. Daher erhält dieser zum Schluss auch wirklich sein gewünschtes Produkt.<br>
<br>
<b>Collaboration:</b> Die Automatisierung des Release-Prozesses ist essentiell und die Probleme bei der Auslieferung von Features haben einen wesentlichen Beitrag zur Entstehung des DevOps-Modells geliefert. Die teamübergreifende Zusammenarbeit kann wesentlich verbessert werden, was Reibungspunkte in Firmen reduziert.<br>
<br>
<b>Mehr Qualität, weil Bugs frühzeitig erkannt werden:</b> Durch die automatisierten Tests (Integration, Acceptance etc.) können Fehler früher erkannt und noch bevor diese in der Produktion ankommen behoben werden. Dadurch sinkt das Risiko und die Qualität steigt.<br>
<br>
<b>Umgebungen können einfach zusammengeschlossen werden:</b> Wie im folgenden Beispiel gezeigt wird, können auf APPUiO die verschiedenen Stages sehr einfach zusammengeschlossen werden. Neue Features und Bugfixes müssen nicht mehr aufwendig auf die verschiedenen Umgebungen manuell kopiert werden.<br></p>
<br>
<h4>Wie wird es gemacht? Beispiele anhand von APPUiO</h4>
<p>Um eine Continuous Delivery Pipeline aufzusetzen und von diesen Vorteilen zu profitieren bietet APPUiO einige Werkzeuge. Mit der OpenShift Container Platform Version 3.4 wurden integrierte Build und Delivery Pipelines eingeführt. Diese technische Neuerung erlaubt es uns, Build- und Delivery-Pipelines direkt in APPUiO zu integrieren und so die volle Flexibilität und Power einer auf Jenkins basierenden Build-Infrastruktur per Knopfdruck - quasi as-a-Service - zu beziehen. Im Gegensatz zum Source to Image (S2I)-Buildverfahren, bei dem der Applikationssourcecode im Rahmen eines einzigen Steps in ein Docker Image verpackt wird, haben wir mit Pipelines die Möglichkeit, deutlich komplexere Abläufe, wie sie in der Realität oft vorkommen, zu implementieren.</p>

<p>So beinhaltet bei uns eine typische Pipeline die folgenden Schritte:</p><br>
<ul>
<li>Source Code kompilieren, Codeanalyse und Unit-Tests</li><br>

<li>Integrationstests und Paketierung (Docker Image, Java Archive)</li><br>

<li>Deployment auf eine Dev-Umgebung</li><br>

<li>Automatisierte Tests gegen dieses Deployment</li><br>

<li>Deployment auf Test-Umgebung</li><br>

<li>Systemtest</li><br>

<li>Deployment auf Produktion</li><br>

<li>Smoketests</li><br>
</ul>
<p>Konkret werden sogenannte Jenkins Pipelines als Teil des Source Codes resp. direkt als Teil der Buildconfig der Pipeline als sogenanntes <a href="https://jenkins.io/doc/book/pipeline/jenkinsfile/">Jenkinsfile</a> konfiguriert.
Beim Erstellen eines solchen Pipeline Builds startet OpenShift dynamisch einen Jenkins und führt die Pipeline darin aus. Benötigte Buildnodes (bspw. Nodejs, Maven, Ruby,...) können dynamisch als Buildnodes in der Pipeline angegeben werden. Sie werden direkt via Jenkins bei Bedarf über den Imagestream referenziert, als Pod deployed und als Step ausgeführt.
Die Integration der Pipeline direkt in APPUiO sieht dann wie folgt aus:</p>
<br>
<img src="/images/pipeline_ocp_view2.png" alt="continuous process"/><br>
<br>
<p>Und die analoge Ansicht im integrierten Jenkins:</p><br>
<img src="/images/pipeline_jenkins_view1.png" alt="continuous process"/>
<br>
<p>Auch hier sind die Vorteile vielfältig:
<ul>
<li>Sehr gut integriert, Frontend und Backend, Pipelines können auf OpenShift-Ebene direkt kommunizieren.</li><br>

<li>Buildnodes als Imagestream im OpenShift-Projekt</li><br>

<li>Secrets werden direkt übernommen, Berechtigungen um Builds und Deployments auf OpenShift auszuführen sind vorkonfiguriert.</li><br>

<li>Möglichkeit Pipelines stateless zu implementieren, also keine komplexen Buildjobs auf dem Jenkins Master einrichten</li><br>

<li>Volle Flexibilität von Jenkins Pipelines, beliebige Workflows implementierbar</li><br></p>
</ul>
<p>In einem technischen Blogpost werden wir zu einem späteren Zeitpunkt konkret aufzeigen, wie Pipelines in APPUiO integriert werden. Unter <a href="https://github.com/appuio/simple-openshift-pipeline-example">https://github.com/appuio/simple-openshift-pipeline-example</a> haben wir eine simple Beispiel-Pipeline abgelegt.</p>
<h4>Herausforderungen von Continous Delivery</h4>

<p><b>Organisation und Kultur:</b> APPUiO bietet ein Tooling für die Automatisierung des Releaseprozesses und ist ein wichtiger Teil in dieser schnelllebigen IT-Welt. Eine solche Veränderung hat aber auch Einfluss auf eine Organisation in einem Unternehmen und auf dessen Kultur. Jahrelang wurden Firmen nach Silos aufgeteilt und jeder Mitarbeiter hatte seine spezifische Aufgabe. Nun ist die teamübergreifende Zusammenarbeit gefragt, T-Shaped Engineers, Infrastructure-as-Code usw. Der Mensch ist ein Gewohnheitstier und hat Mühe mit Veränderungen. Daher muss bei einer solchen Umstellung auch ein spezielles Augenmerk auf die Kultur gelegt werden. Ein kultureller Wandel benötigt Zeit.<br>
<br>
<b>ISO-Standards, standardisierte Prozesse und Compliance</b> sind wichtige Themen in einem Unternehmen. Dadurch sind auch der Release- und Change-Prozess betroffen. Wie soll es möglich sein, täglich Releases in der Produktion einzuspielen, wenn deren Freigabe Tage dauert? Prozesse und deren Abläufe müssen, wie der Rollout selber, automatisiert und vereinfacht werden.<br>
<br>
<b>Technische Umsetzung (CI/CD ToolChain, Software Architektur):</b> Die sogenannte CI-/CD-Toolchain wird mit APPUiO mitgeliefert. Doch die technische Umsetzung betrifft auch die Applikation, welche auf APPUiO deployed werden soll. Eine Legacy Software, die nur manuell updatet werden kann, eignet sich wohl eher weniger für ein Continuous Delivery. Das 12 Factor App Manifest kann hier helfen die wichtigsten Punkte für die Entwicklung einer cloudfähigen Applikation zu berücksichtigen.<br>
<br>
<b>Automatisierte Tests</b> können den manuellen Aufwand massiv reduzieren und die Qualität steigern. Doch Integration und End-to-End Tests zu automatisieren kann aufwendig sein und sie müssen, zum Teil, mit den Änderungen am Code angepasst werden. Die Frage stellt sich auch immer, wie kann ich diese Tests automatisieren und habe ich an alle Test Cases gedacht.</p>
<h4>Fazit</h4>
<p>Wie bereits Peter Drucker erläutert hat, ist die einzige Konstante in der Zukunft die Veränderung. Die heutige Zeit verlangt nach Agilität und schnellem Feedback. Auf Marktveränderungen muss in kurzer Zeit reagiert werden können. Für die IT ist es deshalb wichtig, Anpassungen und neue Features in kurzer Zeit in die Produktion bringen zu können - ohne dass die Qualität darunter leidet.<br>
<br>
Durch Continuous Delivery werden nicht alle Problemfelder beseitigt, die benötigt werden, um mit der Geschwindigkeit der heutigen Zeit standhalten zu können. Ein wichtiger Teil ist auch die Kultur in einem Unternehmen, die Zusammenarbeit und die Architektur der Software. Wir unterstützen euch gerne bei der Integration von Pipelines auf APPUiO oder bei der Automatisierung und Standardisierung eures Entwicklungsprozesses. Auch im Bereich Kultur, DevOps, der Zusammenarbeit in einem Unternehmen oder der Software Architektur haben wir über die Jahre viel Erfahrung gesammelt und geben diese sehr gerne weiter.</p>
