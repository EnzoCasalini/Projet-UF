const API_KEY = "?key=e08ee0dddec9442490cf0511abf68087";
const BASE_URL = `https://api.rawg.io/api/games`;

// Méthode qui permet de fetch les jeux depuis l'API RAWG.
export const fetchGames = async (url = `${BASE_URL}${API_KEY}`) => {
    try {
        const response = await fetch(url);
        return await response.json();
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

// Méthode qui permet de fetch un jeu avec des options depuis l'API RAWG.
export const fetchGamesWithOption = async (page, options = {}) => {
    const params = { page_size: 20, page, ...options };
    const queryParams = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');

    // On crée une nouvelle URL à partir de l'URL de base et des params
    const url = `https://api.rawg.io/api/games?key=e08ee0dddec9442490cf0511abf68087&${queryParams}`;

    return fetchGames(url);
}


// Méthode qui permet de fetch un jeu spécifique depuis l'API RAWG.
export const fetchGame = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}${API_KEY}`);
        return await response.json();
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}
