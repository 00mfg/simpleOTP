import { basednValidator, ipValidator } from "./validator.js";

const questions = [
  {
    name: "IPAddress",
    type: "input",
    message: "请输入AD服务器地址:",
    validate: ipValidator,
  },
  {
    name: "BaseDN",
    type: "input",
    message: "请输入AD服务器BaseDN:",
    //validate: basednValidator,
  },
  {
    name: "BINDDN",
    type: "input",
    message: "请输入AD服务器地址BINDDN:",
  },
  {
    name: "PASSWORD",
    type: "input",
    message: "请输入AD服务器地址BINDPASSWORD:", //密码长度貌似有要求
  }, //加个option选ad要不要加密,要不要限制源地址注册手机
  {
    name: "adport",
    type: "list",
    message: "AD服务器端口:",
    choices: ["389", "636"],
  },
  {
    type: "confirm",
    name: "OTPRegisterRestrict",
    message: "是否限制OTP注册源地址?",
    default: false,
  },
  {
    type: "input",
    name: "sourceIP",
    message: "允许注册OTP的源地址(格式10.1.1.0/24)?",
    //validator:
    when(answers) {
      return answers.OTPRegisterRestrict;
    },
  },
  {
    name: "AAAvServerName",
    type: "input",
    message: "AAA vServer名称(默认AAA-OTP):",
    default: "AAA-OTP",
  },
  {
    name: "GatewayvServerName",
    type: "input",
    message: "请输入已有Gateway vServer名称:",
  },
  {
    name: "IP",
    type: "input",
    message: "请输入要配置设备地址",
  },
  {
    name: "username",
    type: "input",
    message: "请输入设备管理员用户名",
  },
  {
    type: "password",
    message: "请输入设备管理员密码",
    name: "password",
    mask: "*",
    //validate: requireLetterAndNumber,
  },
];

export { questions };
