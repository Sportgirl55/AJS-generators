class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    this.members.add(member);
  }

  addAll(arr) {
    for (const keys of arr) {
      this.members.add(keys);
    }
  }

  toArray() {
    return [...this.members];
  }

  * [Symbol.iterator]() {
    const arr = this.members;
    let count = 0;
    const last = arr.size;

    for (let items = [...arr]; count < last; count += 1) {
      yield items[count];
    }
  }
}


const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 60,
  level: 1,
  attack: 40,
  defence: 10,
};

const charArray = [{
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
},
{
  name: 'Стрелок',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
},
{
  name: 'Зомби',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
}];


const newTeam = new Team();
newTeam.addAll(charArray);
newTeam.add(char1);
newTeam.add(char);

// console.log([...newTeam]);

for (const value of newTeam) {
  console.log(value);
}
