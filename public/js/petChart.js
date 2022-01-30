

document.querySelectorAll('.card').forEach(function(el){
    el.addEventListener('click', async function() {
      //alert(this.id);
  
    if ( this.id ) {
      const response = await fetch(`/chart/${this.id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      

       console.log(response)
      if (response.ok) {
        document.location.replace(`/chart/${this.id}`);
      } else {
        alert('Failed to add pet.');
      }
    }



    });
  });

  document.querySelector('.goBack').addEventListener('click', function() {
    document.location.replace('/profile')
  })