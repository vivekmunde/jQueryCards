(function($) {

  var goalKeepersModel = new players.playerCardsModel([]);

  var goalKeepersView = new players.goalKeepersView(goalKeepersModel, $('#goalKeepers'));

  var goalKeepersController = new players.goalKeepersCardsController(goalKeepersModel, goalKeepersView);
  goalKeepersController.display();

}(jQuery));
