(function($) {

  players.goalKeepers = function(element) {

    var _goalKeepers = this;

    _goalKeepers.model = [{
      title: 'Joe Hart',
      dob: '19/04/1987',
      height: '1.96m',
      weight: '91kg',
      age: '29',
      country: 'England',
      description: 'Charles Joseph John "Joe" Hart is an English professional footballer who plays as a goalkeeper for Premier League club Manchester City and the England national team.',
      backgroundImg: 'img/joe-hart.jpg'
    }, {
      title: 'David De Gea',
      dob: '07/11/1990',
      height: '1.92m',
      weight: '76kg',
      age: '25',
      country: 'Spain',
      description: 'David de Gea Quintana is a Spanish professional footballer who plays as a goalkeeper for English club Manchester United and the Spain national team.',
      backgroundImg: 'img/david-de-gea.jpg'
    }, {
      title: 'Kasper S',
      dob: '05/11/1986',
      height: '1.89m',
      weight: '84kg',
      age: '29',
      country: 'Denmark',
      description: 'Kasper Peter Schmeichel is a Danish professional footballer who plays as a goalkeeper for Premier League club Leicester City and the Denmark national team. Born in 1986, he is the son of former Manchester United goalkeeper Peter Schmeichel.',
      backgroundImg: 'img/kasper-schmeichel.jpg'
    }, {
      title: 'Petr Cech',
      dob: '20/05/1982',
      height: '1.96m',
      weight: '90kg',
      age: '33',
      country: 'Czech Republic',
      description: 'Petr Čech is a Czech professional footballer who plays as a goalkeeper for English club Arsenal and captains the Czech Republic national team. Čech has previously played for Chmel Blšany, Sparta Prague, Rennes and Chelsea.',
      backgroundImg: 'img/petr-cech.jpg'
    }, {
      title: 'Hugo Lloris',
      dob: '26/12/1986',
      height: '1.88m',
      weight: '73kg',
      age: '29',
      country: 'France',
      description: 'Hugo Lloris is a French professional footballer who plays as a goalkeeper and captains both English club Tottenham Hotspur and the French national team.',
      backgroundImg: 'img/hugo-lloris.jpg'
    }, {
      title: 'Adrián',
      dob: '03/01/1987',
      height: '1.90m',
      weight: '80kg',
      age: '29',
      country: 'Spain',
      description: 'Adrián San Miguel del Castillo, known simply as Adrián, is a Spanish professional footballer who plays for English club West Ham United as a goalkeeper. He started playing for Betis, making his debut with the first team in 2012.',
      backgroundImg: 'img/adrian.jpg'
    }, {
      title: 'Heurelho Gomes',
      dob: '15/02/1981',
      height: '1.91m',
      weight: '91kg',
      age: '35',
      country: 'Brazil',
      description: 'Heurelho da Silva Gomes, commonly known as Heurelho Gomes or just Gomes, is a Brazilian professional footballer who plays as a goalkeeper for Watford.',
      backgroundImg: 'img/heurelho-gomes.jpg'
    }, {
      title: 'Simon Mignolet',
      dob: '06/03/1988',
      height: '1.93m',
      weight: '87kg',
      age: '28',
      country: 'Belgium',
      description: 'Simon Luc Hildebert Mignolet is a Belgian professional footballer who plays as a goalkeeper for Premier League club Liverpool and the Belgium national team.',
      backgroundImg: 'img/simon-mignolet.jpg'
    }];

    _goalKeepers.controller = {
      display: function(element) {
        _goalKeepers.view.render(element);
        element.jCards();
      }

    };

    _goalKeepers.view = {

      render: function(element) {
        if (element && _goalKeepers.model) {
          element
            .addClass('row pi-player-cards pi-player-cards-gtrd');

          var cardRender = function(cardData, index) {
            element
              .append(
                $('<div>')
                .addClass('col-xs-12 col-sm-6 col-md-3')
                .append(
                  $('<div>')
                  .addClass('panel')
                  .attr('data-j-card', 'card')
                  .attr('data-j-card-bg', cardData.backgroundImg)
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
                        $('<div>')
                        .append($('<span>').text('Date Of Birth:'))
                        .append($('<span>').text(cardData.dob))
                      )
                      .append(
                        $('<div>')
                        .append($('<span>').text('Height:'))
                        .append($('<span>').text(cardData.height))
                      )
                      .append(
                        $('<div>')
                        .append($('<span>').text('Weight:'))
                        .append($('<span>').text(cardData.weight))
                      )
                      .append(
                        $('<div>')
                        .append($('<span>').text('Age:'))
                        .append($('<span>').text(cardData.age))
                      )
                      .append(
                        $('<div>')
                        .append($('<span>').text('Country:'))
                        .append($('<span>').text(cardData.country))
                      )
                    )
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

          _goalKeepers.model.forEach(cardRender);
        }
      }

    };

  };

}(jQuery));

(function($) {
  $(document).ready(function() {
    new players.goalKeepers().controller.display($('#goalKeepers'));
  });
}(jQuery));
