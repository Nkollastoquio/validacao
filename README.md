# 🪪 validacao de CPF e Email 🪪
 

 ### 🪪 validação do CPF 🪪

 * 🪪Validador de CPF em JavaScript🪪

Este é um exemplo de código em JavaScript para validar um número de CPF brasileiro em uma aplicação web. O CPF (Cadastro de Pessoas Físicas) é um identificador único para indivíduos no Brasil.

### Funcionalidade

Este código adiciona um ouvinte de evento ao formulário com o ID `cpfForm`, que é acionado quando o formulário é enviado (`submit`). Ele realiza as seguintes ações:

1. **Prevenção de Envio Padrão:**
   - Interrompe o comportamento padrão de envio do formulário para realizar a validação sem recarregar a página.

2. **Validação do CPF:**
   - Obtém o número de CPF inserido no campo de entrada com o ID `cpf`.
   - Remove caracteres não numéricos do CPF.
   - Verifica se o CPF possui exatamente 11 dígitos e se os dígitos não são todos iguais.
   - Calcula e verifica os dígitos verificadores (10º e 11º dígitos) do CPF para determinar se o CPF é válido ou 
    

   ## 📧validação do email📧

     Código de Validação de Email em JavaScript
Este é um código simples em JavaScript para validar um campo de email em um formulário HTML. Abaixo estão detalhadas as funcionalidades e o funcionamento do código.

Funcionalidades
Validação de Email: Verifica se o campo de email está preenchido e se contém pelo menos um '@' e um '.'.
Exibição de Mensagens: Mostra alertas ao usuário dependendo do resultado da validação.
Atualização de Conteúdo: Atualiza o conteúdo de um elemento HTML com o valor do email válido, se fornecido.
Funcionamento
O código utiliza a função checarEmail() que é chamada geralmente a partir de um evento de submissão de formulário (onsubmit).

Dentro da função checarEmail(), são feitas as seguintes verificações:

Se o campo de email está vazio (document.forms[0].email.value == "").
Se o campo de email não contém o caractere '@' (document.forms[0].email.value.indexOf('@') == -1).
Se o campo de email não contém o caractere '.' (document.forms[0].email.value.indexOf('.') == -1).
Se alguma dessas condições não for atendida, um alerta é exibido pedindo para o usuário fornecer um email válido.

Se todas as condições são satisfeitas, um alerta de sucesso é mostrado.

 * Além disso, o código tenta atualizar o conteúdo de um elemento HTML com o ID email utilizando document.getElementById('email').innerHTML = document.forms[0].email.velue;. No entanto, há um erro de digitação no código original (velue em vez de value), que deve ser corrigido para que funcione corretamente.

* Melhorias Sugeridas
Correção de Erro: Certifique-se de corrigir o erro de digitação (velue para value) para que a atualização do elemento HTML funcione corretamente.

* Melhoria na Experiência do Usuário: Considere aprimorar a interface do usuário, utilizando mensagens de erro mais descritivas ou uma validação em tempo real enquanto o usuário digita.

* Segurança: Lembre-se de que validações de lado do cliente (como esta) são úteis para melhorar a experiência do usuário, mas não substituem validações de lado do servidor para garantir a segurança e integridade dos dados recebidos.

* Este README fornece uma visão geral do código de validação de email em JavaScript, destacando suas funcionalidades, funcionamento e melhorias sugeridas. Certifique-se de ajustar e testar o código conforme necessário para atender aos requisitos específicos de seu projeto.






