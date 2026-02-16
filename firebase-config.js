// ============================================
// firebase-config.js
// ============================================

// Твой конфиг
const firebaseConfig = {
    apiKey: "AIzaSyDpP0_qHk8FaQMFxv3eeeZBnxPszaRfRp8",
    authDomain: "physicsexams-37cde.firebaseapp.com",
    projectId: "physicsexams-37cde",
    storageBucket: "physicsexams-37cde.firebasestorage.app",
    messagingSenderId: "613032743241",
    appId: "1:613032743241:web:16ee7a6a7ed46c10918a98"
};

// Инициализация Firebase
try {
    // Проверяем, загружен ли Firebase
    if (typeof firebase === 'undefined') {
        console.error('❌ Firebase SDK не загружен! Подключи скрипты в HTML');
    } else {
        // Инициализируем
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
            console.log('✅ Firebase инициализирован');
        }
        
        // Создаём глобальную переменную для БД
        window.db = firebase.database();
        console.log('✅ База данных готова');
    }
} catch (error) {
    console.error('❌ Ошибка Firebase:', error);
}
