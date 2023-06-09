const categoryData = [
    {
        id: 1,
        name: "Rice",
        icon: "https://modernmealmakeover.com/wp-content/uploads/2020/10/IMG_6548-4-500x500.jpg",
    },
    {
        id: 2,
        name: "Noodles",
        icon: "https://img.freepik.com/free-photo/jajang-myeon-jjajangmyeon-korean-noddle-with-black-bean-sauce-served-with-cucumber-sesame-seed_511235-3093.jpg?w=2000",
    },
    {
        id: 3,
        name: "Hot Dogs",
        icon: "https://bizweb.dktcdn.net/100/333/744/articles/hotdog-3.jpg?v=1578562496490",
    },
    {
        id: 4,
        name: "Salads",
        icon: "https://www.onceuponachef.com/images/2019/07/Big-Italian-Salad.jpg",
    },
    {
        id: 5,
        name: "Burgers",
        icon: "https://images.foody.vn/res/g104/1033191/prof/s640x400/foody-upload-api-foody-mobile-hamburger-200629131608.jpg",
    },
    {
        id: 6,
        name: "Pizza",
        icon: "https://product.hstatic.net/1000389344/product/pizza_pepperoni-texgrill-haiphong_dbdf3c75f0a84d1bab2f7be8793dbd9c_master.jpg",
    },
    {
        id: 7,
        name: "Snacks",
        icon: "https://media.istockphoto.com/photos/salty-snacks-pretzels-chips-crackers-picture-id1142780663?k=20&m=1142780663&s=612x612&w=0&h=u8gwv_FHfv9FVIDm_7CJ5kvloXbeBZysJCCS7jVl0Mw=",
    },
    {
        id: 8,
        name: "Sushi",
        icon: "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/nguyenhuong/loiichsushi/an-sushi-nen-biet-nhung-loi-ich-cua-sushi-doi-voi-suc-khoe-0.jpg",
    },
    {
        id: 9,
        name: "Desserts",
        icon: "https://cdn.tgdd.vn/Files/2021/07/28/1371385/cach-lam-banh-donut-nuong-va-chien-cuc-ngon-va-don-gian-ai-cung-lam-duoc-202112301055414590.jpg",
    },
    {
        id: 10,
        name: "Drinks",
        icon: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20191031-mojitos-three-ways-delish-ehg-2887-1584029660.jpg",
    },

]

const menuData = [
    {
        menuId: 4,
        categoryId: 1,
        name: "Hawaiian Pizza",
        photo: "https://product.hstatic.net/1000389344/product/pizza_pepperoni-texgrill-haiphong_dbdf3c75f0a84d1bab2f7be8793dbd9c_master.jpg",
        description: "Canadian bacon, homemade pizza crust, pizza sauce",
        calories: 250,
        price: 15,
        duration: "35 - 40 min",
        star: 3
    },
    {
        menuId: 5,
        categoryId: 2,
        name: "Tomato & Basil Pizza",
        photo: "https://product.hstatic.net/1000389344/product/pizza_pepperoni-texgrill-haiphong_dbdf3c75f0a84d1bab2f7be8793dbd9c_master.jpg",
        description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
        calories: 250,
        price: 20,
        duration: "15 - 20 min",
        star: 5
    },
    {
        menuId: 6,
        categoryId: 1,
        name: "Tomato Pasta",
        photo: "https://img.freepik.com/free-photo/jajang-myeon-jjajangmyeon-korean-noddle-with-black-bean-sauce-served-with-cucumber-sesame-seed_511235-3093.jpg?w=2000",
        description: "Pasta with fresh tomatoes",
        calories: 100,
        price: 10,
        duration: "5 - 10 min",
        star: 1
    },
    {
        menuId: 7,
        categoryId: 3,
        name: "Mediterranean Chopped Salad ",
        photo: "https://www.onceuponachef.com/images/2019/07/Big-Italian-Salad.jpg",
        description: "Finely chopped lettuce, tomatoes, cucumbers",
        calories: 100,
        price: 10,
        duration: "35 - 40 min",
        star: 2
    },
    {
        menuId: 8,
        categoryId: 4,
        name: "Chicago Style Hot Dog",
        photo: "https://bizweb.dktcdn.net/100/333/744/articles/hotdog-3.jpg?v=1578562496490",
        description: "Fresh tomatoes, all beef hot dogs",
        calories: 100,
        price: 20,
        duration: "35 - 40 min",
        star: 5
    },
    {
        menuId: 9,
        categoryId: 8,
        name: "Sushi sets",
        photo: "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/nguyenhuong/loiichsushi/an-sushi-nen-biet-nhung-loi-ich-cua-sushi-doi-voi-suc-khoe-0.jpg",
        description: "Fresh salmon, sushi rice, fresh juicy avocado",
        calories: 100,
        price: 50,
        duration: "35 - 40 min",
        star: 4
    },
    {
        menuId: 10,
        categoryId: 1,
        name: "Kolo Mee",
        photo: "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/nguyenhuong/loiichsushi/an-sushi-nen-biet-nhung-loi-ich-cua-sushi-doi-voi-suc-khoe-0.jpg",
        description: "Noodles with char siu",
        calories: 200,
        price: 5,
        duration: "35 - 40 min",
        star: 5
    },
    {
        menuId: 11,
        categoryId: 1,
        name: "Sarawak Laksa",
        photo: "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/nguyenhuong/loiichsushi/an-sushi-nen-biet-nhung-loi-ich-cua-sushi-doi-voi-suc-khoe-0.jpg",
        description: "Vermicelli noodles, cooked prawns",
        calories: 300,
        price: 8,
        duration: "35 - 40 min",
        star: 5
    },
    {
        menuId: 12,
        name: "Nasi Lemak",
        categoryId: 1,
        photo: "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/nguyenhuong/loiichsushi/an-sushi-nen-biet-nhung-loi-ich-cua-sushi-doi-voi-suc-khoe-0.jpg",
        description: "A traditional Malay rice dish",
        calories: 300,
        price: 8,
        duration: "35 - 40 min",
        star: 2
    },
    {
        menuId: 13,
        categoryId: 1,
        name: "Nasi Briyani with Mutton",
        photo: "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/nguyenhuong/loiichsushi/an-sushi-nen-biet-nhung-loi-ich-cua-sushi-doi-voi-suc-khoe-0.jpg",
        description: "A traditional Indian rice dish with mutton",
        calories: 300,
        price: 8,
        duration: "35 - 40 min",
        star: 2
    },
    {
        menuId: 12,
        categoryId: 9,
        name: "Teh C Peng",
        photo: "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/nguyenhuong/loiichsushi/an-sushi-nen-biet-nhung-loi-ich-cua-sushi-doi-voi-suc-khoe-0.jpg",
        description: "Three Layer Teh C Peng",
        calories: 100,
        price: 2,
        duration: "35 - 40 min",
        star: 5
    },
    {
        menuId: 13,
        categoryId: 10,
        name: "ABC Ice Kacang",
        photo: "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/nguyenhuong/loiichsushi/an-sushi-nen-biet-nhung-loi-ich-cua-sushi-doi-voi-suc-khoe-0.jpg",
        description: "Shaved Ice with red beans",
        calories: 100,
        price: 3,
        duration: "35 - 40 min",
        star: 2
    },
    {
        menuId: 14,
        categoryId: 10,
        name: "Kek Lapis",
        photo: "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/nguyenhuong/loiichsushi/an-sushi-nen-biet-nhung-loi-ich-cua-sushi-doi-voi-suc-khoe-0.jpg",
        description: "Layer cakes",
        calories: 300,
        price: 20,
        duration: "35 - 40 min",
        star: 4
    }
]

module.exports = {
    categoryData, 
    menuData
}