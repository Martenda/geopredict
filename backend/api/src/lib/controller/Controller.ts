import { Request, Response } from "express";
import Repository from "../repository/Repository";

class Controller {
    protected repository!: Repository;

    constructor(repository: Repository) {
        this.repository = repository;
    }

    async findAll(req: Request, res: Response) {
        const entity = {
            name: "test",
            places: [
                {
                    type: "Point",
                    coordinates: [-28.620497147296177, -51.04341959808675],
                },
            ],
        };

        const entities = [entity];

        return res.json(entities);
    }

    async findById(req: Request, res: Response) {
        // const entity = await this.repository.findById(req.params.id);

        // if (!entity) {
        //     //add error handling for 404 status
        //     throw new Error("404 not found");
        // }

        const entity = {
            name: "test",
            places: [
                {
                    type: "Point",
                    coordinates: [-28.620497147296177, -51.04341959808675],
                },
            ],
        };

        return res.json(entity);
    }

    async create(req: Request, res: Response) {
        const { body } = req;

        if (!body) {
            // todo proper error handling
            throw new Error("400 bad request");
        }

        const entity = await this.repository.create(body);

        res.status(201).json(entity);
    }

    async updateById(req: Request, res: Response) {
        if (!req.body || !req.body.id) {
            // todo: proper error handling
            throw new Error("400 bad request");
        }

        const entity = this.repository.updateById(req.params.id, req.body);

        res.status(200).json(entity);
    }

    async deleteById(req: Request, res: Response) {
        await this.repository.deleteById(req.params.id);

        res.status(200);
    }
}

export default Controller;
