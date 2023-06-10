import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
   async patch(req: NextApiRequest, res: NextApiResponse) {
      res.status(200).send(
         "Usastes el metodo " + req.method + " Datos modificado"
      );
   },
});
