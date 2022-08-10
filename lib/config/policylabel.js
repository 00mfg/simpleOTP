const pl1 = {
  action: "ADD",
  type: "authenticationpolicylabel",
  properties: {
    labelname: "OTPManageOrAuthenticate__root",
    type: "AAATM_REQ",
    loginschema: "LSCHEMA_INT",
  },
};

const pl2 = {
  action: "ADD",
  type: "authenticationpolicylabel",
  properties: {
    labelname: "OTPAuthentication__OTPManageOrAuthenticate",
    type: "AAATM_REQ",
    loginschema: "OTPPushOrPasscode",
  },
};

const pl3 = {
  action: "ADD",
  type: "authenticationpolicylabel",
  properties: {
    labelname: "OTPPushOrPasscode__OTPManageOrAuthenticate",
    type: "AAATM_REQ",
    loginschema: "LSCHEMA_INT",
  },
};

const pl4 = {
  action: "ADD",
  type: "authenticationpolicylabel",
  properties: {
    labelname: "AuthenticateToManageDevices__OTPManageOrAuthenticate",
    type: "AAATM_REQ",
    loginschema: "SinglePasswordForManageOTP",
  },
};

const pl5 = {
  action: "ADD",
  type: "authenticationpolicylabel",
  properties: {
    labelname: "OTPDeviceRegistration__OTPManageOrAuthenticate",
    type: "AAATM_REQ",
    loginschema: "LSCHEMA_INT",
  },
};

const bindpl1 = {
  action: "ADD",
  type: "authenticationpolicylabel_authenticationpolicy_binding",
  properties: {
    labelname: "OTPManageOrAuthenticate__root",
    policyname: "SelectManageDevices",
    priority: "100",
    gotopriorityexpression: "NEXT",
    nextfactor: "AuthenticateToManageDevices__OTPManageOrAuthenticate",
  },
};

const bindpl2 = {
  action: "ADD",
  type: "authenticationpolicylabel_authenticationpolicy_binding",
  properties: {
    labelname: "OTPManageOrAuthenticate__root",
    policyname: "SelectOTPAuthentication",
    priority: "110",
    gotopriorityexpression: "NEXT",
    nextfactor: "OTPAuthentication__OTPManageOrAuthenticate",
  },
};

const bindpl3 = {
  action: "ADD",
  type: "authenticationpolicylabel_authenticationpolicy_binding",
  properties: {
    labelname: "OTPAuthentication__OTPManageOrAuthenticate",
    policyname: "LDAPAdv",
    priority: "100",
    gotopriorityexpression: "NEXT",
    nextfactor: "OTPPushOrPasscode__OTPManageOrAuthenticate",
  },
};

const bindpl4 = {
  action: "ADD",
  type: "authenticationpolicylabel_authenticationpolicy_binding",
  properties: {
    labelname: "OTPPushOrPasscode__OTPManageOrAuthenticate",
    policyname: "LDAPOTPAuthentication",
    priority: "100",
    gotopriorityexpression: "NEXT",
  },
};

const bindpl5 = {
  action: "ADD",
  type: "authenticationpolicylabel_authenticationpolicy_binding",
  properties: {
    labelname: "AuthenticateToManageDevices__OTPManageOrAuthenticate",
    policyname: "LDAPAdv",
    priority: "100",
    gotopriorityexpression: "NEXT",
    nextfactor: "OTPDeviceRegistration__OTPManageOrAuthenticate",
  },
};

const bindpl6 = {
  action: "ADD",
  type: "authenticationpolicylabel_authenticationpolicy_binding",
  properties: {
    labelname: "OTPDeviceRegistration__OTPManageOrAuthenticate",
    policyname: "OTPRegisterDevice",
    priority: "100",
    gotopriorityexpression: "NEXT",
  },
};

export {
  pl1,
  pl2,
  pl3,
  pl4,
  pl5,
  bindpl1,
  bindpl2,
  bindpl3,
  bindpl4,
  bindpl5,
  bindpl6,
};
