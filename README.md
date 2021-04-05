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

### 01.04.21 v1.13

Изменение [pageProfile] 
withRouter - компонента высшего порядка [pageProfileWrapper]
Добавлена авторизация [header]

### 02.04.21 V1.14

Добавлена функция подписаться/отписаться [pageUsers] (axios) post/delete запросы
Создание папки api [api.js] 
Вынос (axios) get/post/delete запросы в [api.js] 

Метод some() вызывает переданную функцию callback один раз для каждого элемента, присутствующего в массиве до тех пор, пока не найдёт такой, для которого callback вернёт истинное значение (значение, становящееся равным true при приведении его к типу Boolean).

Метод «arr.filter(callback[, thisArg])» используется для фильтрации массива через функцию. Он создаёт новый массив, в который войдут только те элементы arr, для которых вызов callback(item, i, arr) возвратит true.Метод «arr.filter(callback[, thisArg])» используется для фильтрации массива через функцию. Он создаёт новый массив, в который войдут только те элементы arr, для которых вызов callback(item, i, arr) возвратит true.

### 03.04.21 v1.15

Redux Thunk -- middleware библиотека для асинхронных экшенов в Redux. Позволяет вызвать action creator, возвращая при этом функцию вместо объекта. Функция принимает метод dispatch как аргумент, чтобы после того, как асинхронная операция завершится, использовать его для диспатчинга обычного синхронного экшена, внутри тела функции.

Рефакторин: общение с сервером через бизнес [usersReducer] (вывод всех пользователей / подписаться / отписаться)

Redirect -- проверка на авторизованность / redirect to '/login' - если не авторизован

### 05.04.21 v1.16

High Order Component (hoc) -- компнент высшего порядка -- это один из продвинутых способов для повторного использования логики. HOC не являются частью API React, но часто применяются из-за композиционной природы компонентов.

compose(...functions) -- Объединяет функции справа налево. позволяет писать глубоко вложенные функции преобразований без дрейфа вправо (rightward drift) в коде

local state -- [profileStatus]
setState -- асинхронная операция
