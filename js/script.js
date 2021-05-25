var app = new Vue({
    el: "#root",
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },     
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        activeChat: 0,
        newMessage: "",
        searchChat: "",
        visibleContacts: false
    },
    // computed: {
    //     chatFinder : function() {
    //         this.contacts.forEach( (contact) => {
    //             const match = contact.name;
    //             if (match == this.searchChat) {
    //                 contact.visible = false;
    //             }
                
    //         })
    //     }
    // },
    methods: {
        getAvatar : function (userIndex) {
            let { avatar } = this.contacts[userIndex];
            return userImg = `img/avatar${avatar}.jpg`;
        },
        getLastData : function (userIndex) {
            const userMsg = this.contacts[userIndex].messages;
            const lastMsgIndex = userMsg.length - 1;
            return userMsg[lastMsgIndex].date;
        },
        getLastText: function(userIndex) {
            const getText =  this.contacts[userIndex].messages;
            const lastElement = getText.length - 1;
            const lastTxt = getText[lastElement].text.substring(0, 20);
            return lastTxt + "...";
        },
        currentName : function() {
            const nametest = this.contacts[this.activeChat].name;
            return nametest;
        },
        currentChatData : function() {
            const checkdate = this.contacts[this.activeChat].messages ;
            const lastMsgIndex2 = checkdate.length - 1;
            return checkdate[lastMsgIndex2].date; 
        },
        getCurrentAvatar : function() {
            const findAvatar = this.contacts[this.activeChat].avatar
            const pathAvatar = `img/avatar${findAvatar}.jpg` 
            return pathAvatar;
        },
        // getChat: function(userIndex) {
        //     return this.activeChat = userIndex 
        // } 
        // funzione altrenativa per assegnale al click index a currentChat
        newMsg : function() {
            const getMess = this.contacts[this.activeChat].messages;
    
            if(this.newMessage.length > 0) {
                getMess.push( { date: dayjs().format('DD/MM/YYYY HH:mm:ss'), text: this.newMessage, status : "sent" })
            }
            this.newMessage = "";
            setTimeout( () => getMess.push( { date: dayjs().format('DD/MM/YYYY HH:mm:ss'), text: "ok", status : "received" }), 1000);
        },
        chatFinder : function() {
            let numb = 0;
                this.contacts.forEach( (contact) => {
                const match = contact.name.startsWith(this.searchChat.toUpperCase());
                if (match) {
                    contact.visible = true;
                    numb++;
                } else {
                    
                    contact.visible = false;
                }

                
            });
            this.visibleContacts = numb;
           
        }
           

        
        // chatFinder : function() {
        //     const nameFound = this.contacts.filter((contact) => { 
        //         const match = contact.name.includes(this.searchChat);
        //         console.log(this.searchChat);
        //         console.log(contact.name);
        //         console.log(match);
        //         if (match){
        //             contact.visible = false;
        //         }
        //         return contact;
        //     } );
        //     console.log("nameFound",nameFound);
        // }
        // chatFinder : function() {
        //     const nameFound = this.contacts.filter((contact) => { 
        //         const match = contact.name.includes(this.searchChat);

        //         if (match) {
        //             return contact;
        //         }
        //         this.searchChat = "";
        //     } );
        //     console.log("nameFound", nameFound);
        // }
    }
} );
// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all'interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato

// img/avatar_1.jpg
// Replica della grafica (immagine in allegato) con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse;
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto, ricavandoli dall'array contacts qui allegato