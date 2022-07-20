/* eslint-disable arrow-body-style */
const snakeToCamel = (str) => {
  return str.toLowerCase().replace(/([-_][a-z])/g, (group) => {
    return group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};

const namesToCamelCase = (data) => {
  return data.map((item) => {
    return { ...item, name: snakeToCamel(item.name) };
  });
};

export default namesToCamelCase;
