const product = {
  name: "Real Fruit Juice - Apple",
  mrp: 113,
  discountP: 19,
  quanity: 1,
  isAd: true,
};

product.finalPrice = function() {
    console.log('Final Price', product.mrp, product.discountP);
    const discount = product.mrp * product.discountP / 100;
    return Math.round(product.mrp - discount);
}

// console.log(product.finalPrice());



const products = [{
    name: "Real Fruit Juice - Apple",
    mrp: 113,
    discountP: 19,
    quanity: 2,
    isAd: true,
  }, {
    name: "Real Fruit Juice - Banana",
    mrp: 100,
    discountP: 10,
    quanity: 1,
    isAd: true,
  }, {
    name: "Real Fruit Juice - Kiwi",
    mrp: 200,
    discountP: 20,
    quanity: 1,
    isAd: true,
  }];

//   console.log(products[2].mrp);

  // OUPUT: [2, 1, 1]

  function getProductCounts(data) {
        return data.map(function(product) {
            return product.quanity;
        })
  }

//   console.log(getProductCounts(products));

  // Total Cart value

  function getCartValue(data) {
    return data.reduce(function(acc, product) {
        const discount = product.mrp * product.discountP / 100;
        const productTotalPrice =  product.quanity * (Math.round(product.mrp - discount));
        return acc += productTotalPrice;
    }, 0);
  }

//   console.log(getCartValue(products));


  // Transform into { productName: productDetails obj}
  var finalObj = {
    "Real Fruit Juice - Apple": {
        name: "Real Fruit Juice - Apple",
        mrp: 113,
        discountP: 19,
        quanity: 2,
        isAd: true,
      }, 
      "Real Fruit Juice - Banana": {
        name: "Real Fruit Juice - Banana",
        mrp: 100,
        discountP: 10,
        quanity: 1,
        isAd: true,
      }, 
      "Real Fruit Juice - Kiwi": {
        name: "Real Fruit Juice - Kiwi",
        mrp: 200,
        discountP: 20,
        quanity: 1,
        isAd: true,
      }
  };

  function getTransformedProductDetail(data) {
    // code goes here
    return data.reduce(function(acc, product) {
        acc[product.name] = product;
        return acc;
    }, {});
  }

  console.log(getTransformedProductDetail(products));