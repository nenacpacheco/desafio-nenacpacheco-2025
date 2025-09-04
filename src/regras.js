import { ANIMAIS } from "./animais.js";

function contemNaOrdem(preferencia, brinquedosPessoa) {
  let i = 0;
  for (const b of brinquedosPessoa) {
    if (b === preferencia[i]) i++;
    if (i === preferencia.length) return true;
  }
  return i === preferencia.length;
}

function decidirAdocao(animal, brinquedosPessoa1, brinquedosPessoa2, adotadosPessoa1, adotadosPessoa2) {
  const { tipo, brinquedos } = ANIMAIS[animal];

  if (animal === "Loco") {
    if (adotadosPessoa1.length > 0 && adotadosPessoa1.length < 3) return 1;
    if (adotadosPessoa2.length > 0 && adotadosPessoa2.length < 3) return 2;
    return "abrigo";
  }

  const pessoa1Ok = contemNaOrdem(brinquedos, brinquedosPessoa1);
  const pessoa2Ok = contemNaOrdem(brinquedos, brinquedosPessoa2);


  if (tipo === "gato") {
    if (pessoa1Ok && pessoa2Ok) return "abrigo";
    if (pessoa1Ok && adotadosPessoa1.length < 3) return 1;
    if (pessoa2Ok && adotadosPessoa2.length < 3) return 2;
    return "abrigo";
  }

  if (pessoa1Ok && pessoa2Ok) return "abrigo";
  if (pessoa1Ok && adotadosPessoa1.length < 3) return 1;
  if (pessoa2Ok && adotadosPessoa2.length < 3) return 2;

  return "abrigo";
}

export { decidirAdocao };
