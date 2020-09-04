# README

Pré-requisitos: ter [Ruby](https://www.ruby-lang.org/pt/documentation/installation/) e [Node](https://nodejs.org/en/download/) instalados!

Clonar o repo:
```
git clone git@github.com:carolinaarakaki/seeds.git
```

Assim que clonar, rodar no terminal (um para cada linha):
```
bundle install
rake db:migrate
```

Para abrir a aplicação:
```
rails s
```

Para criar usuários: entrar no rails console (rodar `rails c` no terminal) e rodar:
```ruby
Student.create!(name: "Nome do usuario aqui", phone_number: "+55119999999", parent_phone_number: "+55119999999", email: "email@gmail.com")
```
Rodar isso para cada usuário a ser criado. O parent_phone_number é o número utilizado para enviar o sms para os pais, então é importante que esteja no formato como está a string (+55 ddd numero). O phone_number é o número do aluno que é utilizado para receber o sms dos amigos quando é convidado para leitura em grupo, então também deve estar formatado.

Para configurar a autenticação no banco: rodar no rails console:
```ruby
TwilioConfig.create!(account_sid: "#####", auth_token: "#####", twilio_number: "+1#####")
```
(Solicitar valores de autenticação para substituir os #)
É importante que os valores corretos estejam no primeiro record do TwilioConfig para funcionar! (Para verificar se é o primeiro, rode `TwilioConfig.first` no rails console após a criação e veja se os valores apresentados estão condizentes)

