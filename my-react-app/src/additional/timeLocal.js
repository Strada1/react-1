function timeLocal(sun, timezone) {
  const time =
    new Date().getTimezoneOffset() * 60 * 1000 + timezone * 1000 + sun * 1000;
  return time;
}

export default timeLocal;
