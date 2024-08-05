# Apoio Ecocrise
  # Link do Back:
  - Link [ https://github.com/WesleyUlisses/BackEnd-Desafio-FernandaKipper ]
  
  <h2>Escopo:</h2>
  <h3>Sistema de Alerta e Evacuação Durante e Antes de Enchentes e Queimadas</h3>

  <h3>1. Visão Geral</h3>
  <p>O projeto visa criar um sistema abrangente para monitoramento e alerta de riscos climáticos, focado em enchentes, queimadas e outros desastres. Além de fornecer suporte psicológico pós-desastre, o sistema incluirá funcionalidades de cadastro de usuários, análise de riscos, envio de alertas e suporte psicológico online.</p>

  <h3>2. Funcionalidades</h3>

  <h4>2.1 Sistema de Alerta e Evacuação</h4>
  <p><strong>Cadastro de Usuários:</strong></p>
  <ul>
    <li>Formulário para coleta de dados pessoais (nome, e-mail, WhatsApp, número para mensagens, endereço completo).</li>
    <li>Coleta de informações sobre localização (cidade, CEP, bairro).</li>
  </ul>

  <p><strong>Análise de Risco:</strong></p>
  <ul>
    <li>Integração com serviços meteorológicos e dados locais para calcular a probabilidade de enchentes, queimadas, inundações, e risco de falta de luz.</li>
    <li>Avaliação baseada em proximidade de rios, barragens e histórico de desastres.</li>
  </ul>

  <p><strong>Envio de Alertas:</strong></p>
  <ul>
    <li>Mensagens personalizadas baseadas no grau de risco (baixo, moderado, alto, emergência).</li>
    <li>Alertas enviados por e-mail, SMS e WhatsApp.</li>
  </ul>

  <p><strong>Graus de Problemas:</strong></p>
  <ul>
    <li><strong>Baixo Risco:</strong> Informações de monitoramento e estabilidade.</li>
    <li><strong>Risco Moderado:</strong> Recomendações de monitoramento e preparação.</li>
    <li><strong>Alerta de Risco Alto:</strong> Instruções de segurança e preparação para possíveis evacuações.</li>
    <li><strong>Emergência Imediata:</strong> Ações imediatas e instruções de evacuação.</li>
  </ul>

  <h4>2.2 Pós-Desastre</h4>
  <p><strong>Acolhimento Psicológico Online:</strong></p>
  <ul>
    <li>Cadastro de profissionais e voluntários para atendimento psicológico.</li>
    <li>Agendamento de sessões de acolhimento via site.</li>
    <li>Sistema para visualização de horários disponíveis e marcação de consultas.</li>
  </ul>

  <p><strong>Chat 24 Horas com IA:</strong></p>
  <ul>
    <li>Atendimento e suporte psicológico automático para crises e momentos difíceis.</li>
  </ul>

  <p><strong>Blog de Orientações e Apoio:</strong></p>
  <ul>
    <li>Artigos, vídeos e postagens com orientações, mensagens de apoio e dinâmicas para ajudar as pessoas afetadas.</li>
  </ul>

  <h4>2.3 Cadastro de Desastres</h4>
  <p><strong>Perguntas para Mapeamento de Área:</strong></p>
  <ul>
    <li>Proximidade de rios e barragens.</li>
    <li>Histórico de desastres na área (enchentes, queimadas, etc.).</li>
    <li>Informações pessoais para contato (nome, e-mail, WhatsApp, número para mensagens).</li>
    <li>Endereço completo para mapeamento de riscos (cidade, CEP, bairro).</li>
  </ul>

  <p><strong>Modelo de Graus de Problemas</strong></p>
  <ul>
    <li>
      <strong>Baixo Risco</strong>
      <ul>
        <li><strong>Descrição:</strong> Pequenas variações nas condições climáticas, sem previsão imediata de eventos extremos.</li>
        <li><strong>Mensagem Exemplo:</strong></li>
        <ul>
          <li>E-mail/SMS/WhatsApp: "Olá [Nome], a situação climática na sua região está estável no momento. Não há alertas de enchentes ou queimadas. Continuaremos monitorando a situação e manteremos você informado sobre qualquer alteração."</li>
        </ul>
      </ul>
    </li>
    <li>
      <strong>Risco Moderado</strong>
      <ul>
        <li><strong>Descrição:</strong> Condições que indicam a possibilidade de eventos climáticos adversos, mas sem previsão imediata de impacto severo.</li>
        <li><strong>Mensagem Exemplo:</strong></li>
        <ul>
          <li>E-mail/SMS/WhatsApp: "Prezado [Nome], as condições climáticas na sua área estão apresentando um risco moderado de enchentes/queimadas. Recomendamos que você monitore as atualizações e esteja preparado para possíveis mudanças no tempo."</li>
        </ul>
      </ul>
    </li>
    <li>
      <strong>Alerta de Risco Alto</strong>
      <ul>
        <li><strong>Descrição:</strong> Condições que aumentam significativamente a probabilidade de eventos extremos, com possibilidade de impacto iminente.</li>
        <li><strong>Mensagem Exemplo:</strong></li>
        <ul>
          <li>E-mail/SMS/WhatsApp: "Atenção [Nome], há um alerta de alto risco para enchentes/queimadas na sua região. Por favor, siga as instruções de segurança, mantenha-se informado e prepare-se para possíveis evacuações. Estaremos enviando atualizações conforme a situação evolui."</li>
        </ul>
      </ul>
    </li>
    <li>
      <strong>Emergência Imediata</strong>
      <ul>
        <li><strong>Descrição:</strong> Situação crítica com alta probabilidade de eventos extremos, que exige ação imediata.</li>
        <li><strong>Mensagem Exemplo:</strong></li>
        <ul>
          <li>E-mail/SMS/WhatsApp: "Urgente [Nome], uma emergência de enchentes/queimadas está em andamento na sua área. Por favor, siga imediatamente as instruções de evacuação e busque abrigo seguro. Mantenha-se atento às atualizações e comunique-se com as autoridades locais."</li>
        </ul>
      </ul>
    </li>
  </ul>

  <h2>Pré-requisitos do Projeto</h2>
  <p>Para configurar e executar este projeto, você precisará das seguintes contas e serviços:</p>
  <ul>
    <li><strong>AWS (Amazon Web Services):</strong> Conta AWS com o serviço S3 configurado para armazenamento de arquivos.</li>
    <li><strong>Google Dialogflow:</strong> Conta no Google Dialogflow para configurar o chatbot e o suporte via chat 24 horas.</li>
    <li><strong>MercadoPago:</strong> Conta no MercadoPago para integração com pagamentos e doações.</li>
    <li><strong>Brasil API:</strong> Serviço utilizado no frontend para captura de informações de localização e dados adicionais sobre usuários.</li>
  </ul>

  <h2>Configuração do Ambiente</h2>
  <pre>
<code>
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
</code>
</pre>
  
  <h1>Documentação e Manuais de Uso</h1>

  <h2>Guia de Uso da Aplicação</h2>
  <p>Abaixo estão os links para documentação externa que explica detalhadamente como utilizar as principais funcionalidades da nossa aplicação. Clique nos links para acessar os guias completos.</p>

  <h3>Como Fazer o Cadastro na Parte de Monitoramento e Notificação para Desastres</h3>
  <p>Para se cadastrar e começar a receber notificações sobre riscos climáticos como enchentes e queimadas, siga o guia abaixo:</p>
  <a href="https://scribehow.com/shared/Como_fazer_o_cadastro_de_monitoramento_e_notificacao_para_desastres__LuUzxNUARG6HTECp6qt8cw" target="_blank">Como fazer o cadastro de monitoramento e notificação para desastres</a>

  <h3>Como Entrar em Contato com a Equipe de Voluntários</h3>
  <p>Se você deseja se tornar um voluntário ou precisa entrar em contato com nossa equipe de voluntários, consulte o link abaixo:</p>
  <a href="https://scribehow.com/shared/Como_entrar_em_contato_com_a_equipe_de_voluntarios__jz6qWtmXQdaqcEVBxDkJyw" target="_blank">Como entrar em contato com a equipe de voluntários</a>

  <h3>Como Obter um Número para Chamadas com os Voluntários</h3>
  <p>Para obter um número de telefone para entrar em contato com nossos voluntários, veja o guia abaixo:</p>
  <a href="https://scribehow.com/shared/Como_obter_um_numero_para_chamadas_com_os_voluntarios__ABawjik2R9i_fQFNRHeMzg" target="_blank">Como obter um número para chamadas com os voluntários</a>

  <h3>Quero Doar, Como Fazer?</h3>
  <p>Para saber como fazer uma doação e contribuir com nosso projeto, acesse o link abaixo:</p>
  <a href="https://scribehow.com/shared/Quero_fazer_uma_doacao__033rTSUXTCGvreZSynJypQ" target="_blank">Quero fazer uma doação</a>

  <h3>Como Acessar o Chatbot para Me Ajudar em Momentos de Crise?</h3>
  <p>Nos momentos de crise, nosso chatbot está disponível para fornecer suporte imediato. Veja como acessá-lo:</p>
  <a href="https://scribehow.com/shared/Como_acessar_o_chatbot_para_ajuda_em_momentos_de_crise__E0VjebQiTOik5Ybegy35nQ" target="_blank">Como acessar o chatbot para ajuda em momentos de crise</a>

  <h3>Como Agendar uma Sessão de Acolhimento com Voluntários da Plataforma?</h3>
  <p>Para agendar uma sessão de acolhimento psicológico com nossos voluntários, siga o guia abaixo:</p>
  <a href="https://scribehow.com/shared/Como_agendar_uma_sessao_de_acolhimento_com_voluntarios_da_plataforma__vlQLtFLSQ-a3ok0QUHvlng" target="_blank">Como agendar uma sessão de acolhimento com voluntários da plataforma</a>

  <h3>Como Entrar em Contato para Tornar-se Voluntário</h3>
  <p>Se você deseja se tornar um voluntário e fazer parte da nossa equipe, consulte o link abaixo:</p>
  <a href="https://scribehow.com/shared/Entrar_Em_Contato_Para_Tornar-se_Voluntário__Crv1EQefTAyTHEvS1RMQ3A" target="_blank">Entrar Em Contato Para Tornar-se Voluntário</a>

  <h2>Informações Adicionais</h2>
  <p>Esses links direcionam você para guias detalhados que explicam passo a passo como utilizar cada funcionalidade da nossa aplicação. Caso tenha mais dúvidas, não hesite em entrar em contato conosco através dos meios fornecidos.</p>

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
