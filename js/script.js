// Variáveis
const pSaldo = document.getElementById('saldo');
const pNumeroProduto = document.getElementById('numero-produto') 
const spanEstoqueProduto1 = document.getElementById('estoque-produto-1')
const spanEstoqueProduto2 = document.getElementById('estoque-produto-2')
const spanEstoqueProduto3 = document.getElementById('estoque-produto-3')
const spanEstoqueProduto4 = document.getElementById('estoque-produto-4')

let saldoDigitado = [];
let saldo = '';

let produto = 1;

let precoProduto = 0;

let estoque1 = 10
let estoque2 = 10
let estoque3 = 10
let estoque4 = 10


function digitarSaldo(numero){
    saldoDigitado.push(numero)
    saldo = saldoDigitado.join('')
    exibirSaldo()
}

function exibirSaldo(){
    pSaldo.innerHTML = saldo
}

function apagarValorDigitado(){
    saldoDigitado.pop()
    saldo = saldoDigitado.join('')
    exibirSaldo()
}

function confirmarSaldo(){
    console.log("Saldo inserido com sucesso!");
}

function retirarDinheiro(){
    saldo = 0;
    exibirSaldo()
    console.log("Sua conta está zerada!")
}

function selecionaProdutoDown(){
    if(produto > 1){
        produto = produto - 1;

    }
    exibeNumeroProduto()
}
function selecionaProdutoUp(){
    if(produto < 4){
        produto = produto + 1;

    }
    exibeNumeroProduto()
}

function exibeNumeroProduto(){
    pNumeroProduto.innerHTML = produto
}

function comprarProdutoSelecionado(){
    if(produto === 1 ){
        precoProduto = 1.50
        if(estoque1 > 0){
            efetuarPagamento()
        }else{
            console.log("Estoque em falta")
        }
    }
    else if(produto === 2 ){
        precoProduto = 2.50
        if(estoque2 > 0){
            efetuarPagamento()
        }else{
            console.log("Estoque em falta")
        }
    }
    else if(produto === 3 ){
        precoProduto = 3.50
        if(estoque3 > 0){
            efetuarPagamento()
        }else{
            console.log("Estoque em falta")
        }
    }
    else if(produto === 4 ){
        precoProduto = 4.50
        if(estoque4 > 0){
            efetuarPagamento()
        }else{
            console.log("Estoque em falta")
        }
    }else{
        console.log("Nenhum produto selecionado")
    }
}

function efetuarPagamento(){
    if(saldo > precoProduto){
        console.log("Produto comprado")
        saldo = saldo - precoProduto
        exibirSaldo()
        atualizarEstoque()
    }else{
        let faltam = precoProduto - saldo
        console.log(`Seu saldo é insuficiente para comprar o produto selecionado, faltam ${faltam}`)
    }
}

function atualizarEstoque(){
    if(produto === 1){
        estoque1 = estoque1 - 1
        spanEstoqueProduto1.innerHTML = estoque1
    }
    else if(produto === 2){
        estoque2 = estoque2 - 1
        spanEstoqueProduto2.innerHTML = estoque2
    }
    else if(produto === 3){
        estoque3 = estoque3 - 1
        spanEstoqueProduto3.innerHTML = estoque3
    }
    else if(produto === 4){
        estoque4 = estoque4 - 1
        spanEstoqueProduto4.innerHTML = estoque4
    }
}