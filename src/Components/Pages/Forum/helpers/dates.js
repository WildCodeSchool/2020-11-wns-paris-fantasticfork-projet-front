
function getTwoDigits(time) {
  if (time < 10) {
    return `0${time}`;
  }
  return `${time}`;      
}

const timestampToDateString = (timestamp) => {
  const date = new Date(timestamp);
  const day = new Date(date).toLocaleDateString('fr-FR');
  let hours = new Date(date).getHours();
  let minutes = new Date(date).getMinutes();

  hours = getTwoDigits(hours);
  minutes = getTwoDigits(minutes);

  return `${day} - ${hours}:${minutes}`;
};

export default timestampToDateString;
