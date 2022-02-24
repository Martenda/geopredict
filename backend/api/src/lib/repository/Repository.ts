import { Model } from "mongoose";

function sanitizeEntityInput(input: any) {
    delete input?.created;
    delete input?.updated;
    delete input?._id;

    return input;
}

class Repository {
    protected model!: Model<any>;

    constructor(model: Model<any>) {
        this.model = model;
    }

    async findAll(query: object) {
        const docs = await this.model.find(query);

        if (docs.length) {
            return docs.map((doc) => doc.toJSON());
        }
    }

    async findById(id: string) {
        const doc = await this.model.findById(id);

        if (!doc) {
            return doc.toJSON();
        }
    }

    async create(entity: any) {
        const doc = new this.model(sanitizeEntityInput(entity));
        await doc.save();

        return doc.toJSON();
    }

    async deleteById(id: string) {
        await this.model.findByIdAndDelete(id);
    }

    async updateById(id: string, entity: any) {
        await this.model.findByIdAndUpdate(id, entity);
    }
}

export default Repository;
