const mainElement = document.querySelector('main');
const div = document.createElement('div');
const ul = document.createElement('ul');


div.classList.add('row')

mainElement.append(div);
div.append(ul);
ul.classList.add('d-flex', 'flex-wrap');

for ( let i = 1 ; i <= 100 ; i++ ){
    const li = document.createElement('li');
    li.classList.add()
    if ( i % 5 === 0 && i % 3 === 0){
        console.log('FizzBuzz');
        li.append(i);
        ul.append(li);
        li.classList.add('fizzbuzz');
    } else if ( i % 3 === 0){
        console.log('Fizz');
        li.append(i);
        ul.append(li);
        li.classList.add('fizz');
    } else if ( i % 5 === 0){
        console.log('Buzz');
        li.append(i);
        ul.append(li);
        li.classList.add('buzz');
    } else {
        console.log(i)
        li.append(i);
        ul.append(li);
    }
}


