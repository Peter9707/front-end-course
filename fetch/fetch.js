function getFetch(url, { method = "GET" } = {}) {
  return fetch(url, {
    method: method,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      return response;
    });
}

function getCharacters(id) {
  const baseUrl = "https://rickandmortyapi.com/api/character";
  const url = id ? `${baseUrl}/${id}` : baseUrl;
  return getFetch(url).then(function (response) {
    if (id) {
      console.log(response.name);
    } else {
      const characterNames = response.results.map(function (character) {
        return character.name;
      });
      console.log(characterNames.join(", "));
    }
  });
}

function getLocations(id) {
  const baseUrl = "https://rickandmortyapi.com/api/location";
  const url = id ? `${baseUrl}/${id}` : baseUrl;
  return getFetch(url).then(function (response) {
    if (id) {
      console.log(response.name);
    } else {
      const locationNames = response.results.map(function (location) {
        return location.name;
      });
      console.log(locationNames.join(", "));
    }
  });
}

function getEpisodes(id) {
  const baseUrl = "https://rickandmortyapi.com/api/episode";
  const url = id ? `${baseUrl}/${id}` : baseUrl;
  return getFetch(url).then(function (response) {
    if (id) {
      console.log(response.name);
    } else {
      const episodeNames = response.results.map(function (episodes) {
        return episodes.name;
      });
      console.log(episodeNames.join(", "));
    }
  });
}

getCharacters();
getCharacters(1);
getCharacters(2);
getCharacters(3);
getLocations();
getLocations(1);
getLocations(2);
getLocations(3);
getEpisodes();
getEpisodes(1);
getEpisodes(2);
getEpisodes(3);
