
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
    },

    calcX:function(a, b, delta, op){
        return  delta >0 ? eval("(-b" + op + "Math.sqrt(delta))/(2*a)").toFixed(2):NaN;
    },

    x1:function(a, b, delta){
        return this.calcX(a, b, delta, "+");
    },

    x2:function(a, b, delta){
        return this.calcX(a, b, delta, "-");
    },

    fx:function(a, b , c){
      var delta = this.delta(a, b, c);

      var x1 = this.x1(a, b, delta);
      var x2 = this.x2(a, b, delta);
      a = a!=1 ? a+"x<sup>2</sup>":"x<sup>2</sup>";
      b = b>0 ? "+"+b+"x" : b!=0 ? b+"x" : "";
      c = c>0 ? "+"+c: c!=0 ? c : "";
      var fx = " Calculo Da Função Bem Sucedido ... </br> f(x) = " + a + b + c + "</br> x' = " + x1 + '</br> x" = '  + x2;

      return fx;
    }
};

Commands.new = function(){
    return "Testando Criação De Função";
};
