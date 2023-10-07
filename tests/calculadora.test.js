const Calculadora = require('../src/calculadora');

describe('Calculadora', () => {
  let calculadora;

  beforeEach(() => {
    calculadora = new Calculadora();
  });

  describe('soma', () => {
    test('deve somar dois números corretamente', () => {
      expect(calculadora.soma(2, 3)).toBe(5);
    });
  });

  describe('subtracao', () => {
    test('deve subtrair dois números corretamente', () => {
      expect(calculadora.subtracao(5, 3)).toBe(2);
    });
  });

  describe('multiplicacao', () => {
    test('deve multiplicar dois números corretamente', () => {
      expect(calculadora.multiplicacao(2, 3)).toBe(6);
    });
  });

  describe('divisao', () => {
    test('deve dividir dois números corretamente', () => {
      expect(calculadora.divisao(6, 3)).toBe(2);
    });

    test('deve lançar um erro ao dividir por zero', () => {
      expect(() => {
        calculadora.divisao(10, 0);
      }).toThrow('Divisão por zero não é permitida.');
    });
  });
});