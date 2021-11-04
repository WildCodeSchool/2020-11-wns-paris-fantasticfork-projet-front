export default function timestampFormatter(timestamp) {
  const rowDate = new Date(timestamp);

  // verify it's today
  if (new Date().setHours(0, 0, 0, 0) === new Date(timestamp).setHours(0, 0, 0, 0)) {
    return rowDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  return rowDate.toLocaleDateString('fr-FR');
}
