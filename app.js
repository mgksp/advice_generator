async function getData() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice", {
      method: "GET",
    });
    if (res.status < 400) {
      return await res.json();
    }
  } catch (error) {
    console.log(error);
  }
}

const adviceNo = document.querySelector("#advice-no");
const advice = document.querySelector("#advice > h1");

getData().then((data) => {
  adviceNo.textContent = "advice #" + data["slip"]["id"];
  advice.textContent = `"${data["slip"]["advice"]}"`;
});
