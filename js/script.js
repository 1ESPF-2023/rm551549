//Recuperando o botão com o getElementById
// const botao = document.getElementById('btn-1');

//Recuperar um item específico com a função QuerySelector(parâmetro)

// const seletor = document.querySelector('li');
// console.log(seletor.textContent);

//Recuperar uma lista de elementos com a função QuerySelectorAll

// const seletores = document.querySelectorAll('li');

// seletores.forEach((item) =>{
//     if (item.textContent == "Item-15") {
//         let meuItem = item;
//      // Usar sinal da crase e ${} é para melhorar a leitura do código
//         console.log(`Items selecionado: ${meuItem.textContent}`);   
//         meuItem.textContent = "Bom dia"
//     }
// })


//Estudar:
//setTiimeOut
//setInterval
//Random
//Math.Ceil
//Math.Random
//Math.Floor

let tmp = "";

function mudaCor() {

    let r = 0
    let g = 0
    let b = 0

    r = Math.round(Math.random() * 255);   
    g = Math.round(Math.random() * 255);   
    b = Math.round(Math.random() * 255);

    const cabecalho = document.querySelector(".cabecalho");
    cabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;

    const banner1 = document.querySelector('.banner-1');
    banner1.style.backgroundColor = `rgb(${r},${g},${b})`
    
    tmp = setTimeout(mudaCor, 1000);
}

mudaCor();

