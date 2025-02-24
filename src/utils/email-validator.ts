import { EmailValidar } from '../presentation/protocols/email-validator'

export class EmailValidatorAdpter implements EmailValidar {
    isValid(email: string): boolean {
        return false
    }
} 