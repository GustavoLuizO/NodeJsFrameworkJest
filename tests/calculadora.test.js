const Calculadora = require('../src/calculadora');

describe('Calculadora', () => {
  let calculadora;

  beforeEach(() => {
    calculadora = new Calculadora();
  });

  describe('soma-fact', () => {
    test('deve somar dois números corretamente', () => {
      const a = 2;
      const b = 3;
      const resultado = 5;
      expect(calculadora.soma(a, b )).toBe(resultado);
    });
  });

  describe('subtracao-fact', () => {
    test('deve subtrair dois números corretamente', () => {
      const a = 4;
      const b = 3;
      const resultado = 1;
      expect(calculadora.subtracao(a, b)).toBe(resultado);
    });
  });

  describe('multiplicacao-fact', () => {
    test('deve multiplicar dois números corretamente', () => {
      const a = 2;
      const b = 3;
      const resultado = 6;
      expect(calculadora.multiplicacao(a, b)).toBe(resultado);
    });
  });

  describe('divisao-fact', () => {
    test('deve dividir dois números corretamente', () => {
      const a = 6;
      const b = 3;
      const resultado = 2;
      expect(calculadora.divisao(a, b)).toBe(resultado);
    });

    test('deve lançar um erro ao dividir por zero', () => {
      expect(() => {
        calculadora.divisao(10, 0);
      }).toThrow('Divisão por zero não é permitida.');
    });
  });
  
  describe('soma-theory', () => {
    test.each([
      [2, 3, 5],
      [1, 1, 2],
      [0, 0, 0]
    ])('deve retornar %i quando somado %i e %i', (a, b, expected) => {
      const result = calculadora.soma(a, b);
      expect(result).toBe(expected);
    });
  });

  describe('subtracao-theory', () => {
    test.each([
      [5, 3, 2],
      [1, 1, 0],
      [0, 0, 0]
    ])('deve retornar %i quando subtraído %i de %i', (a, b, expected) => {
      const result = calculadora.subtracao(a, b);
      expect(result).toBe(expected);
    });
  });

  describe('multiplicacao-theory', () => {
    test.each([
      [2, 3, 6],
      [1, 1, 1],
      [0, 0, 0]
    ])('deve retornar %i quando multiplicado %i por %i', (a, b, expected) => {
      const result = calculadora.multiplicacao(a, b);
      expect(result).toBe(expected);
    });
  });

  describe('divisao-theory', () => {
    test.each([
      [6, 3, 2],
      [2, 1, 2],
      [0, 1, 0]
    ])('deve retornar %i quando dividido %i por %i', (a, b, expected) => {
      const result = calculadora.divisao(a, b);
      expect(result).toBe(expected);
    });

    test('deve lançar um erro ao dividir por zero', () => {
      expect(() => {
        calculadora.divisao(10, 0);
      }).toThrow('Divisão por zero não é permitida.');
    });
  });
});