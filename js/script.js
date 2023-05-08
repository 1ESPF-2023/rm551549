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
//Math.round

// let tmp = "";

// function mudaCor() {

//     let r = 0
//     let g = 0
//     let b = 0

//     r = Math.round(Math.random() * 255);   
//     g = Math.round(Math.random() * 255);   
//     b = Math.round(Math.random() * 255);

//     const cabecalho = document.querySelector(".cabecalho");
//     cabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;
    
//     tmp = setTimeout(mudaCor, 1000);
// }


// mudaCor();


// function mudaBanner() {
//     const imgElement1 = document.querySelector(".banner-1 img");
//     // console.log(imgElement1);
//     let nr = Math.ceil(Math.random() *3); 
//     // imgElement.src = "./img/banner-lateral-"+nr+".png";
//     imgElement1.src = `./img/banner-lateral-${nr}.png`;
//     setTimeout(mudaBanner2 , 2000);
// }

// function mudaBanner2() {
//     const imgElement2 = document.querySelector(".banner-2 img");
//     // console.log(imgElement1);
//     let nr = Math.ceil(Math.random() *3); 
//     // imgElement2.src = "./img/banner-lateral-"+nr+".png";
//     imgElement2.src = `./img/banner-lateral-${nr}.png`;
//     setTimeout(mudaBanner , 2000);
// }

// mudaBanner();

function mudaBanner() {
    const imgElement = document.querySelector(".banner-1 img");
    // console.log(imgElement1);
    let nr = Math.ceil(Math.random() *3); 
    // imgElement.src = "./img/banner-lateral-"+nr+".png";
    imgElement.src = `./img/banner-lateral-${nr}.png`;

    const imgElement2 = document.querySelector(".banner-2 img");
    // console.log(imgElement1);
    nr = Math.ceil(Math.random() *3); 
    // imgElement2.src = "./img/banner-lateral-"+nr+".png";
    imgElement2.src = `./img/banner-lateral-${nr}.png`;
    setTimeout(mudaBanner , 2000);
}
mudaBanner();   
