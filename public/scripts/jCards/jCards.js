(function($) {
  $.fn.jCards = function(options) {

    var _cards = this,
      cardMinHeight = 0,
      _options = {
        matchCardsHeight: true
      };

    if (options) {
      _options.matchCardsHeight = options.matchCardsHeight ? options.matchCardsHeight : _options.matchCardsHeight;
    }

    var rematchCardsHeight = function() {

      var _allCards = _cards.find('[data-j-card="card"]').css('min-height', 0);

      cardMinHeight = Math.max.apply(null, _allCards.map(function() {
        return $(this).outerHeight();
      }).get());

      _allCards.css('min-height', cardMinHeight);

    };

    var _cardBgHandler = function() {
      var _cardBg = this.data('j-card-bg');
      if (_cardBg) {
        this.addClass('j-card-bg');
        return 'url("' + _cardBg + '")';
      }
      return "";
    };

    var _cardMouseOverHandler = function() {
      this.addClass("active");
    };

    var _cardMouseOutHandler = function() {
      this.removeClass("active");
    };

    _cards
      .addClass('j-cards')
      .find('[data-j-card="card"]')
      .each(function() {

        var _card = $(this);
        var _cardHover = _card.find('[data-j-card="hover"]');

        _cardHover
          .addClass('j-card-hover')
          .prepend($('<div>').addClass('j-card-hover-bg'));

        _card
          .addClass('j-card')
          .css('background-image', _cardBgHandler.bind(_card))
          .bind('mouseover', _cardMouseOverHandler.bind(_cardHover))
          .bind('mouseout', _cardMouseOutHandler.bind(_cardHover));

        cardMinHeight = cardMinHeight < _card.outerHeight() ? _card.outerHeight() : cardMinHeight;

      });

    if (_options.matchCardsHeight) {

      $(window).bind('resize', rematchCardsHeight);

      _cards.find('[data-j-card="card"]').css('min-height', cardMinHeight);
    }

    return this;
  };
}(jQuery));
