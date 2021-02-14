
function convertTime(time) {
  if (time < 10) {
    return `0${time}`;
  }
  return `${time}`;      
}

const timestampToDateString = (dateString) => {
  const date = new Date(dateString * 1000);
  const day = new Date(date).toLocaleDateString('fr-FR');
  let hours = new Date(date).getUTCHours();
  let minutes = new Date(date).getMinutes();

  hours = convertTime(hours);
  minutes = convertTime(minutes);

  return `${day} - ${hours}:${minutes}`;
};

export default timestampToDateString;
