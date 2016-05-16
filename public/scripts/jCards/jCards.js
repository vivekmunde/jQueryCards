(function($) {
    $.fn.jCards = function() {

      var _cards = this;

      var _cardBgHandler = function() {
        var _cardBg = this.data('j-card-bg');
        if(_cardBg) {
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

        });

    return this;
  };
}(jQuery));
