
function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var segundaMsg = window.document.querySelector('div#segundaMsg') 
    var data = new Date()
    var hora = data.getHours()
    var  minutos = data.getMinutes()
    var segundos = data.getSeconds()
    
    
    msg.innerHTML = ` ${hora}:${minutos}:${segundos}`
    
    if(hora < 12 ){ 
        img.src = 'manha.png' //Inserindo a imagem criada no JS.
        document.body.style.background = '#FFDAB9' //Alter a cor conforme o período do dia. 
        
    } else if (hora < 18){
        //Boa tarde
        img.src = 'tarde.png' 
        document.body.style.background = '#c37974'
        
    } else if(hora < 23){
        img.src = 'noite.png'
        document.body.style.background = '#6e7c8d'
    }

}




