let pow_2 = function (n) {
    let porduct = 1;
    for (let i = 0; i < n; i++) {
        porduct = porduct * 2;

    }
    return porduct
}

for (let i =0;i<=10;i++){
    console.log(i,pow_2(i))
}


