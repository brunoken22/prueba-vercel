import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
   async get(req: NextApiRequest, res: NextApiResponse) {
      res.status(200).send(
         "soy el metodo " +
            req.method +
            " ,y este tu query: " +
            JSON.stringify(req.query)
      );
   },
});
