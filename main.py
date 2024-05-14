import requests

# Список криптовалют для получения цен
cryptos = ['BTCUSDT', 'ETHUSDT', 'XRPUSDT', 'SOLUSDT', 'TRXUSDT', 'DOTUSDT', 'ADAUSDT', 'LTCUSDT']

# URL API Binance для получения цен
url = 'https://api.binance.com/api/v3/ticker/price'

# Отправляем запросы к API для каждой криптовалюты и выводим текущую цену
for crypto in cryptos:
    params = {'symbol': crypto}
    response = requests.get(url, params=params)
    data = response.json()
    print(f"const {crypto} = {data['price']}")


