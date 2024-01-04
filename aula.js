
/*///////////////////////////////////////////////////////VARIÁVEIS//////////////////////////////////////////////////////////////////
//formas de declarar variável

let variavel = 10 / 10; //let é uma variável que podemos mudar o valor dela
const pi = 3.14; //const é uma variável que não mudara o valor

console.log(variavel);

variavel = 20;

console.log(variavel);



//operadores
// = atribuir e matematicos = - *

let gas_price = 5.79; 
let km_perLiter  = 10;
let travel_distanceKm = 100;

let consumedLiter =  travel_distanceKm / km_perLiter    ;
let travelPrice = consumedLiter*gas_price;

console.log("The total price of the travel is ",travelPrice.toFixed(2));
///////////////////////////////////////////////////////////////////////////////////////////////////*/////////////////////////////////

/////////////////////////// CONDICIONAIS ////////////////////////////////////////////////////////////////////////////////////////////

//boleanos or bolleans
/*
const camisetaeAzul=true;
const camisetavermelha = false;
console.log(camisetaeAzul);

const numero = 10;

const numeroPar = numero % 2 ;
if(numeroPar){
    console.log('Par');
}else{
    console.log('impar');
}

//operador == ignora o tipo da variável
// operador = attribui valores
// operador === compara literais iguas inclusive tipo 
*//*

let gas_price = 6.66;
let alcohol_price = 5.79;
let km_perLiter  = 10;
let travel_distanceKm = 100;
let gas_type = 'Etanol ';
let consumedLiter =  travel_distanceKm / km_perLiter;

let travelPrice = consumedLiter*gas_price;
console.log(travelPrice.toFixed(2))
*/
/*
const nota1=3, nota2=5, nota3=6;
const media = (nota1+nota2+nota3)/3;
if(media>=7){
    console.log('Aprovado')
}else if(media>=5 && media<7){
    console.log('recuperação')
}else{
    console.log('Reprovado')
}
*/
/*
const altura = 1.73;
const peso = 65;
const imc = peso/(Math.pow(altura, 2 ));

console.log('IMC = ',imc.toFixed(2));

if(imc>40){
    console.log('obesidade grave');
}else if(imc>=18.5 && imc <=25){
    console.log('Peso Normal');
}else if(imc>25 && imc<=30){
    console.log('Acima do Peso')
}else if(imc>30 && imc<=40 ){
    console.log('Obeso');
}//Math.pow(altura, 2)->primeiro parametro é o numero que deseja elevar e o segundo é o expoente da potenciação
*//*
function teste() {
    console.log('ok');
}
teste();
function quadrado(valor) {
    return valor * valor;
}

let resultado = quadrado(10);
console.log("o resultado do quadrado de 10 é: ", resultado);
function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

let resultadoJuros = incrementarJuros(135, 25);
console.log(resultadoJuros);

*/

/*
function escrevaNome(nome){
    return console.log('Meu nome é: ',nome);
}
function verificaIdade(idade){
    if(idade<18){
        console.log('Menor de idade');
    }else{
        console.log('Maior de idade');
    }
}

verificaIdade(18  );
escrevaNome('Filipe');    
*/
/*
const humano = {
    nome: 'Filipe',
    idade: 22,
    altura: 1.72,
        descrever: function(){
            console.log ('Meu nome é ${this.nome} e minha idade é {this.idade}');
        }
};
/*
console.log(humano.nome);
console.log(humano.idade);
console.log(humano.altura);

console.log(humano);
humano.deficiencia = 'saci';
console.log(humano);

delete humano.deficiencia;
console.log(humano);
*/

//função dentro de um objeto é chamado de método
//console.log(humano.descrever) 

//////////////////////////////////////////////////////////////
//criando classes
/*
class Pessoa{
    nome;
    idade; 

    constructor(nome,idade){ //construtor é oque acontece quando a classe pe instanciada
        this.nome = nome; 
        this.idade = idade;
    }

    descrever(){  //métodos não preciso da sintaxe functioon
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
 //classe é uma definição do que deveria ser a classe pessoa e uma instancia é uma ocorrência de um objeto pessoa 

 //como instanciar uma classe

const Filipe = new Pessoa('Filipe', 22);
const peixinho = new Pessoa('Peixinho', 21);

Filipe.descrever(); 
peixinho.descrever();
*/
 //FUNÇÕES RECEBENDO OBJETOS
/*
class Pessoa{
    idade;
    nome;
    constructor (nome, idade){
        this.nome=nome;
        this.idade=idade;

    }
}

function comparar(p1,p2){
    if(p1.idade>p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if (p2.idade>p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }

}
const Filipe = new Pessoa('Filipe', 22);
const Thayla = new Pessoa('Thayla', 27);

comparar(Filipe,Thayla);

*/
/*
class Carro{
    marca; 
    cor;
    gastoMedioKm;

    constructor(marca, cor,gastoMedioKm){
        this.marca=marca;
        this.cor=cor;
        this.gastoMedioKm=gastoMedioKm;
    } 
}

const celta = new Carro('Chevrolet', 'preto',1/8.7) ; 
console.log(celta);

function totalGasto(){
    const gastoTotal = celta.gastoMedioKm*401;
    console.log('O total gasto de SP até rio em combustivel é'+ gastoTotal);
}
totalGasto();
*/
//////////////////////////////// arrays

//const alunos = ['filipe','kenny','Peixe'];

//alunos.push('Handrew'); //método .push() para adicionar itens na array
//console.log(alunos[3]);
//alunos[4] = 'joao'; 


//console.log(numeros);
//console.log(numeros.pop());//método pop tira o ultimo item da array 
//console.log(numeros);
//console.log(numeros.shift());//metodo shift tira o primeiro item da array
//console.log(numeros);

//delete alunos[1]; //para deletar todos elementos
/*const notas =[];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas.length);// lenght mostra o tamanho da lista
    for (let i = 0; i < array.length; i ++) {
        
        
    }
*/
/*
const nome = 'Filipe Ricieri Domingues de Souza';

for (let i = 0; i < nome.length; i++) {
    //console.log(nome[i]); //a variavel nome é um array de caractere, como uma lista por isso funciona
    const letra = nome[i];
    console.log(letra); 
}
*/

/*
const notas = [];
notas.push(5); 
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

let soma = 0;

for (let i=0 ; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma+nota;
    
}

const media = soma/notas.length;
console.log(media);

*/
/*
//Crie um programa que dado um número imprima sua tabuada
const numero = 5;
for (let i = 1; i <=10; i++) {
    console.log(i*5);
    
}
*/

//Crie um programa que seja capaz de percorrer uma lista de números e imprima cada numero par encontrado.
/*
const array = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < array.length; i++) {
    if (array[i]%2===0){
        console.log(array[i]);
    }
    
}
*/
/*
<button type="button" id="btnTeste">
        teste
    </button>

    <script>

        const btnTest = document.getElementById("btnTeste"); //tem ha ver com o documento corrent enquanto o comando window.() tem a ver com o browser
        btnTest.addEventListener("click",function(){
            console.log("clicou no botão");
        });
    </script><!--uma boa pratica é colocar script no final do corpo-->
    */