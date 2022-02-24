import { Request, Response } from "express";
import Repository from "../repository/Repository";

class Controller {
    repository!: Repository;

    constructor(repository: Repository) {
        this.repository = repository;
    }

    async findAll(req: Request, res: Response) {
        const entities = await this.repository.findAll(req.query);

        return res.json(entities);
    }

    async findById(req: Request, res: Response) {
        const entity = await this.repository.findById(req.params.id);

        if (!entity) {
            throw new Error("404 not found");
        }

        return res.json(entity);
    }

    async create(req: Request, res: Response) {
        const { body } = req;

        if (!body) {
            throw new Error("400 bad request");
        }

        const entity = await this.repository.create(body);

        res.status(201).json(entity);
    }

    async updateById(req: Request, res: Response) {
        if (!req.body || !req.body.id) {
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
