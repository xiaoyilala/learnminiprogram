// index.js
Page({
  data:{
    swiperList:[{imgUrl:"https://img.mukewang.com/6221b13609c9d75d18000600.png"},
            {imgUrl:"https://img.mukewang.com/62280cde090a64b918000600.png"},
            {imgUrl:"https://img.mukewang.com/62280e08099352e318000600.png"}],
    showSearchIcon:true
  },
  handleSearchIcon(e){
    const value = e.detail.value;
    this.setData({showSearchIcon:value?false:true})
  }
})
