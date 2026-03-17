const cadastroForm = document.getElementById('cadastroForm');

cadastroForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const user = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    const userData = {
        username: user,
        email: email,
        password: pass
    };

    localStorage.setItem('usuarioSalvo', JSON.stringify(userData));

    alert('Conta criada com sucesso!');
    window.location.href = '/pages/login.html'; 
});