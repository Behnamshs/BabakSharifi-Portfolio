document.addEventListener('DOMContentLoaded', () => {
    // وقتی DOM کاملاً لود شد
    const body = document.body;
    // بلافاصله بعد از لود شدن DOM، کلاس is-visible رو اضافه میکنیم
    // این باعث میشه انیمیشن opacity از 0 به 1 اجرا بشه
    body.classList.add('is-visible'); 
});
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    body.classList.add('is-visible'); 

    const columns = document.querySelectorAll('.grid-wrap .column');
    columns.forEach((column, index) => {
        setTimeout(() => {
            column.classList.add('is-visible');
        }, 100 * index + 800); 
    });

    // --- انیمیشن برای عکس پروفایل ---
    const profilePicture = document.querySelector('.picture');
    if (profilePicture) {
        // اینجا یه تأخیر بیشتر میدیم تا بعد از انیمیشن body و columns اجرا بشه
        setTimeout(() => { 
            profilePicture.classList.add('is-visible');
        }, 200); // مثلاً 1.2 ثانیه بعد از شروع لود صفحه
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // انیمیشن کلی صفحه (body) همچنان موقع لود اجرا میشه
    const body = document.body;
    body.classList.add('is-visible'); 

    // انیمیشن عکس پروفایل (اختیاری، اگر میخوای همچنان اجرا بشه)
    const profilePicture = document.querySelector('.picture');
    if (profilePicture) {
        setTimeout(() => { 
            profilePicture.classList.add('is-visible');
        }, 1200); // تأخیر زمانی برای ظاهر شدن عکس
    }

    // --- روش جدید پیاده‌سازی Intersection Observer برای column ها ---

    const columns = document.querySelectorAll('.grid-wrap .column');

    // فانکشن (callback) که وقتی المان‌ها وارد یا خارج از دید میشن صدا زده میشه
    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            // اگر المان وارد viewport شد و هنوز کلاس is-visible رو نداره
            if (entry.isIntersecting && !entry.target.classList.contains('is-visible')) {
                entry.target.classList.add('is-visible');
                // اگه میخوای فقط یک بار انیمیشن اتفاق بیفته، میتونی اینجا unobserve کنی
                // اگر میخوای هر بار که وارد دید شد انیمیشن اجرا بشه، این خط رو حذف کن
                observer.unobserve(entry.target); 
            }
            // اگه خارج شد و میخوای دوباره انیمیشن اجرا بشه وقتی برگشت
            // else if (!entry.isIntersecting && entry.target.classList.contains('is-visible')) {
            //     entry.target.classList.remove('is-visible');
            // }
        });
    };

    // تنظیمات Intersection Observer
    const observerOptions = {
        root: null, // viewport رو به عنوان ریشه در نظر میگیره
        rootMargin: '0px', // هیچ حاشیه‌ای اضافه نمیشه
        threshold: 0.1 // وقتی 10% از المان وارد viewport بشه، callback اجرا بشه
    };

    // ساخت آبجکت Observer
    const columnObserver = new IntersectionObserver(handleIntersect, observerOptions);

    // برای هر column، observer رو فعال کن
    columns.forEach(column => {
        columnObserver.observe(column);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // ... کدهای قبلی (انیمیشن body، profilePicture، Intersection Observer) ...

    // --- منطق تغییر تم (Dark/Light Mode) ---
    const themeSwitcher = document.getElementById('theme-switcher');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const body = document.body; // body رو از قبل داشتیم

    // چک کردن حالت فعلی از localStorage (اگه قبلاً ذخیره شده باشه)
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark-mode') {
        body.classList.add('dark-mode');
        sunIcon.classList.remove('active');
        moonIcon.classList.add('active');
    } else {
        // مطمئن میشیم که آیکون خورشید فعاله اگه تم dark-mode نیست
        sunIcon.classList.add('active');
        moonIcon.classList.remove('active');
    }

    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('dark-mode'); // کلاس dark-mode رو اضافه/حذف میکنه

        // تغییر آیکون
        if (body.classList.contains('dark-mode')) {
            sunIcon.classList.remove('active');
            moonIcon.classList.add('active');
            localStorage.setItem('theme', 'dark-mode'); // ذخیره در localStorage
        } else {
            moonIcon.classList.remove('active');
            sunIcon.classList.add('active');
            localStorage.setItem('theme', 'light-mode'); // ذخیره در localStorage
        }
    });
});