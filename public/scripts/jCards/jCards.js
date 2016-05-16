(function($) {
  $.fn.jCards = function(options) {

    var _cards = this,
      cardMinHeight = 0,
      _options = {
        matchCardsHeight: true
      };

    if (!_cards.data('j-cards')) return;

    /* ========================================================
     Configure Options
     ======================================================== */
    if (options) {
      _options.matchCardsHeight = options.matchCardsHeight ? options.matchCardsHeight : _options.matchCardsHeight;
    }

    /* ========================================================
     Card Background Image
     ======================================================== */

    var _cardBgHandler = function() {
      var _cardBg = this.data('j-card-bg');
      if (_cardBg) {
        this.addClass('j-card-bg');
        return 'url("' + _cardBg + '")';
      }
      return "";
    };

    /* ========================================================
     Card hover configuration
     ======================================================== */

    var _cardMouseOverHandler = function() {
      this.addClass("active");
    };

    var _cardMouseOutHandler = function() {
      this.removeClass("active");
    };

    /* ========================================================
     Cards
     ======================================================== */

    _cards
      .addClass('j-cards')
      .find('[data-j-card="card"]')
      .each(function() {

        var _card = $(this);
        var _cardHover = _card.find('[data-j-card="hover"]');

        /* Card background image */
        _card
          .addClass('j-card')
          .css('background-image', _cardBgHandler.bind(_card));

        /* Card hover transparent overlay */
        _cardHover
          .addClass('j-card-hover')
          .prepend($('<div>').addClass('j-card-hover-bg'));

        /* Card hover content */
        _card
          .bind('mouseover', _cardMouseOverHandler.bind(_cardHover))
          .bind('mouseout', _cardMouseOutHandler.bind(_cardHover));

        /* Configure the min height for cards
        Its used for matching the heights of all cards */
        cardMinHeight = cardMinHeight < _card.outerHeight() ? _card.outerHeight() : cardMinHeight;

      });

    /* ========================================================
     Match heights of all Cards
     ======================================================== */

    var _eventNamespace = _cards.data('j-cards');

    var rematchCardsHeight = function() {

      /* If the cards no more exist in DOM then remove the resize event listener */
      if (!$.contains(document, _cards[0])) {
        $(window).unbind('resize.' + _eventNamespace, rematchCardsHeight);
        return;
      }

      var _allCards = _cards.find('[data-j-card="card"]').css('min-height', 0);

      cardMinHeight = Math.max.apply(null, _allCards.map(function() {
        return $(this).outerHeight();
      }).get());

      _allCards.css('min-height', cardMinHeight);

    };

    if (_options.matchCardsHeight) {

      /* Rematch the cards height on window resize */
      $(window).bind('resize.' + _eventNamespace, rematchCardsHeight);

      _cards.find('[data-j-card="card"]').css('min-height', cardMinHeight);
    }

    return this;
  };
}(jQuery));
