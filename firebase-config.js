// ============================================
// firebase-config.js - ПОДКЛЮЧЕНИЕ К FIREBASE
// ============================================

// ТВОЙ НОВЫЙ КОНФИГ (замени на свой если надо)
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
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    window.db = firebase.database();
    console.log("✅ Firebase инициализирован");
} catch (error) {
    console.error("❌ Ошибка Firebase:", error);
}

// Система модераторов (из твоего кода)
window.moderatorSystem = {
    MODERATOR_PASSWORD: "Physics2024",
    
    isModerator() {
        return localStorage.getItem('isModerator') === 'true';
    },
    
    setModerator(status) {
        localStorage.setItem('isModerator', status);
    },
    
    showPasswordModal() {
        // ... (код из твоего файла)
    }
};

console.log("✅ Система модераторов загружена");
