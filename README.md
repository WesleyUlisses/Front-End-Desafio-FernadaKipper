# Apoio Ecocrise

## Link do Back
- [Link](https://github.com/WesleyUlisses/BackEnd-Desafio-FernandaKipper)

## Escopo

### Sistema de Alerta e Evacuação Durante e Antes de Enchentes e Queimadas

#### 1. Visão Geral
O projeto visa criar um sistema abrangente para monitoramento e alerta de riscos climáticos, focado em enchentes, queimadas e outros desastres. Além de fornecer suporte psicológico pós-desastre, o sistema incluirá funcionalidades de cadastro de usuários, análise de riscos, envio de alertas e suporte psicológico online.

#### 2. Funcionalidades

##### 2.1 Sistema de Alerta e Evacuação
**Cadastro de Usuários:**
- Formulário para coleta de dados pessoais (nome, e-mail, WhatsApp, número para mensagens, endereço completo).
- Coleta de informações sobre localização (cidade, CEP, bairro).

**Análise de Risco:**
- Integração com serviços meteorológicos e dados locais para calcular a probabilidade de enchentes, queimadas, inundações e risco de falta de luz.
- Avaliação baseada em proximidade de rios, barragens e histórico de desastres.

**Envio de Alertas:**
- Mensagens personalizadas baseadas no grau de risco (baixo, moderado, alto, emergência).
- Alertas enviados por e-mail, SMS e WhatsApp.

**Graus de Problemas:**
- **Baixo Risco:** Informações de monitoramento e estabilidade.
  - *Mensagem Exemplo:*
    - E-mail/SMS/WhatsApp: "Olá [Nome], a situação climática na sua região está estável no momento. Não há alertas de enchentes ou queimadas. Continuaremos monitorando a situação e manteremos você informado sobre qualquer alteração."

- **Risco Moderado:** Recomendações de monitoramento e preparação.
  - *Mensagem Exemplo:*
    - E-mail/SMS/WhatsApp: "Prezado [Nome], as condições climáticas na sua área estão apresentando um risco moderado de enchentes/queimadas. Recomendamos que você monitore as atualizações e esteja preparado para possíveis mudanças no tempo."

- **Alerta de Risco Alto:** Instruções de segurança e preparação para possíveis evacuações.
  - *Mensagem Exemplo:*
    - E-mail/SMS/WhatsApp: "Atenção [Nome], há um alerta de alto risco para enchentes/queimadas na sua região. Por favor, siga as instruções de segurança, mantenha-se informado e prepare-se para possíveis evacuações. Estaremos enviando atualizações conforme a situação evolui."

- **Emergência Imediata:** Ações imediatas e instruções de evacuação.
  - *Mensagem Exemplo:*
    - E-mail/SMS/WhatsApp: "Urgente [Nome], uma emergência de enchentes/queimadas está em andamento na sua área. Por favor, siga imediatamente as instruções de evacuação e busque abrigo seguro. Mantenha-se atento às atualizações e comunique-se com as autoridades locais."

##### 2.2 Pós-Desastre
**Acolhimento Psicológico Online:**
- Cadastro de profissionais e voluntários para atendimento psicológico.
- Agendamento de sessões de acolhimento via site.
- Sistema para visualização de horários disponíveis e marcação de consultas.

**Chat 24 Horas com IA:**
- Atendimento e suporte psicológico automático para crises e momentos difíceis.

**Blog de Orientações e Apoio:**
- Artigos, vídeos e postagens com orientações, mensagens de apoio e dinâmicas para ajudar as pessoas afetadas.

##### 2.3 Cadastro de Desastres
**Perguntas para Mapeamento de Área:**
- Proximidade de rios e barragens.
- Histórico de desastres na área (enchentes, queimadas, etc.).
- Informações pessoais para contato (nome, e-mail, WhatsApp, número para mensagens).
- Endereço completo para mapeamento de riscos (cidade, CEP, bairro).

#### Modelo de Graus de Problemas
- **Baixo Risco**
  - *Descrição:* Pequenas variações nas condições climáticas, sem previsão imediata de eventos extremos.
  - *Mensagem Exemplo:*
    - E-mail/SMS/WhatsApp: "Olá [Nome], a situação climática na sua região está estável no momento. Não há alertas de enchentes ou queimadas. Continuaremos monitorando a situação e manteremos você informado sobre qualquer alteração."

- **Risco Moderado**
  - *Descrição:* Condições que indicam a possibilidade de eventos climáticos adversos, mas sem previsão imediata de impacto severo.
  - *Mensagem Exemplo:*
    - E-mail/SMS/WhatsApp: "Prezado [Nome], as condições climáticas na sua área estão apresentando um risco moderado de enchentes/queimadas. Recomendamos que você monitore as atualizações e esteja preparado para possíveis mudanças no tempo."

- **Alerta de Risco Alto**
  - *Descrição:* Condições que aumentam significativamente a probabilidade de eventos extremos, com possibilidade de impacto iminente.
  - *Mensagem Exemplo:*
    - E-mail/SMS/WhatsApp: "Atenção [Nome], há um alerta de alto risco para enchentes/queimadas na sua região. Por favor, siga as instruções de segurança, mantenha-se informado e prepare-se para possíveis evacuações. Estaremos enviando atualizações conforme a situação evolui."

- **Emergência Imediata**
  - *Descrição:* Situação crítica com alta probabilidade de eventos extremos, que exige ação imediata.
  - *Mensagem Exemplo:*
    - E-mail/SMS/WhatsApp: "Urgente [Nome], uma emergência de enchentes/queimadas está em andamento na sua área. Por favor, siga imediatamente as instruções de evacuação e busque abrigo seguro. Mantenha-se atento às atualizações e comunique-se com as autoridades locais."

## Pré-requisitos do Projeto
Para configurar e executar este projeto, você precisará das seguintes contas e serviços:
- **AWS (Amazon Web Services):** Conta AWS com o serviço S3 configurado para armazenamento de arquivos.
- **Google Dialogflow:** Conta no Google Dialogflow para configurar o chatbot e o suporte via chat 24 horas.
- **MercadoPago:** Conta no MercadoPago para integração com pagamentos e doações.
- **Brasil API:** Serviço utilizado no frontend para captura de informações de localização e dados adicionais sobre usuários.

## Configuração do Ambiente
```typescript
export const environment = {
  production: false,
  apiUrl: 'https://backend-desafio-fernandakipper-phr6.onrender.com',
  frontendUrl: 'https://apoioecocrise.vercel.app',
  awsS3: {
    region: 'us-east-1',
    accessKeyId: 'accessKeyId',
    secretAccessKey: 'secret',
    bucketName: 'bucketName',
    endpoint: 'endpoint',
  },
  mercadoPagoPaymentRedirectUrl: 'https://link.mercadopago.com.br/wesleyulisses',
  mercadoPagoPublicKey: 'TEST-1b3b3b3b-1b3b-1b3b-1b3b-1b3b3b3b3b3b',
  mercadoPagoBaseApiUrl: 'https://api.mercadopago.com',
  geolocationApiUrl: 'https://brasilapi.com.br/api',
  apoioEcoCriseRecieverEmail: 'apoioecocrise@labsif.com.br',
  dialogflowapi: 'https://dialogflow.cloud.google.com/v1/integrations',
};
```
# Documentação e Manuais de Uso

## Guia de Uso da Aplicação

Abaixo estão os links para documentação externa que explica detalhadamente como utilizar as principais funcionalidades da nossa aplicação. Clique nos links para acessar os guias completos.

### Como Fazer o Cadastro na Parte de Monitoramento e Notificação para Desastres

Para se cadastrar e começar a receber notificações sobre riscos climáticos como enchentes e queimadas, siga o guia abaixo:

- [Como fazer o cadastro de monitoramento e notificação para desastres](https://scribehow.com/shared/Como_fazer_o_cadastro_de_monitoramento_e_notificacao_para_desastres__LuUzxNUARG6HTECp6qt8cw)

### Como Entrar em Contato com a Equipe de Voluntários

Se você deseja se tornar um voluntário ou precisa entrar em contato com nossa equipe de voluntários, consulte o link abaixo:

- [Como entrar em contato com a equipe de voluntários](https://scribehow.com/shared/Como_entrar_em_contato_com_a_equipe_de_voluntarios__jz6qWtmXQdaqcEVBxDkJyw)

### Como Obter um Número para Chamadas com os Voluntários

Para obter um número de telefone para entrar em contato com nossos voluntários, veja o guia abaixo:

- [Como obter um número para chamadas com os voluntários](https://scribehow.com/shared/Como_obter_um_numero_para_chamadas_com_os_voluntarios__ABawjik2R9i_fQFNRHeMzg)

### Quero Doar, Como Fazer?

Para saber como fazer uma doação e contribuir com nosso projeto, acesse o link abaixo:

- [Quero fazer uma doação](https://scribehow.com/shared/Quero_fazer_uma_doacao__033rTSUXTCGvreZSynJypQ)

### Como Acessar o Chatbot para Me Ajudar em Momentos de Crise?

Nos momentos de crise, nosso chatbot está disponível para fornecer suporte imediato. Veja como acessá-lo:

- [Como acessar o chatbot para ajuda em momentos de crise](https://scribehow.com/shared/Como_acessar_o_chatbot_para_ajuda_em_momentos_de_crise__E0VjebQiTOik5Ybegy35nQ)

### Como Agendar uma Sessão de Acolhimento com Voluntários da Plataforma?

Para agendar uma sessão de acolhimento psicológico com nossos voluntários, siga o guia abaixo:

- [Como agendar uma sessão de acolhimento com voluntários da plataforma](https://scribehow.com/shared/Como_agendar_uma_sessao_de_acolhimento_com_voluntarios_da_plataforma__vlQLtFLSQ-a3ok0QUHvlng)

### Como Entrar em Contato para Tornar-se Voluntário

Se você deseja se tornar um voluntário e fazer parte da nossa equipe, consulte o link abaixo:

- [Entrar Em Contato Para Tornar-se Voluntário](https://scribehow.com/shared/Entrar_Em_Contato_Para_Tornar-se_Voluntário__Crv1EQefTAyTHEvS1RMQ3A)

## Informações Adicionais

Esses links direcionam você para guias detalhados que explicam passo a passo como utilizar cada funcionalidade da nossa aplicação. Caso tenha mais dúvidas, não hesite em entrar em contato conosco através dos meios fornecidos.


## Servidor de Desenvolvimento

Execute ng serve para iniciar um servidor de desenvolvimento. Navegue para http://localhost:4200/. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

## Criação de Código

Execute ng generate component nome-do-componente para gerar um novo componente. Você também pode usar ng generate directive|pipe|service|class|guard|interface|enum|module.

## Compilação

Execute ng build para compilar o projeto. Os artefatos de compilação serão armazenados no diretório dist/.

## Execução de Testes Unitários

Execute ng test para executar os testes unitários via Karma.

## Execução de Testes de Ponta a Ponta

Execute ng e2e para executar os testes de ponta a ponta através de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente capacidades de teste de ponta a ponta.

## Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, use ng help ou consulte a página de  [ Visão Geral e Referência de Comandos do Angular CLI ](https://angular.io/cli).
