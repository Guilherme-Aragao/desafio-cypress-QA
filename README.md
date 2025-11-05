# 🧪 Desafio de Automação de Testes E2E com Cypress

Este projeto faz parte de um **desafio técnico de automação de testes end-to-end (E2E)** utilizando o **Cypress**.  
O objetivo é validar o comportamento de uma funcionalidade essencial do e-commerce [EBAC Store](http://lojaebac.ebaconline.art.br).

---

## ⚙️ Como instalar as dependências do projeto

1. **Clonar o repositório**
   
   git clone https://github.com/Guilherme-Aragao/desafio-cypress-QA.git
   cd desafio-cypress-QA

2. Instalar as dependências

npm install

▶️ Como rodar os testes

Executar todos os testes em modo headless:
npx cypress run

Executar os testes no modo interativo (GUI):
npx cypress open


Após a execução, será criada a pasta:

allure-results/


com os resultados dos testes automatizados.

Para gerar o relatório Allure:

npx allure generate allure-results --clean -o allure-report
npx allure open

🧩 Cenário Automatizado
🛒 Funcionalidade: Carrinho de Compras

Cenários Implementados:

Adicionar um produto ao carrinho com sucesso

Adicionar múltiplos produtos ao carrinho

Remover um produto do carrinho

Esvaziar o carrinho e validar a mensagem de carrinho vazio

Motivo da escolha:
O fluxo de carrinho de compras foi escolhido por ser uma funcionalidade central e crítica no contexto de um e-commerce,
impactando diretamente a experiência do usuário e servindo de base para os fluxos de checkout e finalização de compra.

📊 Relatório Allure gerado automaticamente via GitHub Actions
📍 Dashboard disponível em: https://guilherme-aragao.github.io/desafio-cypress-QA

👨‍💻 Autor: Guilherme Aragão
📦 Projeto público no GitHub: desafio-cypress-QA