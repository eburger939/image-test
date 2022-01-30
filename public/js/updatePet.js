
//diagnosis

const newDx = async (event) => {
  
    event.preventDefault();
    const diagnosis = document.querySelector('#new-dx').value.trim();

    const newDx = document.querySelector('.new-dx');
    
    const pet_id = newDx.getAttribute('data-id')

    console.log(diagnosis)
    console.log(pet_id)



  
    if ( diagnosis && pet_id ) {
      const response = await fetch('/api/dx', {
        method: 'POST',
        body: JSON.stringify({ diagnosis, pet_id }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response)
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to add pet.');
      }
    }
    
  };
  
  
  document.querySelector('.saveDx').addEventListener('click', newDx);


// medications

const newMed = async (event) => {
  
  event.preventDefault();
  const medication = document.querySelector('#new-med').value.trim();
  const last_given = document.querySelector('#med-given').value.trim();
  const next_due = document.querySelector('#next-due').value.trim();

  const newDx = document.querySelector('.new-dx');
  
  const pet_id = newDx.getAttribute('data-id')

  console.log(pet_id)




  if ( medication || last_given || next_due && pet_id ) {
    const response = await fetch('/api/meds', {
      method: 'POST',
      body: JSON.stringify({ medication, last_given, next_due, pet_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response)
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to add pet.');
    }
  }
  
};


document.querySelector('.saveMed').addEventListener('click', newMed);

//vaccine

const newVax = async (event) => {
  
  event.preventDefault();
  const vax_name = document.querySelector('#new-vax').value.trim();
  const administered_date = document.querySelector('#vax-given').value.trim();
  const next_due = document.querySelector('#vax-due').value.trim();

  const newDx = document.querySelector('.new-dx');
  
  const pet_id = newDx.getAttribute('data-id')

  console.log(pet_id)
  console.log(vax_name)
  console.log(administered_date)
  console.log(next_due)




  if ( vax_name || administered_date || next_due && pet_id ) {
    const response = await fetch('/api/vax', {
      method: 'POST',
      body: JSON.stringify({ vax_name, administered_date, next_due, pet_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response)
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to add pet.');
    }
  }
  
};


document.querySelector('.saveVax').addEventListener('click', newVax);
