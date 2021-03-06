(function($) {

  var strikerLoadHandler = function() {

    var ctl = $('#strikers');

    var strikersModel = new players.playerCardsModel([]);

    var strikersView = new players.strikersView(strikersModel, ctl);

    var strikersController = new players.strikersCardsController(strikersModel, strikersView);
    strikersController.display();

  };

  $(document).ready(strikerLoadHandler);

}(jQuery));
