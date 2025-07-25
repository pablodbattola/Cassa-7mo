// middlewares/auth.middleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Podés dejar esta clave hardcodeada si no usás .env todavía
const JWT_SECRET = "pabloJWT@2024_CLAVEsegura";

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Token no proporcionado" });
    return; // solo para cortar ejecución, no devuelve Response
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
console.log("Decoded token:", decoded); // para debug
(req as any).user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token inválido o expirado" });
    return;
  }
};

