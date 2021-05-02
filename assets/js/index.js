function availableCars(car) {
    let quantity = 0;

    if(car == "تويوتا"){
        quantity = 3;
    }

    if(car == "نيسان"){
        quantity = 2;
    }

    if(car == "مارسيدس"){
        quantity = 1;
    }else {
        console.log("لا شي يوجد لدينا بهذا الاسم")
    }

    return quantity;
}