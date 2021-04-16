var whatTimeOfDayIs = function () {
  const DAWN_START = 6;
  const DAY_START = 8;
  const DAY_END = 19;
  const NIGHT_START = 20;

  const isDawn = () => {
    const hours = new Date().getHours();
    return hours >= DAWN_START && hours < DAY_START;
  };

  const isDay = () => {
    const hours = new Date().getHours();
    return hours >= DAY_START && hours < DAY_END;
  };

  const isSusnetDusk = function () {
    const hours = new Date().getHours();
    return hours >= DAY_END && hours < NIGHT_START;
  };

  const isNight = function () {
    const hours = new Date().getHours();
    return (hours >= DAY_END && hours < 23) || (hours >= 0 && hours < DAWN_START);
  };

  return { isDawn, isDay, isSusnetDusk, isNight };
};

export default whatTimeOfDayIs;
