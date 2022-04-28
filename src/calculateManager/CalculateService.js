import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

class CalculateService {

    calculate(calculate) {
        return axios.post(`${API_URL}calculate`, calculate);
    }

}

export default new CalculateService();