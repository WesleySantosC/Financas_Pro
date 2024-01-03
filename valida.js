const Usuarios = [
    {
        login: 'wesley',
        pass: 'wesley'
    },
    {
        login: 'jho',
        pass: 'jho'
    },
    {
        login: 'admin',
        pass: 'admin'
    }
];

let botao = document.getElementById('btnlogar');

botao.addEventListener('click', function logar() {
    let pegaUsuario = document.getElementById('Usuario').value;
    let pegaSenha = document.getElementById('Senha').value;

    for (let i in Usuarios) {
        if (pegaUsuario === Usuarios[i].login && pegaSenha === Usuarios[i].pass) {
            location.href = 'home.html'
            alert('Login bem-sucedido!');
            return;
        }
    }

    alert('Login falhou. Verifique seu usuário e senha.');
});
