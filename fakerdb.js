var faker = require('faker')
//faker.locale = "zh_TW";
function generateSitestatus() {
    var recommend = []
    const foodname_typeArr = ['驚奇鹽酥雞', '疏食牛肉麵', '辣子炸雞腿', '素素烤肉', '三素自助餐', '一品好豆花'];
    const foodimg_typeArr = ['https://drive.google.com/uc?export=view&id=1XOT0LAsV04-Z5rKLQlD-d3y9-fuffguO','https://drive.google.com/uc?export=view&id=1LrMKDTaMHMfEfXsrsF0NenPL9m-p1BS8','https://drive.google.com/uc?export=view&id=1BmU2VLOLQZjOoyGI7K7pkxKiHCnSLSpc','https://drive.google.com/uc?export=view&id=1tCZT7_LFwKDWvxRxchrM27vZ7jL28k6Y','https://drive.google.com/uc?export=view&id=1odslJwlD0oSkBXHZnUDiAwoPxBSY4VMM'];
    for(var id = 1; id < 21; id++){
        var food_type = foodname_typeArr[Math.floor(Math.random() * 6)] 
        var foodimg = foodimg_typeArr[Math.floor(Math.random() * 5)]     
        recommend.push({
            "id": id,
            "name": food_type,
            "img": foodimg
        })
    }
    return { 
    "recommend": recommend
    }
}

// 如果你要用json-server的话，就需要export这个生成fake data的function
module.exports = generateSitestatus