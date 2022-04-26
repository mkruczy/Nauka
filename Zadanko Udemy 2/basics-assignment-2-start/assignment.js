const task3Element = document.getElementById('task-3');

function hello() {
    alert('Hello!');
}

function greetUser(name) {
    alert(`Hi ${name}!`);
}

function connect(part1, part2, part3) {
    const connectedParts = `${part1} ${part2} ${part3}`;
    return connectedParts;
}

function elementClick() {
    alert('You did it! :o');
}

greetUser('Nick');

task3Element.addEventListener('click', elementClick);

const combined = connect('How', 'are', 'you?');
alert(combined)