const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const username = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    /*const appleButton = document.querySelector('.apple-login-button');
    const googleButton = document.querySelector('.google-login-button');
    */

    if (username === '') {
        alert('Compila il campo Username!');
        return;
      }
  
      if (password === '') {
        alert('Compila il campo Password!');
        return;
      }

  //form.reset();
  form.submit();

    });
;

/*
appleButton.addEventListener('click', e => {
    e.preventDefault();
    // qui puoi aggiungere la logica per il login con Apple
    alert('Apple login not implemented yet');
});

googleButton.addEventListener('click', e => {
    e.preventDefault();
    // qui puoi aggiungere la logica per il login con Apple
    alert('Google login not implemented yet');
});
*/