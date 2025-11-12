// <------declaration of a string------>
const country = 'Bangla desh';
const division = "Dhaka";
const district = `Gazipur`;

    // const thana = new String('Gazipur Sadar');

    // console.log(thana);

console.log(typeof country);

console.log(country.length); //string er length ber korar jonno use hoy...ekhettre kono space thake setao count hobe

console.log(country[6]); //index no ber korar jonno
console.log(country[7]); //index no ber korar jonno

console.log(typeof division);
console.log(typeof district);

// array index element change---> array element change kora jay
const numbers = [22, 34, 55, 65, 78];
console.log(numbers);
numbers[1] = 33;
console.log(numbers);

// but string er index element array er moto change kora jay na because "String is immutable"
const capital = 'DHAKA';
console.log(capital);
capital[0] = 'F';
console.log(capital); //index element not change


// string is case sensitive
// convert mixed_case to lowercase letter
const college = 'Gazipur Cantonment College';

console.log(college);
console.log(college.toLowerCase()); //for all lowercase letter
console.log(college.toUpperCase()); //for all uppercase letter

// slice(m, n-1) use case
const address = 'Rajendrapur';
const part = address.slice(2,5); //kono akta string theke kono akta part alada korar jonno...ekhane m to n-1 porjonto word ta show kore
console.log(part);

// split(' ') use case
const sentence = 'I am a good and hardworking person.';
console.log(sentence.split('')); //ekhettre protiti alphabet and space '' er moddhe chole ashbe
console.log(sentence.split(' ')); //ekhettre protiti word '' er moddhe thakbe

// split() and join() use case
const friendsStr = 'rahim, karim, darim, tarim, fahim';
const friends = friendsStr.split(',');
console.log(friends);
const realFriends = [ 'rahim', ' karim', ' darim', ' tarim', ' fahim' ];
console.log(realFriends.join());
console.log(realFriends.join('|'));
console.log(realFriends.join('-'));


// concat() and includes() use case
const firstName = 'Rakibul';
const lastName = 'Hasan';
const fullName = firstName.concat(' ').concat(lastName);//duto name akottre koreche

console.log(fullName);

// string e kono alphabat ache kina seta identify korar jonno use kora hoy
console.log(lastName.includes('s'));
console.log(lastName.includes('x'));






