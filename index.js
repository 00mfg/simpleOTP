#!/usr/bin/env node

import { addConfig } from "./lib/utils/request.cjs";
import { configs } from "./lib/config/config.js";

//配之前读一下当前配置，和configs里的ad名字啊啥的这些唯一的对比一下在配置
console.log("run to here");
addConfig(configs);
