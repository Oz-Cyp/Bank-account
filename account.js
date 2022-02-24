class Account {
    constructor(accname, accno, balance) {
        this.accname = accname
        this.accno = accno
        this.balance = balance
        this.transaction = []
    }
    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.transaction.push(-amount)
                return this.balance = this.balance - amount;
            } else {
                return 'Yeterli bakiyeniz yok'
            }
        } else {
            return 'Hatali miktar girildi !'
        }
    }
    deposit(amount) {
        if (amount > 0) {
            this.transaction.push(amount)
            return this.balance = this.balance + amount;
        } else {
            return 'Hatali miktar girildi !'
        }
    }
    get acccheck() {
        return this.balance
    }
    get accstatement() {
        return this.transaction
    }
}

module.exports = { Account };