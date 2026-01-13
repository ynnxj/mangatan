// Swedish
export const patterns = {
  personalId: /^\d{6,8}[-|(\s)]{0,1}\d{4}$/,
  phone: /^((\+|00)46|0)7[02369][0-9]{7}$/,
  cardNumber: {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    amex: /^3[47][0-9]{13}$/
  },
  cvv: /^\d{3,4}$/,
  postalAddress: /^(?=.*[A-Za-zÅÄÖåäö])[A-Za-zÅÄÖåäö0-9\s,.-]{3,100}$/,
  zipCode: /^\d{3}\s?\d{2}$/
};
