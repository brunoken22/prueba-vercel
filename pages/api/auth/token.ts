import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
   async post(req: NextApiRequest, res: NextApiResponse) {
      if (!req.body.email || !req.body.password) {
         res.status(400).send("Datos faltantes");
      } else {
         res.status(200).send("soy el post,y este tu token:" + "tokenDePrueba");
      }
   },
});
