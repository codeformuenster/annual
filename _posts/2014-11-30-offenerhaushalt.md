---
layout: blog
title: Offenerhaushalt Münster
author: Mila Frerichs
category: blog
---
Der Haushalt von Münster von 2011-2012 ist nun auf [offenerhaushalt.de](http://offenerhaushalt.de/haushalt/muenster/) veröffentlicht.
Es hat ein wenig länger gedauert, aber wir haben es geschafft die Daten so aufzubereiten, dass sie in das vorhandene Schema von [offenerhaushalt.de](http://offenerhaushalt.de) passen.

## Wie wir die Daten bekommen haben?
Die Daten haben wir von den Piraten Münster bekommen. Siehe diesen [Tweet](https://twitter.com/piratenms/status/446918301416177664).

## Was haben wir mit den Daten gemacht?
Die Daten haben wir mittels [OpenRefine](http://openrefine.org/) aufbereitet. Dies hat ein wenig länger gedauert, da die Art wie die Verwaltung diese Daten zur Verfügung gestellt hat es nicht sehr einfach gemacht hat. 
[Hier](https://github.com/codeformuenster/haushalt-muenster/blob/master/openrefine.json) ist das OpenRefine Script zu finden.
Anschließend haben wir mittels R die Daten so umgewandelt, dass [OpenSpending](http://openspending.org/), die Plattform die [offenerhaushalt.de](http://offenerhaushalt.de) benutzt, diese verstehen kann.

## Was gibt es zu entdecken?
Zu sehen sind die Einnahmen und Ausgaben der Stadt Münster von 2009-2012. Gruppiert sind diese nach Fachbereich. 
Wir würden uns freuen, wenn wir die Daten detaillierter bekommen könnten um noch mehr Informationen aus diesen zu bekommen. Und natürlich die Daten von 2013 bis heute. 

Viel Spaß beim entdecken.
