import axios from 'axios';

export async function getHint() {
    try {
        const url = window.location.href;
        const arrayUrl = url.split('/')
        const gameNum = arrayUrl[arrayUrl.length - 1];

        const response = await axios.get(`http://127.0.0.1:8000/hint/?gameNum=${gameNum}`);
        const { data } = response;
        return data[0].hint;
    } catch (e) {
        console.error(e);
        throw new Error(e.message) ;
    }
}
