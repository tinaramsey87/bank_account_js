var BankAccount = {
  balance: 0,

  withdraw: function(amount) {
    this.balance = this.balance - amount;
  },
  deposit: function(amount) {
    this.balance = this.balance + amount;
  },

};

$(document).ready(function() {
  $("form#signup").submit(function(event){
    var inputtedName = $("input#name").val();
    var initialBalance = parseInt($("input#initial").val());
    var newBankAccount = Object.create(BankAccount)
    newBankAccount.owner = inputtedName
    newBankAccount.deposit(initialBalance)


    $("input#name").val("");
    $("input#initial").val("");

    $("#banking").show();
    $("#status").show();

    $(".balance").text(newBankAccount.balance)

    event.preventDefault();
  });

  $("form#depositwithdraw").submit(function(event){
    var depositAmount = parseInt($("input#deposit").val());
    newBankAccount.deposit(depositAmount);

    var withdrawalAmount = parseInt($("input#withdraw").val());
    newBankAccount.withdraw(withdrawalAmount);

    $("input#deposit").val("");
    $("input#withdraw").val("");

    $(".balance").text(newBankAccount.balance)

    event.preventDefault();
  });

});
