var faker = require('faker')
//faker.locale = "zh_TW";
function generateSitestatus() {
    //推薦美食
    var recommend = []
    //const foodname_typeArr = ['驚奇鹽酥雞', '疏食牛肉麵', '辣子炸雞腿', '素素烤肉', '三素自助餐', '一品好豆花'];
    const foodname_typeArr = ['Foodname', 'Foodname', 'Foodname', 'Foodname', 'Foodname', 'Foodname'];
    const foodimg_typeArr = ['https://drive.google.com/uc?export=view&id=1XOT0LAsV04-Z5rKLQlD-d3y9-fuffguO','https://drive.google.com/uc?export=view&id=1LrMKDTaMHMfEfXsrsF0NenPL9m-p1BS8','https://drive.google.com/uc?export=view&id=1BmU2VLOLQZjOoyGI7K7pkxKiHCnSLSpc','https://drive.google.com/uc?export=view&id=1tCZT7_LFwKDWvxRxchrM27vZ7jL28k6Y','https://drive.google.com/uc?export=view&id=1odslJwlD0oSkBXHZnUDiAwoPxBSY4VMM'];
    for(var id = 1; id < 21; id++){
        var creat_time = faker.date.future()
        var food_type = foodname_typeArr[Math.floor(Math.random() * 6)] 
        var foodimg = foodimg_typeArr[Math.floor(Math.random() * 5)]     
        recommend.push({
            "id": id,
            "date": creat_time,
            "name": food_type,
            "img": foodimg,
            "bigimg": 'https://drive.google.com/uc?export=view&id=1NzWlfh9CnG8mCG-2hUhtXHWoO-mPXOKU',
            "text": "搭配店家特製的義式料理餐點、手工披薩、薄餅、甜點不一樣的蔬食餐廳，無肉也可以很歡樂"
        })
    }

    var blogger = []
    const title_typeArr = ['綠時代素食串燒 ', '菩善蔬圓', '巷左巷右蔬食義大利麵', '嬿評素燒烤食堂', '素食風味外省麵', '宏珍素粽'];
    const author_typeArr = ['羅妹妹 ', '王大江', '左右看', '粉紅豬', '泰迪王', '小花公主'];
    for(var id = 1; id < 21; id++){
        var title_food_type = title_typeArr[Math.floor(Math.random() * 6)] 
        var author_name = author_typeArr[Math.floor(Math.random() * 6)]
        blogger.push({
            "id": id,
            "date": creat_time,
            "title": title_food_type,
            "author": author_name,
            "text": "搭配店家特製的義式料理餐點、手工披薩、薄餅、甜點不一樣的蔬食餐廳，無肉也可以很歡樂",
            "phone": "0900-000000",
            "add": "高雄市鼓山區瑞豐街87號",
            "opentime": "11:30~21:00(週三、周四公休)",
            "img": foodimg
        }) 
    }

    return { 
    "recommend": recommend,
    "blogger": blogger
    }
}

// 如果你要用json-server的话，就需要export这个生成fake data的function
module.exports = generateSitestatus