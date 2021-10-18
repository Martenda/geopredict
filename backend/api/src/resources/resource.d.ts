import { Request, Response } from "express";

type Route = {
    url: string,
    method: 'get' | 'post' | 'put' | 'delete' | 'patch',
    handler: (req: Request, res: Response) => any;
}
