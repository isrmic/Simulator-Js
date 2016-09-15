var func;
(function(){



    var insert_commands_color = ColorsMyFrm[0];
    var insert_font_family = "verdana";

    var prompter = {
        //ID OU CLASSE DE ELEMENTOS QUE SERÃO SELECIONADOS
        elements:["#lc", ".view_window", "#view", "#viewer", ".view_results", ".v_comands"],

        //VERIFICA O TIPO DE COMANDO @, #, OPERACOES, CONDICOES, DECLARACOES ...
        Command: function(Command){
            var out;


            if(Command[0].split(" ").join("") == "#"){

                out = this.output(Command[0], Command.slice(1));


            }else if(Command[0] == "@") {
                //out = Command.split(" ");
                send = Command.split(" ");
                out = "";
                for(var i = 1; i<send.length; i++){
                    out += send[i]+" ";
                }

                out = this.output(send[0], out);
            }

            else if(Command.search(/[+|-|*|/|=]|%]|true|false|if|else|else if|Math|function|[()]/i) >= 0 ){
                try{
                  exec = eval(Command)!== "undefined"?eval(Command):"empty";
                  cond = /^[0-9|Math]|[()]/g.test(Command)?exec:"";
                  out = Command + cond;
                  //this.insert(Command, true);
                }catch(e){
                  out = e;
                }
            }else
                return "'"+ Command + "' " + "Não É Um Comando Válido !";


            return out;
        },

        //CONTROLA AS SAIDAS E EXECUCOES DE COMMANDOS COM O PREFIXO @
        output:function(val,val2){
            var output = [], value;


            element = this.select_elements();
            switch (val) {

              case "@clear":
                  output = [false];
                  element["#view"].innerHTML = "";
              break;

              case "@print":
                  value_exec = "";
                  if(val2[0] == "#"){
                      value = val2.split("#");
                      for(var i =0; i<value.length; i++){
                          value_exec += value[i];

                      }


                      output = [true, value_exec + " = " + eval(value_exec)];
                  }else {
                      output = [true, val2];
                  }

              break;

              case "#":
                  try{
                      exec = val2 + eval(val2);
                  }catch(e){
                    exec = e;
                  }
                  output = [true, "Comando Executado ... </br>  &nbsp&nbsp&nbsp&nbsp&nbsp  "+ exec];
              break;

              case "@mkdir":
                  //mkdir = val.split(" ");
                  var name_folder = val2.split("::");
                  //name_folder[0] = name_folder[0].slice(1);
                  //name_folder[0] = name_folder[0].split(" ").join("");
                  name_folder[0] = name_folder[0][0] == "#" ? eval(name_folder[0].slice(1)) : name_folder[0];
                  name_folder[1] = name_folder[1][0] == "#" ? eval(name_folder[1].slice(1)) : name_folder[1];

                  alert(name_folder[0]);
                  alert(name_folder[1]);

                  //name_folder[1] = name_folder[1].split(" ").join("");
                  var path_name_folder = name_folder.length == 2 ?name_folder[0] + name_folder[1]:false;

                  alert(path_name_folder);



                  XMLHTTP.$_acess({url:"attinfo/exec_events.php?event=@mkdir&action="+path_name_folder}, function(response){

                      prompter.insert(response, true);


                  }, "GET");
                  output = [false];


              break;

              case "@rmdir":
                  //mkdir = val.split(" ");
                  var name_folder = val2.split("::");
                  //name_folder[0] = name_folder[0].slice(1);
                  //name_folder[0] = name_folder[0].split(" ").join("");
                  name_folder[0] = name_folder[0][0] == "#" ? eval(name_folder[0].slice(1)) : name_folder[0];
                  name_folder[1] = name_folder[1][0] == "#" ? eval(name_folder[1].slice(1)) : name_folder[1];

                  //name_folder[1] = name_folder[1].split(" ").join("");
                  var path_name_folder = name_folder.length == 2 ?name_folder[0] + name_folder[1]:false;





                  XMLHTTP.$_acess({url:"attinfo/exec_events.php?event=@rmdir&action="+path_name_folder}, function(response){

                      prompter.insert(response, true);


                  }, "GET");
                  output = [false];


              break;

              case "@unlink":

                  var name_file = val2.split("::");

                  name_file[0] = name_file[0][0] == "#" ? eval(name_file[0].slice(1)) : name_file[0];
                  name_file[1] = name_file[1][0] == "#" ? eval(name_file[1].slice(1)) : name_file[1];

                  var path_name_file = name_file.length == 2 ?name_file[0] + name_file[1]:false;

                  XMLHTTP.$_acess({url:"attinfo/exec_events.php?event=@unlink&action="+path_name_file}, function(response){

                      prompter.insert(response, true);


                  }, "GET");
                  output = [false];

              break;

              case "@call":


                  var val2 = val2.split(" ");


                  try{
                    result = eval("Commands."+val2[0]+"("+val2[1]+")") !== "undefined"?eval("Commands."+val2[0]+"("+val2[1]+")"):"Sucesso Em Chamar , Mas Não Houve Nenhum Retorno";
                  }catch(e){
                    result = e;
                  }
                  output = [true, result];

              break;

              case "@declare":

                  val2 = val2.split(" ");
                  var value = "";

                  for(var i = 1; i<val2.length; i++){
                      value += val2.length > 2?val2[i]+" ":val2[i];
                  }
                  output = [true, val2[0] + " = " + eval(val2[0]+"="+value)];
              break;

              case "@font":
                  element[".view_results"].style.fontFamily = val2;
                  output = [true, "Troca De Fonte Sucedida ! "];
              break;

              case "@color":

                  val2 = val2.split(" ");
                  var color = !/^[0-9]/g.test(val2[0])?val2[0]:ColorsMyFrm[eval(val2[0])];
                  try{
                      insert_commands_color = color;
                      if(val2[1] == "all"){
                          var selector = document.querySelectorAll(".v_comands");

                          for(var i = 0; i<selector.length; i++)
                              selector[i].style.color = color;
                        }

                      output = [true, "<span style='color:white;'>Troca De Cor Sucedida </span> <a style = 'color:"+color+";'>"+color+"</a>"];
                  }catch(e){
                      output = [true, e];
                  }

              break;


              default:
                  output = [true, "Comando Inexistente . "];
              break;

            }

            return output[0] === true ? output[1] : null;
        },

        //SELECIONA OS ELEMENTOS LISTADOS EM Elements E RETORNA UM ARRAY COM CADA UM DELES SELECIONADOS !
        select_elements:function(param){
           var elements = [];
           for(var i = 0; i<this.elements.length; i++){
              elements[this.elements[i]] = document.querySelector(this.elements[i]);
           }

           return elements;
        },

        //Funcao Aonde A Saida/Resultado É Inserido No Simulador
        insert:function(value, condiction){

              var view_command, content, element, command;
              command = condiction === true?value:this.Command(value);
              if(command !== null){
                  element = this.select_elements();
                  view_command = document.createElement("div");
                  view_command.style.color = insert_commands_color;
                  view_command.className = "v_comands";
                  content = document.createTextNode(">> ");
                  view_command.appendChild(content);
                  view_command.innerHTML += "<span class = 'cm'>" + command + " <span class ='insert_hours'>" +this.getDate()+ "</span> </span>";
                  element["#view"].appendChild(view_command);

              }

        },

        //FUNCAO USADA PARA RETORNAR VALORES DO HORÁRIO // Horas:Minutos:Segundos
        getDate:function(){
          var Data = new Date();
          var hour = [Data.getHours(), Data.getMinutes(), Data.getSeconds()];
          hour[0] = hour[0] <= 9 ? "0"+ hour[0]:hour[0];
          hour[1] = hour[1] <= 9 ? "0"+ hour[1]:hour[1];
          hour[2] = hour[2] <= 9 ? "0"+ hour[2]:hour[2];
          Data =  hour[0] + ":" + hour[1] + ":" + hour[2];
          return Data;
        }


    };

    var element = prompter.select_elements();

    //Foca No Elemento Input Para Digitar Os Comandos
    element["#lc"].focus();

    /*

    * FUNCAO QUE CAPTA UM EVENTO NO ELEMENTO DE ID 'lc' Usando keydown e aciona se for pressionado "enter"
    * Caso Quiser Trocar Por Outras Teclas Pode-se Por Um Código De uma Key ou Adicionar Uma Outra Entrada ex:
    * ["enter", "tab", "A"] Qualquer destas teclas Ativa O Evento Abaixo Tambem Pode-se Usar [13, 9, "space"] ...
    */

    capt_key("#lc", ["enter"], {type:"keydown", exec:function(elem){
        prompter.insert(elem.value);
        elem.value = "";
        element["#view"].scrollTop = element["#view"].scrollHeight;
    }});

    // RETORNA FUNCAO DE INSERCAO AO SIMULADOR / PARA SER USADA NAS FUNCOES DE pre_functions.js
    func = function(response, condiction){
        return prompter.insert(response, condiction);
    }



})();

var query = location.search.slice(1);
var partes = query.split('&');
var data = {};
partes.forEach(function (parte) {
    var chaveValor = parte.split('=');
    var chave = chaveValor[0];
    var valor = chaveValor[1];
    data[chave] = valor;
});



function callback(){
  alert('acionou o callback');
}
