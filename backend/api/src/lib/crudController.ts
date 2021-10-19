import { Request, Response } from "express";
import ReadController from "./readController";
import Repository from "./repository/Repository";

class CrudController extends ReadController {
    constructor(repo: Repository) {
        super(repo);
    }

    async createOne(req: Request, res: Response) {
        const { body } = req;

        if(!body) {
            // todo proper error handling
            throw new Error('400 bad request')
        }

        const entity = await this.repo.createOne(body)

        res.status(201).json(entity)
    }

    async updateOneById(req: Request, res: Response) {

        if(!req.body || !req.body.id) {
            // todo: proper error handling
            throw new Error('400 bad request')
        }

        const entity = this.repo.updateById(req.params.id, req.body)

        res.status(200).json(entity)
    }

    async deleteOneById(req: Request, res: Response) {
        await this.repo.deleteById(req.params.id);

        res.status(200);
    }
}

export default CrudController;