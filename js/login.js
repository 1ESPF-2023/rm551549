// não deixa o Javascript ficar varzeado, força a declaração das variaveis
"user strict";


// let usuario = "";
// let senha = "";

// const botaoSubmit = document.querySelector("#btnSubmit");

// botaoSubmit.addEventListener("click", ()=>{

//     const inputUser = document.querySelector("input[name='nmUser']");
//     const inputPass = document.querySelector("input[name='pass']");

//     const labelUser = document.querySelector("label[for='idUser']");
//     const labelPass = document.querySelector("label[for='idPass']");
    
//     if(inputUser.value.length > 3 && inputPass.value.length > 3){
//         // inputUser.setAttribute("style", "outline-color: #00ff00;")
//         // inputPass.setAttribute("style", "outline-color: #00ff00;")
        
//         labelUser.setAttribute("style", "color:#00ff00;");
//         labelPass.setAttribute("style", "color:#00ff00;");
//      }else{
//         labelUser.setAttribute("style", "color:#ff0000;");
//         labelPass.setAttribute("style", "color:#ff0000;");
//     }


// })

//Listener Global
addEventListener("click", (evt)=> {
    
    const inputUser = document.querySelector("input[name='nmUser']");
    const inputPass = document.querySelector("input[name='pass']");
        
    const labelUser = document.querySelector("label[for='idUser']");
    const labelPass = document.querySelector("label[for='idPass']");

    //Recuperar o conte~udo dos campos e adicionar um OBJETO
    //CRIANDO O OBJETO USUARIO-LOGADO
    let usuarioLogado = {
        nomeUsuarioLogado : inputUser.value,
        senhaUsuarioLogado: inputPass.value
    }

    console.log(usuarioLogado.nomeUsuarioLogado);


    if (evt.target.id == "btnSubmit") {
        
        if(inputUser.value.length > 3 && inputPass.value.length > 3){
            // inputUser.setAttribute("style", "outline-color: #00ff00;")
            // inputPass.setAttribute("style", "outline-color: #00ff00;")
            
            labelUser.setAttribute("style", "color:#00ff00;");
            labelPass.setAttribute("style", "color:#00ff00;");

            //Se preencheu a qntd de caractéres necessária agora vamos validar o nomeUsuario e a senhaUsuario
            if (usuarioLogado.nomeUsuarioLogado == "tutu" && usuarioLogado.senhaUsuarioLogado == "123456") {
                alert("VALIDADO!");
            }else{
                alert("NÃO VALIDADO");
            }

         }else{
            labelUser.setAttribute("style", "color:#ff0000;");
            labelPass.setAttribute("style", "color:#ff0000;");
        }
    
    }
})
