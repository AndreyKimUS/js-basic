const hasLicence = true;
const age = 20;
const isDrunk = false;

/*if (hasLicence && age >= 18 && !isDrunk){
    console.log('Может вести машину');
} else {
    console.log('Не может вести машину');
}*/
hasLicence && age >= 18 && !isDrunk ? console.log('Может вести машину') : console.log('Не может вести машину');
