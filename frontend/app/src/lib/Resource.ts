import DataService from "../services/dataService";
import DataServiceInterface from "../services/dataServiceInterface";

class Resource {
    protected dataService!: DataServiceInterface;
    protected resourceName!: string;

    constructor(resourceName: string) {
        this.resourceName = resourceName;
        this.dataService = DataService;
    }

    async findById(id: string): Promise<any> {
        return this.dataService.find({ path: this.resourceName, id });
    }

    async updateById(id: string, data: object): Promise<any> {
        return this.dataService.update({
            path: this.resourceName,
            id,
            body: data,
        });
    }

    async deleteById(id: string): Promise<any> {
        return this.dataService.delete({ path: this.resourceName, id });
    }

    create(data: object): Promise<any> {
        return this.dataService.create({ path: this.resourceName, body: data });
    }
}

export default Resource;
