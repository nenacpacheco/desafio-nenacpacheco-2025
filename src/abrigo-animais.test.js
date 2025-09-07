import { AbrigoAnimais } from "./abrigo-animais";

describe('Abrigo de Animais', () => {

  test('Deve rejeitar animal inválido', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,RATO', 'RATO,BOLA', 'Lulu');
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve encontrar pessoa para um animal', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo');
    expect(resultado.lista[0]).toBe('Fofo - abrigo');
    expect(resultado.lista[1]).toBe('Rex - pessoa 1');
    expect(resultado.lista.length).toBe(2);
    expect(resultado.erro).toBeFalsy();
  });

  test('Deve encontrar pessoa para um animal intercalando brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'BOLA,LASER',
      'BOLA,NOVELO,RATO,LASER',
      'Mimi,Fofo,Rex,Bola'
    );
    expect(resultado.lista[0]).toBe('Bola - abrigo');
    expect(resultado.lista[1]).toBe('Fofo - pessoa 2');
    expect(resultado.lista[2]).toBe('Mimi - abrigo');
    expect(resultado.lista[3]).toBe('Rex - abrigo');
    expect(resultado.lista.length).toBe(4);
    expect(resultado.erro).toBeFalsy();
  });

test('Deve adotar um animal quando apenas uma pessoa tem os brinquedos corretos', () => {
  const abrigo = new AbrigoAnimais();

  const resultado = abrigo.encontraPessoas(
    'RATO,BOLA',    
    'LASER,NOVELO',  
    'Rex'            
  );

  expect(resultado.erro).toBeFalsy();
  expect(resultado.lista).toContain('Rex - pessoa 1');
  expect(resultado.lista.length).toBe(1);
});

 test('Loco vai para abrigo se a pessoa não tiver outro animal', () => {
    const abrigo = new AbrigoAnimais();

    const resultado = abrigo.encontraPessoas(
      'SKATE,RATO',   
      'SKATE,RATO',   
      'Loco'           
    );

    expect(resultado.erro).toBeFalsy();
    expect(resultado.lista).toContain('Loco - abrigo');
    expect(resultado.lista.length).toBe(1);
  });

  test('Loco é adotado por pessoa que já tem outro animal', () => {
    const abrigo = new AbrigoAnimais();

    const resultado = abrigo.encontraPessoas(
      'RATO,BOLA,SKATE',   
      'SKATE,RATO',        
      'Rex,Loco'            
    );

    expect(resultado.erro).toBeFalsy();
    expect(resultado.lista).toContain('Rex - pessoa 1');
    expect(resultado.lista).toContain('Loco - pessoa 1');
    expect(resultado.lista.length).toBe(2);
  });

});
