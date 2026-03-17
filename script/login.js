const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailDigitado = document.getElementById('emailLogin').value;
    const senhaDigitada = document.getElementById('passwordLogin').value;
    const dadosRecuperados = JSON.parse(localStorage.getItem('usuarioSalvo'));

    if (dadosRecuperados) {
        if (emailDigitado === dadosRecuperados.email && senhaDigitada === dadosRecuperados.password) {
            alert(`Bem-vindo, ${dadosRecuperados.username}!`);
            window.location.href = '/pages/dashboard.html'; 
        } else {
            alert('Email ou senha incorretos.');
        }
    } else {
        alert('Nenhum usuário cadastrado neste navegador.');
    }
});