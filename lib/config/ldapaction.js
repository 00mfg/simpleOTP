import { answer } from "../core/answer.js";

const ldapaction1 = {
  action: "ADD",
  type: "authenticationldapaction",
  properties: {
    name: "LDAP-AUTH",
    serverip: answer.IPAddress,
    serverport: answer.adport,
    ldapbase: answer.BaseDN,
    ldapbinddn: answer.BINDDN,
    ldapbinddnpassword: answer.PASSWORD,
    ldaploginname: "sAMAccountName",
    groupattrname: "memberOf",
    subattributename: "cn",
  },
};

const ldapaction2 = {
  action: "ADD",
  type: "authenticationldapaction",
  properties: {
    name: "OTPRegisterDevice",
    serverip: answer.IPAddress,
    serverport: answer.adport,
    ldapbase: answer.BaseDN,
    ldapbinddn: answer.BINDDN,
    ldapbinddnpassword: answer.PASSWORD,
    ldaploginname: "sAMAccountName",
    groupattrname: "memberOf",
    subattributename: "cn",
    authentication: "disabled",
    otpsecret: "userParameters",
  },
};
const ldapaction3 = {
  action: "ADD",
  type: "authenticationldapaction",
  properties: {
    name: "LDAPOTPAuthentication",
    serverip: answer.IPAddress,
    serverport: answer.adport,
    ldapbase: answer.BaseDN,
    ldapbinddn: answer.BINDDN,
    ldapbinddnpassword: answer.PASSWORD,
    ldaploginname: "sAMAccountName",
    groupattrname: "memberOf",
    subattributename: "cn",
    authentication: "disabled",
    otpsecret: "userParameters",
    searchfilter: "userParameters>=#@",
  },
};

export { ldapaction1, ldapaction2, ldapaction3 };
