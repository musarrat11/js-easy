let kilometer=-200;
let quantityOfWatch=10;
let quantityOfPhone=3;
let quantityOfLaptop=5;
let friendArray=["shoshe","samantha","charu","nus","dola","ri"];
let days= 27;
console.log(kilometerToMeter(kilometer) + " meter");
console.log(budgetCalculator(quantityOfWatch, quantityOfPhone, quantityOfLaptop) + " dollar");
console.log(hotelCost(days) + " taka");
console.log(megaFriend(friendArray));

function kilometerToMeter(kilometer) {
    if(kilometer>=0){
    var meter=kilometer * 1000;
    return meter;
    }
    else{
        return "negative value can not be converted to"
    }
   }

   function budgetCalculator(watch, phone, laptop) {
    billForWatch=50 * watch;
    billForPhone=100 * phone;
    billForLaptop=500 * laptop;
    toatlBill=billForWatch +  billForPhone + billForLaptop;
    return toatlBill;
}

function hotelCost(days) {
    let bill=0;

   if(days <= 10){
bill= 100 * days; // 10 or equal days
return bill;
    }
    else{
if (days > 20) {   //for above 20 days
    bill= ((50 * (days-20)) + (80 * 10) + (100 * 10));
    return bill;
}
else{  // below 20 or equal
    bill=((80 * (days - 10)) + (100 * 10));
    return bill;
 }
}
}
   
   function megaFriend(catchArray){
    var megaindex=0;
for(var i=0;i<catchArray.length;i++){
    if(catchArray[i].length>catchArray[megaindex].length)
    megaindex=i;
}
 return catchArray[megaindex];
}
