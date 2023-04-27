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

function hasSubscription(isSub, refillPrice, numRefills){
    let discount = .25;
    let costBeforeDiscount = refillPrice * numRefills;
    if(isSub == true){
        return costBeforeDiscount - (costBeforeDiscount * discount);
    } else {
        return costBeforeDiscount;
    }

}

function hasCoupon(numSubtotal, isCoupon){
    let discount = 10;
    if(isCoupon == true){
        return numSubtotal - discount;
    }else{
        return numSubtotal;
    }


}

function myFunction(person){
    let subscriptionFunction = hasSubscription(person.subscription, person.pricePerRefill, person.refills);
    let couponFunction = hasCoupon(subscriptionFunction, person.coupon);
    console.log(couponFunction);
}







myFunction(timmy);
myFunction(sarah);
myFunction(rocky);