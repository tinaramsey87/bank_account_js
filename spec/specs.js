describe("BankAccount", function() {
  describe("deposit()", function() {
    it('deposits money to the bank account balance', function() {
      var testAccount = Object.create(BankAccount);
      testAccount.deposit(20);
      expect(testAccount.balance).to.equal(20);
    });
  });

  describe("withdraw()", function() {
    it('withdraws money from the bank account balance', function() {
      var testAccount = Object.create(BankAccount);
      testAccount.withdraw(500);
      expect(testAccount.balance).to.equal(-500);
    });
  });

  describe("assignName()", function() {
    it('assigns an owners name to the account', function() {
      var testAccount = Object.create(BankAccount);
      testAccount.assignName("Amber");
      expect(testAccount.owner).to.equal("Amber");
    });
  });
});
