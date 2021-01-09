
const getDateFromTimestamp = (dateString) => {
    const date = new Date(dateString);
  
    const day = new Date(date).toLocaleDateString('fr-FR');
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
  
    return `${day} - ${hours}:${minutes}`;
  };

  export { getDateFromTimestamp };