### 12.03.21 v1.1

Добавлено BrowserRouter [react-router-dom] к ссылкам на компоненты-"страниц".

### 15.03.21 v1.2

Рефакторинг pageDialogs компоненты.

### 16.03.21 v1.3

Рефакторинг навигации NavBar.
HTML+CSS доработка pageDialogs.
Создание redux/state.js [глобальный объект с данными для отрисовки компонент] (бизнесс уровень)

### 19.03.21 v1.4

Добавлен функционал добавления сообщения в pageDialogs и pageProfile. (через третьего "лишнего" render.js)

### 20.03.21 v1.5

Рефакторинг: redux/state.js, удаление render.js.
Добавление к input onChange. Отрисовка пользовательского ввода сообщений производится через бизнесс уровень (redux/state.js).

### 22.03.21 v1.5

Рефакторинг redux/state.js. Обертка store.

### 23.03.21 v1.6

dispatch / action creater / action type
Рефакторинг redux/state.js = создание dispatch (ADD_POST, ADD_MESSAGE, UPDATE_NEW_POST, UPDATE_NEW_MESSAGE) с протяжкой

reducer (почти redux) создание отдельных файлов reducer для (ADD_POST, ADD_MESSAGE, UPDATE_NEW_POST, UPDATE_NEW_MESSAGE)

### 25.03.21 v1.7

Внедрение reducer функция которая отвечать за обновление состояния

### 26.03.21 v1.8

redux
container components
context API

### 27.03.21 v1.8

Подключение react-redux
Рефакторинг postsWrapper, pageDialogsWrapper - под react-redux.
Создание обертки для navBar [navBarWrapper] - адаптировано под react-redux.
Копии состояния в dialogsReducer, profileReducer.

### 28.03.21 v1.9 

Новая страница пользователей [pageUsers]

### 29.03.21 v1.10

rest api для страницы [pageUsers] / классовый компонент (extends React.Component)

### 30.03.21 v1.11

componentDidMount -- Эта функция будет вызвана лишь раз во всем жизненном цикле данного компонента и будет сигнализировать, что компонент и все его дочерние компоненты отрисовались без ошибок.
Постраничный вывод пользователей.
Обновление дизайна.

### 31.03.21 v1.12

Добавление Preloader [components/common/preloader].
Рефакторин mapDispatchToProps [usersWrapper].



