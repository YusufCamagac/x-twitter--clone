export const numberFormat = (value) => {
  let config = {};
  if (value > 9999) {
    config = {
      Notification: "compact",
      maximumFractionDigits: 1,
    };
  }
  return Intl.NumberFormat("tr", config).format(value);
};
