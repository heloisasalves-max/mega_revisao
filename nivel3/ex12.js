//12. Caixa da Loja

let produtos = [Number(prompt("Digite o valor do produto (0 para parar): "))];
let valorTotal = produtos[0];
let maisCaro = produtos[0];
let maisBarato = produtos[0];

for (i = 1; produtos[produtos.length - 1] !== 0; i++){
    produtos.push(Number(prompt("Digite o valor do produto (0 para parar): ")));
    valorTotal += produtos[i];
            
    if (produtos[i] > maisCaro){
        maisCaro = produtos[i];
    }

    if ((produtos[i] !== 0) && (produtos[i] < maisBarato)){
        maisBarato = produtos[i];
    }
}

produtos.pop();

let media = valorTotal / produtos.length;

alert("Você comprou " + produtos.length + " produtos.");
console.log("Você comprou " + produtos.length + " produtos.");
alert("Valor total: R$" + valorTotal);
console.log("Valor total: R$" + valorTotal);
alert("Produto mais caro: R$" + maisCaro);
console.log("Produto mais caro: R$" + maisCaro);
alert("Produto mais barato: R$" + maisBarato);
console.log("Produto mais barato: R$" + maisBarato);
alert("A média dos preços foi R$" + media);
console.log("A média dos preços foi R$" + media);