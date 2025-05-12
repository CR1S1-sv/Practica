document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const telefon = document.getElementById('telefon').value.trim();
  const parola = document.getElementById('parola').value.trim();
  const loginError = document.getElementById('login-error');

  const user = JSON.parse(localStorage.getItem('utilizator'));

  if (!user) {
    loginError.textContent = 'Nu există cont înregistrat!';
    return;
  }

  if (telefon === user.telefon && parola === user.parola) {
    localStorage.setItem('loggedIn', 'true');
    alert('Autentificare reușită!');
    window.location.href = '../index.html';
  } else {
    loginError.textContent = 'Date incorecte!';
  }
});
