class Hero {
  powerCount = 10; //usuniety # z nazwy zmiennej
  constructor(name) {
    this.name = name;
  }
  getCurrentPowerCount() {
    return this.powerCount;
  }
  train() {
    this.powerCount + 1;
  }
}
let heroCount = 0;
const heroes = [];
let hero = getHero("hulk");
let geralt = getHero("geralt");

heroes.push(hero);
heroes.push(geralt);

print_hall_of_fame();

function getHero(hero) {
  //znienione na duze H - cammelCase oraz argument hero
  heroCount++;
  let hero = new Hero(hero);
}
const print_hall_of_fame = () => {
  let spiderman = getHero("spider"); //dodane "" do spider
  heroes.push(spiderman);

  const heroesContainer = document.querySelector("#div");

  heroes.map((x) => {
    //usuniete niepotrzebne argumenty
    const heroElement = document.createElement("div");
    const [name] = x;

    heroElement.innerHTML = `<p>${name}</p><p>${x.powerCount}</p>`; //dodany znacznik <p>
    heroesContainer.append(heroElement);
  });
};
