# Desafio de Automação E2E com Cypress e Allure Report

Este projeto foi desenvolvido como parte de um desafio técnico de **automação de testes end-to-end (E2E)** para um e-commerce fictício.  
O objetivo é validar funcionalidades essenciais da aplicação, utilizando boas práticas de automação, relatórios de execução e integração contínua (CI/CD).

---

## Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) — Framework principal de testes E2E  
- [Allure Report](https://docs.qameta.io/allure/) — Geração de relatórios interativos e detalhados  
- [Node.js](https://nodejs.org/) — Ambiente de execução  
- [GitHub Actions](https://github.com/features/actions) — Execução automática dos testes e publicação do relatório  
- [GitHub Pages](https://pages.github.com/) — Hospedagem do dashboard do Allure

---

## Como configurar o projeto

### 1. Clonar o repositório

git clone https://github.com/Guilherme-Aragao/desafio-cypress-QA.git
cd desafio-cypress-QA

2. Instalar as dependências

Certifique-se de ter o Node.js instalado (versão 18 ou superior).
npm install

3. Executar os testes localmente

Para rodar todos os testes em modo headless (sem abrir o navegador):
npx cypress run

Ou para abrir o Cypress Test Runner interativo:
npx cypress open

Após a execução, os resultados serão armazenados em:
allure-results/


Gerar o Allure Report localmente

Após rodar os testes, gere e visualize o relatório do Allure:
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
O relatório será aberto no navegador padrão e exibirá os resultados detalhados dos testes.

Integração Contínua (CI/CD)

O projeto possui um workflow automatizado no GitHub Actions que executa:

Instalação das dependências

Execução dos testes do Cypress

Geração do relatório Allure

Publicação automática no GitHub Pages

🌍 Acesso ao Dashboard Allure

Os resultados mais recentes podem ser visualizados online em:

👉 Dashboard Allure - Clique aqui

🧩 Cenários de teste automatizados
🔹 1. Login

Descrição:
Valida o fluxo de login com credenciais válidas e inválidas.
Motivo da escolha:
O login é uma funcionalidade crítica — garantir seu correto funcionamento evita falhas em fluxos subsequentes.

🔹 2. Cadastro de usuário

Descrição:
Valida o preenchimento e envio do formulário de cadastro de novos usuários.
Motivo da escolha:
Cadastro é o primeiro ponto de contato com o sistema, sendo essencial que funcione sem falhas.

🔹 3. Carrinho de compras

Descrição:
Valida a adição e remoção de produtos no carrinho, além da atualização de quantidades.
Motivo da escolha:
O carrinho é o coração de um e-commerce — erros nessa etapa impactam diretamente a conversão de vendas.

🔹 4. Página de produtos

Descrição:
Verifica a exibição correta de informações de produtos, busca e filtros.
Motivo da escolha:
Garante a usabilidade e confiabilidade da listagem de produtos, essencial para a jornada do cliente.


Estrutura do projeto
desafio-cypress-QA/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── cadastro.cy.js
│   │   ├── carrinho.cy.js
│   │   └── produto.cy.js
│   ├── support/
│   │   ├── pages/
│   │   │   ├── LoginPage.js
│   │   │   ├── CadastroPage.js
│   │   │   ├── CarrinhoPage.js
│   │   │   └── ProdutoPage.js
│   │   └── commands.js
│   └── fixtures/
│       └── users.json
├── allure-results/
├── allure-report/
├── .github/workflows/cypress-allure.yml
├── package.json
├── cypress.config.js
└── README.md

✅ Boas práticas aplicadas

Reutilização de código com Page Objects

Relatórios Allure com screenshots e logs

Pipeline automatizada (CI/CD) com GitHub Actions

Evita hardcode e melhora a manutenção

Estrutura limpa e modular

Autor
Guilherme Aragão
    QA Engineer | Automação de Testes | Cypress | Allure | CI/CD
    LinkedIn - linkedin.com/in/guilherme-aragão-silva-367758235
    guilherme.aragao2001@hotmail.com
