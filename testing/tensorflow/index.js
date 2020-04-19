let net;

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Successfully loaded model');

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById('img');
  const result = await net.classify(imgEl);
  console.log(result);
  document.getElementById("info1").innerHTML = " <b>Clase:</b> "+result[0].className + " || <b>Probabilidad:</b> "+result[0].probability;
  document.getElementById("info2").innerHTML = " <b>Clase:</b> "+result[1].className + " || <b>Probabilidad:</b> "+result[1].probability;
  document.getElementById("info3").innerHTML = " <b>Clase:</b> "+result[2].className + " || <b>Probabilidad:</b> "+result[2].probability;
}

app();