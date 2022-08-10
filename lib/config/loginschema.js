const ls1 = {
  action: "ADD",
  type: "authenticationloginschema",
  properties: {
    name: "SinglePasswordForManageOTP",
    authenticationschema:
      "/nsconfig/loginschema/LoginSchema/SingleAuthManageOTP.xml",
  },
};

const ls2 = {
  action: "ADD",
  type: "authenticationloginschema",
  properties: {
    name: "OTPPushOrPasscode",
    authenticationschema:
      "/nsconfig/loginschema/LoginSchema/DualAuthPushOrOTP.xml",
    passwordcredentialindex: "1",
  },
};

export { ls1, ls2 };
