import axios from "axios";


class API {

    private _token: string;
    public url: string = 'http://localhost:4000/'

    constructor(apiUrl: string) {
        const token = localStorage.getItem("token");
        this._token = token ?? '';
        this.url = this.url + apiUrl;
    }

    public async get(url: string) {
        try {
            const response = await axios.get(this.url + url, {
                headers: { Authorization: `Bearer ${this._token}` }
            });
            return response.data;
        } catch (error) {
            console.log("Get API Error: ", error);
        }
    }

    public async post(url: string, data: any) {
        try {

            const response = await axios.post(this.url + url, data, {
                headers: { Authorization: `Bearer ${this._token}` }
            });
            return response.data

        } catch (error) {
            console.log("Post API Error: ", error)
        }
    }

    public async put(url: string, data: any) {
        try {

            const response = await axios.put(this.url + url, data, {
                headers: { Authorization: `Bearer ${this._token}` }
            });
            return response.data

        } catch (error) {
            console.log("Post API Error: ", error)
        }
    }

    public async delete(url: string) {
        try {
            const response = await axios.delete(this.url + url, {
                headers: { Authorization: `Bearer ${this._token}` }
            });

            return response.data
        } catch (error) {
            console.log("Delete API Error: ", error);
        }
    }

}

export default API;