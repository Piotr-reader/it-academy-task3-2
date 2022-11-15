let name = prompt('Введите Ваше имя:');
let secondname = prompt('Введите Ваше отчество:');
let surname = prompt('Введите Вашу фамилию:');
let age = 0;
age = prompt('Введите Ваш возраст(лет):');
let sex = confirm('Ваш пол - мужской?');
let gender = ( sex ) ? "мужской" : "женский";
let benefite = ( sex ) ? 63 : 58;
let countAge = ( age >= benefite ) ? 'Да' : 'Нет';

alert(`ФИО: ${name} ${secondname} ${surname}\n Возраст (лет): ${age}\n Возраст (дней): ${age*365}\n Пол: ${gender}\n Пенсионный возраст: ${countAge}`);
