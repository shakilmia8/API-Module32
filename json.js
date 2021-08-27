const products = { name: 'Pen', price: 15, color: 'gray' };
const stringified = JSON.stringify(products);
// console.log(products);
// console.log(stringified);

const shop = {
    name: 'Alia shop',
    address: 'Ranbir Road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    isExpensive: false
};

const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);