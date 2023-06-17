class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount} into the account.`);
    } else {
      console.log(`Invalid amount. Deposit amount must be greater than 0.`);
    }
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(
        `Insufficient funds. Cannot withdraw ${amount}. Current balance: ${this.balance}`
      );
    } else {
      this.balance -= amount;
      console.log(`Withdrew ${amount} from the account.`);
    }
  }

  getBalance() {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, interestRate) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(
        `Insufficient funds. Cannot withdraw ${amount}. Current balance: ${this.balance}`
      );
    } else {
      this.balance -= amount;
      console.log(`Withdrew ${amount} from the account.`);
    }
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, transactionLimit) {
    super(accountNumber, balance);
    this.transactionLimit = transactionLimit;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(
        `Insufficient funds. Cannot withdraw ${amount}. Current balance: ${this.balance}`
      );
    } else if (amount > this.transactionLimit) {
      console.log(
        `Transaction limit reached. Cannot withdraw ${amount}. Current transaction count: ${this.transactionCount}`
      );
    } else {
      this.balance -= amount;
      console.log(`Withdrew ${amount} from the account.`);
    }
  }
}

const checkingAccount = new CheckingAccount("CHK-001", 2000, 1000);
console.log(checkingAccount.getBalance());

checkingAccount.deposit(1000);
console.log(checkingAccount.getBalance());

checkingAccount.withdraw(1200);
console.log(checkingAccount.getBalance());

const savingsAccount = new SavingsAccount("SAV-001", 3000, 100);
console.log(checkingAccount.getBalance());

checkingAccount.deposit(1000);
console.log(checkingAccount.getBalance());

checkingAccount.withdraw(3000);
console.log(checkingAccount.getBalance());

checkingAccount.withdraw(500);
console.log(checkingAccount.getBalance());
