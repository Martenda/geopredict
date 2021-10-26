import DataServiceInterface, { Params } from "./dataServiceInterface";
import dataServiceConfig from "./dataServiceConfig";

const apiUrl = dataServiceConfig.REMOTE_URL;

const headers = {
    "Content-Type": "application/json",
};

async function parseResponse(response: Response) {
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error(
            `${response.status} (${response.statusText}): ${response.text}`
        );
    }
}

class DataService implements DataServiceInterface {
    async find(params: Params) {
        const response = await fetch(
            `${apiUrl}/${params.path}${params.id ? "/" + params.id : ""}`
        );
        return await parseResponse(response);
    }

    async create(params: Params) {
        const response = await fetch(`${apiUrl}/${params.path}`, {
            body: JSON.stringify(params.body),
            method: "post",
            headers,
        });
        return await parseResponse(response);
    }

    async update(params: Params) {
        const response = await fetch(`${apiUrl}/${params.path}/${params.id}`, {
            body: JSON.stringify(params.body),
            method: "put",
            headers,
        });
        return await parseResponse(response);
    }

    async delete(params: Params) {
        const response = await fetch(`${apiUrl}/${params.path}/${params.id}`, {
            method: "delete",
        });
        return await parseResponse(response);
    }
}

export default new DataService();
