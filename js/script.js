const app = new Vue ({
    el: '#app',
     data: {
         contacts: [
             {   name: 'Michele',
                 avatar: '_1',
                 visible: true,
                 messages: [
                 { date: '10/01/2020 15:30:55',
                 message: 'Hai portato a spasso il cane?',
                 status: 'sent', },
                 { date: '10/01/2020 15:50:00',
                 message: 'Ricordati di stendere I panni',
                 status: 'sent', },
                 { date: '10/01/2020 16:15:22',
                 message: 'Tutto fatto!',
                 status: 'received', }
                 ],
             },
             {   name: 'Fabio',
                 avatar: '_2',
                 visible: true,
                 messages: [
                 { date: '20/03/2020 16:30:00',
                 message: 'Ciao come stai?',
                 status: 'sent', },
                 { date: '20/03/2020 16:30:55',
                 message: 'Bene grazie! Stasera ci vediamo?',
                 status: 'received', },
                 { date: '20/03/2020 16:35:00',
                 message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                 status: 'sent', },
                 ],
             },
             {   name: 'Samuele',
                 avatar: '_3',
                 visible: true,
                 messages: [
                 { date: '28/03/2020 10:10:40',
                 message: 'La Marianna va in campagna',
                 status: 'received',},
                 { date: '28/03/2020 10:20:10',
                 message: 'Sicuro di non aver sbagliato chat?',
                 status: 'sent', },
                 { date: '28/03/2020 16:15:22',
                 message: 'Ah scusa!',
                 status: 'received', },
                 ],
             },
             {   name: 'Alessandro B.',
                 avatar: '_4',
                 visible: true,
                 messages: [
                 { date: '10/01/2020 15:30:55',
                 message: 'Lo sai che hanno aperto una nuova pizzeria?',
                 status: 'sent',},
                 { date: '10/01/2020 15:50:00',
                 message: 'Si, ma preferirei andare al cinema',
                 status: 'received', },
                 ],
             },
             {   name: 'Alessandro L.',
                 avatar: '_5',
                 visible: true,
                 messages: [
                 { date: '10/01/2020 15:30:55',
                 message: 'Ricordati di chiamare la nonna',
                 status: 'sent',},
                 { date: '10/01/2020 15:50:00',
                 message: 'Va bene, stasera la sento',
                 status: 'received', },
                 ],
             },
             {   name: 'Claudia',
                 avatar: '_6',
                 visible: true,
                 messages: [
                 { date: '10/01/2020 15:30:55',
                 message: 'Ciao Claudia hai novitá?',
                 status: 'sent',},
                 { date: '10/01/2020 15:50:00',
                 message: 'Non ancora',
                 status: 'received', },
                 { date: '10/01/2020 15:51:00',
                 message: 'Nessuna nuova, buona nuova',
                 status: 'sent', },
                 ],
             },
             {   name: 'Federico',
                 avatar: '_7',
                 visible: true,
                 messages: [
                 { date: '10/01/2020 15:30:55',
                 message: 'Fai gli auguri a Martina che é il suo compleanno!',
                 status: 'sent',},
                 { date: '10/01/2020 15:50:00',
                 message: 'Grazie per avermelo ricordato, le scrivo subito!',
                 status: 'received', },
                 ],
             },
             {   name: 'Davide',
                 avatar: '_8',
                 visible: true,
                 messages: [
                 { date: '10/01/2020 15:30:55',
                 message: 'Ciao, andiamo a mangiare la pizza stasera?',
                 status: 'received',},
                 { date: '10/01/2020 15:50:00',
                 message: 'No, l\'ho giá mangiata ieri, ordiniamo sushi!',
                 status: 'sent', },
                 { date: '10/01/2020 15:51:00',
                 message: 'OK!!',
                 status: 'received', },
                 ],
             },
         ], chatInProgress: 0, //indice per selezionare un utente specifico
         myText: '', //variabile per cosa scrivo io
         research: '', //var per ricerca utenti
     }, methods: {
         selectUser(i) {//seleziona utenti al click
             this.chatInProgress = i;
            }, 
            sendMessage() { //invio dei miei messaggi
             this.contacts[this.chatInProgress].messages.push({
                 message: this.myText,
                 date: new Date().toISOString().replaceAll('-', '/').replaceAll('T', ' ')
                 .split('.')[0],
                 status: 'sent', //questo è il mio messaggio
             });
             this.myText = ''; //reset dell'input dopo l'invio;

             //risposta dell'altro utente.
             setTimeout(() =>{
                 this.contacts[this.chatInProgress].messages.push({
                    message: 'ok', //risposta standard per ora
                    date: new Date().toISOString().replaceAll('-', '/').replaceAll('T', ' ')
                    .split('.')[0],
                    status: 'received', //questo è il messaggio dell'altro utente.
                 });
             }, 1000); //risposta dopo 1s
         },
         
         //da completare da qua
         userSearch() {//funzione ricerca utenti
             this.contacts.forEach((element, i) => {
                 if(!this.contacts[i].name.slice(0, this.research.length)) {
                     this.contacts[i].visible = false; //se non corrisponde, nascondi
                 } else {
                    this.contacts[i].visible = true;
                 }
             });
         }, 
    
     }, 
     
 
      
     CREATED: { //scrivilo in minuscolo dopo
         //quando un utente risponde con un messaggio e quindi visualizzi il suo ultimo messaggio, cambia lo status a tutti a received, e magari fai un console log (oppure crea le due spunte blu)
     }
 });

 /*
userSearch() {//funzione ricerca utenti
    this.contacts.forEach((element, i) => {
        if(!this.contacts[i].name.toLowerCase().slice(0, this.research.length.toLowerCase())) {
            this.contacts[i].visible = true;
        } else {
            this.contacts[i].visible = false; //se non corrisponde, nascondi
        } 
    });
}, 
showDropDownMenu: async function(msg) { //mostrare il menu a tendina
    msg.showDropDown = !msg.showDropDown;
    console.log(msg);
}
// filteredUser() {},
}, 
*/


/*created() {//mostrare il menu drop down ad ogni messaggio
this.contacts.forEach((contact, i) => {
    contact.messages.forEach((message) => {
        message.showDropDownMenu = false;
    });
    console.log(contact)
})
}*/
//quando un utente risponde con un messaggio e quindi visualizzi il suo ultimo messaggio, cambia lo status a tutti a received, e magari fai un console log (oppure crea le due spunte blu)