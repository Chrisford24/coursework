const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}


/*
    - Check if customer has a subscription
    - apply a 25% discount to the total cost of refill
    - Check if customer has a coupon
    - apply 10 discount to the total 
    -

*/

/*
    This function has 3 paramters checks if the person has a subscription
    returns the price for the number of refills
*/
function hasSubscription(isSub, refillPrice, numRefills){
    let discount = .25;
    let costBeforeDiscount = refillPrice * numRefills;
    // if(isSub){
    //     return costBeforeDiscount - (costBeforeDiscount * discount);
    // } else {
    //     return costBeforeDiscount;
    // }
    return isSub ? costBeforeDiscount - (costBeforeDiscount * discount) : costBeforeDiscount
    

}

/*
    This function has 2 paramters checks if the person has a coupon
    returns the price for the number of refills
*/

function hasCoupon(numSubtotal, isCoupon){
    let discount = 10;
    // if(isCoupon){
    //     return numSubtotal - discount;
    // }else{
    //     return numSubtotal;
    // }
    return isCoupon ? numSubtotal - discount : numSubtotal

}

/*
    This function has 1 paramters.
    returns the grand total price
*/

function getGrandTotal(person){
    let costAfterSubsciption = hasSubscription(person.subscription, person.pricePerRefill, person.refills);
    let costAfterCoupon = hasCoupon(costAfterSubsciption, person.coupon);
    console.log(`Your grand total is $${costAfterCoupon}.` );
}


getGrandTotal(timmy);
getGrandTotal(sarah);
getGrandTotal(rocky);