//CONDITIONS

/**
 * 
 * Faire prendre des décisions
 * 
 * Les programmes intelligents utilisent des booléens pour décider
 * s'il faut exécuter des lignes de codes ou les ignorer. 
 * 
 * Comment écrire du code qui s'adapte à différentes situations ? 
 * En utilisant l'instruction "if" (si). 
 * 
 * Nous codons le mot clé "if" pour une instruction if
 * 
 */

if (true) {
    console.log("Hello!");
}

/**
 * 
 * L'instruction if exécute le code uniquement si le booléen sur lequel
 * elle s'appuie est true. 
 * C'est comme dire, si quelque chose est vraie, alors fais ceci. 
 * "Hello!" s'affichera dans la console si nous définissons la valeur 
 * booléenne sur true.
 * 
 */

/**
 * Mais que se passe-t'il si nous voulons ignorer le code ? 
 * Nous utlisons false à la place de true. 
 * En définissant la valeur sur false, nous éviterons d'afficher "Hello!".
 */

if (false) {
    console.log("Hello!");
}

/**
 * 
 * Des valeurs comme true sont appelées conditions. les instructions reposant
 * sur des conditions sont appelées conditionnelles. 
 * Les conditions décident si le code s'éxécute ou est ignoré. ils viennent
 * entre les parenthèses.
 * 
 */

if (true) {
    console.log("Hello There !");
}
console.log("Hello There !");

/**
 * 
 * Les instructions if ne décident pas de sauter ou d'éxécuter le code entier.
 * ils ne prennent des décisions que sur un morceau de code.
 * Ce morceau de code s'appelle un bloc de code. 
 * nous l'écrivons entre accolades "{}".
 * 
 */

if (true) {
    console.log("Je suis un bloc de code");
}

/**
 * 
 * Un bloc de code peut être plus qu'un one-liner. 
 * Nous pouvons ajouter autant de lignes que nous voulons. 
 * 
 * Utilisez console.log() pour ajouter une ligne supplémentaire au début
 * du code suivant.
 * 
 */

if (true) {
    console.log("Regardez-moi !");
    console.log("Je suis un bloc de code");
}

/**
 * 
 * Au lieu d'utiliser le booléen true, nous pouvons l'enregistrer dans une variable
 * et l'utiliser comme condition. 
 * 
 * Créer la constante greet et définissez-la sur true. Ensuite, utilisez greet comme 
 * condition pour l'instruction if.
 * Afficher le message hello dans la console. 
 * 
 */

const GREET = true;

if (GREET) {
    console.log("Hello");
}

/**
 * 
 * L'utilisation d'une variable définie sur false nous permet d'ignorer le bloc de code. 
 * 
 */

const GREET1 = false;

if (GREET1) {
    console.log("Hello2");
}

/**
 * 
 * Qu'est-ce que ce code affiche dans la console ?
 * 
 * const IS_ONLINE = true;
 * if (IS_ONLINE) {
 *  console.log("Jill est en ligne");
 * }
 * expected output => Jill est en ligne. 
 * 
 * const IN_BOX_FULL = false;
 * if (IN_BOX_FULL) {
 *  console.log("Votre boîte est pleine");
 * }
 * expected output => Rien car le code entre les accolades est ignoré. 
 * 
 */

/**
 * 
 * Conditions et utilisations
 * 
 * Les instructions if fonctionnent avec tous les opérateurs de comparaison que nous avons
 * explorées jusqu'à présent. 
 * Par exemple, vérifier si l'age est supérieur ou égal à 55; 
 * 
 */

let age = 75;

if (age >= 55) {
    console.log("La réduction est appliquée");
}

/**
 * 
 * Les instructions if peuvent également utiliser "===" pour comparer des variables
 * telles que isday à une valeur booléenne.
 * 
 */

let isDay = true;

if (isDay === true) {
    console.log("Eteinds la lumière");
}

/**
 * 
 * Pour utiliser le résultat d'une compraison plusieurs fois,
 * nous pouvons le stocker dans une variable comme pass.
 * 
 */

let score = 51;
let pass = score > 50;
if (pass) {
    console.log(pass);
}

/**
 * 
 * Exemple 1:
 * 
 * Codez une condition qui exécute le code si replaytimes(345) est supérieur ou égale à 300.
 * Affichez un message indiquant votre top musique de cette semaine.
 * 
 */

const SONG = "Don't stop me now";
let replayTimes = 345;
if (replayTimes >= 300) {
    console.log("Votre top musique de cette semaine: " + SONG);
}

/**
 * 
 * Exemple 2:
 * 
 * Codez une conditon pour suggérer un restaurant si la diet de l'utilisateur est vegetarien.
 * 
 */

const DIET = "vegetarian";
const VEGGIE_RESTAURANT = "Root";
const RESTAURANT = "Panda DelPosto";

if (DIET === "vegetarian") {
    console.log("Vous pouvez aller au: " + VEGGIE_RESTAURANT);
}

/**
 * 
 * Exemple 3:
 * 
 * Utiliser le bon opérateur pour exécuter le bloc de code si today n'est pas saturday.
 * 
 */

let today = "Sunday";

if (today !== "Saturday") {
    console.log("debout, il est 8h !");
}

/**
 * 
 * Exemple 4:
 * 
 * utiliser le bon opérateur pour écrire une condition qui vérifie si
 * l'age de l'utilisateur est supérieur à 18.
 * 
 */

let age1 = 20;
let canDrive = false;

if (age1 > 18) {
    canDrive = true;
}
console.log(canDrive);

/**
 * 
 * Exemple 5:
 * 
 * Stockez la comparaison d'égalité entre inboxfull(true) et true dans showalert
 * 
 * console.log("Your inbox is full.");
 * console.log("You can't receive any more emails");
 *  
 */

let inBoxFull = true;
const SHOW_ALERT = inBoxFull === true;

if (SHOW_ALERT) {
    console.log("Your inbox is full.");
    console.log("You can't receive any more emails");
}

/**
 * 
 * Codages des instructions else
 * 
 * Un excellent logiciel ne se contente pas de décider quoi faire lorsqu'
 * une condition est true, il dispose également d'un plan de secours si 
 * la condition est false. 
 * 
 * Exemple: 
 * Une application qui allume les lumières si isON est true et s'éteint si 
 * isON est false.
 * 
 * Nous savons déjà que les instructions if nous aident à exécuter du code 
 * si une certaine est true.
 * 
 */

let condition = true;

if (condition) {
    console.log("1");
}

/**
 * 
 * Ajoutons une autre instruction if qui utilise !condition pour exécuter
 * un code différent si la condition est false.
 * 
 */

condition;

if (condition) {
    console.log("1");
}
if (!condition) {
    console.log("2");
}

/**
 * 
 * Au lieu de créer deux instructions if, nous utilisons
 * une instruction if/else pour obtenir le même résultat.
 * 
 * L'instruction else d'une instruction if/else va toujour à la fin. 
 * 
 */

condition = false;

if (condition) {
    console.log("1");
} else {
    console.log("2");
}

/**
 * 
 * Regardons un cas d'utillisation: si isDay vaut true, 
 * nous voulons éteindre les lumières.
 * 
 * Si isDay est false, nous pouvons ajouter une instruction
 * else pour allumer les lumières
 * 
 */

let isDay2 = false;
if (isDay2) {
    console.log("Lights off!");
} else {
    console.log("Lights on!");
}

/**
 * 
 * L'instruction else n'a pas besoin de sa propre condition.
 * C'est parce qu'il gère les cas où la condition if est false.
 * 
 */

let number = 99;

if (number === 1) {
    console.log("C'est un 1");
} else {
    console.log("Ce n'est pas 1");
}

/**
 * 
 * Exemple 1:
 * 
 * Que se passe-t'il lorsque ce code s'exécute ?
 * let isSubscribed = true;
 * if (isSubscribed) {
 *  console.log("Vous bénéficiez de 10% de réduction!")
 * } else {
 * console.log("Abonnez-vous!")
 * }
 * 
 * Le bloc de code de l'instruction if s'éxécute.
 * 
 */
/**
 * 
 * Incorporer else if (sinon si)
 * 
 * Apprenons à écrire des instructions conditionnelles qui gèrent
 * des conditions spécifiques.
 * 
 * En utilisant les instructions "if" et "else", nous pouvons
 * écrire un programme qui affiche une salutation si (hour < 12) = true
 * et une autre si elle est false.
 *  
 */

let hour = 9;
if (hour < 12) {
    console.log("Good morning");
} else {
    console.log("Good night");
}

/**
 * 
 * Pour une condition plus spécifique, comme si hour est supérieur ou égale à 12(heures)
 * mais inférieur à 17(heures).
 * 
 * Nous appelons cela une instruction "else if". cette instruction exécute son bloc de code 
 * si la condition qui la précède est false et (hour < 17) est true.
 * 
 * Nous pouvons coder une instruction else pour exécuter son bloc de code lorsque les "if", 
 * "else if" sont "false".
 * 
 * Tant qu'elles précèdent l'instruction "else", nous pouvons ajouter autant d'instructions "else if"
 * que nous le souhaitons.
 * 
 */


hour = 20;
if (hour < 12) {
    console.log("Good morning");
} else if (hour < 17) {
    console.log("Good afternoon");
} else if (hour < 21) {
    console.log("Good evening");
} else {
    console.log("Good night");
}

/**
 * 
 * Exemple 1:
 * 
 * Qu'est ce que ce code affiche dans la console ?
 * 
 * let score = 75;
 * if(score > 70 && score < 90) {
 *  console.log("Tu passes!")
 * } else if (score >= 90) {
 *  console.log("Tu as obtenu un A!");
 * }
 * 
 * Tu passes. 
 * 
 */

/**
 * 
 * Affichez un message dans la console lorsque l'age(16) est supérieur ou égal
 * à 12 et inférieur à 17.
 * 
 * "Ou sont vos parents ?"
 * "Tu es trop jeune pour conduire cette moto"
 * "Bienvenue!"
 * 
 */

age = 16;
if (age <= 12) {
    console.log("Ou sont vos parents ?");
} else if (age < 17) {
    console.log("Tu es trop jeune pour conduire cette moto");
} else {
    console.log("Bienvenue!");
}

/**
 * 
 * Codez les mots-clés pour une instruction "else if".
 * 
 * Créer une variable topping qui stocke la string pepperoni,
 * vérifier à l'aider d'une instruction si le mot entrée est strictement
 * égale à la string pineapple.
 * Si c'est le cas affichez dans la console le message "Accès refusé".
 * Sinon si le mot entrée est strictement égal à pepperoni, affichez 
 * dans la console le message "Accès autorisé". 
 * 
 * Affichez un message dans la console lorsque topping n'est pas égale 
 * à pineapple ou pepperoni. 
 * 
 * "Nous ne pouvons répondre à votre request"
 * 
 */

let topping = "pepperoni";
if (topping === "pineapple") {
    console.log("Accès refusé!");
} else if (topping === "pepperoni") {
    console.log("Accès autorisé!");
} else {
    console.log("Nous ne pouvons répondre à votre request!");
}

