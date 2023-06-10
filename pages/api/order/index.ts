import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
   async post(req: NextApiRequest, res: NextApiResponse) {
      res.status(200).send(
         "soy el metodo " +
            req.method +
            " generastes una nueva compra " +
            JSON.stringify(req.query)
      );
   },
});
