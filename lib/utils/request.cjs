const axios = require("axios").default;
//import { answer } from "../core/answer.js";

axios.defaults.headers.common["X-NITRO-USER"] = "nsroot";
axios.defaults.headers.common["X-NITRO-PASS"] = "citrix@123";
axios.defaults.headers.common["Content-Type"] = "application/json";

async function getlbvserver() {
  try {
    const response = await axios.get(
      "http://192.168.26.90/nitro/v1/config/lbvserver"
    );
    const res = response.data.lbvserver;

    res.forEach((item) => {
      console.log(item);
    });
  } catch (error) {
    console.error(error);
  }
}

async function addConfig(config) {
  try {
    const response = await axios.post(
      "http://192.168.26.90/nitro/v1/config/batchapi",
      config
    );
    if (response.status === 201 && response.data.errorcode === 0) {
      console.log("配置成功");
    } else {
      console.log(response.data); //todo根据batch的每部分的message回复不同的错误信息
    }
  } catch (error) {
    console.error(error);
  }
}

async function rmConfig(config) {
  try {
    const response = await axios.delete(
      "http://192.168.26.90/nitro/v1/config/batchapi",
      config
    );
    if (response.status === 201 && response.data.errorcode === 0) {
      console.log("清除配置成功");
    } else {
      console.log(response.data); //todo根据batch的每部分的message回复不同的错误信息
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = { addConfig, rmConfig };
