# Themen / TODO

- 404 handling (ohne das der Kontext verloren geht)
- Error Testbutton einfügen und verhalten testen
- globalen Kontext für Datenablage anlegen mit hook dazu
- Statische Seiten wie FAQ, mit *.md Vorlagen und Kategorien.

- docker image zum laufen lassen der app
- prisma und sqlite bzw postgresql für db anbindung
-- Demoseite zur Datenerfassung aus ausgabe
- server actions
- api route mit db zugriff

- authentication anbinding
- payment anbindung
-- seite vorlage für subscription service preisliste


# Notifications

* Ein Timer löscht immer alle Nachrichten nach 4 sec, wenn also nach 3,5 sec eine neue Meldung kommt dann wird diese sofort wieder gelöscht!
Evtl. kann man hier eine ID verwenden und den Code im Timer nur laufen lassen wenn die ID passt, somit würde immer nur die letzte Nachricht nach genau 4 sekunden gelöscht werden. 

# 404

* Wird eine unbekannte URL aufgerufen geht der Theme verloren. Bei einem Dark Theme geht die Seite und die Anwendung auf ein light Theme (default) zurück!!! 
Ich weiß nicht genau wieso.

# AppBar / Drawer

* Es können aktuell nur Links ohne Icons angegeben werden, die Ergänzung von Icons wäre nicht schlecht.
Evtl. auch die Möglichkeit Trenner einzufügen o.ä.
Evtl. auch die Konfiguration über eine eigene Datei machen (kann auch ts sein, muss nicht json sein).

