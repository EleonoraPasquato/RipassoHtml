const voti =[];
let media = 0;


function aggiungivoto() {
    const voto = + document.getElementById('voto').value;
    voti.push(voto);
    console.log(voti);
    rendervoti();
    rendermedia(); // invocare
    esito();

   
}

function rendervoti (){
    let ris = '';

    for (let i =0;i<voti.length;i++){
       
        let classe =generaclasse(voti[i])
        ris += '<li class="' + classe + '"> ' + voti[i] + '</li>';    }


    document.getElementById('lista').innerHTML = ris;


}

function rendermedia(){

    let somma = 0;

    for (let i = 0; i<voti.length;i++){
        somma += voti[i];
    }

    media = somma/voti.length

    

    document.getElementById('media').innerText = media;

}
 function esito(){

    let esito = 'Promosso';

    if (media < 6 ) {

        esito =  'Bocciato' }

    document.getElementById('esito').innerHTML = esito;
    

    
 }

 function generaclasse(voto){

    let classe ='';

    if(voto >= 6 && voto <8){
        classe = 'buono';
    }else if(voto >=8){
        classe = 'ottimo'
    }else if (voto<6 && voto >4){
        classe = ' insufficiente'
    }else if(voto <=4){
        classe = 'gravementeinsufficiente'
    }

    // il valore della classe sarò restituito dalla funzione
    return classe;


   
 }





