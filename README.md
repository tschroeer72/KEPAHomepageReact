# NEXT / MUI Start Vorlage

Eine Start Vorlage für NEXT 14 (app-Router) mit Material UI (MUI) in welcher schon veschiedene Features eingebaut sind.

## Features

Die Vorlage bietet folgende Features:

* NEXT.js 14 App-Router
* MUI Theme
* Responsive Desing Navigation
* Dark/Light Theme Umschalter
* Einfach zu verwendende Benachrichtigunsleiste

## Getting Started

Installation und laufen lassen:

```bash
npm i

npm run dev
```

Die Anwendung läuft dann lokal unter [http://localhost:3000](http://localhost:3000).

## Anleitung

Die Features der Vorlage können auf der Startseite ausprobiert werden. Der Code dazu findet ihr in der Demo-Komponente (components\Demo.tsx), dort wird auch die Verwendung dieser gezeigt.

## Erste Schritte

Um aus der Vorlage euere eigene Anwendung zu machen solltet ihr folgende Schritte unternehmen:

* Name in package.json anpassen.

### Theme

Das MUI-Theme kann in components\theme\theme.ts angepasst werden. Dort wird zwischen dem Dark- und dem Light-Theme unterschieden, beide können unabhängig voneinander individualisiert werden. 

Zum einfachen Anpassen des Theme kann der [MUI-Theme-Creator](https://zenoo.github.io/mui-theme-creator/) verwendet werden.

### App Bar

Die AppBar bzw. der Drawer können in components\AppBar.tsx angepasst werden. Dort können die Links für die Menüeinträge in der Konstanten "items" definiert werden. 
Diese Einträge werden dann in die AppBar und in den Drawer (sichtbar in Mobilen Anwendung) eingefügt.