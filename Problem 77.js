
// // let = function (n) {

// //     for (let i = 1; i <= n; i++) {

// //     }
// //     return
// // }

// // console.log();

// // console.log();


// // // // let pow_2 = function (n) {
// // // //     let porduct = 1;
// // // //     for (let i = 0; i < n; i++) {
// // // //         porduct = porduct * 2;

// // // //     }
// // // //     return porduct
// // // // }

// // // // for (let i =0;i<=10;i++){
// // // //     console.log(i,pow_2(i))
// // // // }
// // // // !8 = 1*2*3*4*5*6*7*8

// // // // let fuctorial = function(n){    
// // // //     let product = 1;
// // // //     for (let i = 1; i<=n ; i++){
// // // //         product = product*i;
// // // //     }
// // // //     return product 


// // // // }

// // // // console.log (fuctorial (3));
// // // // console.log (fuctorial (3));




// // // let problem_v = function (n) {
// // //     let expression = 1;
// // //     let main_product = 1;
// // //     for (let i = 1; i <= n; i++) {
// // //         expression = (1 + (1 / (i * i)));
// // //         main_product = main_product * expression
// // //     }
// // //     return main_product


// // // }

// // // console.log(problem_v(10));


// // let problem_e = function (n) {
// //     let start_sum = 0;
// //     let main_n = 1;
// //     let sin = Math.sin;
// //     for (let i = 1; i <= n; i++) {
// //         main_n = 1 / znamenatel(i);
// //         start_sum = start_sum + main_n
// //     }
// //     return start_sum 
// // }

// // let znamenatel = function(n){
// //     let sin1 = Math.sin; 
// //     let main_sin = 0;
// //     for (let i = 1; i <= n; i++){
// //         let sin2 = sin1(i);
// //         main_sin = main_sin + sin2;
// //     }
// //     return main_sin
// // }

// // console.log(znamenatel(3));

// // console.log(problem_e(1), problem_e(2), problem_e(10));



// // let sqrt = function (n) {
// //     let main_sqrt = 0
// //     let bla_bla = 0
// //     let krug1 = 1
// //     for (let i =  1; i  <= n; i++) {
// //         krug1 = Math.sqrt(2 + bla_bla)
// //         bla_bla = krug1
// //         main_sqrt = bla_bla

// //     }
// //     return main_sqrt
// // }
// // console.log(sqrt(1));
// // console.log(sqrt(2));
// // console.log(sqrt(3));
// // console.log(sqrt(10));
// // console.log(sqrt(100));

// let sin_cos = function (n) {
//     let start_sum = 0;
//     let main_product = 1;
//     let main_n = 1;
//     for (let i = 1; i <= n; i++) {
//         main_n = chislitel2(i) / znamenatel2(i);
//         start_sum = start_sum + main_n;

//     }
//     return start_sum
// }



// let znamenatel2 = function (n) {
//     let sin1 = Math.sin;
//     let main_sum = 0;
//     let bla_bla1 = 0
//     for (let i = 1; i <= n; i++) {
//         let sin2 = sin1(i) + bla_bla1;
//         bla_bla1 = sin2;
//         main_sum = main_sum + bla_bla1;
//     }
//     return main_sum
// }

// let chislitel2 = function (n) {
//     let cos1 = Math.cos;
//     let main_sum = 0;
//     let bla_bla2 = 0
//     for (let i = 1; i <= n; i++) {
//         let cos2 = cos1(i) + bla_bla2;
//         bla_bla1 = cos2;
//         main_sum = main_sum + bla_bla2;
//     }
//     return main_sum
// }
// console.log(sin_cos(1));

// console.log(sin_cos(2));
