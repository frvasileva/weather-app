var whatTimeOfDayIs = function () {
  const isDawn = () => {
    const hours = new Date().getHours();
    return hours >= 6 && hours < 8;
  };

  const isDay = () => {
    const hours = new Date().getHours();
    return hours >= 8 && hours < 18;
  };

  const isSusnetDusk = function () {
    const hours = new Date().getHours();
    return hours >= 18 && hours < 20;
  };

  const isNight = function () {
    const hours = new Date().getHours();
    return (hours >= 18 && hours < 23) || (hours >= 0 && hours < 6);
  };

  return { isDawn, isDay, isSusnetDusk, isNight };
};

export default whatTimeOfDayIs;
