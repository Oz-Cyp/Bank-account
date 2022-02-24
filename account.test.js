// 1 tane class oluşturacayık
// account adı , numarası ve bakiyesi olacak
// kullanıcı istersa para da yatırabilecek
// para çekebilecek
// bakiyesini görüntüleyebilecek
// hesap hareketlerini görüntüleyebilecek
// amount eksi olamasın
// balancetan fazla tutar çekemesin

const { expect } = require('@jest/globals');
const { Account } = require('./account.js')

describe('constructor', () => {
    it('returns an object', () => {
        let sensei = new Account('sensei', '12345', 0);
        expect(sensei).toBeInstanceOf(Object)
    });
    it('user can deposit money', () => {
        let sensei = new Account('sensei', '12345', 0);
        expect(sensei.deposit(100)).toBe(100);
        expect(sensei.deposit(-10)).toBe('Hatali miktar girildi !');
    });
    it('user can withdraw money', () => {
        let sensei = new Account('sensei', '12345', 0);
        sensei.deposit(100)
        expect(sensei.withdraw(10)).toBe(90);
        expect(sensei.withdraw(-10)).toBe('Hatali miktar girildi !');
        expect(sensei.withdraw(91)).toBe('Yeterli bakiyeniz yok')
    });
    it('user can check his account status', () => {
        let sensei = new Account('sensei', '12345', 0);
        sensei.deposit(100)
        sensei.deposit(200)
        sensei.withdraw(150)
        expect(sensei.acccheck).toBe(150);
    });
    it('user can see the transactions', () => {
        let sensei = new Account('sensei', '12345', 0);
        sensei.deposit(100)
        sensei.deposit(200)
        sensei.withdraw(150)
        expect(sensei.accstatement).toEqual([100,200,-150]);
    });
});
