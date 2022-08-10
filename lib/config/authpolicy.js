import { answer } from "../core/answer.js";

const authpol1 = {
  action: "ADD",
  type: "authenticationpolicy",
  properties: {
    name: "_OTP-AAA_OTPManageOrAuthenticate__root_0",
    rule: "true",
    action: "NO_AUTHN",
  },
};

const authpol21 = {
  action: "ADD",
  type: "authenticationpolicy",
  properties: {
    name: "SelectManageDevices",
    rule: 'http.req.cookie.value("NSC_TASS").contains("manageotp")',
    action: "NO_AUTHN",
  },
};

const authpol22 = {
  action: "ADD",
  type: "authenticationpolicy",
  properties: {
    name: "SelectManageDevices",
    rule: `http.req.cookie.value("NSC_TASS").contains("manageotp") && client.IP.SRC.IN_SUBNET(${answer.sourceIP})`,
    action: "NO_AUTHN",
  },
};

const authpol2 = answer.OTPRegisterRestrict ? authpol22 : authpol21;

const authpol3 = {
  action: "ADD",
  type: "authenticationpolicy",
  properties: {
    name: "SelectOTPAuthentication",
    rule: "true",
    action: "NO_AUTHN",
  },
};

const authpol4 = {
  action: "ADD",
  type: "authenticationpolicy",
  properties: {
    name: "LDAPAdv",
    rule: "true",
    action: "LDAP-AUTH",
  },
};

const authpol5 = {
  action: "ADD",
  type: "authenticationpolicy",
  properties: {
    name: "OTPRegisterDevice",
    rule: "true",
    action: "OTPRegisterDevice",
  },
};

const authpol6 = {
  action: "ADD",
  type: "authenticationpolicy",
  properties: {
    name: "LDAPOTPAuthentication",
    rule: "true",
    action: "LDAPOTPAuthentication",
  },
};

export { authpol1, authpol2, authpol3, authpol4, authpol5, authpol6 };
