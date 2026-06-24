(function() {
            const cardsData = [
                {
                    id: 1,
                    img: 'img/1.jpg',
                    title: 'Integrating biochemical and physiological sensors into a TRUE SCAN NEXUS system: A step towards an intelligent multiparameter polygraph based on artificial intelligence'
                },
                {
                    id: 2,
                    img: 'img/2.jpg',
                    title: 'Multi-parameter intelligent polygraph: integrating physiological and biochemical sensors with machine learning algorithms'
                },
                {
                    id: 3,
                    img: 'img/3.jpg',
                    title: 'Design and construction of a multi-parameter polygraph for stress detection based on biochemical physiological sensors'
                },
                {
                    id: 4,
                    img: 'img/4.jpg',
                    title: 'TRUE SCAN NEXUS Multi-parameter polygraph device with integration of physiological and biochemical signals based on artificial intelligence'
                }
            ];

            const cardsGrid = document.getElementById('cardsGrid');
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightboxImg');
            const closeLightboxBtn = document.getElementById('closeLightbox');

            function openLightbox(imgUrl) {
                lightboxImg.src = imgUrl;
                lightbox.classList.add('active');
            }

            function closeLightbox() {
                lightbox.classList.remove('active');
                lightboxImg.src = '';
            }

            closeLightboxBtn.addEventListener('click', closeLightbox);

            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });

            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                    closeLightbox();
                }
            });

            function createCardElement(cardData) {
                const card = document.createElement('div');
                card.className = 'card';
                card.setAttribute('data-card-id', cardData.id);

                const imgContainer = document.createElement('div');
                imgContainer.className = 'card-image';

                const img = document.createElement('img');
                img.src = cardData.img;
                img.alt = cardData.title;
                img.loading = 'lazy';

                const fsBtn = document.createElement('button');
                fsBtn.className = 'fullscreen-btn';
                fsBtn.setAttribute('aria-label', 'مشاهده تمام‌صفحه');
                fsBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <polyline points="9 21 3 21 3 15"></polyline>
                        <line x1="21" y1="3" x2="14" y2="10"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                `;

                fsBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    openLightbox(cardData.img);
                });

                imgContainer.addEventListener('click', function() {
                    openLightbox(cardData.img);
                });

                imgContainer.appendChild(img);
                imgContainer.appendChild(fsBtn);

                const body = document.createElement('div');
                body.className = 'card-body';

                const titleEl = document.createElement('h3');
                titleEl.className = 'card-title';
                titleEl.textContent = cardData.title;

                body.appendChild(titleEl);
                card.appendChild(imgContainer);
                card.appendChild(body);

                return card;
            }

            function getColumnCount() {
                const width = window.innerWidth;
                if (width < 768) return 1;
                if (width < 992) return 2;
                return 3;
            }

            let currentColumnCount = 0;

            function renderCards() {
                const colCount = getColumnCount();
                currentColumnCount = colCount;

                cardsGrid.innerHTML = '';

                const columns = [];
                for (let i = 0; i < colCount; i++) {
                    const col = document.createElement('div');
                    col.className = 'column';
                    cardsGrid.appendChild(col);
                    columns.push(col);
                }

                cardsData.forEach(function(cardData, index) {
                    const colIndex = index % colCount;
                    const cardEl = createCardElement(cardData);
                    columns[colIndex].appendChild(cardEl);
                });
            }

            renderCards();

            let resizeTimer;
            window.addEventListener('resize', function() {
                const newColumnCount = getColumnCount();
                if (newColumnCount === currentColumnCount) return;

                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function() {
                    renderCards();
                }, 150);
            });
        })();