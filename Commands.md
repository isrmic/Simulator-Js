#Commands
- Assim como na declaração de variaveis há 3 formas de se executar um comando usando o prefixo @ ou # ou caso o comando passar pela regex tendo tido como uma operação matematica ou uma expressão como 2+2 , (2+2), (2 == 2), (2>2) , namefunction(), usando tambem outros operadoes como +,/,%,* tambem pode-se usar if(condiction){ expression } caso a condição for falsa não acontecerá nada mas executará o comando , porem se executar if(2>5){ 5+5 } else { 5+10 } a saida será 15 , em outros casos tambem pode-se usar qualquer outro comando js .

caso queira de qualquer forma executar um comando js utilize o prefixo "#" , podendo ficar assim o commando "#alert('string')" , 

"#window.print()" 

"#x1 = prompt("insira um valor para x1")" 

"#if(condiction){ expression }"


- por padrão já deixei alguns commandos prontos nada de mais pode-se dizer que tem muito a melhorar porem é para um simples exemplo 
pode-se usar o prefixo "@" -> @name_command para isso. Abaixo irei listar algun deles.

- @clear - ao executar este comando ele limpa toda a tela da qual aparecem a saída dos comandos .

- @print - pode ser usado para mostrar uma saida no simulador como "@print saida" ou "@print #code js" , como dito antes nem tudo deve rodar então caso quiser mostrar uma operação use @print #value+value2 , ou o valor de uma variavel @print "#var_name", verificar uma condição "@print #(condiction)" entre outros ... OBS: não utilize as aspas para executar o commando . 

- @mkdir - se lembrarmos o nome é uma função php para criar pastas , e realmente fazemos uso dela nesta função , este comando serve para criar uma pasta em um lugar que vc especificar ex:
"@mkdir c:/wamp64/www/::nome da pasta"
deve ser executado desta forma com espaço depois de @mkdir e ::depois do nome do diretório em que ela será criada , deverá ver uma saída como : " Pasta Criada Com Sucesso em : c:/wamp64/www/nome da pasta ". Lembrando que se a pasta já existe não criará .

- @rmdir - Já este comando serve para deletar uma pasta especifica segue o exemplo do comando :

 "@rmdir c:/wamp64/www/::nome da pasta" 

e então deverá ver uma saída como "Pasta Removida Com Sucesso !" e se o diretório não existir retornará uma mensagem de erro .

- @unlink - usado para deletar um arquivo de uma pasta especifica , exemplo :

"@unlink c:/wamp64/www/::nome do arquivo"

e então a saída será "Arquivo Deletado Com Sucesso" se o arquivo existir e exclusão for bem sucedida.

- @declare - já dita antes serve para declarar uma variavel segue exemplo:
"@declare number  5" ou "@declare str  'valor para variavel str' "
se ocorrer tudo bem provavelmente aparecerá "number = 5" e  "str = valor para variavel str".

- @color - este comando é bem simples , usando-se "@color blue" a partir disso  a cor da font da saída passa a ser azul tambem pode se fazer : "@color red all" assim por causa do "all" a saída passa a ser em vermelho e toda saída anterior muda para a cor vermelha. E mais uma pequena coisa não precisa ser blue , red , gree , lime, pode se colocar tambem um valor hexadecimal ou rgb , rgba e mais interessante que gosto de usar é um número , acredito que tenha em torno de 100 cores diferentes ou seja de 0 a 100 ou mais pode-se usar: "@color 30" ou "@color 30 all" 30 é uma cor bastante atrativa , só não vou dizer agora como isso funciona , tendo acesso ao código fonte poderá entender.

- @font - parecido com o comando @color porem este serve para mudar a font da saída não tem o complemento "all" sempre que executar toda a font vai ser mudada , exemplo : "@font "lucida grande"  " ou "@font verdana" ou "@font sans serif" , depende da fonte que vc quiser usar . 

lembrando que tudo isso após atualizar a pagina se perde como , cor definida , font , variaveis que não foram pre definidas .


#Commands - functions

- Há alguns comandos (não exatamente) em forma de funções , listada abaixo :

- listdir()   Lista o conteúdo um diretório especifico em um elemento ou no próprio simulador.
- readfile()  Lê um arquivo especifico como Json , txt ...
- writefile() Cria um arquivo com a extensão especificada já no nome , Ex: "meujson.json", "readme.txt" ...
- acess()  Acessa Um Url especifico e retorna a saída em um elemento ou no próprio simulador .
- Todas essas funções predefinidas encontra-se no arquivo "js/pre_functions.js" , se entender bem como funcionam poderá criar seus próprios comandos
  usando de recursos PHP .
- Todas elas podem ser chamadas da seguinte forma : "listdir()" "#listdir() ", "readfile()" "#readfile", "writefile()" "#writefile", "acess()" "#acess()" .
  
  
  #Example

- listdir(param , param2) - para listar o conteúdo de um diretório basta fazer a chamada da função e passar o diretório em forma de string
    em "param" , caso quiser a saída no simulador passe o param2 com valor 1 caso queira no elemento abaixo do simulador dexe vazio ou passe o valor 1.
    
    ex: listdir(c:/wamp64/www/) vai listar o conteúdo do diretório passado no parametro . 
    
    obs: você pode tambem usar de variaveis para isso , ex:
    
    path = "c:/wamp64/www/" 
    
    listdir(path)
    
    
- readfile(param, param2) - para ler um arquivo especifico passando o seu caminho pelo param , ex:
    
      readfile("c:/wamp64/www/arquivo.json") e o param2 é opcional se quiser mostrar a saída em um elemento não passe nada caso queira mostrar
      no próprio simulador passe o param2 com valor 1.
      
      usando de variaveis pode ficar assim :
      
      path = "c:/wamp64/www/" .
      
      file_name = path + "arquivo.json" .
      
      readfile(file_name) .
      
      
-  writefile(param, content) - cria um arquivo com a extensão de acordo com o nome passado em param , ex :
      
      writefile("c:/wamp64/www/novo.txt", "este texto foi escrito através do Simulador Js") , verifica se o arquivo já existe se não
      ele cria segundo o nome passado pelo caminho em param , deverá ver uma saída como "Arquivo Criado Com Sucesso Em : c:/wamp64/www/simulator/novo.txt".
      
      neste caso é bom criar variaveis já predefinidas do caminho para não ficar sempre declarando uma ou ficar digitando o caminho.
      
- acess(param, param2) - acessa uma url especifica passada em param e retorna o a saída em um elemento caso o param2 não for definido 
      ou retorna no próprio simulador caso o param2 for passado com valor 1.
        
  acess("https://viacep.com.br/ws/30230500/json/") este retornará o json gerado ao acessar o url , mas este é só um exemplo se acessar este
  link verá que será retornado um json, e igualmente o acess pega o retorno em texto seja ele texto puro , json ou html e retorna no elemento .
        
  #create functions

- Para finalizar uma breve instrução de como criar tambem as suas funções em js e retornar a saída no prompt , a maneira que recomendo é simples no arquivo localizado em "js/user.js" existe um objeto declarado chamado "Command" , o que tem a fazer é simplesmente criar
mais um atributo dentro dele em forma de função e "return valor que aparecerá na saída", ex:

Command.myfunction = function(){ 

    return "esta função foi criada por min !"; 
    
}

e usar o comando @call para chama-la ex:

@call myfunction params , params vc pode deixar vazio ou passar parametros caso você contrua uma função que receba parametros , sendo assim passados em ordem separado por virgula , como exemplo iremos usar a função já criada para teste chamada "delta" :

"@call delta 1,2,3"  - a saida será -8 , faça você mesmo a comparação se está certo aonde A = 1, B = 2 e C = 3 -> (-2^2) - 4 * 1 * 3 .
 

