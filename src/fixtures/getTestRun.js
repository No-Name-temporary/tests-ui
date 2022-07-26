const getTestRunResponse = {
  name: 'Create new board',
  method: 'GET',
  url: 'https://trellific.corkboard.dev/api/boards',
  testCreatedAt: '2022-07-20 01:37:40.658035',
  completedAt: '2022-07-20 01:37:40.658035',
  location: {
    name: 'usWest2',
    displayName: 'Oregon',
    awsName: 'us-west-2',
    flagUrl: 'https://img.icons8.com/office/344/usa.png',
  },
  responseTime: '423',
  statusCode: '404',
  assertions: [
    {
      type: 'statusCode',
      targetValue: '200',
      actualValue: '201',
      comparisonType: 'equalTo',
      success: false,
    },
    {
      type: 'responseTime',
      targetValue: '400',
      actualValue: '451',
      comparisonType: 'lessThan',
      success: false,
    },
    {
      type: 'jsonBody',
      targetValue: 'Test board #2',
      actualValue: 'Test board #2',
      comparisonType: 'equalTo',
      property: '$.title',
      success: true,
    },
  ],
  responseBody: {
    _id: 'df324fwder23423343',
    title: 'Test board #2',
    createdAt: '2022-07-20 01:37:40.658035',
    updatedAt: '2022-07-20 01:37:40.658035',
  },
  responseHeaders: {
    server: 'nginx/1.18.0 (Ubuntu)',
    date: '2022-07-20 01:37:40.658035',
    contentType: 'application/json; charset-utf-8',
    contentLength: 132,
    connection: 'close',
    xPoweredBy: 'express',
  },

};

export default getTestRunResponse;
