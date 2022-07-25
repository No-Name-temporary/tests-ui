/* eslint-disable arrow-body-style */
export const snakeToCamel = (str) => {
  return str.toLowerCase().replace(/([-_][a-z])/g, (group) => {
    return group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};

export const namesToCamelCase = (data) => {
  return data.map((item) => {
    return { ...item, name: snakeToCamel(item.name) };
  });
};

export const formatDateLong = (dueDateStr) => {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return new Date(Date.parse(dueDateStr, 'YYYY-MM-DD')).toLocaleDateString('en-us', options);
};

const camelCaseRegex = /^([a-z_]+)$/;

const isCamelCase = (value) => {
  return (typeof value === 'string' && camelCaseRegex.test(value));
};

export const allKeysToCamelCase = (data) => {
  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i += 1) {
    if (typeof data[keys[i]] === 'object' && data[[keys[i]]] !== null) {
      allKeysToCamelCase(data[keys[i]]);
    } else {
      let tmp = data[keys[i]];
      if (isCamelCase(tmp)) {
        tmp = snakeToCamel(tmp);
      }
      const newKey = snakeToCamel(keys[i]);
      delete data[keys[i]];
      data[newKey] = tmp;
    }
  }
};

export const camelCaseToDisplayName = (str) => {
  const newStr = str.replace(/[A-Z]/g, (letter) => ` ${letter.toLowerCase()}`);
  return newStr[0].toUpperCase() + newStr.slice(1);
};
