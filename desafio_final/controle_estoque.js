//Desafio Final (Vale 10)

let produtos = [
    {Código: 32343, Nome: "Lápis", Quantidade: 10, Valor: 5.00},
    {Código: 32344, Nome: "Borracha", Quantidade: 5, Valor: 7.50},
    {Código: 32345, Nome: "Caneta", Quantidade: 8, Valor: 2.50},
    {Código: 32346, Nome: "Caderno", Quantidade: 12, Valor: 30.00},
    {Código: 32347, Nome: "Mochila", Quantidade: 3, Valor: 50.00},
    {Código: 32348, Nome: "Estojo", Quantidade: 7, Valor: 20.00},
    {Código: 32349, Nome: "Apontador", Quantidade: 15, Valor: 10.00},
    {Código: 32350, Nome: "Marcador", Quantidade: 6, Valor: 10.00}
];

let opcao = Number(prompt("Sistema de Controle de Estoque \n1) Cadastrar produto \n2) Listar produtos \n3) Procurar produto pelo código \n4) Atualizar estoque \n5) Vender produto \n6) Mostrar valor total do estoque \n7) Mostrar produto mais caro \n8) Mostrar produto com maior quantidade \n9) Mostrar média de preços \n10) Encerrar"));

while ((opcao > 0) && (opcao < 10)){
    switch (opcao){
        case 1:
            produtos.push({
                Código: Number(prompt("Digite o código:")),
                Nome: prompt("Digite o nome:"),
                Quantidade: Number(prompt("Digite a quantidade:")),
                Valor: Number(prompt("Digite o preço:"))
            })
            break;

        case 2:
            let lista = [];
            for (i = 0; i < produtos.length; i++){
                lista.push(`\nCódigo: ${produtos[i].Código}, Nome: ${produtos[i].Nome}, Quantidade: ${produtos[i].Quantidade}, Valor: R$${produtos[i].Valor}`);
            }
            alert(`Estoque: \n${lista}`);
            break;

        case 3:
            let procuraCodigo = Number(prompt("Digite o código:"));
            let encontrado = false;
            let iCodigo = 0;

            for (i = 0; i < produtos.length; i++){
                if (produtos[i].Código === procuraCodigo){
                    encontrado = true;
                    iCodigo = i;
                }
            }

            if (encontrado === true){
                    alert(`Produto encontrado! \nCódigo: ${produtos[iCodigo].Código} \nNome: ${produtos[iCodigo].Nome} \nQuantidade: ${produtos[iCodigo].Quantidade} \nValor: R$${produtos[iCodigo].Valor}`);
            } else {
                    alert("Produto não encontrado.");
            }
            break;

        case 4:
            let lista2 = [];
            for (i = 0; i < produtos.length; i++){
                lista2.push(`\n${i + 1}) ${produtos[i].Nome}`);
            }
            let iAlteracao = (Number(prompt(lista2))) - 1;
            let novaQuantidade = Number(prompt("Digite a nova quantidade: "));
            produtos[iAlteracao].Quantidade = novaQuantidade;
            break;

        case 5:
            let lista3 = [];
            for (i = 0; i < produtos.length; i++){
                lista3.push(`\n${i + 1}) Nome: ${produtos[i].Nome}, Quantidade: ${produtos[i].Quantidade}, Valor: R$${produtos[i].Valor}`);
            }
            let iProdutoVendido = Number(prompt(`Digite o que deseja vender: ${lista3}`));
            let quantidadeVendida = Number(prompt("Digite a quantidade que deseja vender:"));

            if (quantidadeVendida <= produtos[iProdutoVendido - 1].Quantidade){
                produtos[iProdutoVendido - 1].Quantidade = produtos[iProdutoVendido - 1].Quantidade - quantidadeVendida;
                alert(`Venda realizada! \nValor total: ${produtos[iProdutoVendido - 1].Valor * quantidadeVendida}`);
            } else {
                alert("Estoque insuficiente.");
            }
            break;


        case 6:
            let valorTotal = 0;
            for (i = 0; i < produtos.length; i++){
                valorTotal += produtos[i].Valor * produtos[i].Quantidade;
            }
            alert(`Valor total do estoque: R$${valorTotal}`);
            break;

        case 7:
            let maisCaro = produtos[0].Valor;
            let iMaisCaro = 0;
            for (i = 0; i < produtos.length; i++){
                if (produtos[i].Valor > maisCaro){
                    maisCaro = produtos[i].Valor;
                    iMaisCaro = i;
                }
            }
            alert(`Produto mais caro: ${produtos[iMaisCaro].Nome}`);
            break;

        case 8:
            let maiorQuantidade = produtos[0].Quantidade;
            let iMaiorQuantidade = 0;
            for (i = 0; i < produtos.length; i++){
                if (produtos[i].Quantidade > maiorQuantidade){
                    maiorQuantidade = produtos[i].Quantidade;
                    iMaiorQuantidade = i;
                }
            }
            alert(`Produto com maior quantidade: ${produtos[iMaiorQuantidade].Nome}`);
            break;
        
        case 9:
            //Média aritmética
            let soma = 0;
            for (i = 0; i < produtos.length; i++){
                soma += produtos[i].Valor;
            }
            alert(`Média de preços: R$${soma / produtos.length}`);
            break;
        
    }
    opcao = Number(prompt("Sistema de Controle de Estoque \n1) Cadastrar produto \n2) Listar produtos \n3) Procurar produto pelo código \n4) Atualizar estoque \n5) Vender produto \n6) Mostrar valor total do estoque \n7) Mostrar produto mais caro \n8) Mostrar produto com maior quantidade \n9) Mostrar média de preços \n10) Encerrar"));
}

if (opcao === 10){
    alert("Consulta ao estoque encerrada.");
} else {
    alert("Opção inválida.");
}