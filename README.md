# The "Daily Water Intake Tracker"

Цей додаток допомагає користувачам гарантувати, що їхнє тіло отримує достатню
кількість води кожен день. За допомогою цієї програми ви можете легко
відстежувати свій рівень гідратації.

#### Ключові особливості:

1. Створення особистого профілю: додаток дозволяє користувачам створювати
   власний профіль, де вони можуть вводити індивідуальні характеристики, такі як
   стать, вага, фізичні характеристики діяльності, для точного розрахунку потреб
   у водозаборі. Personal Profile

2. Відстеження споживання води: користувачі можуть легко контролювати кількість
   води, яку вони мають споживається протягом дня за допомогою зручного
   інтерфейсу програми.

3. Статистичний аналіз: користувачі можуть переглядати статистику споживання
   води за місяць базою для відстеження їх прогресу та визначення тенденцій.

Ця програма служить надійним супутником у підтримці здорового способу життя,
нагадування користувачам про важливість належної гідратації для оптимального
функціонування організму.

###### [Жива сторінка](https://main.d32382tvu1v9zw.amplifyapp.com)

## Технології, які використовувалися для створення додатка

#### React Redux Toolkit

Redux Toolkit - це офіційний набір інструментів, призначений для спрощення
роботи з бібліотекою управління станом Redux в додатках на React. Він був
створений з метою полегшення розробки, зменшення кількості необхідного коду та
вирішення деяких з питань, які можуть виникнути при роботі з Redux.

Redux Toolkit надає декілька корисних функцій, серед яких:

- configureStore: Функція для створення Redux store, яка автоматично включає
  декілька середовищ Redux, таких як Redux DevTools та середовище розробки.

- createSlice: Допоміжна функція для створення "зрізів" стану та зв'язаних з
  ними дій та редукторів. Це дозволяє писати менше коду та уникнути багатьох
  повторюваних дій.

- createReducer: Інша допоміжна функція для створення редукторів у зручному
  форматі.

- createAsyncThunk та createEntityAdapter: Додаткові допоміжні функції, які
  спрощують роботу з асинхронними діями та нормалізацією даних.

В цілому, Redux Toolkit робить процес розробки додатків на React з використанням
Redux більш приємним та продуктивним, зменшуючи кількість рутиноної роботи та
ризику помилок. Для більш детального опису програми звернись до документації
[Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)

#### Node.js

Node.js - це середовище виконання JavaScript, побудоване на движку V8 (той самий
движок JavaScript, що й у браузері Google Chrome), яке дозволяє виконувати
JavaScript-код поза браузером, на сервері.

Основні використання Node.js включають:

1. **Розробка веб-додатків**: Node.js дозволяє створювати веб-сервери та
   веб-додатки з використанням JavaScript. Завдяки ненабувному блокуючому
   введенню та асинхронному програмуванню, веб-сервери на Node.js можуть
   обробляти багато запитів одночасно, що робить його ефективним рішенням для
   створення масштабованих додатків.

2. **Інструменти розробки**: Node.js має широкий вибір інструментів розробки,
   таких як npm (Node Package Manager), який дозволяє легко встановлювати та
   управляти залежностями проекту. Також існують інші інструменти, такі як
   webpack, Gulp, Grunt і т.д які допомагають автоматизувати рутинні задачі в
   процесі розробки.

3. **Мікросервісна архітектура**: Node.js часто використовується для створення
   мікросервісів - невеликих, незалежних компонентів додатків, які взаємодіють
   між собою через API.

4. **Робота з базами даних**: Node.js дозволяє легко підключатися до різних
   систем управління базами даних, таких як MongoDB, MySQL, PostgreSQL і т.д., і
   взаємодіяти з ними, використовуючи JavaScript.

5. **Розробка інструментів командного рядка**: Node.js може бути використаний
   для створення різноманітних інструментів командного рядка для автоматизації
   рутинних завдань на сервері або в розробці.

Це лише деякі з основних використань Node.js. Його гнучкість та швидкодія робит
його популярним інструментом для розробки різноманітних додатків та сервісів.
Для більш детального опису програми звернись дo документації
[Node.js](https://nodejs.org/docs/latest/api/)

#### Vite

Vite - це інструмент для розробки веб-додатків, який зосереджений на швидкій
розробці. Він був розроблений Evan You, творцем Vue.js, але може бути
використаний для будь-якого типу веб-додатку, незалежно від того, чи ви
використовуєте Vue.js, React, або жодний фреймворк.

Основні особливості Vite включають:

- Швидкість розробки\*\*: Vite запускає сервер розробки, який надає миттєву
  перезавантаження сторінки після зміни файлів. Це дозволяє швидше розробляти та
  тестувати ваші додатки.

- Швидкість завантаження\*\*: Vite використовує ESM (ECMAScript Modules) для
  завантаження модулів, що дозволяє завантажувати та обробляти файли JavaScript
  швидше, особливо при роботі з великою кількістю модулів.

- Нативна підтримка модулів\*\*: Vite підтримує сучасний формат модулів
  JavaScript (ESM) без необхідності їх трансляції (наприклад, до CommonJS або
  AMD), що сприяє полегшенню розробки та покращенню продуктивності.

- Hot Module Replacement (HMR)\*\*: Vite автоматично виконує заміну модулів без
  повного перезавантаження сторінки під час розробки, що дозволяє бачити зміни в
  реальному часі без втрати стану додатку.

- Розширені можливості плагінів\*\*: Vite має механізм плагінів, який дозволяє
  розширити його функціональність, додавши різноманітні функції, такі як
  підтримка препроцесорів CSS, оптимізація зображень, підтримка TypeScript і
  т.д.

У цілому, Vite надає швидку та продуктивну розробку веб-додатків, що робить йогo
популярним вибором серед розробників.

Для більш детального опису програми звернись до документації
[Vite](https://vitejs.dev/).

## Бібліотеки та фреймворки які були використані при створенні проєкту

- [Google](https://www.youtube.com/watch?v=oQaoymCOW8o) - реалізували
  авторизацію користувача

---

- [Recharts](https://recharts.org/en-US/) за допомогою цієї бібліотеки
  реалізований функціонал візуалізації статистичних даних споживання води за
  тиждень;

---

- [Cloudinary](https://cloudinary.com/) - реалізували механізм збереження
  зображеннь у хмарному сховищі

---

- [i18next](https://www.i18next.com/) за допомогою цієї бібліотеки реалізований
  функціонал міжнародної локалізації;

---

- [Swagger](https://swagger.io/) - була написана документація по взаємодіїї
  frontend з backend.
  [Наша документація](https://backend-aqua-track-05.onrender.com/api/v1/docs/)

---

- [Express](https://expressjs.com/) cтворили документацію ендпоінтів

---

- [Axios](https://www.npmjs.com/package/axios) - створення запитів на backend

---

І ще багато іншого!😁

## Деплой

Деплой frontend частини виконаний на Amazon Web Services AWS Amplify. Деплой
backend частини виконаний на Render.

## Наша дружня команда

###### Team lead [SERHII LEONOV](https://t.me/LeonovSerhii)

###### Scrum master [NATALIIA MUSIIENKO](https://t.me/NatalieMusienko)

###### Developers frontend:

- [KATERYNA MISHCHUK ](https://t.me/Kateryna_Mishchukp)
- [VOLODYMYR PIDNEBESNYI](https://t.me/blavikensbutcher)
- [KRYSTYNA ZOLOTAR](https://t.me/kristinaavstriiskaya)
- [DENYS KOSHEVYI](https://t.me/Il_Denis_lI)
- [IVAN TROPANETS](https://t.me/Shi9ei)
- [SERHII LEONOV](https://t.me/LeonovSerhii)

---

###### Developers backend:

- [DMYTRO CHEREVKO ](https://t.me/Dtimewarp)
- [KOSTIANTYN BRATKOVSKYI](https://t.me/cefarir0n)
- [SERHII LEONOV](https://t.me/LeonovSerhii)

---

EN

# Daily Water Intake Tracker

The "Daily Water Intake Tracker" app helps users ensure their bodies receive an
adequate amount of water each day. With this app you can easily track your
hydration level.

# Key Features

1. Personal Profile Creation: The app allows users to create their own profile,
   where they can input individual characteristics such as gender, weight,
   physical activity, for accurate calculation of water intake requirements.

2. Water Intake Tracking: Users can easily monitor the amount of water they have
   consumed throughout the day using the app's convenient interface.

3. Statistical Analysis: Users can view their water intake statistics on a
   monthly basis to track their progress and identify trends.

This app serves as a reliable companion in maintaining a healthy lifestyle,
reminding users of the importance of proper hydration for optimal body function.

###### [Live page](https://main.d32382tvu1v9zw.amplifyapp.com)

## Stack of technologies used for the project

#### React Redux Toolkit

Redux Toolkit is the official toolset intended to be the standard way to write
Redux logic in React applications. Redux Toolkit was originally created to write
good Redux applications and speed up development and make your code better and
more maintainable.

Redux Toolkit includes:

- configureStore(): wraps createStore to provide simplified configuration
  options and good defaults. It can automatically combine your slice reducers,
  adds whatever Redux middleware you supply, includes redux-thunk by default,
  and enables use of the Redux DevTools Extension.

- createSlice(): accepts an object of reducer functions, a slice name, and an
  initial state value, and automatically generates a slice reducer with
  corresponding action creators and action types.

- createReducer(): that lets you supply a lookup table of action types to case
  reducer functions, rather than writing switch statements.

- createAsyncThunk: accepts an action type string and a function that returns a
  promise, and generates a thunk that dispatches pending/fulfilled/rejected
  action types based on that promise

Redux Toolkit is to simplify React existing application and can help you make
your Redux code better with minimal mistakes. The complete Redux Toolkit
documentation is available at
[Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)

#### Node.js

Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the
browser. This allows Node.js to be very performant.

Main uses of Node.js include:

1. Web Application Development: Node.js allows the creation of web servers and
   web applications using JavaScript. With its non-blocking I/O and asynchronous
   programming, Node.js web servers can handle many requests simultaneously,
   making it an efficient solution for building scalable applications.

2. Development Tools: Node.js boasts a wide range of development tools, such as
   npm (Node Package Manager), which makes it easy to install and manage project
   dependencies. There are also other tools like webpack, Gulp, Grunt, etc.,
   that help automate routine tasks during development.

3. Microservices Architecture: Node.js is often used for creating
   microservices—small, independent application components that interact with
   each other through APIs.

4. Database Interaction: Node.js allows easy connection to various database
   management systems, such as MongoDB, MySQL, PostgreSQL, etc., and interacts
   with them using JavaScript.

5. Command-Line Tools Development: Node.js can be used to create various
   command-line tools to automate routine tasks on the server or during
   development.

These are just some of the primary uses of Node.js. Its flexibility and speed
make it a popular tool for developing a wide range of applications and services.
For a more detailed description of the application, refer to the documentation
[Node.js](https://nodejs.org/docs/latest/api/)

#### Vite

Vite is a web development tool focused on rapid development. It was created by
Evan You, the creator of Vue.js, but it can be used for any type of web
application, whether you use Vue.js, React, or no framework at all.

Key features of Vite:

- Development Speed: Vite launches a development server that provides instant
  page reloads after file changes. This allows for faster development and
  testing of your applications.

- Load Speed: Vite uses ESM (ECMAScript Modules) to load modules, which allows
  for faster loading and processing of JavaScript files, especially when working
  with a large number of modules.

- Native Module Support: Vite supports the modern JavaScript module format (ESM)
  without the need for transpilation (e.g., to CommonJS or AMD), which
  simplifies development and improves performance.

- Hot Module Replacement (HMR): Vite automatically performs module replacement
  without a full page reload during development, allowing you to see changes in
  real-time without losing the application state.

- Extended Plugin Capabilities: Vite has a plugin mechanism that allows you to
  extend its functionality by adding various features, such as support for CSS
  preprocessors, image optimization, TypeScript support, etc.

Vite provides fast and productive web application development, making it a
popular choice among developers.

For a more detailed description, refer to the Vite documentation
[Vite](https://vitejs.dev/)

## Libraries and frameworks used for the eproject

- [Google](https://www.youtube.com/watch?v=oQaoymCOW8o) - user`s authorization
  is implemented.

---

- [Recharts](https://recharts.org/en-US/) library helped to implement
  visualisation of statistical data of user`s weekly water intake.

---

- [Cloudinary](https://cloudinary.com/) implemented a mechanism for saving
  images in cloud storage.

---

- [i18next](https://www.i18next.com/) library helped to implement international
  localization functionality.

---

- [Swagger](https://swagger.io/) - documentation on backend-frontend interaction
  was written.
  [Our documenation](https://backend-aqua-track-05.onrender.com/api/v1/docs/)

---

- [Express](https://expressjs.com/) endpoints documentation

---

- [Axios](https://www.npmjs.com/package/axios) creation of backend requests

---

And even more other things! 😁

## Deploy

Deploy of frontend is implemented on Amazon Web Services AWS Amplify. Deploy of
backend is implemented on Render.

## Our Team

###### Team lead [SERHII LEONOV](https://t.me/LeonovSerhii)

###### Scrum master [NATALIIA MUSIIENKO](https://t.me/NatalieMusienko)

###### Developers frontend:

- [KATERYNA MISHCHUK ](https://t.me/Kateryna_Mishchukp)
- [VOLODYMYR PIDNEBESNYI](https://t.me/blavikensbutcher)
- [KRYSTYNA ZOLOTAR](https://t.me/kristinaavstriiskaya)
- [DENYS KOSHEVYI](https://t.me/Il_Denis_lI)
- [IVAN TROPANETS](https://t.me/Shi9ei)
- [SERHII LEONOV](https://t.me/LeonovSerhii)

---

###### Developers backend:

- [DMYTRO CHEREVKO ](https://t.me/Dtimewarp)
- [KOSTIANTYN BRATKOVSKYI](https://t.me/cefarir0n)
- [SERHII LEONOV](https://t.me/LeonovSerhii)
