(function($) {

  var strikersModel = new players.playerCardsModel([]);

  var strikersView = new players.strikersView(strikersModel, $('#strikers'));

  var strikersController = new players.strikersCardsController(strikersModel, strikersView);
  strikersController.display();

}(jQuery));
