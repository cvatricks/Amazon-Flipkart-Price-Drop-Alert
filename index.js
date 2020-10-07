const axios = require("axios");

axios({
  method: "get", //you can set what request you want to be
  url:
    "https://www.amazon.in/Bosch-Settings-Dishwasher-SMS66GI01I-Silver/dp/B07JW58P2C/ref=lp_21074454031_1_2?s=kitchen&ie=UTF8&qid=1602063550&sr=1-2",
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36",
  },
}).then((res) => {
  console.log(res);
});
