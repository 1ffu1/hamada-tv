// إظهار وإخفاء قائمة التواصل
const menuButton = document.querySelector('.menu-button');
const menuOptions = document.querySelector('.menu-options');

menuButton.addEventListener('click', () => {
    menuOptions.classList.toggle('hidden');
});

// تفعيل زر المشاركة
const shareButton = document.querySelector('.share-button');
shareButton.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'مشاهدة المباريات مباشر',
            text: 'شاهد المباريات المفضلة مباشرة الآن!',
            url: window.location.href,
        }).catch((error) => console.error('خطأ في المشاركة:', error));
    } else {
        alert('ميزة المشاركة غير مدعومة في هذا المتصفح.');
    }
});

// تفعيل الانتقال إلى رابط البث عند الضغط على السلايد
const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        localStorage.setItem("link", "http://myhand.org:8080/live/10287622097915/SY8GKa8IyY/154695.ts");
        window.location.href = "http://127.0.0.1:5500/%D9%85%D8%B4%D8%BA%D9%84%20%D8%B3%D9%83%D8%A7%D9%8A%20%D9%84%D8%A7%D9%8A%D9%81%20%20(1).html";  // الانتقال للموقع الثاني
        
    });
});

