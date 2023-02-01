import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

export default class Token {
  private static SECRET: string = process.env.SECRET || 'Asupersecret';
  private static jwtConfig: jwt.SignOptions = {
    algorithm: 'HS256',
    expiresIn: '90d'
  };

  static sign(payload: object) {
    return jwt.sign(payload, this.SECRET, this.jwtConfig)
  };

  static verify(token: string) {
    return jwt.verify(token, this.SECRET);
  };
};