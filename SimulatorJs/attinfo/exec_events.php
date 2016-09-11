<?php

require_once __DIR__ . "\..\includes.php";

use myapp\myclass\GetRequest as Request;

//RETORNA VALORES GET , SOMENTE OS PASSADOS NO ARRAY !
$Request = Request::Get(["action", "event"]);
//var_dump($Request);

//FUNCAO PARA EXECUTAR O EVENTO / DELETE / CREATE / READ / ...
function check_event($Request){

    $action = $Request["action"];
    if($Request["event"] != NULL && !empty($Request["event"])){
        switch($Request["event"]){

            case "@mkdir":
                if($action !="false" && !is_dir($Request["action"]))



                    if(!$create = mkdir($action, 0700)){
                      throw new Exception("Não Foi Possivel Criar A Pasta ! ");
                    }

                else
                    $out = "Diretorio Já Existente";

                if(isset($create) && $create == true)
                    $out = "Pasta Criada Com Sucesso em : " . $action;
                else
                    $out = "Falha Ao tentar Criar Pasta !";
            break;

            case "@rmdir":
                if($action !="false" && is_dir($action))
                    $del = rmdir($action);
                else
                    $out = "Diretório Não Existe ! ";

                if(isset($del) && $del == true)
                    $out = "Pasta Removida Com Sucesso ! ";
                else
                    $out = "Falha Ao Tentar Remover Diretório";

                break;

                case "@listdir":
                    if($action != NULL && $action != "undefined"){
                        if(is_dir($action)){
                            $path = array_diff(scandir($action), array(".", ".."));
                            $count = 0;

                            foreach($path as $files){
                                ++$count;
                                echo  "</br>". $count . " - " . $files . "</br>";
                            }
                            $out = "</br> sucess";
                        }else{
                          $out =  "Diretório não encontrado ! ";
                        }
                    }
                break;

                case "@readfile":
                    if($action != NULL && $action != "undefined"){
                        if(file_exists($action) && is_file($action)){
                            $read = @file_get_contents($action);
                            $out = "<pre>" . $read . "</pre>";

                        }else{
                          $out = "Arquivo não econtrado ! ";
                        }
                    }
                break;

                case "@unlink":
                    if($action != NULL && $action != "undefined"){
                        if(file_exists($action) && is_file($action)){
                            $unlink = unlink($action);
                            $out = $unlink == true?"Arquivo Deletado Com Sucesso":"Falha Ao Tentar Deletar O Arquivo ! ";
                        }else{
                            $out = "Não É Um Arquivo Ou Ele Não Existe ! ";
                        }
                    }
                break;

                case "@writefile":
                    if($action != NULL && $action != "undefined"){
                        $open = fopen($action, "a+");
                        if(!$open){
                            $out = "Arquivo Já Existe ! ";
                        }else {
                            $text = Request::Get(["content"]);
                            $write = fwrite($open, $text["content"]);
                            fclose($open);
                            $out = $write == true?"Arquivo Criado Com Sucesso Em : " . $action:"Falha Ao Tentar Criar Arquivo ! ";
                        }

                    }
                break;


            default:
                $out = "Evento Não Encontrado . ";
            break;

        }
    }
    return $out;
}





try{
    echo check_event($Request);
}catch(Exception $erro){
    echo $erro;
}
