## Padrão Adapter
Este é o código de exemplo feito para mostrar o que é e quando usar o Design Pattern Adapter com implementação em Laravel.


### Setup
 1. Clonar o projeto `https://github.com/matheusmoc/design_pattern_adapter_jikanAPI.git`
 
 2. Rodar `composer install`
 
 2. Configurar a sua .env
 
 - `cp .env.example .env`
 - `php artisan key:generate`
 
 3. Executar o servidor `php artisan serve`
 
 5. Startar o servidor no frontend
 
 - `cd frontend-app`
 - `npm install` ou `yarn install` 
 - `npm run dev`
 
 
 4. 
 
 O projeto estará rodando no `http://localhost:3000`
 
 Pode ser utilizado o postman para teste nas endpoints
 
    - `http://localhost:8000/api/animes`
    - `http://localhost:8000/api/animes-by-character?character=6` Filtra o anime pelo personagem.
    - `http://localhost:8000/api/animes-by-id?id=1` Filtra o anime pelo id.
  
  <hr>
  
  ### API Utilizada para teste.
  
  https://jikan.moe/
  
  <hr>
  
  ## Como funciona um padrão de projeto adapter? 
  
  O padrão Adapter é muito utilizado quando precisamos encaixar uma nova biblioteca de classes, adquirida de um fornecedor, em um sistema de software já existente, porém essas bibliotecas de classes do novo fornecedor são diferentes das bibliotecas de classes do fornecedor antigo. 
  
  ## Mas como esse Design Pattern funcionaria caso quisessemos uma solução de problemas no mundo real com o framework Laravel? 
  
  Você pode adaptar um sistema totalmente divergente do seu e tratar seus dados de acordo com sua necessidade, padronizando tudo que precisa ser padronizado e com a finalidade de adaptar isso ao seu software. O Adapter é muito utilizado para compatibilizar o seu sistema a outros frameworks ou APIs. Abaixo podemos ver um ótimo exemplo:
  
  ### Exemplo de uma situação real:
  <pre>
  
  Fui designado pelo CTO da empresa de fazer uma integração de software resgatando dados de um sistema atual em Laravel 9 e integrando a um sistema legado em Laravel.
  
  - Problema:
  
  O backend do sistema legado retorna endpoints em formato `XML`, no entanto eu teria que adaptar os dados em `JSON` do meu sistema em Laravel 9 para que retorne `XML` para manter os padrões de negócio da empresa.
  
  - Solução:
  
  A ideia seria utilizar o padrão de projeto Adapter, onde posso criar uma classe chamada DataAdapter resgatando estes dados do sistema em Laravel 9 para o legado, e por fim tratar estes dados em um controlador utilizando um pacote de conversão de dados para `XML`
  
  <b>OBS:</b> Um pacote para isso poderia ser este formatador desenvolvida pela comunidade: https://github.com/SoapBox/laravel-formatter
   
 - Conclusão:
 
Podemos concluir então, que nossa aplicação legada serve como um intermediador (podemos exemplificar o intermediador com um simples adaptador USB que converte um cabo USB-C para qualquer outro tipo de entrada USB caso seja necessário utiliza-lo em um computador mais antigo), ou seja, recebe solicitações do cliente e converte essas solicitações em um formato que o fornecedor entenda.

 </pre>
 
 A imagem abaixo representa a situação contrária descrita anteriormente, onde queremos consumir serviços de um sistema legado para um nova tecnologia.
 
![image](https://user-images.githubusercontent.com/73448357/218322572-02c87b8e-d782-48d5-9e9e-ab3e79f7d4dd.png)
 
