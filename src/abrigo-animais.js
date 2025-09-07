import { ANIMAIS } from "./animais.js";
import { validarAnimais, validarBrinquedos } from "./validadores.js";
import { decidirAdocao } from "./regras.js";

class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const erroAnimais = validarAnimais(ordemAnimais);
    if (erroAnimais) return { erro: 'Animal inválido', lista: null };

    const erroB1 = validarBrinquedos(brinquedosPessoa1);
    if (erroB1) return { erro: 'Brinquedo inválido', lista: null };

    const erroB2 = validarBrinquedos(brinquedosPessoa2);
    if (erroB2) return { erro: 'Brinquedo inválido', lista: null };

    const listaAnimais = ordemAnimais.split(",").map(a => a.trim());
    const brinquedos1 = brinquedosPessoa1.split(",").map(b => b.trim());
    const brinquedos2 = brinquedosPessoa2.split(",").map(b => b.trim());

    let adotadosPessoa1 = [];
    let adotadosPessoa2 = [];
    let resultado = [];

    for (const animal of listaAnimais) {
      const decisao = decidirAdocao(animal, brinquedos1, brinquedos2, adotadosPessoa1, adotadosPessoa2);

      if (decisao === 1) {
        adotadosPessoa1.push(animal);
        resultado.push(`${animal} - pessoa 1`);
      } else if (decisao === 2) {
        adotadosPessoa2.push(animal);
        resultado.push(`${animal} - pessoa 2`);
      } else {
        resultado.push(`${animal} - abrigo`);
      }
    }


    return { erro: false, lista: resultado.sort((a, b) => a.localeCompare(b)) };
  }
}

export { AbrigoAnimais };
