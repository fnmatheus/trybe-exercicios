const { uppercase } = require('./script.js');

describe('se a função uppercase() do exercicio 7 funciona corretamente', () => {
  it('testando se funciona corretamente', (done) => {
    uppercase('oi como c ta?', (result) => {
      try {
        expect(result).toEqual('OI COMO C TA?');
        done();
      } catch (error) {
        done(error);
      }
    });
  })
});

describe('se a function getPokemonDetails() do exercicio 8 funciona corretamente', () => {
  it()
});
