const getTestsResponse = {
  tests: [
    {
      name: 'Get all boards',
      minutesBetweenRuns: 300,
      runs: [
        { success: false }, { success: true }, { success: false },
      ],
    },
    {
      name: 'Get all lists',
      minutesBetweenRuns: 5,
      runs: [
        { success: false }, { success: true }, { success: false },
      ],
    },
    {
      name: 'Create new board',
      minutesBetweenRuns: 720,
      runs: [
        { success: false }, { success: true }, { success: false },
      ],
    },
    {
      name: 'Create new list',
      minutesBetweenRuns: 5,
      runs: [
        { success: false }, { success: true }, { success: false },
      ],
    },
  ],
};

export default getTestsResponse;
