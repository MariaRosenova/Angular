abstract class Melon {

  public weight: number;
  public melonSort: string;

  constructor(weight: number, melonSort: string) {
    this.weight = weight;
    this.melonSort = melonSort;
  }

  abstract getElementType(): string;

  getElementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): string {
    return `Element: ${this.getElementType()} 
            Sort: ${this.melonSort}
            Element Index: ${this.getElementIndex()}`;
  }
}

class Watermelon extends Melon {
  getElementType(): string {
    return "Water";
  }
}

class Firemelon extends Melon {
  getElementType(): string {
    return "Fire";
  }
}

class Earthmelon extends Melon {
  getElementType(): string {
    return "Earth";
  }
}

class AirMelon extends Melon {
  getElementType(): string {
    return "Air";
  }
}

let watermelon: Watermelon = new Watermelon(12.5, 'Kingsize');
console.log(watermelon.toString());