# Blog Post #1 Translation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Translate `src/content/blog/ko/1.md` into English and German, creating `en/1.md` and `de/1.md` with localization-first approach.

**Architecture:** Two new markdown files under `src/content/blog/en/` and `src/content/blog/de/`. The Astro Content Layer picks them up automatically via `getPostsByLang()`. No routing changes needed.

**Tech Stack:** Astro Content Layer (markdown), existing i18n routing

---

### Task 1: Create English translation — `src/content/blog/en/1.md`

**Files:**
- Create: `src/content/blog/en/1.md`

- [ ] **Step 1: Create the file with full English content**

Create `src/content/blog/en/1.md` with the following content:

```markdown
---
title: "Replaceable Developers, Irreplaceable Developers — How Do You Live?"
description: "Deliberate ignorance. Stepping out of the comfort zone — a 5-week journey into 3D programming with AI."
pubDate: "Apr 02 2026"
heroImage: "../../../assets/blog/water-caustics-thumbnail.png"
cardTitle: "How Will You Code in the Age of AI?"
---

"Are developers actually going to get laid off?"

At lunch, a coworker slid his phone across the table.
A web demo — built entirely by AI.

> "Apparently this came from a single prompt."

My spoon stopped mid-air.

These days, opening YouTube feels suffocating.
"Stop learning to code." "99% of developers will be replaced."
Sensational thumbnails ride the algorithm, delivering daily death sentences.

The pain endured to become a developer.
Countless sleepless nights, crushing failures, and the thrill of breakthroughs.
All of it — the sum of those burning experiences — rendered meaningless in an instant.
By one careless click from someone who couldn't write a line of code.

This isn't just about losing a paycheck.
It felt like a wholesale denial of the years I'd fought to become a developer — my entire identity.

From that crushing helplessness, stubbornness took over.
This fear — manufactured by algorithms. I refused to be pushed around by it any longer.

I wanted to find out for myself.
Was this just clickbait terror, engineered for views?
Or a real future pointed at my throat right now?
If I handed AI something I knew absolutely nothing about, could you really do it with a single "click"?
So I decided to try.

## Deliberate Ignorance

3D programming — something I'd always been curious about, but had never once touched.
A state of perfect, total ignorance.
The goal: modeling a 3D jellyfish drifting through the deep sea.
I saved one photo of a jellyfish from Google. `jellyfish.png`

![jellyfish.png — Reference photo saved from Google](../../../assets/blog/wanted.png)

_jellyfish.png_

I opened a terminal.
"Using jellyfish.png as reference, write a 3D jellyfish modeling program."

The AI produced a torrent of output — over a thousand lines of code in one shot, and 11 GLSL shader files of unknown purpose.
Overwhelming. But the real problem was something else entirely.
I had no way to tell whether this mountain of code was garbage or genius.

## Trash In, Trash Out

When I ran it, something did appear on screen — something writhing in a distinctly disturbing way.
But I couldn't tell if it was a "jellyfish" or a "monster wearing a jellyfish suit."
Without any 3D knowledge, I couldn't give meaningful direction.

"Make it more natural."
"No, not that."
That was the full extent of the feedback I could give. Completely helpless.

No miracle came. Bugs poured out. The jellyfish tentacles twisted grotesquely.
"Something looks off about the rotation."

The physics engine's velocity started diverging. I had no idea why.
I couldn't even tell whether the code the AI spat out was a solution or a patchwork of duct tape.
Every fix spawned a new bug.
Plug one hole, another bursts open — an endless loop.
Each wrong answer painted over the last.

The next day, only after studying Verlet Integration from scratch was I able to cut out the real cause and strip away the patches.

> Trash in, trash out. When I'm vague, so is the AI.

## Middle-Out

I had to study. The question was how.

The first approach: bottom-up. Start from linear algebra and the WebGL spec, building up 3D programming from the ground. The textbook method.
But with the jellyfish twisting and the rendering breaking in front of me right now, there was no time to crack open thick textbooks.

The second approach: top-down. Start from the AI's finished output and reverse-engineer the code to piece things together.
But this would only generate more ambiguity — a fast track to becoming a blind consumer, forever led around by the AI.

I chose middle-out.
The experience of a 5-year full-stack developer. I planted React — what I already held as a reliable weapon — at the center, and started from there.
I didn't have time to build everything from scratch. I only transfused knowledge when I hit a wall.

When an incomprehensible 3D rendering bug appeared, I'd open Udemy and hunt down a GLSL shader tutorial.
I didn't study the whole thing. I absorbed exactly as much as I needed to fix the immediate problem, then corrected the code.
Not skimming from the top, not building from the bottom. Sharpening the weapon I already had — pulling in just enough knowledge at the moment I needed it.

The more I pushed knowledge in as I hit walls, the sharper my questions became.
"Why isn't it showing?" became "Isn't the transparent property missing from the Transmission render pass?"
As the resolution of my questions improved, the comments in other people's WebGL Water shaders started coming into focus.

> Only precise questions produce precise results.

## 5 Weeks. 47 Commits.

Looking back, my learning was neither top-down nor bottom-up.
I didn't work through WebGL from the beginning, and I didn't open a linear algebra textbook.
I started from where I already knew — React — and reached up (WebGL, GLSL) and down (linear algebra, physics simulation) every time I hit a wall.
What I already knew became the reins. What I didn't know became the direction.
Middle-out. Learning driven by need.

<video src="/blog/water-caustics-final.mp4" autoplay loop muted playsinline class="blog-video"></video>

**GitHub**: [diver-jay/r3f-drei-water-caustics-effect](https://github.com/diver-jay/r3f-drei-water-caustics-effect)

The fear came from ambiguity. Doing it myself made the ambiguity disappear.
AI can write the code I don't understand — but if I don't understand it, all I can say is "not that."

> What gets replaced is the hands that type the code — not the mind that decides what to build.

The technological changes ahead — I no longer dread them. Now I see them clearly, and I'm ready.
```

- [ ] **Step 2: Verify the file renders at `/blog/1/`**

Run: `npm run dev` and navigate to `http://localhost:4321/blog/1/`
Expected: English blog post renders with correct title, all sections visible, video and GitHub link intact.

- [ ] **Step 3: Commit**

```bash
git add src/content/blog/en/1.md
git commit -m "content: add English translation of blog post 1"
```

---

### Task 2: Create German translation — `src/content/blog/de/1.md`

**Files:**
- Create: `src/content/blog/de/1.md`

- [ ] **Step 1: Create the file with full German content**

Create `src/content/blog/de/1.md` with the following content:

```markdown
---
title: "Ersetzbare Entwickler, unersetzbare Entwickler — Wie wollt ihr leben?"
description: "Bewusste Unwissenheit. Raus aus der Komfortzone — 5 Wochen 3D-Programmierung mit KI."
pubDate: "Apr 02 2026"
heroImage: "../../../assets/blog/water-caustics-thumbnail.png"
cardTitle: "Wie wirst du im KI-Zeitalter programmieren?"
---

„Werden Entwickler jetzt wirklich alle gefeuert?"

In der Mittagspause schob mir ein Kollege sein Handy hin.
Ein Web-Demo — vollständig von KI gebaut.

> „Das soll aus einem einzigen Prompt entstanden sein."

Mein Löffel blieb in der Luft stehen.

In letzter Zeit fühlt sich YouTube öffnen erdrückend an.
„Hört auf, programmieren zu lernen." „99 % der Entwickler werden ersetzt."
Reißerische Thumbnails reiten auf dem Algorithmus, täglich ein neues Todesurteil.

Der Schmerz, den man auf sich nahm, um Entwickler zu werden.
Unzählige schlaflose Nächte, niederschmetternde Misserfolge und der Rausch, wenn etwas endlich funktioniert.
Das alles — die Summe dieser glühenden Erfahrungen — in einem Augenblick bedeutungslos.
Durch einen beiläufigen Klick von jemandem, der noch keine Zeile Code schreiben konnte.

Es geht hier nicht nur ums Geld.
Es fühlte sich an wie die vollständige Entwertung all der Jahre, die ich damit verbracht hatte, Entwickler zu werden — meine gesamte Identität.

Aus dieser lähmenden Hilflosigkeit erwuchs Sturheit.
Diese Angst — algorithmisch erzeugt. Ich ließ mich nicht länger davon treiben.

Ich wollte es selbst herausfinden.
War das nur Angst-Marketing für Klickzahlen?
Oder eine echte Zukunft, die mir gerade jetzt die Klinge an die Kehle hielt?
Wenn ich KI etwas übergab, von dem ich absolut nichts wusste — funktionierte es dann wirklich mit einem einzigen „Klick"?
Also entschied ich mich, es auszuprobieren.

## Bewusste Unwissenheit

3D-Programmierung — schon immer neugierig drauf, aber noch nie angetastet.
Vollständige, totale Unwissenheit.
Das Ziel: eine 3D-Qualle modellieren, die durch die Tiefsee treibt.
Ich speicherte ein Quallen-Foto von Google. `jellyfish.png`

![jellyfish.png — Referenzfoto von Google gespeichert](../../../assets/blog/wanted.png)

_jellyfish.png_

Ich öffnete ein Terminal.
„Nutze jellyfish.png als Referenz und schreib ein 3D-Quallen-Modellierungsprogramm."

Die KI produzierte einen Schwall Output — auf einen Schlag über tausend Codezeilen und 11 GLSL-Shader-Dateien unbekannter Herkunft.
Überwältigend. Aber das eigentliche Problem war ein anderes.
Ich hatte keine Möglichkeit zu beurteilen, ob dieser Berg an Code Schrott oder Meisterwerk war.

## Garbage In, Garbage Out

Als ich es startete, erschien tatsächlich etwas auf dem Bildschirm — etwas, das sich auf eine zutiefst beunruhigende Weise wand.
Aber ich konnte nicht sagen, ob das eine „Qualle" war oder ein „Monster im Quallen-Kostüm."
Ohne 3D-Kenntnisse war sinnvolles Feedback unmöglich.

„Mach es natürlicher."
„Nein, nicht so."
Mehr hatte ich nicht zu sagen. Vollständig hilflos.

Kein Wunder. Bugs strömten herein. Die Tentakel der Qualle verdrehten sich grotesk.
„Irgendwas stimmt mit der Rotation nicht."

Die Geschwindigkeit der Physik-Engine begann zu divergieren. Ich wusste nicht warum.
Ich konnte nicht einmal erkennen, ob der Code der KI eine Lösung war oder ein Flickenteppich aus Klebeband.
Jede Korrektur erzeugte einen neuen Bug.
Ein Loch stopfen, das nächste bricht auf — eine Endlosschleife.
Jede falsche Antwort wurde über die letzte gemalt.

Erst am nächsten Tag, nachdem ich Verlet Integration von Grund auf studiert hatte, konnte ich die eigentliche Ursache herausschneiden und die Flicken entfernen.

> Garbage in, garbage out. Wenn ich vage bin, ist die KI es auch.

## Middle-Out

Ich musste lernen. Die Frage war: wie.

Der erste Ansatz: Bottom-up. Von linearer Algebra und der WebGL-Spezifikation an aufbauen — die Lehrbuchmethode.
Aber mit der Qualle, die sich gerade vor mir verdrehte und das Rendering zusammenbrach, hatte ich keine Zeit, dicke Lehrbücher aufzuschlagen.

Der zweite Ansatz: Top-down. Mit dem fertigen Output der KI beginnen und den Code rückwärts entschlüsseln.
Aber das würde nur neue Unklarheiten erzeugen — der schnellste Weg, ein blinder Konsument zu werden, der für immer von der KI geführt wird.

Ich wählte Middle-Out.
Die Erfahrung aus fünf Jahren Full-Stack-Entwicklung. Ich setzte React — meine zuverlässigste Waffe — in die Mitte und startete von dort.
Ich hatte keine Zeit, alles von Null aufzubauen. Neues Wissen holte ich nur dann, wenn ich gegen eine Wand lief.

Wenn ein unverständlicher 3D-Rendering-Bug auftauchte, öffnete ich Udemy und suchte nach einem GLSL-Shader-Tutorial.
Nicht den ganzen Kurs. Nur so viel, wie ich brauchte, um das unmittelbare Problem zu lösen, dann korrigierte ich den Code.
Nicht von oben herunter, nicht von unten aufwärts. Die Waffe schärfen, die ich schon hatte — und dabei genau das Wissen holen, das ich im richtigen Moment brauchte.

Je mehr Wissen ich an den Wänden injizierte, desto schärfer wurden meine Fragen.
„Warum wird das nicht angezeigt?" wurde zu „Fehlt nicht das transparent-Attribut im Transmission-Render-Pass?"
Je präziser die Fragen, desto lesbarer die Kommentare in fremden WebGL-Water-Shadern.

> Nur präzise Fragen liefern präzise Ergebnisse.

## 5 Wochen. 47 Commits.

Im Rückblick war mein Lernen weder Top-down noch Bottom-up.
Ich habe WebGL nicht von vorne bis hinten durchgearbeitet und kein Lehrbuch zur linearen Algebra aufgeschlagen.
Ich startete dort, wo ich bereits Bescheid wusste — React — und streckte mich nach oben (WebGL, GLSL) und nach unten (lineare Algebra, Physiksimulation), immer wenn ich an eine Wand stieß.
Was ich bereits wusste, wurde zum Zügel. Was ich nicht wusste, wurde zur Richtung.
Middle-out. Lernen, angetrieben von Notwendigkeit.

<video src="/blog/water-caustics-final.mp4" autoplay loop muted playsinline class="blog-video"></video>

**GitHub**: [diver-jay/r3f-drei-water-caustics-effect](https://github.com/diver-jay/r3f-drei-water-caustics-effect)

Die Angst kam von der Unklarheit. Selbst auszuprobieren ließ die Unklarheit verschwinden.
KI kann den Code schreiben, den ich nicht verstehe — aber wenn ich ihn nicht verstehe, kann ich nur sagen: „nicht so."

> Was ersetzt wird, sind die Hände, die Code tippen — nicht der Kopf, der entscheidet, was gebaut werden soll.

Die technologischen Veränderungen, die noch kommen werden — ich fürchte sie nicht mehr. Jetzt sehe ich sie klar, und ich bin bereit.
```

- [ ] **Step 2: Verify the file renders at `/de/blog/1/`**

Run: `npm run dev` and navigate to `http://localhost:4321/de/blog/1/`
Expected: German blog post renders with correct title, all sections visible, video and GitHub link intact.

- [ ] **Step 3: Commit**

```bash
git add src/content/blog/de/1.md
git commit -m "content: add German translation of blog post 1"
```
