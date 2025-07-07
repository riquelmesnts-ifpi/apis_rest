// 1. Cat Facts API
function getCatFact() {
  fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
      document.getElementById('cat-fact').textContent = data.fact;
    });
}

// 2. API-Football (RapidAPI) – Substituir 'YOUR_API_KEY' pela sua chave
function getTeamLogo() {
  const teamName = document.getElementById('team-name').value;
  if (!teamName) return alert('Digite o nome do time');

  fetch(`https://api-football-v1.p.rapidapi.com/v3/teams?search=${teamName}`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '02eb6a813cmsh6b4e00ef35087f6p10d413jsn4d74e349b66e', // coloque sua chave aqui
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
    console.error('Erro:', error);
    alert('Erro ao buscar o escudo.');
  });
}

// 3. JokeAPI
function getJoke() {
  fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart')
    .then(response => response.json())
    .then(data => {
      document.getElementById('joke-setup').textContent = data.setup;
      document.getElementById('joke-delivery').textContent = data.delivery;
    });
}

// 4. Car Brands API – Substitui a de citações motivacionais
function getCarBrands() {
  fetch("https://car-api2.p.rapidapi.com/api/makes", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "02eb6a813cmsh6b4e00ef35087f6p10d413jsn4d74e349b66e",
      "X-RapidAPI-Host": "car-api2.p.rapidapi.com"
    }
  })
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('car-brand-list');
    list.innerHTML = ''; // limpar a lista

    data.data.slice(0, 10).forEach(brand => {
      const item = document.createElement('li');
      item.innerHTML = `<strong>${brand.name}</strong> ${brand.country ? `(${brand.country})` : ''}`;
      list.appendChild(item);
    });
  })
  .catch(error => {
    console.error("Erro ao buscar marcas de carro:", error);
    alert("Erro ao buscar marcas de carro.");
  });
}