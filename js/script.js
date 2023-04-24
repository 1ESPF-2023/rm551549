//Recuperando o botão com o getElementById
const botao = document.getElementById('btn-1');

//Recuperar um item específico com a função QuerySelector(parâmetro)

// const seletor = document.querySelector('li');
// console.log(seletor.textContent);

//Recuperar uma lista de elementos com a função QuerySelectorAll

const seletores = document.querySelectorAll('li');

seletores.forEach((item) =>{
    if (item.textContent == "Item-15") {
        let meuItem = item;
     // Usar sinal da crase e ${} é para melhorar a leitura do código
        console.log(`Items selecionado: ${meuItem.textContent}`);   
        meuItem.textContent = "Bom dia"
    }
})


//Estudar:
//setTiimeOut
//setInterval
//Random
//Math.Ceil
//Math.Random
//Math.Floor