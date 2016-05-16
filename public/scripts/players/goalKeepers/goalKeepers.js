(function($) {

  var goalKeepersLoadHandler = function() {

    var ctl = $('#goalKeepers');

    var goalKeepersModel = new players.playerCardsModel([]);

    var goalKeepersView = new players.goalKeepersView(goalKeepersModel, ctl);

    var goalKeepersController = new players.goalKeepersCardsController(goalKeepersModel, goalKeepersView);
    goalKeepersController.display();

  };

  $(document).ready(goalKeepersLoadHandler);

}(jQuery));
