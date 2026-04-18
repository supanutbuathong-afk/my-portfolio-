// ท่อนที่ 1: ผู้จัดการสั่งลูกน้องไปหารายชื่อของที่ต้องทำแอนิเมชัน
const hiddenElements = document.querySelectorAll('.fade-left, .fade-right');

// ท่อนที่ 2: สร้างพี่ยาม และกำหนดหน้าที่ให้พี่ยาม

//IntersectionObserverเป็นตัวดูว่าองค์ประกอบที่เราสนใจ (ในที่นี้คือ .fade-left และ .fade-right) ปรากฏอยู่ในหน้าจอของผู้ใช้หรือไม่ ถ้าใช่ พี่ยามจะสั่งให้แสดงแอนิเมชันโดยการเพิ่มคลาส 'show' ให้กับองค์ประกอบนั้นๆ
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 }); // 🌟 0.2 หมายถึง ต้องให้ของชิ้นนั้นโผล่เข้ามาในจออย่างน้อย 20% ก่อน ค่อยเล่นแอนิเมชัน!

// ท่อนที่ 3: เอารายชื่อไปให้พี่ยาม แล้วบอกให้ "เริ่มเฝ้าได้!"
//observeเป็นเมธอดของ IntersectionObserver ที่ใช้ในการเริ่มเฝ้าดูองค์ประกอบที่เราสนใจ โดยเราจะส่งองค์ประกอบที่ต้องการเฝ้าดูเข้าไปในเมธอดนี้
hiddenElements.forEach((el) => observer.observe(el));
console.log("%c🛑 Hold up! This portfolio was coded from scratch by                              ศุภณัฐ บัวทอง", "color: #14F195; font-size: 16px; font-weight: bold;");