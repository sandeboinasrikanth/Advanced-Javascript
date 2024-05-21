/*
7 Steps to make Ice Cream:
1.place Order - 2
2.Cut the Fruit -2
3.Add water and Ice Cream -1
4.Start the Machine -2
5.Select Container -2
6.Select Toppings-1     //chocolate , sprinkles
7.Serve the Ice Cream -3

*/

//synchronous  //Asynchronous
// console.log(" I ");
// console.log(" eat ");
// setTimeout(() => {
//     console.log(" ice cream ")
// }, 4000);
// console.log(" with a ");
// console.log(" spoon. ");


//callback:Function inside Another function passing as an arugument is called callback.

function one(call_two){
    console.log("Step 1 completed. Please call step2")
    call_two()

}

function two(){
    console.log("Step 2")

}

// one(two);

//ex:2
// let order = (call_production)=>{
//     console.log("Order Placed, Please Call Production");
//     call_production();

// }

// let production =()=>{
//     console.log("Order Received, Starting Production");
// }

// order(production)

// ex:3 
/*

let stocks ={
    Fruits:["strawberry", "grapes","banana","apple"],
    liquid:["water","ice cream"],
    holder:["cone","cup","stick"],
    toppings:["Chocolate", "Peanuts"]
};

// console.log(stocks.Fruits[3])

let order =(Fruit_name, call_production)=>{
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);
        call_production()
    }, 2000);

};

//callback hell
let production =()=>{
    setTimeout(()=>{
        console.log("production has Started");

        setTimeout(()=>{
            console.log("The fruit has been chopped");

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(()=>{
                    console.log("The Machine was Started");

                    setTimeout(()=>{
                        console.log(`ice cream was placed on ${stocks.holder[0]} `);

                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was added`);

                            setTimeout(()=>{
                                console.log("Serve the ice Cream")
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)

    }, 1000);
}


order(0, production);
//-------------------------------------------------------------------
*/

//promises
/*

let stocks ={
    Fruits:["strawberry", "grapes","banana","apple"],
    liquid:["water","ice cream"],
    holder:["cone","cup","stick"],
    toppings:["Chocolate", "Peanuts"]
};

let is_shop_open = true;

let order=(time, work)=>{
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work())
            },time)
        }else{
            reject(console.log("Our Shop is Closed"))
        }

    })
}

order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected. `))
.then(()=>{
    return order(1000, ()=>console.log("Production has Started."))
}).then(()=>{
    return order(2000,()=>console.log("The Fruit was chopped"))
}).then(()=>{
    return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
}).then(()=>{
    return order(1000,()=>console.log("Start the Machine."))
}).then(()=>{
    return order(2000,()=>console.log(`ice cream was placed on ${stocks.holder[0]}`))
}).then(()=>{
    return order(3000,()=>console.log(`${stocks.toppings[0]} was selected`))
}).then(()=>{
    return order(1000,()=>console.log("ice cream was served"))
}).catch(()=>{
    console.log("Customer left")
}).finally(()=>{
    console.log("Day ended, shop is closed")
})


*/
//----------------------------------------------------

//Async/await
// let stocks ={
//     Fruits:["strawberry", "grapes","banana","apple"],
//     liquid:["water","ice cream"],
//     holder:["cone","cup","stick"],
//     toppings:["Chocolate", "Peanuts"]
// };

// let is_shop_open = true;


// let order = () =>{
//     return new Promise((resolve,reject)=>{
//         if(is_shop_open){
//             resolve()
//         }else{
//             reject()
//         }
//     })
// }
// order()
// .then()
// .then()
// .then()
// .catch()
// .finally()

// async function order(){
//     try{
//         await abc;
//     }catch{
//         console.log("abc doesn't exist", error)
//     }finally{
//         console.log('runs code anyways')
//     }

// }

// order().then(()=>{
//     console.log("jksdkjsdj")
// })



// let is_shop_open = true;

// let toppings_choice =()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(console.log("Which toppings would you love?"))
//         },3000)
//     })
// }


// async function kitchen(){
//     console.log("A ")
//     console.log("B ")
//     console.log("C ")

//     await toppings_choice();

//     console.log("D ")
//     console.log("E ")
// }

// kitchen()

// console.log("doing the dishes")
// console.log("cleaning the dishes")
// console.log("taking other orders")
//---------
let stocks ={
    Fruits:["strawberry", "grapes","banana","apple"],
    liquid:["water","ice cream"],
    holder:["cone","cup","stick"],
    toppings:["Chocolate", "Peanuts"]
};

let is_shop_open =true;

function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }else{
            reject(console.log("Shop is Closed"))
        }
    })
}


async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]}`)

        await time(1000)
        console.log("Production has Started.")

        await time(2000)
        console.log("Cut the fruits")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)

        await time(1000)
        console.log("Start the machine")
        await time(2000)
        console.log(`ice cream was placed on ${stocks.holder[0]}`)
        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`)
        await time(2000)
        console.log("ice cream was served")

    }catch(error){
        console.log("Customer left", error)

    }finally{
        console.log("day ended, shope is closed")

    }
}

kitchen()