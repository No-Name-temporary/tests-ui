const formatter = {
  formatRegion: (regions) => regions.map((region) => {
    const formatedRegion = {
      id: region.id,
      displayedName: region.display_name,
      value: region.aws_name,
      flagUrl: region.flag_url,
    };
    return formatedRegion;
  }),
  formatComparisonTypes: (comparisontypes) => comparisontypes.map((type) => {
    const formatedComparisonType = {
      id: type.id,
      displayedName: type.name,
      value: type.name,
      symbol: type.symbol,
    };
    return formatedComparisonType;
  }),
};

export default formatter;
