const ipValidator = (value) => {
  if (
    /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/.test(
      value
    )
  ) {
    return true;
  }

  return "IPv4地址格式不正确,请重新输入";
};

const basednValidator = (value) => {
  if (
    /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/.test(
      value
    )
  ) {
    return true;
  }

  return "baseDN格式不正确,请重新输入";
};

export { ipValidator, basednValidator };

//basedb密码位数有要求
