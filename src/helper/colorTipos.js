export const colorTipos = (tipo) => {
  switch (tipo) {
    case "fighting":
      return "var(--fighting)";
    case "bug":
      return "var(--bug)";
    case "dark":
      return "var(--dark)";
    case "dragon":
      return "var(--dragon)";
    case "electric":
      return "var(--electric)";
    case "fairy":
      return "var(--fairy)";
    case "fire":
      return "var(--fire)";
    case "flying":
      return "var(--flying)";
    case "ghost":
      return "var(--ghost)";
    case "grass":
      return "var(--grass)";
    case "ground":
      return "var(--ground)";
    case "ice":
      return "var(--ice)";
    case "normal":
      return "var(--normal)";
    case "poison":
      return "var(--poison)";
    case "psychic":
      return "var(--psychic)";
    case "rock":
      return "var(--rock)";
    case "steel":
      return "var(--steel)";
    case "water":
      return "var(--water)";
    default:
      return;
  }
};
