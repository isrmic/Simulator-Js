

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

    $_acess:function(w, x, y, z){


    var acess = window.XMLHttpRequest?new XMLHttpRequest():window.ActiveObjectx?new ActiveObjectx("Microsoft.XMLHTTP"):null;
    var answer;
    var Obj_json;

    acess.open(y, w.url, true);

    y == "POST"?acess.setRequestHeader("Content-type", "application/x-www-form-urlencoded"):null;

    acess.onreadystatechange = function(){





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
