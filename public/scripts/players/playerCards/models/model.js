players.playerCardsModel = function(data) {
  if (data) {
    this._data = data;
  } else {
    this._data = [];
  }
};

players.playerCardsModel.prototype.addCards = function(cards) {
  this._data = this._data.concat(cards);
};

players.playerCardsModel.prototype.getCards = function() {
  return this._data;
};
