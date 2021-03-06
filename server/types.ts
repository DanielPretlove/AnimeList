import { Request, Response, RequestHandler as Middleware } from "express";

export type Anime = {title: string, episode: number, status: string, rating: number, synopsis: string, type: string };

export type Method =
  | 'get'
  | 'head'
  | 'post'
  | 'put'
  | 'delete'
  | 'connect'
  | 'options'
  | 'trace'
  | 'patch';


export type Handler = (req: Request, res: Response) => any;

export type Route = {
    method: Method;
    path: string;
    middleware: Middleware[];
    handler: Handler;
}

