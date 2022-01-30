const newSignUp = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#new-username').value.trim();
    const email = document.querySelector('#new-email').value.trim();
    const password = document.querySelector('#new-password').value.trim();
 
  
    if (username && email && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response)
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  
  document.querySelector('.signup-form').addEventListener('submit', newSignUp);


  const signIn = async (event) => {
    event.preventDefault();
    console.log('hello')
  
    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();
    console.log(email)
    console.log(password)

    if (email && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('.sign-in').addEventListener('submit', signIn);