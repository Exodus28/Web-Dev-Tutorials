bankAccount
{owner: 'Ross', type: 'Savings', balance: 100, withdraw: ƒ}
bankAccount.type
'Savings'
bankAccount.balance
100
bankAccount.withdraw
ƒ (amount) {
                                    this.balance -= amount;
                             }
bankAccount.withdraw(10)
undefined
bankAccount.balance
90


bankAccount
{owner: 'Ross', type: 'Savings', balance: 100, withdraw: ƒ, deposit: ƒ}
bankAccount.balance
100
bankAccount.deposit(20)
undefined
bankAccount.balance
120
