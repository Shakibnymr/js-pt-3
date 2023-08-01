var booksPrice = [33, 54, 233,22,66,434,64,122,533,543,112,31]
for(var i = 0; i < booksPrice.length ; i++){
    var bookPrice = booksPrice[i]
    if(bookPrice>200){
        continue;
    }
    console.log(bookPrice)
}