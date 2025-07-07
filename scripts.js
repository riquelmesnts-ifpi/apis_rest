
function getCatFact() {
  fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
      document.getElementById('cat-fact').textContent = data.fact;
    });
}


function getTeamLogo() {
  const teamName = document.getElementById('team-name').value;
  if (!teamName) return alert('Digite o nome do time');

  fetch(`https://api-football-v1.p.rapidapi.com/v3/teams?search=${teamName}`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '02eb6a813cmsh6b4e00ef35087f6p10d413jsn4d74e349b66e',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  })
  .then(response => response.json())
  .then(data => {
    if (data.response.length > 0) {
      const logoUrl = data.response[0].team.logo;
      document.getElementById('team-logo').src = logoUrl;
    } else {
      document.getElementById('team-logo').src = '';
      alert('Time não encontrado.');
    }
  })
  .catch(error => {
    console.error('Erro ao buscar escudo:', error);
    alert('Erro ao buscar o escudo.');
  });
}

function getJoke() {
  fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart')
    .then(response => response.json())
    .then(data => {
      document.getElementById('joke-setup').textContent = data.setup;
      document.getElementById('joke-delivery').textContent = data.delivery;
    });
}

function getCarBrands() {
  fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById('car-brand-list');
      list.innerHTML = '';
      data.Results.slice(0, 10).forEach(brand => {
        const li = document.createElement('li');
        li.textContent = brand.MakeName;
        list.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Erro ao buscar marcas de carro:', error);
      alert('Erro ao buscar marcas de carro.');
    });
}
