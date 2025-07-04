let n = 5;

// Forward Pyramid (excluding the last row)
for (let i = 0; i < n; i++) {
    let row = "";

    // Leading spaces
    for (let j = 0; j < n - (i + 1); j++) {
        row += " ";
    }

    // Stars with space
    for (let k = 0; k < i + 1; k++) {
        row += "* ";
    }

    console.log(row.trimEnd());
}

// Reverse Pyramid (start from n - 2 to avoid repeating the middle row)
for (let i = n - 2; i >= 0; i--) {
    let row = "";

    // Leading spaces
    for (let j = 0; j < n - (i + 1); j++) {
        row += " ";
    }

    // Stars with space
    for (let k = 0; k < i + 1; k++) {
        row += "* ";
    }

    console.log(row.trimEnd());
}


//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *