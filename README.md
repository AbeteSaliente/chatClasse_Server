# chatClasse_Server
Progetto di una chat di classe, programmazione lato server.

COSE DA METTERE NEL README
1. Componenti (Quello che serve per funzionamento --> node, npm)
2. Come settare le cose
3. Come funziona (Sia il server che il protocollo)
3.1. Possibili problemi
4. Chi l'ha fatto

COMPONENTI PER IL FUNZIONAMENTO DEL SERVER

Per permettere al server di funzionare è necessario possedere i seguenti componenti: browser web (interfaccia utente), JavaScript, Node.js, libreria npm
Si presuppone che l'utente sia già in possesso dei primi due componenti, di conseguenza:
- Node.js --> Ambiente runtime JavaScript gratuito, open-source e multipiattaforma che rende possibile la crezione di server e programmi a linea di comando. Per installarlo è necessario visitare la pagina "nodejs.org/en/download".

- Libreria npm --> Necessario per l'installazione, il controllo e l'aggiornamento delle dipendenze di un progetto, utilizzato in questo caso per il modulo "ws". Npm viene scaricato in automatico insieme a Node.js.

FUNZIONAMENTO DEL SERVER E PROTOCOLLO

Il protocollo utilizzato da questo server per gestire l'applicazione per lo scambio di messaggi è il seguente:
- log|nome|psw
- rlo|login effettuato/errato
- msg|nome|data|messaggio
- ele|nome1|nome2|...

I primi due sono utilizzati per il login dell'utente, il terzo per l'invio di un messaggio e l'ultimo per mostrare l'elenco degli utenti attualmente connessi al server.