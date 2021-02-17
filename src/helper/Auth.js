// eslint-disable-next-line import/prefer-default-export
export const validMail = (email) => {
  const regex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  const valid = regex.test(email);

  return valid;
};
