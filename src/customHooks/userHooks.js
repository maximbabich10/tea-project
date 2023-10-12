import { useState } from 'react';
import axios from 'axios';

export default function userHook(user) {
  const [currentUser, setCurrentUser] = useState(user || null);

  const signUpHandler = (e) => { // Это функция-обработчик события для регистрации нового пользователя
    e.preventDefault();
    const userData = Object.fromEntries(new FormData(e.target));
    if (!userData.name || !userData.password || !userData.email) return; // если true, прерываем. Иначе код выполняется дальше

    axios.post('/api/auth/signup', userData) // отправляем запрос на server (бэк). На сервере данные userData обработаются определенной логикой на ручке. Cюда возврщается обработанные данные с бэка
      .then(() => { // если с бэка пришел ответ положительный, выполняется then
        window.location = '/';
        e.target.reset(); // Если запрос успешен, перенаправляет пользователя на главную страницу и сбрасывает форму
      })
      .catch((err) => console.log(err)); // если с бэка пришел ответ отрицательный, выполняется catch
  };

  const logoutHandler = () => {
    axios.get('/api/auth/logout')
      .then(() => {
        setCurrentUser(null); // Если запрос успешен, устанавливает currentUser в значение null, что указывает на то, что пользователь вышел.
      });
  };

  const signInHandler = (e) => {
    e.preventDefault();
    const userData = Object.fromEntries(new FormData(e.target));
    if (!userData.password || !userData.email) return;

    axios.post('/api/auth/signin', userData)
      .then(() => {
        window.location = '/';
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };

  return {
    currentUser,
    signInHandler,
    signUpHandler,
    logoutHandler,
  };
}
