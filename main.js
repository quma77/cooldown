const BTCUSDT = 68802.08;
const ETHUSDT = 3839.61;
const XRPUSDT = 0.5311;
const SOLUSDT = 161.63;
const TRXUSDT = 0.113;
const DOTUSDT = 7.508;
const ADAUSDT = 0.4586;
const LTCUSDT = 84.01;

const TONUSDT = 6.3026;

const btcadres = "3PgsFgCQ5G3Yk49z3TnVhJZyU4pVuJPSPP"; // memo - сеть BTC
const ethadres = "0x81437a07e98794165ce3b3515c16800ffb6da045"; // memo - ERC20
const xrpadres = "rs2dgzYeqYqsk8bvkQR5YPyqsXYcA24MP2";
const xrpmemo = "483941";
const soladres = "FE6z58Hv8jdd72b4XDCQYGX49EXK7qB1knVV1PA5ZPeC"; //memo - SOL
const trxadres = "TURp3EGpQY5CPzgtF3rTpBje567cU872sK"; //memo - TRC20
const dotadres = "15B26N99tZfsh9ec8i2Mq17vaVmg8dHu1WGdUDKM4FLMZRAE"; //memo - DOT
const adaadres =
  "DdzFFzCqrhsvne1SsBnaoKrJ6MqEin7GfAG4QFDXJV18ioZQr1jJWem2Y9teCh2cmWXKyVHEeVniFf5Rpor7z5V58XhEUJhSCiQ8mWep"; //memo - ADA
const ltcadres = "ltc1q525skslekp0t4scthe7hanyh270hx6f46zafye"; //memo - LTC

const tonadres = "Пока ниту";

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

var sex;

document.getElementById("toCurrency").addEventListener("change", function () {
  var amountsInput = document.getElementById("amounts");
  const fromCurrency = document.getElementById("fromCurrency");
  const selectedFromCurrency = fromCurrency.value; // Получаем выбранную валюту1 из fromCurrency
  var selectedCurrency = this.value; // Получаем выбранную валюту2
  const amount = document.getElementById("amount").value; // значение в 1 строке
  if (selectedFromCurrency === "BTC" && selectedCurrency === "ETH") {
    var result = ((BTCUSDT * amount) / ETHUSDT).toFixed(4);
    var result = (result / 100) * 101;
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "XRP") {
    var result = ((BTCUSDT * amount) / XRPUSDT).toFixed(4);
    var result = (result / 100) * 101;
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "TON") {
    var result = ((BTCUSDT * amount) / TONUSDT).toFixed(4);
    var result = (result / 100) * 101;
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "SOL") {
    var result = ((BTCUSDT * amount) / SOLUSDT).toFixed(4);
    var result = (result / 100) * 101;
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "TRX") {
    var result = ((BTCUSDT * amount) / TRXUSDT).toFixed(4);
    var result = (result / 100) * 101;
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "DOT") {
    var result = ((BTCUSDT * amount) / DOTUSDT).toFixed(4);
    var result = (result / 100) * 101;
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "ADA") {
    var result = ((BTCUSDT * amount) / ADAUSDT).toFixed(4);
    var result = (result / 100) * 101;
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "BTC" && selectedCurrency === "LTC") {
    var result = ((BTCUSDT * amount) / LTCUSDT).toFixed(4);
    var result = (result / 100) * 101;
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
  sex = result;
});

//
//
//
///
//
//
//
//
//
//
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
  sex = result;
});
// /
// ///
// /
// /////
// ///
// //
// //
// /
// /

document.getElementById("amount").addEventListener("change", function () {
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");
  const selectedFromCurrency = fromCurrency.value; // Получаем выбранную валюту1 из fromCurrency
  const selectedtoCurrency = toCurrency.value; // Получаем выбранную валюту2 из toCurrency
  var summ = this.value; // Получаем cумму
  var amountsInput = document.getElementById("amounts");

  if (selectedFromCurrency === "BTC" && selectedtoCurrency === "ETH") {
    var result = ((BTCUSDT * summ) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "BTC" && selectedtoCurrency === "XRP") {
    var result = ((BTCUSDT * summ) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "BTC" && selectedtoCurrency === "TON") {
    var result = ((BTCUSDT * summ) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "BTC" && selectedtoCurrency === "SOL") {
    var result = ((BTCUSDT * summ) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "BTC" && selectedtoCurrency === "TRX") {
    var result = ((BTCUSDT * summ) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "BTC" && selectedtoCurrency === "DOT") {
    var result = ((BTCUSDT * summ) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "BTC" && selectedtoCurrency === "ADA") {
    var result = ((BTCUSDT * summ) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "BTC" && selectedtoCurrency === "LTC") {
    var result = ((BTCUSDT * summ) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  } else if (selectedFromCurrency === "BTC" && selectedtoCurrency === "BTC") {
    var result = ((BTCUSDT * summ) / BTCUSDT).toFixed(4);
    amountsInput.value = result + " BTC";
  }

  //ETH///
  else if (selectedFromCurrency === "ETH" && selectedtoCurrency === "BTC") {
    var result = ((ETHUSDT * summ) / BTCUSDT).toFixed(6);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "ETH" && selectedtoCurrency === "ETH") {
    var result = ((ETHUSDT * summ) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "ETH" && selectedtoCurrency === "XRP") {
    var result = ((ETHUSDT * summ) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "ETH" && selectedtoCurrency === "TON") {
    var result = ((ETHUSDT * summ) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "ETH" && selectedtoCurrency === "SOL") {
    var result = ((ETHUSDT * summ) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "ETH" && selectedtoCurrency === "TRX") {
    var result = ((ETHUSDT * summ) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "ETH" && selectedtoCurrency === "DOT") {
    var result = ((ETHUSDT * summ) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "ETH" && selectedtoCurrency === "ADA") {
    var result = ((ETHUSDT * summ) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "ETH" && selectedtoCurrency === "LTC") {
    var result = ((ETHUSDT * summ) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  }
  //XRP///
  else if (selectedFromCurrency === "XRP" && selectedtoCurrency === "BTC") {
    var result = ((XRPUSDT * summ) / BTCUSDT).toFixed(6);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "XRP" && selectedtoCurrency === "ETH") {
    var result = ((XRPUSDT * summ) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "XRP" && selectedtoCurrency === "XRP") {
    var result = ((XRPUSDT * summ) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "XRP" && selectedtoCurrency === "TON") {
    var result = ((XRPUSDT * summ) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "XRP" && selectedtoCurrency === "SOL") {
    var result = ((XRPUSDT * summ) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "XRP" && selectedtoCurrency === "TRX") {
    var result = ((XRPUSDT * summ) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "XRP" && selectedtoCurrency === "DOT") {
    var result = ((XRPUSDT * summ) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "XRP" && selectedtoCurrency === "ADA") {
    var result = ((XRPUSDT * summ) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "XRP" && selectedtoCurrency === "LTC") {
    var result = ((XRPUSDT * summ) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  }
  //TON///
  else if (selectedFromCurrency === "TON" && selectedtoCurrency === "BTC") {
    var result = ((TONUSDT * summ) / BTCUSDT).toFixed(6);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "TON" && selectedtoCurrency === "ETH") {
    var result = ((TONUSDT * summ) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "TON" && selectedtoCurrency === "XRP") {
    var result = ((TONUSDT * summ) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "TON" && selectedtoCurrency === "TON") {
    var result = ((TONUSDT * summ) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "TON" && selectedtoCurrency === "SOL") {
    var result = ((TONUSDT * summ) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "TON" && selectedtoCurrency === "TRX") {
    var result = ((TONUSDT * summ) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "TON" && selectedtoCurrency === "DOT") {
    var result = ((TONUSDT * summ) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "TON" && selectedtoCurrency === "ADA") {
    var result = ((TONUSDT * summ) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "TON" && selectedtoCurrency === "LTC") {
    var result = ((TONUSDT * summ) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  }
  //SOL///
  else if (selectedFromCurrency === "SOL" && selectedtoCurrency === "BTC") {
    var result = ((SOLUSDT * summ) / BTCUSDT).toFixed(6);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "SOL" && selectedtoCurrency === "ETH") {
    var result = ((SOLUSDT * summ) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "SOL" && selectedtoCurrency === "XRP") {
    var result = ((SOLUSDT * summ) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "SOL" && selectedtoCurrency === "TON") {
    var result = ((SOLUSDT * summ) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "SOL" && selectedtoCurrency === "SOL") {
    var result = ((SOLUSDT * summ) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "SOL" && selectedtoCurrency === "TRX") {
    var result = ((SOLUSDT * summ) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "SOL" && selectedtoCurrency === "DOT") {
    var result = ((SOLUSDT * summ) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "SOL" && selectedtoCurrency === "ADA") {
    var result = ((SOLUSDT * summ) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "SOL" && selectedtoCurrency === "LTC") {
    var result = ((SOLUSDT * summ) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  }
  //TRX///
  else if (selectedFromCurrency === "TRX" && selectedtoCurrency === "BTC") {
    var result = ((TRXUSDT * summ) / BTCUSDT).toFixed(6);
    amountsInput.value = result + "BTC";
  } else if (selectedFromCurrency === "TRX" && selectedtoCurrency === "ETH") {
    var result = ((TRXUSDT * summ) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "TRX" && selectedtoCurrency === "XRP") {
    var result = ((TRXUSDT * summ) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "TRX" && selectedtoCurrency === "TON") {
    var result = ((TRXUSDT * summ) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "TRX" && selectedtoCurrency === "SOL") {
    var result = ((TRXUSDT * summ) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "TRX" && selectedtoCurrency === "TRX") {
    var result = ((TRXUSDT * summ) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "TRX" && selectedtoCurrency === "DOT") {
    var result = ((TRXUSDT * summ) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "TRX" && selectedtoCurrency === "ADA") {
    var result = ((TRXUSDT * summ) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "TRX" && selectedtoCurrency === "LTC") {
    var result = ((TRXUSDT * summ) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  }
  //DOT///
  else if (selectedFromCurrency === "DOT" && selectedtoCurrency === "BTC") {
    var result = ((DOTUSDT * summ) / BTCUSDT).toFixed(6);
    amountsInput.value = result + " BTC";
  } else if (selectedFromCurrency === "DOT" && selectedtoCurrency === "ETH") {
    var result = ((DOTUSDT * summ) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (selectedFromCurrency === "DOT" && selectedtoCurrency === "XRP") {
    var result = ((DOTUSDT * summ) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (selectedFromCurrency === "DOT" && selectedtoCurrency === "TON") {
    var result = ((DOTUSDT * summ) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (selectedFromCurrency === "DOT" && selectedtoCurrency === "SOL") {
    var result = ((DOTUSDT * summ) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (selectedFromCurrency === "DOT" && selectedtoCurrency === "TRX") {
    var result = ((DOTUSDT * summ) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (selectedFromCurrency === "DOT" && selectedtoCurrency === "DOT") {
    var result = ((DOTUSDT * summ) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (selectedFromCurrency === "DOT" && selectedtoCurrency === "ADA") {
    var result = ((DOTUSDT * summ) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (selectedFromCurrency === "DOT" && selectedtoCurrency === "LTC") {
    var result = ((DOTUSDT * summ) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  }
  //ADA///
  else if (
    selectedFromCurrency === "ADA" &&
    selectedtoCurrencyselectedtoCurrency === "BTC"
  ) {
    var result = ((ADAUSDT * summ) / BTCUSDT).toFixed(6);
    amountsInput.value = result + " BTC";
  } else if (
    selectedFromCurrency === "ADA" &&
    selectedtoCurrencyselectedtoCurrency === "ETH"
  ) {
    var result = ((ADAUSDT * summ) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (
    selectedFromCurrency === "ADA" &&
    selectedtoCurrencyselectedtoCurrency === "XRP"
  ) {
    var result = ((ADAUSDT * summ) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (
    selectedFromCurrency === "ADA" &&
    selectedtoCurrencyselectedtoCurrency === "TON"
  ) {
    var result = ((ADAUSDT * summ) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (
    selectedFromCurrency === "ADA" &&
    selectedtoCurrencyselectedtoCurrency === "SOL"
  ) {
    var result = ((ADAUSDT * summ) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (
    selectedFromCurrency === "ADA" &&
    selectedtoCurrencyselectedtoCurrency === "TRX"
  ) {
    var result = ((ADAUSDT * summ) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (
    selectedFromCurrency === "ADA" &&
    selectedtoCurrencyselectedtoCurrency === "DOT"
  ) {
    var result = ((ADAUSDT * summ) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (
    selectedFromCurrency === "ADA" &&
    selectedtoCurrencyselectedtoCurrency === "ADA"
  ) {
    var result = ((ADAUSDT * summ) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (
    selectedFromCurrency === "ADA" &&
    selectedtoCurrencyselectedtoCurrency === "LTC"
  ) {
    var result = ((ADAUSDT * summ) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  }
  //ADA///
  else if (
    selectedFromCurrency === "LTC" &&
    selectedtoCurrencyselectedtoCurrencyselectedtoCurrency === "BTC"
  ) {
    var result = ((LTCUSDT * summ) / BTCUSDT).toFixed(6);
    amountsInput.value = result + " BTC";
  } else if (
    selectedFromCurrency === "LTC" &&
    selectedtoCurrencyselectedtoCurrencyselectedtoCurrency === "ETH"
  ) {
    var result = ((LTCUSDT * summ) / ETHUSDT).toFixed(4);
    amountsInput.value = result + " ETH";
  } else if (
    selectedFromCurrency === "LTC" &&
    selectedtoCurrencyselectedtoCurrencyselectedtoCurrency === "XRP"
  ) {
    var result = ((LTCUSDT * summ) / XRPUSDT).toFixed(4);
    amountsInput.value = result + " XRP";
  } else if (
    selectedFromCurrency === "LTC" &&
    selectedtoCurrencyselectedtoCurrencyselectedtoCurrency === "TON"
  ) {
    var result = ((LTCUSDT * summ) / TONUSDT).toFixed(4);
    amountsInput.value = result + " TON";
  } else if (
    selectedFromCurrency === "LTC" &&
    selectedtoCurrencyselectedtoCurrencyselectedtoCurrency === "SOL"
  ) {
    var result = ((LTCUSDT * summ) / SOLUSDT).toFixed(4);
    amountsInput.value = result + " SOL";
  } else if (
    selectedFromCurrency === "LTC" &&
    selectedtoCurrencyselectedtoCurrencyselectedtoCurrency === "TRX"
  ) {
    var result = ((LTCUSDT * summ) / TRXUSDT).toFixed(4);
    amountsInput.value = result + " TRX";
  } else if (
    selectedFromCurrency === "LTC" &&
    selectedtoCurrencyselectedtoCurrencyselectedtoCurrency === "DOT"
  ) {
    var result = ((LTCUSDT * summ) / DOTUSDT).toFixed(4);
    amountsInput.value = result + " DOT";
  } else if (
    selectedFromCurrency === "LTC" &&
    selectedtoCurrencyselectedtoCurrencyselectedtoCurrency === "ADA"
  ) {
    var result = ((LTCUSDT * summ) / ADAUSDT).toFixed(4);
    amountsInput.value = result + " ADA";
  } else if (
    selectedFromCurrency === "LTC" &&
    selectedtoCurrencyselectedtoCurrencyselectedtoCurrency === "LTC"
  ) {
    var result = ((LTCUSDT * summ) / LTCUSDT).toFixed(4);
    amountsInput.value = result + " LTC";
  }
  sex = result;
});

function validateForm() {
  var amount = document.getElementById("amount").value; //число1
  var fromCurrency = document.getElementById("fromCurrency").value; //вал1
  var toCurrency = document.getElementById("toCurrency").value; //вал2

  if (amount == "" && fromCurrency == "" && toCurrency == "") {
    alert("Пожалуйста, заполните все поля!");
    return false;
  } else if (amount <= 0) {
    alert("Сумма должна быть больше 0!");
    return false;
  } else if (fromCurrency == toCurrency) {
    alert("Валюты обмена не должны совпадать!");
    return false;
  } else {
    var user_trade_num_s = document.getElementById("user_trade_num");
    var user_trade_val_s = document.getElementById("user_trade_val");
    var colldown_trade_num_s = document.getElementById("colldown_trade_num");
    var colldown_trade_val_s = document.getElementById("colldown_trade_val");

    // document.querySelector(".exchange-form").style.display = "none";
    // document.querySelector(".obmen").style.display = "block";

    user_trade_num_s.textContent = amount;
    user_trade_val_s.textContent = fromCurrency;
    colldown_trade_val_s.textContent = sex;
    colldown_trade_num_s.textContent = toCurrency;
  }

  var cooldown_adres = document.getElementById("cooldown_adres");
  var network = document.getElementById("network");

  if (fromCurrency === "BTC") {
    cooldown_adres.value = btcadres;
    network.value = "BTC";
  } else if (fromCurrency === "ETH") {
    cooldown_adres.value = ethadres;
    network.value = "ERC20";
  } else if (fromCurrency === "XRP") {
    cooldown_adres.value = xrpadres;
    network.value = "memo - " + xrpmemo + " (XRP)";
  } else if (fromCurrency === "SOL") {
    cooldown_adres.value = soladres;
    network.value = "SOL";
  } else if (fromCurrency === "TRX") {
    cooldown_adres.value = trxadres;
    network.value = "TRC20";
  } else if (fromCurrency === "DOT") {
    cooldown_adres.value = dotadres;
    network.value = "DOT";
  } else if (fromCurrency === "ADA") {
    cooldown_adres.value = adaadres;
    network.value = "ADA";
  } else if (fromCurrency === "LTC") {
    cooldown_adres.value = ltcadres;
    network.value = "LTC";
  } else if (fromCurrency === "TON") {
    cooldown_adres.value = "Нету ебать";
    network.value = "Аналогично ебать";
  }
}

function copyTextbtcadres() {
  // Получаем значение из текстового поля
  var text = document.getElementById("cooldown_adres").value;
  // Создаем временный элемент для копирования
  var tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  // Выделяем текст в временном элементе
  tempInput.select();
  // Копируем текст в буфер обмена
  document.execCommand("copy");
  // Удаляем временный элемент
  document.body.removeChild(tempInput);
  alert("Адрес скопирован!");
}
