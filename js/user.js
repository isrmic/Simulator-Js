
//DECLARACAO DE VARIAVEIS PRE_DEFINIDAS A SEREM USADAS;

var wellcome = "Bem Vindo Ao Simulador De Prompt Js ";
var name = "My Name";
var dir_1 = "c:/wamp64/www/";

var Commands = {

    wellcome:function(a = "", b =""){
        return wellcome + a;
    },

    delta:function(a, b, c){
       return Math.pow(-b, 2) - (4 * a * c);
    }
};

Commands.new = function(){
    return "Testando Criação De Função";
};
