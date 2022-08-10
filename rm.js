import { configs } from "./lib/config/config.js";

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

rmConfig(configs);
