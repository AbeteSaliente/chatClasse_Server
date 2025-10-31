# chatClasse_Server
Progetto di una chat di classe scolastica, programmazione lato server mediante l'utilizzo di Node.js e JavaScript.

---
---
COMPONENTI PER IL FUNZIONAMENTO DEL SERVER

Per permettere al server di funzionare è necessario possedere i seguenti componenti: browser web (interfaccia utente), JavaScript, Node.js, libreria npm
Si presuppone che l'utente sia già in possesso dei primi due componenti, di conseguenza:
- Node.js --> Ambiente runtime JavaScript gratuito, open-source e multipiattaforma che rende possibile la crezione di server e programmi a linea di comando. Per installarlo è necessario visitare la pagina "nodejs.org/en/download".

- Libreria npm --> Necessario per l'installazione, il controllo e l'aggiornamento delle dipendenze di un progetto, utilizzato in questo caso per il modulo "ws". Npm viene scaricato in automatico insieme a Node.js.
---
---
FUNZIONAMENTO DEL SERVER E PROTOCOLLO

Il protocollo utilizzato da questo server per gestire l'applicazione per lo scambio di messaggi è il seguente:
- log|nome|psw
- rlo|login effettuato/errato
- msg|nome|data|messaggio
- ele|nome1|nome2|...

I primi due sono utilizzati per il login dell'utente, il terzo per l'invio di un messaggio e l'ultimo per mostrare l'elenco degli utenti attualmente connessi al server.

Per utilizzare il server, è necessario seguire una serie di passaggi:
1. Installare i componenti elencati precedentemente
2. Aprire il Prompt dei comandi e recarsi nella cartella del server sul proprio dispositivo
3. Digitare nel Prompt dei comandi "Node server.js" (Il server ora è attivo)
4. Utilizzare il Client adeguato per l'invio dei messaggi (quindi che rispetti il protocollo del Server)
---
---
DATI DEI CLIENT

I dati neccessari per l'utilizzo del Server sono salvati in un file di testo secondo la seguente struttura:

- nome|psw
