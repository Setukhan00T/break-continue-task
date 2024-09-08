for (let i=2 ; i<100 ; i++){
    if(Number.isInteger(Math.sqrt(i)))
        {
       console.log(`Found the first square number: ${i}`) ;
       break;
    }
    console.log(i);
}



// while loop

let i = 2;

while (i <= 100) {
    // Check if 'i' is a perfect square
    if (Number.isInteger(Math.sqrt(i))) {
        console.log(`Found the first square number: ${i}`);
        break;  // Exit the loop when a square number is found
    }
    console.log(i);
    i++;  // Increment 'i' after each iteration
}

