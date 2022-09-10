const clock = document.querySelector(".widgetTemplate .clock");
const checkTime = () => {
  const current = new Date();
  clock.innerText = `Clock ${current.getHours()}시 ${current.getMinutes()}분 ${current.getSeconds()}초`;
};

setInterval(checkTime, 1000);
