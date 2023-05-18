const API_KEY = "?key=e08ee0dddec9442490cf0511abf68087";
const BASE_URL = `https://api.rawg.io/api/games`;

// Méthode qui permet de fetch les jeux depuis l'API RAWG en prenant en compte diverses options et la pagination.
export const fetchGames = async (page, options = {}) => {
    // On ajoute les paramètres de la requête à l'url
    const params = { page_size: 20, page, ...options };
    const queryParams = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');

    // On crée une nouvelle URL à partir de l'URL de base et des params
    const url = `https://api.rawg.io/api/games?key=e08ee0dddec9442490cf0511abf68087&${queryParams}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
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
