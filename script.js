// 标签页切换功能
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.pub-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有活动状态
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // 添加新的活动状态
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // BibTeX 切换功能
    const bibtexBtns = document.querySelectorAll('.bibtex-btn');
    bibtexBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const bibtexContent = e.target.closest('.pub-details').querySelector('.bibtex-content');
            if (bibtexContent.style.display === 'none') {
                bibtexContent.style.display = 'block';
            } else {
                bibtexContent.style.display = 'none';
            }
        });
    });

    // 添加 Abstract 展开折叠功能
    const abstractBtns = document.querySelectorAll('.abstract-btn');
    abstractBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const abstract = btn.nextElementSibling;
            const icon = btn.querySelector('i');
            if (abstract.classList.contains('show')) {
                abstract.classList.remove('show');
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
                btn.querySelector('span').textContent = 'Show Abstract';
            } else {
                abstract.classList.add('show');
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
                btn.querySelector('span').textContent = 'Hide Abstract';
            }
        });
    });
});

// 初始化轮播图
const hobbySwiper = new Swiper('.hobby-swiper', {
    // 循环模式
    loop: true,
    
    // 自动播放
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    // 分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    // 导航按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // 渐变效果
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
}); 