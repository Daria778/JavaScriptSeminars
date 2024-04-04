const products = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg"],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"],
    },
    {
        id: 8,
        price: 78,
    },
];
let newpr = products.filter((item) => {
    if (item.photos) {
        if (item.photos.length >= 1) return true;
        return false;
    }
    else {
        return false;
    }
});
console.log(newpr);

let sorted = products.sort(function pricesort(a, b) {
    return b.price < a.price ? 1
        : b.price > a.price ? -1
            : 0;
});
console.log(sorted);