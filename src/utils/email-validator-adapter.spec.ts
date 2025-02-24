import { EmailValidatorAdpter } from './email-validator'

describe('EmailValidator Adapter', () => {
    test('Should retirn false if validator returns false', () => {
        const sut = new EmailValidatorAdpter()
        const isValid = sut.isValid('invalid_email@mail.com')
        expect(isValid).toBe(false)
    })
})