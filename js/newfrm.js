

var is_using_bootstrap = false;
const typeButtons = ["default", "primary", "success", "info", "warning", "danger", "link"];
      typeButtons["size"] = ["lg", "sm", "xs", "block"];

const GlyphIcons = ["asterisk", "plus", "euro", "minus", "cloud", "envelope"];

const ColorsMyFrm = ["white", "#000000", "#696969", "#808080", "#A9A9A9", "#C0C0C0", "#D3D3D3", "#DCDCDC", "#6A5ACD", "#483D8B", "#191970", "#000080",
  "#00008B", "#0000CD", "#0000FF", "#6495ED", "#4169E1", "#1E90FF", "#00BFFF", "#87CEFA", "#87CEEB", "#ADD8E6", "#4682B4", "#B0C4DE",
  "#708090", "#778899", "#00FFFF", "#00CED1", "#40E0D0", "#48D1CC", "#20B2AA", "#008B8B", "#008B8B", "#7FFFD4", "#66CDAA", "#5F9EA0",
  "#2F4F4F", "#00FA9A", "#00FF7F", "#98FB98", "#90EE90", "#8FBC8F", "#3CB371", "#2E8B57", "#006400", "#008000", "#228B22", "#32CD32",
  "#00FF00", "#7CFC00", "#7FFF00", "#ADFF2F", "#9ACD32", "#6B8E23", "#556B2F", "#808000", "#BDB76B", "#DAA520", "#B8860B", "#8B4513",
  "#A0522D", "#BC8F8F", "#CD853F", "#D2691E", "#F4A460", "#FFDEAD", "#F5DEB3", "#DEB887", "#D2B48C", "#7B68EE", "#9370DB", "#8A2BE2",
  "#4B0082", "#9400D3", "#9932CC", "#BA55D3", "#800080", "#8B008B", "#FF00FF", "#EE82EE", "#DA70D6", "#DDA0DD", "#C71585", "#FF1493",
  "#FF69B4", "#DB7093", "#FFB6C1", "#FFC0CB", "#F08080", "#CD5C5C", "#DC143C", "#800000", "#8B0000", "#B22222", "#A52A2A", "#FA8072",
  "#E9967A", "#FFA07A", "#FF7F50", "#FF6347", "#FF0000", "#FF4500", "#FF8C00", "#FFA500", "#FFD700", "#FFFF00", "#F0E68C", "#F0F8FF",
  "#F8F8FF", "#FFFAFA", "#FFF5EE", "#FFFAF0", "#F5F5F5", "#F5F5DC", "#FDF5E6", "#FFFFF0", "#FAF0E6", "#FFF8DC", "#FAEBD7", "#FFEBCD",
  "#FFE4C4", "#FFFFE0", "#FFFACD", "#FAFAD2", "#FFEFD5", "#FFDAB9", "#FFE4B5", "#EEE8AA", "#FFE4E1", "#FFF0F5", "#E6E6FA", "#D8BFD8",
  "#F0FFFF", "#E0FFFF", "#B0E0E6", "#E0FFFF", "#F0FFF0", "#F5FFFA"];


const UseBootstrap = function(){
    var args = [arguments.length];
    for(var i = 0; i<arguments.length; i++){
        args[i] = arguments[i];
    }
    if(args.indexOf("css") >= 0){

        var bs_element = document.createElement("link");
        bs_element.setAttribute("href", "css/bootstrap.min.css");
        bs_element.setAttribute("rel", "stylesheet");
        document.head.appendChild(bs_element);
    }
    if(args.indexOf("js") >= 0){
      var bs_element = [2];
      bs_element[0] = document.createElement("script");
      bs_element[1] = document.createElement("script");
      bs_element[0].setAttribute("src", "js/bootstrap.min.js");
      bs_element[1].setAttribute("src", "js/Jquery-3.1.0.min.js");
      document.head.appendChild(bs_element[1]);
      document.head.appendChild(bs_element[0]);
    }

    is_using_bootstrap = true;
    return true;
};


const Selects = function(){
    var elmts = [arguments.length];
    for(var k = 0; k<arguments.length; k++){
    if(arguments[k][0] != "."){ char = "#"; } else { char = ""; }
    elmts[k] = char + arguments[k];
    }

    this.getElements = elmts;

    this.ind = function(divbyid){



        var args = arguments;

        return {
            IH:function(x){
                var elements;
                var exec;
                var ihtml = new Array();
                if(typeof(x) == "object" && x[0]!= "undefined"){
                    exec = "element.innerHTML = ih[index]";
                }else {
                  exec = "element.innerHTML = ih";
                }
                for(var i = 0; i<args.length; i++){
                    elements = AlterElement(elmts[args[i]], exec, x, i);
                    ihtml[elmts[args[i]]] = elements.innerHTML;
                }

                return ihtml;
            },

            IHtml:function(x){
                var elements;
                var exec;
                var ihtml = new Array();
                if(typeof(x) == "object" && x[0]!= "undefined"){
                    exec = "element.innerHTML = ih[index]";
                }else {
                  exec = "element.innerHTML = ih";
                }
                for(var i = 0; i<args.length; i++){
                    elements = AlterElement(elmts[args[i]], exec, x, i);
                    ihtml[elmts[args[i]]] += elements.innerHTML;
                }

                return ihtml;
            },

            Gicon:function(x, y, z){

                var elements;

                for(var i = 0; i<args.length; i++){
                  elements = document.querySelector(elmts[args[i]]);
                  var gicon = document.createElement("span");

                  //Set a Collor To The glyphicon
                  y_exists = y?true:false;
                  if(y_exists && IS_ARRAY(y)){
                      y[i]?typeof(y[i]) == "number"?gicon.style.color = ColorsMyFrm[y[i]]:gicon.style.color = y[i]:null;
                  }else {
                      y?typeof(y) == "number"?gicon.style.color = ColorsMyFrm[y]:gicon.style.color = y:null;
                  }

                  // Set a glyphicon To the Element
                  if(IS_ARRAY(x)){
                      elements?typeof(x[i])=="number"?gicon.className += " glyphicon glyphicon-" + GlyphIcons[x[i]]:gicon.className += " glyphicon glyphicon-"+x[i]:null;

                  }else {

                  elements?typeof(x)=="number"?gicon.className += " glyphicon glyphicon-" + GlyphIcons[x]:gicon.className += " glyphicon glyphicon-"+x:null;

                  }

                  var z_exists = z?true:false;
                  if(z_exists && IS_ARRAY(z)){
                      elements?gicon.innerHTML = z[i]:null;
                  }else if(z_exists){
                      elements?gicon.innerHTML = z:null;
                  }

                  elements.appendChild(gicon);



                }

                return true;
            },

            styleButton:function(x, y, z){


                var elements;

                for(var i = 0; i<args.length; i++){
                  elements = document.querySelector(elmts[args[i]]);

                  // Set a StyleButton To the Element
                  if(IS_ARRAY(x)){
                      elements?typeof(x[i])=="number"?elements.className += " btn btn-" + typeButtons[x[i]]:elements.className += " btn btn-"+x[i]:null;

                  }else {

                  elements?typeof(x)=="number"?elements.className += " btn btn-" + typeButtons[x]:elements.className += " btn btn-"+x:null;

                  }
                  var y_exists = typeof(y) != "undefined"?true:false;
                  if(y_exists && IS_ARRAY(y)){
                    elements?typeof(y[i])=="number"?elements.className += " btn-" + typeButtons["size"][y[i]]:elements.className += " btn-"+y[i]:null;

                  }else if(y_exists){
                    elements?typeof(y)=="number"?elements.className += " btn-" + typeButtons["size"][y]:elements.className += " btn-"+y:null;

                  }

                  var z_exists = z?true:false;
                  if(z_exists && IS_ARRAY(z)){
                      elements?elements.innerHTML = z[i]:null;
                  }else if(z_exists){
                      elements?elements.innerHTML = z:null;
                  }

                 }
            },

            addclass:function(x){
                var element;
                for(var i = 0; i<args.length; i++){
                    element = document.querySelector(elmts[args[i]]);
                    element?element.className += " "+x:null;
                }
                return true;
            },

            capt_key:function(x, y){
                capt_key(elmts[divbyid], x, y);
            },

            SVL:function(x){

                var element;
                for(var i = 0; i<args.length; i++){
                    if(IS_ARRAY(x)){
                        element = document.querySelector(elmts[args[i]]);
                        element.value = x[i];
                    }else {
                        element = document.querySelector(elmts[args[i]]);
                        element.value = x;
                    }
                }
                return true;
            },

            GVL:function(){

              var element;
              element = document.querySelector(elmts[divbyid]);

              return element.value;

            },
            click:function(){
                var element;
                element = document.querySelector(elmts[divbyid]);

                (function(){
                  //element.submit();
                  document.getElementById("cep").submit();
                }());

                return true;
            },

            dispar_event:function(){
                capt_key(elmts[divbyid], x, y);
            }
        }
    };
};


const capt_key = function(elm, key, act){

   var shortcuts = [];
   shortcuts["enter"] = 13; shortcuts["left"] = 37;shortcuts["up"] = 38;shortcuts["right"] = 39;shortcuts["down"] = 40;
   shortcuts["space"] = 32; shortcuts["bspace"] = 8; shortcuts["tab"] = 9;


    var element = document.querySelector(elm),
    keyp = [],
    condiction;

    if(act.type != "click"){
        if(IS_ARRAY(key)){
                for(var i = 0; i<key.length; i++){
                    keyp[i] = typeof(key[i]) === "number"?key[i]:key[i].length == 1?key[i].toUpperCase().charCodeAt():shortcuts[key[i]];
                }
                condiction = "keyp.indexOf(event.keyCode) >= 0 || key == 'ALL'";

        }else {
            keyp = typeof(key) == "number"?key:key.length == 1?key.toUpperCase().charCodeAt():shortcuts[key];
            condiction = "event.keyCode == keyp || key == 'ALL'";
        }
    }else{
      condiction = "true";
    }


        element.addEventListener(act.type?act.type:"keydown", function(){
            if(eval(condiction))
                act.exec.call(this, this);

        }, false);



    return true;
};

const IS_ARRAY = function(element){
    if(element.constructor === Array)
        return true;
    else
        return false;
};

const display_message = function(elmt, type, message, condiction, id = 'msg'){

    var element = document.querySelector(elmt), msg, content = [];
    var elm = document.querySelector("#"+id);
    var thisclass = [];
    thisclass["erro"] = "alert-danger"; thisclass["warning"] = "alert-warning"; thisclass["info"] = "alert-info";
    thisclass["success"] = "alert-success";

    if(condiction && !elm){

        msg = document.createElement("div");
        msg.className = "alert "+thisclass[type];
        msg.id = id;
        content[0] = document.createElement("strong");
        content[1] = document.createTextNode(type + " ");
        content[2] = document.createElement("span");
        content[3] = document.createTextNode(message);
        content[0].appendChild(content[1]);
        content[2].appendChild(content[3]);
        msg.appendChild(content[0]);
        msg.appendChild(content[2]);
        element.appendChild(msg);
    }else if(!condiction){

        if(elm){
            element.removeChild(elm);
        }
    }

    return true;

};


const AlterElement = function(param, exec, ih, index){

    var element = document.querySelector(param);
    element?ih?eval(exec):null:report_error(param, 1);
    return element;

};



const report_error = function(x,y){

    switch(y){

      case 1:
      console.log("%c Este Elemento Não Existe -- %c " + '"'+x+'"', "color:darkred;","color:red;");
      break;
    }


};

const XMLHTTP = {


$_acessform:function(url, divID, resposta, wait, redirect, condiction_redirect, Sucess){

document.getElementById(divID).innerHTML = "<img src = '"+wait+"' >";
var acess;
if(window.XMLHttpRequest) {
acess = new XMLHttpRequest();
}
else if(window.ActiveXObject) {
acess = new ActiveXObject("Microsoft.XMLHTTP");
}

acess.open("GET", url, true);

acess.onreadystatechange = function() {

if(acess.readyState == 1) {
document.getElementById(divID).innerHTML = '...';
}

if(acess.readyState == 4 && acess.status == 200) {
var timeout;
var answer = acess.responseText;
if(resposta != -1){
setTimeout(function() { document.getElementById(divID).innerHTML = resposta; }, 1500);
}else {
//document.getElementById(divID).innerHTML = answer;
if(condiction_redirect != answer){
setTimeout(function() { document.getElementById(divID).innerHTML = answer; }, 1500);
}

if(redirect != "" && typeof(redirect)!= "undefined"){
if(answer == condiction_redirect){
   if(Sucess != "" && typeof(Sucess)!= "undefined"){
       setTimeout(document.getElementById(divID).innerHTML = Sucess, 1000);
}

setTimeout(function(){location.href = redirect; }, 2000);

}
}
}

}

}
acess.send(null);

},

    $_acess:function(w, x, y, z){


    var acess = window.XMLHttpRequest?new XMLHttpRequest():window.ActiveObjectx?new ActiveObjectx("Microsoft.XMLHTTP"):null;
    var answer;
    var Obj_json;
    var output;
    acess.open(y, w.url, true);

    y == "POST"?acess.setRequestHeader("Content-type", "application/x-www-form-urlencoded"):null;

    acess.onreadystatechange = function(){

      output = "saida";



      if(acess.readyState == 1){
        Obj_json = "carregando . . .";
      }
      if(acess.readyState == 4 && acess.status == 200){
        answer = acess.responseText;
        z==true?Obj_json = JSON.parse(answer):null;
        x(answer,Obj_json);

      }

    }
    
    var data = "";
    if(y == "POST"){
    for(propertys in w.data){
     data += ""+propertys+"="+w.data[propertys]+"&";
    }
    }

    y=="POST"?acess.send(data):acess.send(null);


    }



};

//UseBootstrap("css");
