import CadastroPage from '../support/pages/CadastroPage'
import { faker } from '@faker-js/faker';


describe('Cadastro de Usuário - Loja EBAC', () => {

    it('Deve realizar cadastro com sucesso', () => {
        const email = faker.internet.email()
        const senha = 'Teste@123'


        CadastroPage.visitarPagina()
        CadastroPage.preencherEmail(email)
        CadastroPage.preencherSenha(senha)
        CadastroPage.submeterCadastro()
        CadastroPage.validarMensagemSucesso()
    })

    it('Deve exibir erro ao tentar cadastrar com e-mail já existente', () => {
        const emailExistente = 'guilhermearagao2001@hotmail.com'
        const mensagem = 'Uma conta já está registrada com seu endereço de e-mail. Faça login.'

        CadastroPage.visitarPagina()
        CadastroPage.preencherEmail(emailExistente)
        CadastroPage.preencherSenha('Teste@123')
        CadastroPage.submeterCadastro()
        CadastroPage.validarMensagemErro(mensagem)
    })
})
