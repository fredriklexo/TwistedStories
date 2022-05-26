# THE SUPER STUDENT
Är du nästa super student? Då är det här spelet för dig!
Spelet är baserat på frågor där du måste svara och lösa utmaningen för att gå vidare

## Uppbyggnad
projektet byggs på vanilla ts.

spelet utgår ifrån interface som håller en lista med obeject som innehåller olika steg. Denna listan kontrolleras via eventlysnare som skickar vidare ett nextpath:id till en funktion som sköter en om rending.

## INSTALL

1. npm install 
2. npm install gsap 
3. npm run dev 

## Detta projekt är ett skolarbete.
Alla krav är uppfylda


### Krav för godkänt:
1. Git & GitHub har använts
2. Projektmappen innehåller en README.md fil - (läs ovan för mer info)
3. Uppgiften lämnas in i tid!
4. Muntlig presentation är genomförd - 2022-30/5
5. Applikationens struktur skall vara genomtänk samt uppdelad i olika moduler.
6. Applikationen skall vara skriven i Typescript samt genererad via VITE. Ts-config som generaras via VITE skall inte ändras för att ta bort typescript-regler.
7. Inga ”any”-typningar får finnas.
8. Minst 1 st. Interface skall användas
9. Spelet skall ha minst 5 vägskäl/frågor med minst 2 möjliga svar per fråga (alla vägskäl/frågor behöver inte visas för att klara spelet).
10. Interaktionen ifrån användaren skall ske via ett gränssnitt med knappar som svar på frågorna.

### Krav för väl godkänt:
1. Alla punkter ovan (G-krav) är uppfyllda
2. Spelet skall ha minst 10 vägskäl/frågor med minst 2 möjliga svar per fråga (alla vägskäl/frågor behöver inte visas för att klara spelet).
3. Minst 3 st. Interface:s skall användas.
4. Data för storylinen skall vara definierat i ett Interface som håller en array med objekt där varje objekt motsvarar ett vägskäl/fråga. Navigationen mellan olika vägskäl/frågor skall ske via funktionsanrop (för godkänt räcker det med IF-satser i en loop).
5. Det skall finnas minst 2 vägskäl där användaren skall mata in text som svar på frågan.
6. Minst 2 frågor skall ha en bild i sin beskrivning.
7. Spelet skall ha mer än ett potentiellt slut.

