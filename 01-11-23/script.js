const Animals = [
  "Horse",
  "Cat",
  "Dog",
  "Tiger",
  "Leon",
  "Butterfly",
  "Duck",
  "Donkey",
  "Bird",
];

console.log("Animals:");

// parte da 0:

for (let i = 0; i <= Animals.length - 1; i++) {
  console.log(Animals[i]);
}

console.log("Animals:");

// parte da 1
for (let i = 1; i <= Animals.length - 1; i++) {
  console.log(Animals[i]);
}

// metto gli indici accanto

console.log("Animals:");
for (let i = 0; i < Animals.length; i++) {
  console.log(i + 1 + ": " + Animals[i]);
}
