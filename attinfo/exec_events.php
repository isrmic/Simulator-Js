<?php

require_once __DIR__ . "\..\includes.php";

use myapp\myclass\GetRequest as Request;
$Request = Request::Get(["action", "event"]);
//var_dump($Request);
function check_event($Request){

    $action = $Request["action"];
    if($Request["event"] != NULL && !empty($Request["event"])){
        switch($Request["event"]){

            case "@mkdir":
                if($action !="false" && !is_dir($Request["action"]))
                    $create = mkdir($action, 0700);

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


            default:
                $out = "Evento Não Encontrado . ";
            break;

        }
    }
    return $out;
}


echo check_event($Request);
