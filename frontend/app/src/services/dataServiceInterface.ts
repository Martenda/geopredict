export type Params = {
    path: string;
    body?: object;
    id?: string;
};

export default interface DataServiceInterface {
    findAll: (params: Params) => Promise<any>;
    findOne: (params: Params) => Promise<any>;
    create: (params: Params) => Promise<any>;
    update: (params: Params) => Promise<any>;
    delete: (params: Params) => Promise<any>;
}
