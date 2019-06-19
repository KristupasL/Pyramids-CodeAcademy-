const container = document.querySelector('.container');
const output = document.querySelector('.output');
const starCount = document.querySelector('.starInpt');


const calcStars = (inpt) => {
    let stars = Number(inpt);
    for(let i = 1; i < inpt; i++){
        stars += 1;
    }
    return stars;
};

const triangle = (inpt) => {

    for(let i = 1; i <= inpt; i++){

        for(let x = 1; x <= i; x++){
            output.insertAdjacentHTML('beforeend', `* `);
        }

        output.insertAdjacentHTML('beforeend', `<br>`);
    }


};

const pyramid = (inpt) => {
    let count = 1;
    let rows = inpt;
    for(let i = 1; i <= rows; i++){

        for(let x = rows - 1; x >= i; x--){
            output.insertAdjacentHTML('beforeend', `\xa0`);
        }

        for(let z = 1; z <= count; z++) {
            output.insertAdjacentHTML('beforeend', `*`);
        }

        count += 2;
        output.insertAdjacentHTML('beforeend', `<br>`);
    }


};

const reverseP = (inpt) => {
    let count = calcStars(inpt);
    let rows = inpt;
    console.log(count);
    for(let i = 0; i < rows; i++){

        for(let x = 0; x < i; x++){
            output.insertAdjacentHTML('beforeend', `\xa0`);
        }

        for(let z = 0; z < count; z++) {
            output.insertAdjacentHTML('beforeend', `*`);
        }

        count -= 2;
        output.insertAdjacentHTML('beforeend', `<br>`);
    }


};

const romba = (inpt) => {
    let starss = calcStars(inpt);

    let count = 1;
    let rows = inpt;

    for(let i = 1; i <= rows; i++){

        for(let x = rows; x >= i; x--){
            output.insertAdjacentHTML('beforeend', `\xa0`);
        }

        for(let z = 1; z <= count; z++) {
            output.insertAdjacentHTML('beforeend', `*`);
        }

        count += 2;
        output.insertAdjacentHTML('beforeend', `<br>`);
    }


    for (let i = 0; i < starss + 2; i++) {
        output.insertAdjacentHTML('beforeend', `*`);
    }
    output.insertAdjacentHTML('beforeend', `<br>`);

    count = calcStars(inpt);
    rows = inpt;

    for(let i = 0; i < rows; i++){

        for(let x = -1; x < i; x++){
            output.insertAdjacentHTML('beforeend', `\xa0`);
        }

        for(let z = 0; z < count; z++) {
            output.insertAdjacentHTML('beforeend', `*`);
        }

        count -= 2;
        output.insertAdjacentHTML('beforeend', `<br>`);
    }
};

const clear = () => {
    output.innerHTML = " ";
}

container.addEventListener('click', clkEvent => {
    switch (clkEvent.target.name) {
        case "triangle":
            triangle(starCount.value);
            output.insertAdjacentHTML('beforeend', `<br>`);
            break;
        case "pyramid":
            pyramid(starCount.value);
            output.insertAdjacentHTML('beforeend', `<br>`);
            break;
        case "reverseP":
            reverseP(starCount.value);
            output.insertAdjacentHTML('beforeend', `<br>`);
            break;
        case "romba":
            romba(starCount.value);
            output.insertAdjacentHTML('beforeend', `<br>`);
            break;
        case "clear":
            clear();
            break;
    }
});
