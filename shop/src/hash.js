let Data = new Date();
let hash;
let currentDay = Data.getDate();
if (currentDay < 10) {
  currentDay = `0${currentDay}`;
}
let currentMonth = Data.getMonth() + 1;
if (currentMonth < 10) {
  currentMonth = `0${currentMonth}`;
}
let currentYear = Data.getFullYear();
let currentPassword = `Valantis_${currentYear}${currentMonth}${currentDay}`;

export default hash = CryptoJS.MD5(currentPassword).toString();
