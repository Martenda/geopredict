import { Request, Response } from "express";
import { Model } from "mongoose";

class ReadController {
    model!: Model<any>;

    constructor(model: Model<any>) {
        this.model = model;
    }

    async findById(req: Request, res: Response) {
        const entity = await this.model.findById(req.params.id);
    
        if(!entity) {
            //add error handling for 404 status
            throw new Error('404 not found')
        }
    
        return res.json(entity.toJSON())
    }
}

export default ReadController;