 const ages = [ 12, 114, 16, 17];
 const ages2 = [15, 16, 12];
 const ages3 = [25, 35, 22, 29];
 const allAges = ages.concat(ages2).concat([5]).concat(ages3);
 const allAges2 = [...ages, ...ages2, 5, ...ages3]
//  console.log(allAges2);
const business = 650;
const minister = 450;
const sochid = 250;
const takaPaisa = [650, 450, 250, 500, 700]
const maximun = Math.max(...takaPaisa);
// const maximun = Math.max(business, minister,sochid)
console.log(maximun);
