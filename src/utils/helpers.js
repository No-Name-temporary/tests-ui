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

export const formatDateLong = (dateStr) => {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return new Date(Date.parse(dateStr, 'YYYY-MM-DD')).toLocaleDateString('en-us', options);
};

export const formatDatetimeLong = (dateStr) => {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return new Date(Date.parse(dateStr, 'YYYY-MM-DD')).toLocaleDateString('en-us', options);
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

export const testRunsCompletedAtDifference = (a, b) => {
  return new Date(b.completedAt) - new Date(a.completedAt);
};

export const sortTestsAndTestRuns = (tests) => {
  const testsCopy = JSON.parse(JSON.stringify(tests));
  testsCopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  testsCopy.forEach((test) => {
    test.runs.sort(testRunsCompletedAtDifference);
  });
  return testsCopy;
};

export const flagUrls = (runs) => {
  const urls = [];
  if (runs.length > 0) {
    runs.forEach((run) => {
      if (!urls.includes(run.regionFlagUrl)) {
        urls.push(run.regionFlagUrl);
      }
    });
  }
  return urls;
};
