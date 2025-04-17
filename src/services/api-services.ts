import axios from "axios";

class API {
    private _token: string;
    public url: string = "http://localhost:4000/";

    constructor(apiUrl: string) {
        const token = localStorage.getItem("token");
        this._token = token ?? "";
        this.url = this.url + apiUrl;
    }

    private async request(method: "get" | "post" | "put" | "delete", url: string, data?: any) {
        try {
            const response = await axios({
                method,
                url: this.url + url,
                data,
                headers: { Authorization: `Bearer ${this._token}` },
            });

            // 200 serisi dışındaki kodları hata olarak fırlat
            if (response.status < 200 || response.status >= 300) {
                throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
            }

            return response.data;
        } catch (error) {
            console.error(`${method.toUpperCase()} API Error:`, error);
            throw error; // Hata fırlatarak çağıran tarafın işlemesi sağlanır
        }
    }

    public get(url: string) {
        return this.request("get", url);
    }

    public post(url: string, data: any) {
        return this.request("post", url, data);
    }

    public put(url: string, data: any) {
        return this.request("put", url, data);
    }

    public delete(url: string, data?: any) {
        return this.request("delete", url,data);
    }
}

export default API;