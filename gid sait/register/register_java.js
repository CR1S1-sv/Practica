document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nume = document.getElementById('nume').value.trim();
  const prenume = document.getElementById('prenume').value.trim();
  const telefon = document.getElementById('telefon').value.trim();
  const parola = document.getElementById('parola').value.trim();

  const telefonError = document.getElementById('telefon-error');
  const parolaError = document.getElementById('parola-error');

  telefonError.textContent = '';
  parolaError.textContent = '';

  // Validare telefon
  if (!telefon.startsWith('+373')) {
    telefonError.textContent = 'Numărul trebuie să înceapă cu +373';
    return;
  }

  const cifra4 = telefon[4];
  if (cifra4 !== '6' && cifra4 !== '7') {
    telefonError.textContent = 'Număr invalid – trebuie să conțină 6 sau 7 după +373';
    return;
  }

  if (telefon.length < 12) {
    telefonError.textContent = 'Numărul este incomplet';
    return;
  }

  // Validare parolă
  const parolaValida = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[_\-@]).{6,}$/;
  if (!parolaValida.test(parola)) {
    parolaError.textContent = 'Parola trebuie să conțină litere, cifre și simboluri (_ - @)';
    return;
  }

  // Salvare în localStorage
  const user = {
    nume,
    prenume,
    telefon,
    parola
  };

  localStorage.setItem('utilizator', JSON.stringify(user));
  alert('Înregistrare reușită!');
  window.location.href = '../login/login.html';
});
