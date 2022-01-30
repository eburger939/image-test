
// const user = req.session.user_id;

const newPetProfile = async (event) => {
  
    event.preventDefault();
  
    const pet_name = document.querySelector('#new-pet-name').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pet_type = document.querySelector('input[name="type"]:checked').value;
    const breed = document.querySelector('#pet-breed').value.trim();
    const vet_clinic = document.querySelector('#vet-clinic').value.trim();
    const vet_name = document.querySelector('#vet-name').value.trim();
    const age = document.querySelector('#age').value.trim();

    const newPet = document.querySelector('.new-pet');
    
    const user_id = newPet.getAttribute('data-id')



  
    if ( pet_name && pet_type && gender && breed && vet_clinic && vet_name && age && user_id) {
      const response = await fetch('/api/pet', {
        method: 'POST',
        body: JSON.stringify({ pet_name, pet_type, gender, breed, vet_clinic, vet_name, age, user_id}),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response)
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to add pet.');
      }
    }
    
  };
  
  
  document.querySelector('.new-pet').addEventListener('submit', newPetProfile);
