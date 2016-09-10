var element = new Selects("lc");
var func;
(function(){

    var prompter = {

        elements:["#lc", ".view_window", "#view", "#viewer"],


        Command: function(Command){
            var out;

            if(Command[0].split(" ").join("") == "#"){

                out = this.output(Command[0], Command.slice(1));

                try{
                  eval(Command.slice(1));
                }catch(e){
                  out = e;
                }

            }else if(Command[0] == "@") {
                out = Command.split("->");
                out = this.output(out[0], out[1]);
            }
            else {
              return "'"+ Command + "' " + "Não É Um Comando Válido !";
            }
            return out;
        },

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
                  //exec = eval(val2);
                  output = [true, "Comando Executado "+  val2];
              break;

              case "@mkdir":
                  //mkdir = val.split(" ");
                  name_folder = val2.split("::");
                  //name_folder[0] = name_folder[0].slice(1);
                  name_folder[0] = name_folder[0].split(" ").join("");
                  name_folder[0] = name_folder[0][0] == "#" ? eval(name_folder[0].slice(1)) : name_folder[0].slice(1);
                  name_folder[1] = name_folder[1][0] == "#" ? eval(name_folder[1].slice(1)) : name_folder[1];

                  //name_folder[1] = name_folder[1].split(" ").join("");
                  path = name_folder.length == 2 ?name_folder[0] + name_folder[1]:false;
                  XMLHTTP.$_acess({url:"attinfo/exec_events.php?event=@mkdir&action="+path}, function(response){

                      prompter.insert(response, true);


                  }, "GET");
                  output = [false];


              break;

              case "@rmdir":
                  //mkdir = val.split(" ");
                  name_folder = val2.split("::");
                  //name_folder[0] = name_folder[0].slice(1);
                  name_folder[0] = name_folder[0].split(" ").join("");
                  name_folder[0] = name_folder[0][0] == "#" ? eval(name_folder[0].slice(1)) : name_folder[0];
                  name_folder[1] = name_folder[1][0] == "#" ? eval(name_folder[1].slice(1)) : name_folder[1];

                  //name_folder[1] = name_folder[1].split(" ").join("");
                  path = name_folder.length == 2 ?name_folder[0] + name_folder[1]:false;

                  XMLHTTP.$_acess({url:"attinfo/exec_events.php?event=@rmdir&action="+path}, function(response){

                      prompter.insert(response, true);


                  }, "GET");
                  output = [false];


              break;

              case "@declare":

                  vari_define = val2.slice(1).split(" ");
                  output = [true, vari_define[0] + " = " + eval(vari_define[0]+"="+vari_define[1])];
              break;


              default:
                  output = [true, "Comando Inexistente . "];
              break;

            }

            return output[0] === true ? output[1] : null;
        },

        select_elements:function(param){
           var elements = [];
           for(var i = 0; i<this.elements.length; i++){
              elements[this.elements[i]] = document.querySelector(this.elements[i]);
           }

           return elements;
        },


        insert:function(value, condiction){

              var view_command, content, element, command;
              command = condiction === true?value:this.Command(value);
              if(command !== null){
                  element = this.select_elements();
                  view_command = document.createElement("div");
                  view_command.className = "v_comands";
                  content = document.createTextNode(">> ");
                  view_command.appendChild(content);
                  view_command.innerHTML += command;
                  element["#view"].appendChild(view_command);
              }

        }


    };

    var element = prompter.select_elements();

    element["#lc"].focus();

    capt_key("#lc", ["enter"], {type:"keydown", exec:function(elem){
        prompter.insert(elem.value);
        elem.value = "";
        element["#view"].scrollTop = element["#view"].scrollHeight;
    }});


    func = function(response, condiction){
        return prompter.insert(response, condiction);
    }




})();
