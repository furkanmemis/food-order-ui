import axios from "axios";


class API{

    private _token: string;
    public url: string = 'http://localhost:4000/'

    constructor(apiUrl: string){
        const token = localStorage.getItem("token");
        this._token = token ?? '';
        this.url = this.url+apiUrl;
    }

    public async get_api(url: string) {
        try {
            const response = await axios.get(this.url+url, {
                headers: { Authorization: `Bearer ${this._token}` }
            });
            return response.data;
        } catch (error) {
            console.log("Get API Error: ", error);
        }
    }

}

export default API;