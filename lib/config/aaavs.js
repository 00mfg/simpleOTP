import { answer } from "../core/answer.js";

const aaavs = {
  action: "ADD",
  type: "authenticationvserver",
  properties: {
    name: answer.AAAvServerName,
    servicetype: "ssl",
    ipv46: "0.0.0.0",
  },
};

const bindpolicy = {
  action: "ADD",
  type: "authenticationvserver_authenticationpolicy_binding",
  properties: {
    name: answer.AAAvServerName,
    policy: "_OTP-AAA_OTPManageOrAuthenticate__root_0",
    priority: "100",
    nextfactor: "OTPManageOrAuthenticate__root",
  },
};

const authnprofile = {
  action: "ADD",
  type: "authenticationauthnprofile",
  properties: {
    name: answer.AAAvServerName,
    authnvsname: answer.AAAvServerName,
  },
};

const vsBindAuthnProfile = {
  action: "SET",
  type: "vpnvserver",
  properties: {
    name: answer.GatewayvServerName,
    authnprofile: answer.AAAvServerName,
  },
};

export { aaavs, bindpolicy, authnprofile, vsBindAuthnProfile };
