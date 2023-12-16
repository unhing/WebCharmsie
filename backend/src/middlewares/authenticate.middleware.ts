import { Request } from "express";
import { AUTH_SECRET_KEY } from "../config";
import { expressjwt as createAuthenticateMiddleware } from "express-jwt";

export const authenticateMiddleware = createAuthenticateMiddleware({
  secret: AUTH_SECRET_KEY,
  algorithms: ["HS256"],
  getToken: tokenGetter,
});

export function tokenGetter(req: Request) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const [type, token] = authHeader.split(" ");
    if (type === "Bearer") {
      return token;
    }
  }
  return undefined;
}
