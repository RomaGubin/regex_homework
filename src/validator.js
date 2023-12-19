class Validator {
  constructor(name) {
    this.validateUsername(name);
  }
  
  validateUsername(name) {
    return /^(?!.*(\d{4}|^[\d_-]|[\d_-]$))[\w-]*$/.test(name);
  }
}

export default Validator;


