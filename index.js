// code your solution here
const dogs = ["Golden Retriever", "Pit Bull", "Chow"]

function sayDogIsCute(dog) {
    console.log(`The ${dog} is so cute`);
}

dogs.forEach(sayDogIsCute);

function loopThroughAllDogs(allDogs) {
    allDogs.forEach(sayDogIsCute);
}

loopThroughAllDogs(dogs)
loopThroughAllDogs()