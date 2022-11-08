// api/new-meetup

import {Request, Response} from "next/dist/compiled/@edge-runtime/primitives/fetch";

function handler(req: Request, res: Response) {
    if(req.method === "POST"){
        const data = req.body;

    }
}

export{}