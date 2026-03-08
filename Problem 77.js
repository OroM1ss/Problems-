// // // let pow_2 = function (n) {
// // //     let porduct = 1;
// // //     for (let i = 0; i < n; i++) {
// // //         porduct = porduct * 2;

// // //     }
// // //     return porduct
// // // }

// // // for (let i =0;i<=10;i++){
// // //     console.log(i,pow_2(i))
// // // }
// // // !8 = 1*2*3*4*5*6*7*8

// // // let fuctorial = function(n){    
// // //     let product = 1;
// // //     for (let i = 1; i<=n ; i++){
// // //         product = product*i;
// // //     }
// // //     return product 


// // // }

// // // console.log (fuctorial (3));
// // // console.log (fuctorial (3));




// // let problem_v = function (n) {
// //     let expression = 1;
// //     let main_product = 1;
// //     for (let i = 1; i <= n; i++) {
// //         expression = (1 + (1 / (i * i)));
// //         main_product = main_product * expression
// //     }
// //     return main_product


// // }

// // console.log(problem_v(10));


// let problem_e = function (n) {
//     let start_sum = 0;
//     let main_n = 1;
//     let sin = Math.sin;
//     for (let i = 1; i <= n; i++) {
//         main_n = 1 / znamenatel(i);
//         start_sum = start_sum + main_n
//     }
//     return start_sum 
// }

// let znamenatel = function(n){
//     let sin1 = Math.sin; 
//     let main_sin = 0;
//     for (let i = 1; i <= n; i++){
//         let sin2 = sin1(i);
//         main_sin = main_sin + sin2;
//     }
//     return main_sin
// }

// console.log(znamenatel(3));

// console.log(problem_e(1), problem_e(2), problem_e(10));
