import { Request, Response } from "express";
import Repository from "./repository/Repository";

class ReadController {
    protected repo!: Repository;

    constructor(repo: Repository) {
        this.repo = repo;
    }

    async findById(req: Request, res: Response) {
        const entity = await this.repo.findById(req.params.id);
    
        if(!entity) {
            //add error handling for 404 status
            throw new Error('404 not found')
        }
    
        return res.json(entity)
    }
}

export default ReadController;