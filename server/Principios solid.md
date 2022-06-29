## SOLID

1. Single Responsability Principle
2. Open/Closed Principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Dependency Inversion Principle

----------------------------------------------

## 1. Single Responsability Principle

    - Cada classe/função tem uma responsabilidade única;

    Isso significa que cada classe ou função tem objetivo
        de realizar somente uma regra de negócio.

    Ex.: Função CriarFeedback tem a responsabilidade de criar um feedback.

    Quando saber que estou ferindo essa norma:
        É simples, basta notar que quando você for explicar para alguém,
        sobre o que a sua função realiza no projeto você utilizar o "E"
        durante a explicação.

    Ex.: Essa função cria um feedback E também envia um e-mail.

----------------------------------------------

## 2. Open/Closed Principle

    - As classes da nossa aplicação devem ser abertas para
      extensão, mas fechadas para modificações;

    Isso significa que quando uma classe que realiza uma ação
      e outra classe extende ela, ela não pode modificar o 
      funcionamento da classe original.

    OBS.: Não é algo que é muito visto durante o desenvolvimento,
             mas é importante ter ciência disso.

----------------------------------------------

## 3. Liskov Substitution Principle

    - Nós devemos poder substituir uma classe pai por
      uma herença dela e tudo continuar funcionando;

    Ex.: Se eu tenho uma classe que se chama AVE, e depois eu
           crio uma classe chamada GAVIÃO que herda as funções
           da classe pai, deveria ser possível trocar a classe
           AVE pela GAVIÃO sem afetar o funcionamento do projeto,
           mesmo que essa classe GAVIÃO tenha funcionalidade a mais.

    Isso determina com que as heranças das nossas classes, sejam de
    fato um incremento ao que é a classe pai.

----------------------------------------------

## 4. Interface Segregation Principle

    - No caso essa regra tem como objetivo fazer com que nós
      não adicionemos uma super classe, para que essa classe
      implemente métodos dentro de outra classe. No caso segregar
      as interfaces.

    Ex.: Impressora -> Imprimir, Scannear, Digitalizar

        class Impressora implements Imprimir, Scannear, Digitalizar -> Forma "correta"
        class Impressora implements SuperImpressora(Imprimir, Scannear, Digitalizar) -> Forma "errada"

----------------------------------------------

## 5. Dependency Inversion Principle

    - Fazer com que nossas classes baseados no contexto externo
      tenham ciência das depêndecias que elas necessitam, fazendo
      a inversão dessa rotina, que no caso séria do externo dizer 
      o que a nossa classe necessita.

    Ex.: Se uma classe de envio do feedback, e ela
            depende do nodemailer, para enviar os emails
            ou de algo externo. O principio determinar que
            passemos essas depedências de uma forma inversa.
            Ou seja ao invés da classe dizer quais dependencias
            ela precisa o contexto externo a ela, fala quais
            dependencias ela deve usar.

----------------------------------------------