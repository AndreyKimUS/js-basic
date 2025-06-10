const lang = prompt('Enter Lang');
switch(lang){
    case 'en':
        console.log('Hello');
        break;
    case 'ru':
        console.log('Privet');
        break;
    case 'esp':
        console.log('Holla!');
        break;
    default:
        console.log('I dont understand');
}