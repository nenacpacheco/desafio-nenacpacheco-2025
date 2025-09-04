import { ANIMAIS, BRINQUEDOS_VALIDOS } from "./animais.js";

function validarAnimais(ordemAnimais) {
  const nomes = ordemAnimais.split(",").map(a => a.trim());
  const set = new Set();

  for (const nome of nomes) {
    if (!ANIMAIS[nome]) return "Animal inválido";
    if (set.has(nome)) return "Animal inválido";
    set.add(nome);
  }
  return null;
}

function validarBrinquedos(brinquedos) {
  const itens = brinquedos.split(",").map(b => b.trim());
  const set = new Set();

  for (const b of itens) {
    if (!BRINQUEDOS_VALIDOS.includes(b)) return "Brinquedo inválido";
    if (set.has(b)) return "Brinquedo inválido";
    set.add(b);
  }
  return null;
}

export { validarAnimais, validarBrinquedos };
