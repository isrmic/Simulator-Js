<?php

namespace myapp\myclass;

class GetRequest{

  private $exception;

     public function __construct(){

         if(func_num_args() > 0){
             $this->exception = func_get_args();
         }
     }


      public static function Get(){

            $Request = array();



            if(func_num_args() >0){

                $params = func_num_args() > 1 ?func_get_args():func_get_arg(0);

                if(isset($params['not']) && count($params['not']) > 0){
                    foreach($_GET as $key => $value){
                        if(!in_array($key, $params['not'])){
                            $Request[$key] = $_GET[$key];
                        }
                    }
                }
                else {
                    for($i = 0; $i<count($params); $i++){
                        $Request[$params[$i]] = $_GET[$params[$i]]??$params[$i] . " Indefinido";
                    }
                }


            }

            /*if(count($this->exception) > 0){
                foreach($_GET as $key => $value){
                    if(!in_array($key, $this->exception)){
                        $Request[$key] = $_REQUEST[$key];
                    }
                }
            }*/
            else {
                foreach($_GET as $key => $value){

                    $Request[$key] = $_GET[$key];
                }
            }

            return $Request;
      }

      public static function Post(){


            $Request = array();
            if(func_num_args() >0){

                $params = func_num_args() > 1 ?func_get_args():func_get_arg(0);

                if(isset($params['not']) && count($params['not']) > 0){
                    foreach($_POST as $key => $value){
                        if(!in_array($key, $params['not'])){
                            $Request[$key] = $_POST[$key];
                        }
                    }
                }
                else {
                    for($i = 0; $i<count($params); $i++){
                        $Request[$params[$i]] = $_POST[$params[$i]]??$params[$i] . " Indefinido";
                    }
                }

            }
            else {
                foreach($_POST as $key => $value){

                    $Request[$key] = $_POST[$key];
                }
            }

            return $Request;
      }

      public static function Donot(){

          $Request = array();
          if(func_num_args() >0){
              $params = func_get_args();

              foreach($_REQUEST as $key => $value){
                  if(!in_array($key, $params)){
                      $Request[$key] = $_REQUEST[$key];
                  }
              }
          }

          return $Request;
      }
}
