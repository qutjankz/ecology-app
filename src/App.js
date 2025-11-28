import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './App.css';

function App() {
  const [page, setPage] = useState('login');
  const [userName, setUserName] = useState('Ансар Кайрабай');
  const [userPoints, setUserPoints] = useState(450);
  const [avatar, setAvatar] = useState('👤');

  const avatars = ['👤', '😊', '🧑', '👨', '👩', '🧔', '👱', '🧑‍🦱', '👨‍🦰', '👩‍🦰', '🧑‍🦳', '👴', '👵', '🧑‍🎓', '👨‍💼', '👩‍💼'];

  // Страница входа
  if (page === 'login') {
    return (
      <div className="container">
        <h1>🌿 ЭкоПриложение</h1>
        <button onClick={() => setPage('main')} className="btn-main">
          Кіру
        </button>
      </div>
    );
  }

  // Главная страница
  if (page === 'main') {
    return (
      <div className="container">
        <div className="header">
          <div className="avatar clickable" onClick={() => setPage('profile')}>
            {avatar}
          </div>
          <div>
            <div className="name">{userName}</div>
            <div className="points">⭐ {userPoints} ұпай</div>
          </div>
        </div>

        <h2>Басты бет</h2>
        
        <button onClick={() => setPage('trash')} className="btn btn-trash">
          ♻️ Қоқыс тапсыру
        </button>
        <button onClick={() => setPage('rating')} className="btn">
          🏆 Рейтинг
        </button>
        <button onClick={() => setPage('contests')} className="btn">
          🎯 Конкурстар
        </button>
        <button onClick={() => setPage('login')} className="btn-exit">
          Шығу
        </button>
      </div>
    );
  }

  // Страница QR кода для мусора
  if (page === 'trash') {
    const qrData = `USER:${userName}|POINTS:${userPoints}|ID:${Date.now()}`;
    
    return (
      <div className="container">
        <div className="header">
          <div className="avatar clickable" onClick={() => setPage('profile')}>
            {avatar}
          </div>
          <div>
            <div className="name">{userName}</div>
            <div className="points">⭐ {userPoints} ұпай</div>
          </div>
        </div>

        <h2>♻️ Қоқыс тапсыру</h2>

        <div className="qr-card">
          <h3>QR кодты көрсетіңіз</h3>
          <p>Қоқыс жинау пунктінде осы кодты сканерлеңіз</p>
          
          <div className="qr-code">
            <QRCodeSVG 
              value={qrData} 
              size={250}
              level="H"
              bgColor="#ffffff"
              fgColor="#667eea"
            />
          </div>

          <div className="qr-info">
            <p>👤 {userName}</p>
            <p>🆔 ID: {Date.now().toString().slice(-6)}</p>
          </div>
        </div>

        <button onClick={() => setPage('main')} className="btn-back">
          ← Артқа
        </button>
      </div>
    );
  }

  // Страница профиля
  if (page === 'profile') {
    return (
      <div className="container">
        <div className="header">
          <div className="avatar clickable" onClick={() => setPage('profile')}>
            {avatar}
          </div>
          <div>
            <div className="name">{userName}</div>
            <div className="points">⭐ {userPoints} ұпай</div>
          </div>
        </div>

        <h2>👤 Профиль</h2>

        <div className="profile-card">
          <div className="current-avatar">{avatar}</div>
          <h3>{userName}</h3>
          <p className="profile-points">⭐ {userPoints} ұпай</p>
        </div>

        <div className="avatar-selector">
          <h3>Аватарды таңдаңыз:</h3>
          <div className="avatar-grid">
            {avatars.map((av, index) => (
              <div 
                key={index}
                className={`avatar-option ${av === avatar ? 'selected' : ''}`}
                onClick={() => setAvatar(av)}
              >
                {av}
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => setPage('main')} className="btn-back">
          ← Артқа
        </button>
      </div>
    );
  }

  // Страница рейтинга
  if (page === 'rating') {
    const users = [
      { name: 'Айгерім Нұрлан', points: 2450 },
      { name: 'Ерлан Сейт', points: 2100 },
      { name: 'Дина Қасым', points: 1890 },
      { name: 'Арман Бекет', points: 1650 },
      { name: 'Жанна Алим', points: 1420 },
      { name: 'Нұрлан Өмірзақ', points: 1200 },
      { name: 'Сауле Даурен', points: 980 },
      { name: 'Асет Мұрат', points: 750 },
    ];

    return (
      <div className="container">
        <div className="header">
          <div className="avatar clickable" onClick={() => setPage('profile')}>
            {avatar}
          </div>
          <div>
            <div className="name">{userName}</div>
            <div className="points">⭐ {userPoints} ұпай</div>
          </div>
        </div>

        <h2>🏆 Рейтинг</h2>
        
        <div className="rating-list">
          {users.map((user, index) => (
            <div 
              key={index} 
              className={`rating-item ${index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : ''}`}
            >
              <span className="place">{index + 1}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-points">{user.points}</span>
            </div>
          ))}
        </div>

        <button onClick={() => setPage('main')} className="btn-back">
          ← Артқа
        </button>
      </div>
    );
  }

  // Страница конкурсов
  if (page === 'contests') {
    return (
      <div className="container">
        <div className="header">
          <div className="avatar clickable" onClick={() => setPage('profile')}>
            {avatar}
          </div>
          <div>
            <div className="name">{userName}</div>
            <div className="points">⭐ {userPoints} ұпай</div>
          </div>
        </div>

        <h2>🎯 Конкурстар</h2>
        
        <div className="contest-card">
          <div className="contest-icon">👕</div>
          <h3>Футболка ұтып ал!</h3>
          <p>1000 ұпай жинаңыз және ЭкоФутболка алыңыз</p>
          <div className="progress">
            <div className="progress-bar" style={{width: `${(userPoints/1000)*100}%`}}></div>
          </div>
          <p className="progress-text">{userPoints} / 1000 ұпай</p>
        </div>

        <div className="contest-card">
          <div className="contest-icon">🎒</div>
          <h3>Экорюкзак</h3>
          <p>2500 ұпай жинап, рюкзак алыңыз</p>
          <div className="progress">
            <div className="progress-bar" style={{width: `${(userPoints/2500)*100}%`}}></div>
          </div>
          <p className="progress-text">{userPoints} / 2500 ұпай</p>
        </div>

        <button onClick={() => setPage('main')} className="btn-back">
          ← Артқа
        </button>
      </div>
    );
  }
}

export default App;