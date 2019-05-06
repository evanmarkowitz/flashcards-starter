const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

const Game = require('../src/Game');
const prototypeQuestions = data.prototypeData;


describe('Game', function() {
  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });
   it('Start Game Should be a function', function() {
    const game = new Game();
    expect(game.start).to.be.a('function');
  });
  it('should build cards', function() {
    const game = new Game();
    const cards = prototypeQuestions[0].map((thing)=> {
      let card = new Card (thing.id, thing.question, thing.answers, thing.correctAnswer)
      return card
      })
    expect(game.buildCards(data.prototypeData[0])).to.eql(cards);
  });

  it('should keep track of current round', function() {
    const cards = prototypeQuestions[0].map((thing)=> {
    let card = new Card (thing.id, thing.question, thing.answers, thing.correctAnswer)
    return card
    })
    const game = new Game();
    const deck = new Deck(cards)
    const round = new Round(deck, game)
    expect(game.currentRound).to.eql({});
    game.start()
    expect(game.currentRound).to.eql(round);
  });
});