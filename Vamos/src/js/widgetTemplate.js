const clock = document.querySelector(".widgetTemplate .clock");
const checkTime = () => {
  const current = new Date();
  clock.innerText = `Now ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
};

setInterval(checkTime, 1000);
