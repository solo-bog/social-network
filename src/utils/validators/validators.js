export const required = (value) => {
  if (value) {
    return undefined;
  }

  return 'Field is require';
};

export const maxLength = (number) => (value) => {
  if (value && value.length > number) {
    return `Max length is ${number}`;
  }

  return undefined;
};

export const minLength = (number) => (value) => {
  if (value && value.length < number) {
    return `Min length is ${number}`;
  }

  return undefined;
};
