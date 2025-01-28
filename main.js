// https://flynn.boolean.careers/exercises/api/random/mail -->API Boolean



const email=document.getElementById(`email`)

const emailList=[]

for(let i=0; i<10; i++){

   

fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => response.json())
    .then(data => {
        // codice per far qualcosa con la risposta
        console.log(data.response);

        //Aggiungere l'email ricevuta nell'array

        emailList.push(data.response);


        //Aggiungere l'email all'html

        email.innerHTML += `<li> ${data.response}  </li>`
        
    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error);
    });

    

   
    
   
}
