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
        { success: true }, { success: true }, { success: true },
      ],
    },
    {
      name: 'Create new board',
      minutesBetweenRuns: 720,
      runs: [
        { success: true }, { success: false }, { success: true },
      ],
    },
    {
      name: 'Create new list',
      minutesBetweenRuns: 5,
      runs: [
        { success: true }, { success: true }, { success: true },
      ],
    },
  ],
};

export default getTestsResponse;
