import LoginPage from '../support/pages/LoginPage';

describe('Login - Loja EBAC', () => {

    it('Deve realizar login com sucesso', () => {
        const email = 'guilhermearagao2109@gmail.com'
        const senha = 'Ebac1234'

        LoginPage.visitarPagina()
        LoginPage.preencherUsuario(email)
        LoginPage.preencherSenha(senha)
        LoginPage.submeterLogin()
        LoginPage.validarLoginComSucesso()
    })

    it('Deve exibir mensagem de erro ao digitar senha incorreta', () => {
        const email = 'guilhermearagao2109@gmail.com'
        const senhaErrada = 'senhaErrada123'
        const mensagemErro = `A senha fornecida para o e-mail ${email} está incorreta. Perdeu a senha?`

        LoginPage.visitarPagina()
        LoginPage.preencherUsuario(email)
        LoginPage.preencherSenha(senhaErrada)
        LoginPage.submeterLogin()
        LoginPage.validarMensagemErro(mensagemErro)
    })

    it('Deve exibir erro ao tentar logar com usuário inexistente', () => {
        const email = 'naoexiste' + '@teste.com'
        const senha = 'Teste@123'
        const mensagemErro = 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.'

        LoginPage.visitarPagina()
        LoginPage.preencherUsuario(email)
        LoginPage.preencherSenha(senha)
        LoginPage.submeterLogin()
        LoginPage.validarMensagemErro(mensagemErro)
    })

    it.only('Deve exibir erro ao tentar logar com campo de usuário e senha vazio', () => {
        const email = ''
        const senha = ''
        const mensagemErro = 'Erro: Nome de usuário é obrigatório.'

        LoginPage.visitarPagina()
        LoginPage.preencherUsuario(email)
        LoginPage.preencherSenha(senha)
        LoginPage.submeterLogin()
        LoginPage.validarMensagemErro(mensagemErro)
    })

    it.only('Deve exibir erro ao tentar logar com campo de usuário vazio', () => {
        const email = ''
        const senha = 'Ebac1234'
        const mensagemErro = 'Erro: Nome de usuário é obrigatório.'

        LoginPage.visitarPagina()
        LoginPage.preencherUsuario(email)
        LoginPage.preencherSenha(senha)
        LoginPage.submeterLogin()
        LoginPage.validarMensagemErro(mensagemErro)
    })

    it.only('Deve exibir erro ao tentar logar com campo de senha vazio', () => {
        const email = 'guilhermearagao2109@gmail.com'
        const senha = ''
        const mensagemErro = 'Erro: O campo da senha está vazio.'

        LoginPage.visitarPagina()
        LoginPage.preencherUsuario(email)
        LoginPage.preencherSenha(senha)
        LoginPage.submeterLogin()
        LoginPage.validarMensagemErro(mensagemErro)
    })
})
