class Account {
  constructor(accname, accno, balance) {
    this.name = accname;
    this.accno = accno;
    this.balance = balance;
    this.transactions = [];
  }

  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.balance) {
        this.transactions.push(-amount)
        return this.balance = this.balance - amount
      } else {
        return 'Not enough balance in the account'
      }
    } else {
      return 'An invalid request has been made'
    }
  }
  deposit(amount) {
    if (amount > 0) {
      this.transactions.push(amount)
      return this.balance = this.balance + amount
    } else {
      return 'An invalid request has been made'
    }
  }
  get showBalance() {
    return this.balance
  }
  get accountDetails() {
    return this.transactions
  }
}

module.exports = { Account };
