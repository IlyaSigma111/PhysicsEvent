// ============================================
// firebase-config.js
// ============================================

// Твой конфиг
const firebaseConfig = {
    apiKey: "AIzaSyC9OSllGc8U-au0281HfikJkI5caDkqOYc",
    authDomain: "goydacloud.firebaseapp.com",
    databaseURL: "https://goydacloud-default-rtdb.firebaseio.com",
    projectId: "goydacloud",
    storageBucket: "goydacloud.firebasestorage.app",
    messagingSenderId: "937429390580",
    appId: "1:937429390580:web:7be76b6755a07ff6ae7aa1"
};

// Инициализация Firebase
try {
    // Проверяем, загружен ли Firebase SDK
    if (typeof firebase === 'undefined') {
        throw new Error('Firebase SDK не загружен. Подключи скрипты в HTML!');
    }
    
    // Инициализируем приложение
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        console.log('✅ Firebase инициализирован');
    }
    
    // Создаём глобальную переменную для базы данных
    window.db = firebase.database();
    console.log('✅ База данных готова');
    
} catch (error) {
    console.error('❌ Ошибка Firebase:', error.message);
    alert('Ошибка подключения к базе данных: ' + error.message);
}
