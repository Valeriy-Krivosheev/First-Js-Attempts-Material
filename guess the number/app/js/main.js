let number = 10;

while (true) {
    let ask = Number(prompt('Назовите число'));
    if (ask == number) {
        alert('Это так');
        break;
    }
}