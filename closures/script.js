for (let i = 0; i < 3; i++) {

    const log = () => {
        console.log('let: ',i);
    }
    setTimeout(log, 100)
}

for (var i = 0; i < 3; i++) {

    const log = () => {
        console.log('var: ',i);
    }
    setTimeout(log, 100)
}

