# Especificações do Projeto

  A ideia do aplicativo MyChef surgiu com base na análise da sociedade atual, onde existe uma crescente demanda por soluções que simplifiquem a alimentação em meio à vida agitada da sociedade moderna. Por isso, buscamos uma ferramenta para agilizar esse processo e permitir a contratação de chefs para cozinhar refeições personalizadas diretamente nas casas dos clientes.
  Para tornar essa visão uma realidade, empregaremos uma variedade de ferramentas de desenvolvimento. No Front-End, utilizaremos HTML e CSS para criar uma interface de usuário intuitiva e responsiva, garantindo uma experiência de alta qualidade para nossos usuários. No Back-End, estaremos utilizando JavaScript para implementar a lógica do aplicativo e garantir um funcionamento eficiente. Além disso, estamos aproveitando a capacidade de colaboração e controle de versão oferecida pelo GitHub Classroom para gerenciar e rastrear nosso progresso de desenvolvimento de forma eficaz. 

## Personas

Persona 1: Livia Santos tem 35 anos, é uma advogada com a carreira consolidada, é casada há dois anos e adora comemorar seus aniversários. Ela tem o costume de realizar jantares em casa entretanto sempre teve dificuldades de encontrar cozinheiros particulares que atendessem a domicílio. 
Persona 2: João Paulo tem 28 anos, é casado e tem uma filha, adora esportes e é formado em gastronomia e nutrição há 5 anos. Ele trabalha na área de consultas e tratamentos individuais para pessoas que desejam ter uma vida mais saudável. Está em busca de clientes para montar marmitas especializadas e instruir como prosseguir com um cotidiano de forma benéfica e sadia. 
Persona 3: Luiza tem 24 anos, mora sozinha, é solteira e é professora. Ela adora cozinhar, principalmente para casais e faz isso há 5 anos, mesmo não tendo muita experiência e não trabalhando nessa área, tem bastante determinação. Está buscando oportunidades para exercer esse hobbie e ganhar um dinheiro extra para sustentar sua família. 
Persona 4: Flora tem 40 anos, é atleta há 20 anos e mora com seu marido e seu filho, ela tem intolerância à glúten e lactose. Devido às suas restrições alimentares e sua vida agitada, precisa de um profissional que forneça instruções e marmitas específicas para facilitar o seu cotidiano e manutenção de uma vida saudável.
Persona 5: José Borges tem 55 anos, é solteiro, adora esportes e tem três filhos. Ele trabalha na área da culinária há 30 anos e é especialista em churrasco. José atualmente vem enfrentando problemas para exercer sua profissão devido a baixa demanda, por isso, está buscando uma forma alternativa de divulgar os seus serviços.
Persona 6: Sofia Souza tem 32 anos, trabalha como gerente de marketing em uma empresa de tecnologia e mora em um apartamento na área urbana. Devido ao seu estilo de vida agitado, Sofia muitas vezes não tem tempo para cozinhar. Ela busca uma solução que lhe permita desfrutar de refeições personalizadas sem o trabalho de cozinhar.
Persona 7: Lucas tem 28 anos, é um entusiasta da culinária e trabalha como designer gráfico freelancer. Ele vive em uma casa nos arredores da cidade. Lucas adora cozinhar, mas às vezes deseja relaxar enquanto alguém mais prepara uma refeição especial para ele e seus amigos. Ele busca variedade e adoraria explorar diferentes estilos de culinária sem sair de casa.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`              | QUERO/PRECISO ... `FUNCIONALIDADE`                               |PARA ... `MOTIVO/VALOR`                                                  |
|----------------------------------|------------------------------------------------------------------|-------------------------------------------------------------------------|
|Usuário do sistema                | Encontrar cozinheiros particulares que atendam a domicílio       | Para que eu não precise cozinhar                                        |
|Usuário do sistema                | Encontrar clientes interessados em marmitas especializadas       | Expandir minha carreira na área de consultas de saúde e nutrição        |
|Usuário do sistema                | Vender minhas habilidades amadoras em culínaria                  | Exercer meu hobbie de cozinhar e ganhar renda adicional com isso        |
|Usuário do sistema                | De um profissional que entenda minhas intolerâncias alimentares  | Manter minha saúde através de uma dieta adequada às minhas restrições   |
|Usuário do sistema                | Uma forma de fazer renda extra mesmo ja trabalhando na área      | Aumentar minha demanda de trabalho                                      |
|Administrador                     | Gerenciar os perfis dos chefs                                    | Manter apenas chefs qualificados e confiáveis                           |
|Administrador                     | Ter um sistema pra monitorar as avaliações e comentários         | Manter a qualidade da plataforma                                        |
|Administrador                     | Ter um sistema para gerenciar reclamações e conflitos            | Assegurar a satisfação dos usuários                                     |
|Administrador                     | Configurar e gerenciar as taxas/comissões cobradas na plataforma | Garantir a sustentabilidade financeira do aplicativo.                   |
|Administrador                     | Monitorar a atividade na plataforma em busca de ações suspeitas  | Garantir a segurança e a integridade da comunidade de usuários e chefs  |
|Administrador                     | Estar disponível para fornecer suporte técnico aos usuários      | Resolver problemas e dúvidas                                            |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito                                                                                                                                               | Prioridade | Responsável        |
|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------| -------------------|
|RF-001| Como usúario gostaria de poder me cadastrar e criar um perfil, bem como apresentar minhashabilidades e experiências culinárias, caso necessári                       | ALTA       |                    |
|RF-002| Como usuário, desejo explorar perfis de chefs, pesquisar, filtrar e visualizar com base em critérios como especialidade, avaliações e localização.                   | ALTA       |                    |
|RF-003| Como usuário, quero escolher entre uma variedade de menus e pratos oferecidos pelos chefs, incluindo opções para diferentes refeições e estilos de cozinha.          | ALTA       |                    |
|RF-004| Como usuário, desejo agendar datas e horários para que os chefs cozinhem em minha casa, com a opção de selecionar pratos específicos a serem preparados.             | ALTA       |                    |
|RF-005| Como usuário, gostaria de personalizar os pratos de acordo com minhas preferências dietéticas, restrições alimentares e sabores desejados.                           | ALTA       |                    |
|RF-006| Como usuário, desejo avaliar a experiência culinária e deixar comentários sobre os chefs, contribuindo para a construção de sua reputação na plataforma.             | MÉDIA      |                    |
|RF-007| Como usuário, quero ter uma plataforma de comunicação direta com os chefs, discutir detalhes dos serviços e obter esclarecimentos para minhas dúvidas.               | MÉDIA      |                    |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A plataforma deve garantir que os dados pessoais, de pagamento e outros dados sensíveis sejam armazenados e transmitidos de forma segura, utilizando criptografia AES-256 bits para proteção. | ALTA  | 
|RNF-002| A plataforma deve oferecer uma experiência fluida e responsiva, mesmo em momentos de alta demanda, para evitar atrasos no agendamento e na exploração de perfis.                              | MÉDIA | 
|RNF-003| A plataforma deve ser compatível com uma variedade de navegadores web, incluindo Google Chrome, Mozilla Firefox, Microsoft Edge e Safari.                                                     | ALTA  | 
|RNF-004| A plataforma deve minimizar interrupções e falhas, garantindo que os serviços de agendamento e pagamento estejam sempre disponíveis e funcionais.                                             | ALTA  | 
|RNF-005| A plataforma deve possuir uma interface de usuário intuitiva e fácil de navegar, com uma paleta de cores agradável e menus de fácil acesso, garantindo a satisfação dos usuários.             | ALTA  | 
|RNF-006| A plataforma deve possuir uma arquitetura escalável que possa lidar com o crescimento do número de usuários e chefs sem comprometer o desempenho.                                             | MÉDIA | 
|RNF-007| A plataforma deve integrar um sistema de pagamento seguro que permita aos usuários pagar pelos serviços dos chefs de forma conveniente e segura.                                              | ALTA  | 
                                                                                                                                     

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                                                                                                |
|--|------------------------------------------------------------------------------------------------------------------------------------------|
|01| O desenvolvimento a princípio não deverá demandar o investimento de recursos financeiros                                                 |
|02| A integração com serviços ou APIs de terceiros não deverá ocorrer                                                                        |
|03| A implementação de recursos deve ser focada nas funcionalidades essenciais do front end, sem recursos secundários ou específicos.        |
|04| A equipe estará limitada aos membros originais que a compõe                                                                              |
|05| Deverá ser utilizado exclusivamente o VSCode para desenvolver a aplicação                                                                |
|06| A aplicação deverá ser desenvolvida apenas nas linguagens HTML, CSS e Java Script                                                        |
|07| O versionamento deverá ser realizado no github classroom                                                                                 |
|08| Deverá ser desenvolvido apenas a versão web                                                                                              |


