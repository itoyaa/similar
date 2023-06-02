import axios from 'axios';

export async function getWordSimilarity(guess) {
    const url = window.location.href;
    const arrayUrl = url.split('/')
    const gameNum = arrayUrl[arrayUrl.length - 1];

    try {
        const response = await axios.get(`http://127.0.0.1:8000/?gameNum=${gameNum}&guess=${guess}`);
        const { data } = response;
        return data[0].similarity;
    } catch (e) {
        console.error(e);
    }
}
