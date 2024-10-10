import { validate } from 'email-validator'

export class Util {
    static emailValidate (email: string): string {
      if (!email) {
        throw new Error('Email vázio. Preencha o campo email')
      }
      if (!validate(email.trim())) {
        throw new Error('Email inválido')
      }
      return email.trim()
  }
}