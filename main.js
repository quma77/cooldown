const BTCUSDT = 61640.76;
const ETHUSDT = 2885.87;
const XRPUSDT = 0.5007;
const SOLUSDT = 142.51;
const TRXUSDT = 0.12558;
const DOTUSDT = 6.503;
const ADAUSDT = 0.4292;
const LTCUSDT = 78.83;

const TONUSDT = 6.9152;

document.getElementById("btcI").innerText = "Bitcoin (BTC) ≈ " + BTCUSDT;
document.getElementById("etcI").innerText = "Ethereum (ETH) ≈ " + ETHUSDT;
document.getElementById("xrpI").innerText = "Ripple (XRP) ≈ " + XRPUSDT;
document.getElementById("tonI").innerText = "TON (TON) ≈ " + TONUSDT;
document.getElementById("solI").innerText = "Solana (SOL) ≈ " + SOLUSDT;
document.getElementById("trxI").innerText = "TRON (TRX) ≈ " + TRXUSDT;
document.getElementById("dotI").innerText = "Polkadot (DOT) ≈ " + DOTUSDT;
document.getElementById("adaI").innerText = "Cardano (ADA) ≈ " + ADAUSDT;
document.getElementById("ltcI").innerText = "Litecoin (LTC) ≈ " + LTCUSDT;

document.getElementById("btcO").innerText = "Bitcoin (BTC) ≈ " + BTCUSDT;
document.getElementById("etcO").innerText = "Ethereum (ETH) ≈ " + ETHUSDT;
document.getElementById("xrpO").innerText = "Ripple (XRP) ≈ " + XRPUSDT;
document.getElementById("tonO").innerText = "TON (TON) ≈ " + TONUSDT;
document.getElementById("solO").innerText = "Solana (SOL) ≈ " + SOLUSDT;
document.getElementById("trxO").innerText = "TRON (TRX) ≈ " + TRXUSDT;
document.getElementById("dotO").innerText = "Polkadot (DOT) ≈ " + DOTUSDT;
document.getElementById("adaO").innerText = "Cardano (ADA) ≈ " + ADAUSDT;
document.getElementById("ltcO").innerText = "Litecoin (LTC) ≈ " + LTCUSDT;

document.getElementById("toCurrency").addEventListener("change", function () {
  var amountsInput = document.getElementById("amounts");
  const fromCurrency = document.getElementById("fromCurrency");
  const selectedFromCurrency = fromCurrency.value; // Получаем выбранную валюту1 из fromCurrency
  var selectedCurrency = this.value; // Получаем выбранную валюту2
  const amount = document.getElementById("amount").value; // значение в 1 строке
  if (selectedFromCurrency === "BTC" && selectedCurrency === "ETH") {
    var result = ((BTCUSDT * amount) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "XRP") {
    var result = ((BTCUSDT * amount) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "TON") {
    var result = ((BTCUSDT * amount) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "SOL") {
    var result = ((BTCUSDT * amount) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "TRX") {
    var result = ((BTCUSDT * amount) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "DOT") {
    var result = ((BTCUSDT * amount) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "ADA") {
    var result = ((BTCUSDT * amount) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "LTC") {
    var result = ((BTCUSDT * amount) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "BTC") {
    var result = ((BTCUSDT * amount) / BTCUSDT).toFixed(4);
    amountsInput.value = result + " BTC";
  }
  //ETH///
  else if (selectedFromCurrency === "ETH" && selectedCurrency === "BTC") {
    var result = ((ETHUSDT * amount) / BTCUSDT).toFixed(6);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "ETH" && selectedCurrency === "ETH") {
    var result = ((ETHUSDT * amount) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "ETH" && selectedCurrency === "XRP") {
    var result = ((ETHUSDT * amount) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "ETH" && selectedCurrency === "TON") {
    var result = ((ETHUSDT * amount) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "ETH" && selectedCurrency === "SOL") {
    var result = ((ETHUSDT * amount) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "ETH" && selectedCurrency === "TRX") {
    var result = ((ETHUSDT * amount) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "ETH" && selectedCurrency === "DOT") {
    var result = ((ETHUSDT * amount) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "ETH" && selectedCurrency === "ADA") {
    var result = ((ETHUSDT * amount) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "ETH" && selectedCurrency === "LTC") {
    var result = ((ETHUSDT * amount) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  }
  //XRP///
  else if (selectedFromCurrency === "XRP" && selectedCurrency === "BTC") {
    var result = ((XRPUSDT * amount) / BTCUSDT).toFixed(6);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "XRP" && selectedCurrency === "ETH") {
    var result = ((XRPUSDT * amount) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "XRP" && selectedCurrency === "XRP") {
    var result = ((XRPUSDT * amount) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "XRP" && selectedCurrency === "TON") {
    var result = ((XRPUSDT * amount) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "XRP" && selectedCurrency === "SOL") {
    var result = ((XRPUSDT * amount) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "XRP" && selectedCurrency === "TRX") {
    var result = ((XRPUSDT * amount) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "XRP" && selectedCurrency === "DOT") {
    var result = ((XRPUSDT * amount) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "XRP" && selectedCurrency === "ADA") {
    var result = ((XRPUSDT * amount) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "XRP" && selectedCurrency === "LTC") {
    var result = ((XRPUSDT * amount) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  }
  //TON///
  else if (selectedFromCurrency === "TON" && selectedCurrency === "BTC") {
    var result = ((TONUSDT * amount) / BTCUSDT).toFixed(6);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "TON" && selectedCurrency === "ETH") {
    var result = ((TONUSDT * amount) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "TON" && selectedCurrency === "XRP") {
    var result = ((TONUSDT * amount) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "TON" && selectedCurrency === "TON") {
    var result = ((TONUSDT * amount) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "TON" && selectedCurrency === "SOL") {
    var result = ((TONUSDT * amount) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "TON" && selectedCurrency === "TRX") {
    var result = ((TONUSDT * amount) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "TON" && selectedCurrency === "DOT") {
    var result = ((TONUSDT * amount) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "TON" && selectedCurrency === "ADA") {
    var result = ((TONUSDT * amount) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "TON" && selectedCurrency === "LTC") {
    var result = ((TONUSDT * amount) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  }
  //SOL///
  else if (selectedFromCurrency === "SOL" && selectedCurrency === "BTC") {
    var result = ((SOLUSDT * amount) / BTCUSDT).toFixed(6);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "SOL" && selectedCurrency === "ETH") {
    var result = ((SOLUSDT * amount) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "SOL" && selectedCurrency === "XRP") {
    var result = ((SOLUSDT * amount) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "SOL" && selectedCurrency === "TON") {
    var result = ((SOLUSDT * amount) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "SOL" && selectedCurrency === "SOL") {
    var result = ((SOLUSDT * amount) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "SOL" && selectedCurrency === "TRX") {
    var result = ((SOLUSDT * amount) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "SOL" && selectedCurrency === "DOT") {
    var result = ((SOLUSDT * amount) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "SOL" && selectedCurrency === "ADA") {
    var result = ((SOLUSDT * amount) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "SOL" && selectedCurrency === "LTC") {
    var result = ((SOLUSDT * amount) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  }
  //TRX///
  else if (selectedFromCurrency === "TRX" && selectedCurrency === "BTC") {
    var result = ((TRXUSDT * amount) / BTCUSDT).toFixed(6);
    amountsInput.value = result + "BTC";
  } else if (selectedFromCurrency === "TRX" && selectedCurrency === "ETH") {
    var result = ((TRXUSDT * amount) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "TRX" && selectedCurrency === "XRP") {
    var result = ((TRXUSDT * amount) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "TRX" && selectedCurrency === "TON") {
    var result = ((TRXUSDT * amount) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "TRX" && selectedCurrency === "SOL") {
    var result = ((TRXUSDT * amount) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "TRX" && selectedCurrency === "TRX") {
    var result = ((TRXUSDT * amount) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "TRX" && selectedCurrency === "DOT") {
    var result = ((TRXUSDT * amount) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "TRX" && selectedCurrency === "ADA") {
    var result = ((TRXUSDT * amount) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "TRX" && selectedCurrency === "LTC") {
    var result = ((TRXUSDT * amount) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  }
  //DOT///
  else if (selectedFromCurrency === "DOT" && selectedCurrency === "BTC") {
    var result = ((DOTUSDT * amount) / BTCUSDT).toFixed(6);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "DOT" && selectedCurrency === "ETH") {
    var result = ((DOTUSDT * amount) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "DOT" && selectedCurrency === "XRP") {
    var result = ((DOTUSDT * amount) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "DOT" && selectedCurrency === "TON") {
    var result = ((DOTUSDT * amount) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "DOT" && selectedCurrency === "SOL") {
    var result = ((DOTUSDT * amount) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "DOT" && selectedCurrency === "TRX") {
    var result = ((DOTUSDT * amount) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "DOT" && selectedCurrency === "DOT") {
    var result = ((DOTUSDT * amount) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "DOT" && selectedCurrency === "ADA") {
    var result = ((DOTUSDT * amount) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "DOT" && selectedCurrency === "LTC") {
    var result = ((DOTUSDT * amount) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  }
  //ADA///
  else if (selectedFromCurrency === "ADA" && selectedCurrency === "BTC") {
    var result = ((ADAUSDT * amount) / BTCUSDT).toFixed(6);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "ADA" && selectedCurrency === "ETH") {
    var result = ((ADAUSDT * amount) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "ADA" && selectedCurrency === "XRP") {
    var result = ((ADAUSDT * amount) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "ADA" && selectedCurrency === "TON") {
    var result = ((ADAUSDT * amount) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "ADA" && selectedCurrency === "SOL") {
    var result = ((ADAUSDT * amount) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "ADA" && selectedCurrency === "TRX") {
    var result = ((ADAUSDT * amount) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "ADA" && selectedCurrency === "DOT") {
    var result = ((ADAUSDT * amount) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "ADA" && selectedCurrency === "ADA") {
    var result = ((ADAUSDT * amount) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "ADA" && selectedCurrency === "LTC") {
    var result = ((ADAUSDT * amount) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  }
  //ADA///
  else if (selectedFromCurrency === "LTC" && selectedCurrency === "BTC") {
    var result = ((LTCUSDT * amount) / BTCUSDT).toFixed(6);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "LTC" && selectedCurrency === "ETH") {
    var result = ((LTCUSDT * amount) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "LTC" && selectedCurrency === "XRP") {
    var result = ((LTCUSDT * amount) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "LTC" && selectedCurrency === "TON") {
    var result = ((LTCUSDT * amount) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "LTC" && selectedCurrency === "SOL") {
    var result = ((LTCUSDT * amount) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "LTC" && selectedCurrency === "TRX") {
    var result = ((LTCUSDT * amount) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "LTC" && selectedCurrency === "DOT") {
    var result = ((LTCUSDT * amount) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "LTC" && selectedCurrency === "ADA") {
    var result = ((LTCUSDT * amount) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "LTC" && selectedCurrency === "LTC") {
    var result = ((LTCUSDT * amount) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  }
});

document.getElementById("fromCurrency").addEventListener("change", function () {
  var amountsInput = document.getElementById("amounts");
  const fromCurrency = document.getElementById("toCurrency"); //2
  const selectedFromCurrency = fromCurrency.value; // Получаем выбранную валюту1 из fromCurrency
  var selectedCurrency = this.value; // Получаем выбранную валюту 1
  const amount = document.getElementById("amount").value; // значение в 1 строке
  if (selectedFromCurrency === "BTC" && selectedCurrency === "ETH") {
    var result = ((ETHUSDT * amount) / BTCUSDT).toFixed(4);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "XRP") {
    var result = ((XRPUSDT * amount) / BTCUSDT).toFixed(4);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "TON") {
    var result = ((TONUSDT * amount) / BTCUSDT).toFixed(4);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "SOL") {
    var result = ((SOLUSDT * amount) / BTCUSDT).toFixed(4);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "TRX") {
    var result = ((TRXUSDT * amount) / BTCUSDT).toFixed(4);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "DOT") {
    var result = ((DOTUSDT * amount) / BTCUSDT).toFixed(4);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "ADA") {
    var result = ((ADAUSDT * amount) / BTCUSDT).toFixed(4);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "LTC") {
    var result = ((LTCUSDT * amount) / BTCUSDT).toFixed(4);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "BTC") {
    var result = ((BTCUSDT * amount) / BTCUSDT).toFixed(4);
    amountsInput.value = result + " BTC";
  }
  //ETH///
  else if (selectedFromCurrency === "ETH" && selectedCurrency === "BTC") {
    var result = ((BTCUSDT * amount) / ETHUSDT).toFixed(6);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "ETH" && selectedCurrency === "ETH") {
    var result = ((ETHUSDT * amount) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "ETH" && selectedCurrency === "XRP") {
    var result = ((XRPUSDT * amount) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "ETH" && selectedCurrency === "TON") {
    var result = ((TONUSDT * amount) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "ETH" && selectedCurrency === "SOL") {
    var result = ((SOLUSDT * amount) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "ETH" && selectedCurrency === "TRX") {
    var result = ((TRXUSDT * amount) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "ETH" && selectedCurrency === "DOT") {
    var result = ((DOTUSDT * amount) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "ETH" && selectedCurrency === "ADA") {
    var result = ((ADAUSDT * amount) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "ETH" && selectedCurrency === "LTC") {
    var result = ((LTCUSDT * amount) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  }
  //XRP///
  else if (selectedFromCurrency === "XRP" && selectedCurrency === "BTC") {
    var result = ((BTCUSDT * amount) / XRPUSDT).toFixed(6);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "XRP" && selectedCurrency === "ETH") {
    var result = ((ETHUSDT * amount) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "XRP" && selectedCurrency === "XRP") {
    var result = ((XRPUSDT * amount) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "XRP" && selectedCurrency === "TON") {
    var result = ((TONUSDT * amount) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "XRP" && selectedCurrency === "SOL") {
    var result = ((SOLUSDT * amount) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "XRP" && selectedCurrency === "TRX") {
    var result = ((TRXUSDT * amount) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "XRP" && selectedCurrency === "DOT") {
    var result = ((DOTUSDT * amount) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "XRP" && selectedCurrency === "ADA") {
    var result = ((ADAUSDT * amount) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "XRP" && selectedCurrency === "LTC") {
    var result = ((LTCUSDT * amount) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  }
  //TON///
  else if (selectedFromCurrency === "TON" && selectedCurrency === "BTC") {
    var result = ((BTCUSDT * amount) / TONUSDT).toFixed(6);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "TON" && selectedCurrency === "ETH") {
    var result = ((ETHUSDT * amount) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "TON" && selectedCurrency === "XRP") {
    var result = ((XRPUSDT * amount) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "TON" && selectedCurrency === "TON") {
    var result = ((TONUSDT * amount) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "TON" && selectedCurrency === "SOL") {
    var result = ((SOLUSDT * amount) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "TON" && selectedCurrency === "TRX") {
    var result = ((TRXUSDT * amount) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "TON" && selectedCurrency === "DOT") {
    var result = ((DOTUSDT * amount) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "TON" && selectedCurrency === "ADA") {
    var result = ((ADAUSDT * amount) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "TON" && selectedCurrency === "LTC") {
    var result = ((LTCUSDT * amount) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  }
  //SOL///
  else if (selectedFromCurrency === "SOL" && selectedCurrency === "BTC") {
    var result = ((BTCUSDT * amount) / SOLUSDT).toFixed(6);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "SOL" && selectedCurrency === "ETH") {
    var result = ((ETHUSDT * amount) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "SOL" && selectedCurrency === "XRP") {
    var result = ((XRPUSDT * amount) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "SOL" && selectedCurrency === "TON") {
    var result = ((TONUSDT * amount) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "SOL" && selectedCurrency === "SOL") {
    var result = ((SOLUSDT * amount) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "SOL" && selectedCurrency === "TRX") {
    var result = ((TRXUSDT * amount) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "SOL" && selectedCurrency === "DOT") {
    var result = ((DOTUSDT * amount) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "SOL" && selectedCurrency === "ADA") {
    var result = ((ADAUSDT * amount) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "SOL" && selectedCurrency === "LTC") {
    var result = ((LTCUSDT * amount) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  }
  //TRX///
  else if (selectedFromCurrency === "TRX" && selectedCurrency === "BTC") {
    var result = ((BTCUSDT * amount) / TRXUSDT).toFixed(6);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "TRX" && selectedCurrency === "ETH") {
    var result = ((ETHUSDT * amount) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "TRX" && selectedCurrency === "XRP") {
    var result = ((XRPUSDT * amount) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRXTRX";
  } else if (selectedFromCurrency === "TRX" && selectedCurrency === "TON") {
    var result = ((TONUSDT * amount) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "TRX" && selectedCurrency === "SOL") {
    var result = ((SOLUSDT * amount) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "TRX" && selectedCurrency === "TRX") {
    var result = ((TRXUSDT * amount) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "TRX" && selectedCurrency === "DOT") {
    var result = ((DOTUSDT * amount) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "TRX" && selectedCurrency === "ADA") {
    var result = ((ADAUSDT * amount) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "TRX" && selectedCurrency === "LTC") {
    var result = ((LTCUSDT * amount) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  }
  //DOT///
  else if (selectedFromCurrency === "DOT" && selectedCurrency === "BTC") {
    var result = ((DOTUSDT * amount) / BTCUSDT).toFixed(6);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "DOT" && selectedCurrency === "ETH") {
    var result = ((DOTUSDT * amount) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "DOT" && selectedCurrency === "XRP") {
    var result = ((DOTUSDT * amount) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "DOT" && selectedCurrency === "TON") {
    var result = ((DOTUSDT * amount) / TONUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "DOT" && selectedCurrency === "SOL") {
    var result = ((DOTUSDT * amount) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "DOT" && selectedCurrency === "TRX") {
    var result = ((DOTUSDT * amount) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "DOT" && selectedCurrency === "DOT") {
    var result = ((DOTUSDT * amount) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "DOT" && selectedCurrency === "ADA") {
    var result = ((DOTUSDT * amount) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "DOT" && selectedCurrency === "LTC") {
    var result = ((DOTUSDT * amount) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  }
  //ADA///
  else if (selectedFromCurrency === "ADA" && selectedCurrency === "BTC") {
    var result = ((BTCUSDT * amount) / ADAUSDT).toFixed(6);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "ADA" && selectedCurrency === "ETH") {
    var result = ((ETHUSDT * amount) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "ADA" && selectedCurrency === "XRP") {
    var result = ((XRPUSDT * amount) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "ADA" && selectedCurrency === "TON") {
    var result = ((TONUSDT * amount) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "ADA" && selectedCurrency === "SOL") {
    var result = ((SOLUSDT * amount) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "ADA" && selectedCurrency === "TRX") {
    var result = ((TRXUSDT * amount) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "ADA" && selectedCurrency === "DOT") {
    var result = ((DOTUSDT * amount) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "ADA" && selectedCurrency === "ADA") {
    var result = ((ADAUSDT * amount) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "ADA" && selectedCurrency === "LTC") {
    var result = ((LTCUSDT * amount) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  }
  //ADA///
  else if (selectedFromCurrency === "LTC" && selectedCurrency === "BTC") {
    var result = ((BTCUSDT * amount) / LTCUSDT).toFixed(6);
    amountsInput.value = result + " LTC";
  } else if (selectedFromCurrency === "LTC" && selectedCurrency === "ETH") {
    var result = ((ETHUSDT * amount) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  } else if (selectedFromCurrency === "LTC" && selectedCurrency === "XRP") {
    var result = ((XRPUSDT * amount) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  } else if (selectedFromCurrency === "LTC" && selectedCurrency === "TON") {
    var result = ((TONUSDT * amount) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  } else if (selectedFromCurrency === "LTC" && selectedCurrency === "SOL") {
    var result = ((SOLUSDT * amount) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  } else if (selectedFromCurrency === "LTC" && selectedCurrency === "TRX") {
    var result = ((TRXUSDT * amount) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  } else if (selectedFromCurrency === "LTC" && selectedCurrency === "DOT") {
    var result = ((DOTUSDT * amount) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  } else if (selectedFromCurrency === "LTC" && selectedCurrency === "ADA") {
    var result = ((ADAUSDT * amount) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  } else if (selectedFromCurrency === "LTC" && selectedCurrency === "LTC") {
    var result = ((LTCUSDT * amount) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  }
});

const amount2 = document.getElementById("amount").value; // значение в 1 строке
const exchangeForm = document.querySelector(".exchange-form");
const startBySection = document.querySelector(".start_by");
const exchangeButton = document.getElementById("exchange-button");

exchangeButton.addEventListener("click", function () {
  // Скрываем форму обмена

  exchangeForm.style.display = "none";
  // Показываем начальный блок
  startBySection.style.display = "block";
});
