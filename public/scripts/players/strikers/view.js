(function($) {

  players.strikersView = function(model, element) {
    this._model = model;
    this._element = element;
  };

  players.strikersView.prototype.render = function() {

    var _this = this;

    if (_this._element && _this._model) {
      _this._element
        .addClass('row pi-player-cards pi-player-cards-ngtrd');

      var cardRender = function(cardData, index) {
        _this._element
          .append(
            $('<div>')
            .addClass('col-xs-12 col-sm-6 col-md-3')
            .attr('data-j-card', 'card')
            .attr('data-j-card-bg', cardData.backgroundImg)
            .append(
              $('<div>')
              .addClass('panel')
              .append(
                $('<div>')
                .addClass('panel-heading h4')
                .append(
                  $('<div>')
                  .append($('<i>').addClass('fa fa-hand-paper-o'))
                  .append($('<span>').text(cardData.title))
                )
              )
              .append(
                $('<div>')
                .addClass('panel-body')
                .append(
                  $('<p>')
                  .append(
                    $('<div>').text(cardData.description)
                  )
                )
              )
              .append(
                $('<div>')
                .attr('data-j-card', 'hover')
                .append(
                  $('<div>')
                  .addClass('panel')
                  .append(
                    $('<div>')
                    .addClass('panel-body')
                    .append(
                      $('<div>')
                      .addClass('btn-group btn-group-xs')
                      .append($('<button>').addClass('btn btn-warning').text('Career'))
                      .append($('<button>').addClass('btn btn-warning').text('Personal Life'))
                    )
                    .append(
                      $('<div>')
                      .addClass('btn-group btn-group-xs pull-right')
                      .append(
                        $('<button>')
                        .addClass('btn btn-info')
                        .append($('<i>').addClass('fa fa-facebook'))
                      )
                      .append(
                        $('<button>')
                        .addClass('btn btn-info')
                        .append($('<i>').addClass('fa fa-twitter'))
                      )
                    )
                  )
                )
              )
            )
          );
      };

      _this._model.getCards().forEach(cardRender);

      _this._element.jCards();
    }

  };

}(jQuery));
