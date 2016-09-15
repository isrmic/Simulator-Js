function firstview(){
      return "Este Texto Veio De Firstview";
}


function listdir(param, param2 = 0, param3 = "#viewer"){
      XMLHTTP.$_acess({url:"attinfo/exec_events.php?event=@listdir&action="+param}, function(response){
        if(param2 == 0){
          document.querySelector(param3).innerHTML = response;
        }else if(param2 == 1){
          func(response, true);
        }

      },"GET");

      return true;
}

function readfile(param, param2 = 1, param3 = "#viewer"){

  XMLHTTP.$_acess({url:"attinfo/exec_events.php?event=@readfile&action="+param}, function(response, json){
    if(param2 == 1){
      document.querySelector(param3).innerHTML = response;
    }else if(param2 == 0){
      func(response, true);
    }

    read_answer = response;

    //json_answer = json;

  },"GET");

  return true;
}

function writefile(param, param2){

  XMLHTTP.$_acess({url:"attinfo/exec_events.php?event=@writefile&action="+param+"&content="+param2}, function(response){
      func(response, true);
  },"GET");

  return true;
}

function acess(param, param2  = 1, param3 = "#viewer"){

  XMLHTTP.$_acess({url:param}, function(response){
    if(param2 == 1){
      document.querySelector(param3).innerHTML = response;
    }else if(param2 == 0){
      func(response, true);
    }

    acess_response = response;

  },"GET");

  return true;

}

function readobj(obj, cond = false){
  var getprop = "";
  var value;
    for(prop in obj){
        value = cond == true ? " = " + obj[prop] : "";
        getprop += "</br> <span class = 'prop'>" + prop + "</span>" + value;
    }
   return getprop;
}

function getElement(elm){
    return document.querySelector(elm);
}
