//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    let total;
  }

  open() {
    if (this.total === undefined)
      this.total = 0;
    else
      throw new ValueError;
  }

  close() {
    if (this.total === undefined)
      throw new ValueError;
    else
      delete this.total;
  }

  deposit(sum) {
    if (this.total === undefined ||sum <= 0)
      throw new ValueError;
    this.total += sum;
  }

  withdraw(sum) {
    if (this.total === undefined || sum <= 0 || this.total < sum)
      throw new ValueError;
    this.total -= sum;
  }

  get balance() {
    if (this.total === undefined)
      throw new ValueError;
    return this.total;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}