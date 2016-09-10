function firstview(){
      return "Este Texto Veio De Firstview";
}


function listdir(param, param2 = 1, param3 = "#viewer"){
      XMLHTTP.$_acess({url:"view.php?dir="+param}, function(response){
        if(param2 == 1){
          document.querySelector(param3).innerHTML = response;
        }else if(param2 == 0){
          func(response, true);
        }

      },"GET");

      return true;
}

function readfile(param, param2 = 1, param3 = "#viewer"){

  XMLHTTP.$_acess({url:"view.php?file="+param}, function(response){
    if(param2 == 1){
      document.querySelector(param3).innerHTML = response;
    }else if(param2 == 0){
      func(response, true);
    }

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

  },"GET");

  return true;

}
