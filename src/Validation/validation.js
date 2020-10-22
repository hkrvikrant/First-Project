const validate = (value, rule) => {
    let isValid = true;
    if (rule.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rule.minLength) {
      isValid = value.length >= rule.minLength && isValid;
    }
    if (rule.maxLength) {
      isValid = value.length <= rule.maxLength && isValid;
    }
    if (rule.email) {
      isValid = emailValidator(value) && isValid;
    }
    return isValid;
  };
  // Email validation
  const emailValidator = (value) => {
    if (value) {
      let emailRegEx = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      return emailRegEx.test(String(value).toLowerCase());
    }
    return true;
  };
  
  export default validate;
  