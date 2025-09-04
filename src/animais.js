const ANIMAIS = {
  "Rex":   { tipo: "cão", brinquedos: ["RATO", "BOLA"] },
  "Mimi":  { tipo: "gato", brinquedos: ["BOLA", "LASER"] },
  "Fofo":  { tipo: "gato", brinquedos: ["BOLA", "RATO", "LASER"] },
  "Zero":  { tipo: "gato", brinquedos: ["RATO", "BOLA"] },
  "Bola":  { tipo: "cão", brinquedos: ["CAIXA", "NOVELO"] },
  "Bebe":  { tipo: "cão", brinquedos: ["LASER", "RATO", "BOLA"] },
  "Loco":  { tipo: "jabuti", brinquedos: ["SKATE", "RATO"] }
};

const BRINQUEDOS_VALIDOS = [
  "RATO", "BOLA", "LASER", "CAIXA", "NOVELO", "SKATE"
];

export { ANIMAIS, BRINQUEDOS_VALIDOS };
