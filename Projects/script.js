(function() {
            // ========================
            // داده‌های نمونه برای کارت‌ها
            // ========================
            const cardsData = [
                {
                    id: 1,
                    img: 'img/1.jpg',
                    title: 'TrueScan Nexus – Multilayer Truth Verification Framework',
                    desc: 'A comprehensive, multi‑parametric truth assessment system integrating biosignals, micro‑expressive thermal patterns, behavioral dynamics, and machine‑learning inference models. TrueScan Nexus operates through hierarchical data fusion—physiological, behavioral, and contextual layers—to generate a probabilistic integrity score. The platform is designed for next‑generation lie detection, cognitive-load analysis, and human–machine trust interfaces.',
                    expanded: false
                },
                {
                    id: 2,
                    img: 'img/2.jpg',
                    title: 'AID‑BED – Autonomous & Intelligent Disposal Bed',
                    desc: 'A next‑generation smart hospital bed engineered for automated waste handling, continuous patient monitoring, motion assistance, and multi-tier safety management. The system merges electromechanical automation with biosensing and workflow logic to reduce contamination risks, improve hygiene, and enhance the safety and efficiency of clinical staff in high‑demand healthcare environments.',
                    expanded: false
                },
                {
                    id: 3,
                    img: 'img/3.jpg',
                    title: 'Gluco‑Vision – Non‑Invasive Salivary Glucose Monitoring Platform',
                    desc: 'A non‑invasive glucose‑monitoring solution utilizing nano‑biosensors, microfluidics, and physics‑informed AI models to estimate blood glucose levels from salivary biomarkers. Gluco‑Vision provides needle‑free glucose assessment with adaptive calibration and high sensitivity, enabling comfortable, continuous metabolic monitoring for diabetes management.',
                    expanded: false
                },
                {
                    id: 4,
                    img: 'img/4.jpg',
                    title: 'IAHM – Integrated Astronaut Health Monitoring System',
                    desc: 'A fully integrated, multi‑fluid health monitoring architecture tailored for long‑duration space missions. IAHM combines wearable and ingestible biosensors, hierarchical AI fusion models, and a Composite Health Index (CHI) to deliver predictive, real‑time assessments of astronaut physiological status under microgravity. The system focuses on early detection of cardiovascular, metabolic, and hydration-related anomalies.',
                    expanded: false
                },
                {
                    id: 5,
                    img: 'img/5.jpg',
                    title: 'Multimodal Non‑Invasive Glucose Estimation System',
                    desc: 'A machine‑learning–driven glucose estimation platform that analyzes PPG, ECG, skin temperature, and GSR signals to infer blood glucose levels without the need for blood sampling. The system leverages multimodal biosignal fusion, temporal modeling, and personalized calibration to enable continuous, comfortable glucose tracking.',
                    expanded: false
                },
                {
                    id: 6,
                    img: 'img/6.jpg',
                    title: 'Multimodal Cardiovascular Risk Prediction System',
                    desc: 'A predictive health analytics framework integrating ECG, heart-rate variability, sleep quality, physical activity, and additional physiological parameters to estimate early cardiovascular risks. Using temporal machine‑learning models, the system identifies early warning patterns for arrhythmias, hypertension, and acute cardiac events—enabling proactive, personalized prevention.',
                    expanded: false
                },
                {
                    id: 7,
                    img: 'img/7.jpg',
                    title: 'Metabolic Palm Scanner – SERS & Thermal Hybrid Analyzer',
                    desc: 'A handheld diagnostic device combining Surface‑Enhanced Raman Spectroscopy (SERS) with thermal micro‑pattern imaging to extract metabolic signatures from the palm. The system evaluates mitochondrial activity, oxidative stress levels, and metabolic health states through a dual‑modality sensing approach, offering a rapid, non‑invasive metabolic assessment.',
                    expanded: false
                },
                {
                    id: 8,
                    img: 'img/8.jpg',
                    title: 'Microbiota‑Watch Capsule – Early GI Cancer VOC Detector',
                    desc: 'A disposable ingestible capsule designed to detect volatile organic compounds (VOCs) associated with early‑stage gastrointestinal cancers. Leveraging advanced gas‑sensing arrays and on‑board analytics, the capsule identifies metabolic biomarkers linked to gastric, intestinal, and colorectal malignancies, enabling ultra‑early and non‑invasive cancer screening.',
                    expanded: false
                },
                {
                    id: 9,
                    img: 'img/9.jpg',
                    title: 'Smart Pre‑Drug Wound Patch – Closed‑Loop Therapeutic System',
                    desc: 'A bio‑responsive wound patch equipped with infection‑sensing micro‑biosensors and controlled drug‑release reservoirs. Upon detecting pathogenic biomarkers, the system autonomously administers therapeutic agents—such as antibiotics—in a closed‑loop fashion. This platform is designed for chronic wounds, diabetic ulcers, and infection‑prone injuries.',
                    expanded: false
                },
                {
                    id: 10,
                    img: 'img/10.jpg',
                    title: 'Gut Health Monitoring with Ingestible and Wearable Biosensors',
                    desc: 'An integrated gastrointestinal health tracking system that utilizes ingestible capsules and wearable sensors to measure pH, temperature, motility, and gas biomarkers. Data is processed through AI‑based pattern analysis to assess gut function, microbiome activity, and early signs of gastrointestinal disorders, enabling personalized digestive‑health monitoring.',
                    expanded: false
                },
                {
                    id: 11,
                    img: 'img/11.jpg',
                    title: 'Mental Health Monitoring via Sweat Biomarkers',
                    desc: 'A non‑invasive mental‑health assessment platform analyzing sweat‑based biomarkers such as cortisol, alpha‑amylase, and electrolytes. With temporal AI modeling, the system derives real‑time stress and anxiety indices, offering continuous emotional‑state monitoring for research, mental‑health management, and human–machine interaction studies.',
                    expanded: false
                }
            ];

            // ========================
            // ارجاعات DOM
            // ========================
            const cardsGrid = document.getElementById('cardsGrid');
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightboxImg');
            const closeLightboxBtn = document.getElementById('closeLightbox');

            // ========================
            // رویداد فول‌اسکرین (مودال)
            // ========================
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
                if (e.target === lightbox) closeLightbox();
            });
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                    closeLightbox();
                }
            });

            // ========================
            // ساخت یک کارت
            // ========================
            function createCardElement(cardData) {
                const card = document.createElement('div');
                card.className = 'card';
                card.setAttribute('data-card-id', cardData.id);

                // تصویر و دکمه فول‌اسکرین
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
                    </svg>`;
                fsBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openLightbox(cardData.img);
                });

                imgContainer.appendChild(img);
                imgContainer.appendChild(fsBtn);
                card.appendChild(imgContainer);

                // بدنه کارت
                const body = document.createElement('div');
                body.className = 'card-body';

                const titleEl = document.createElement('h3');
                titleEl.className = 'card-title';
                titleEl.textContent = cardData.title;

                const descWrapper = document.createElement('div');
                descWrapper.className = 'desc-wrapper';

                const descText = document.createElement('p');
                descText.className = 'desc-text';
                descText.textContent = cardData.desc;

                const toggleBtn = document.createElement('button');
                toggleBtn.className = 'toggle-desc';
                toggleBtn.textContent = cardData.expanded ? 'less' : 'more...';

                // منطق باز/بسته کردن توضیحات
                function setExpanded(state) {
                    cardData.expanded = state;
                    if (state) {
                        // تنظیم max-height به اندازه واقعی محتوا
                        descText.style.maxHeight = descText.scrollHeight + 'px';
                        descText.classList.add('expanded');
                        toggleBtn.textContent = 'less';
                    } else {
                        descText.style.maxHeight = '3.6em';
                        descText.classList.remove('expanded');
                        toggleBtn.textContent = 'more...';
                    }
                }

                toggleBtn.addEventListener('click', () => {
                    setExpanded(!cardData.expanded);
                });

                // اگر قبلاً باز بوده (در بازسازی بعد از تغییر اندازه)
                if (cardData.expanded) {
                    // به تأخیر نیاز داریم تا المنت در DOM باشد و scrollHeight محاسبه شود
                    // بنابراین بعد از اینکه کارت به DOM اضافه شد اجرا می‌شود (بیرون از تابع)
                }

                descWrapper.appendChild(descText);
                descWrapper.appendChild(toggleBtn);

                body.appendChild(titleEl);
                body.appendChild(descWrapper);
                card.appendChild(body);

                // ذخیره ارجاعات لازم برای اعمال حالت باز
                card._descText = descText;
                card._toggleBtn = toggleBtn;
                card._setExpanded = setExpanded;
                card._cardData = cardData;

                return card;
            }

            // ========================
            // چیدمان ستونی و واکنش‌گرا
            // ========================
            function getColumnCount() {
                const width = window.innerWidth;
                if (width < 768) return 1;
                if (width < 992) return 2;
                return 3;
            }

            let currentColumnCount = getColumnCount();

            function renderCards() {
                const colCount = getColumnCount();

                // اگر تعداد ستون‌ها تغییر نکرده باشد، نیازی به بازسازی نیست
                if (colCount === currentColumnCount && cardsGrid.children.length > 0) {
                    return;
                }
                currentColumnCount = colCount;

                // پاک‌سازی ظرف اصلی
                cardsGrid.innerHTML = '';

                // ایجاد ستون‌ها
                const columns = [];
                for (let i = 0; i < colCount; i++) {
                    const col = document.createElement('div');
                    col.className = 'column';
                    cardsGrid.appendChild(col);
                    columns.push(col);
                }

                // توزیع کارت‌ها به صورت ردیفی (row-major)
                cardsData.forEach((cardData, index) => {
                    const colIndex = index % colCount;
                    const cardEl = createCardElement(cardData);
                    columns[colIndex].appendChild(cardEl);

                    // اگر کارت قبلاً باز بوده، اکنون که در DOM قرار گرفته آن را باز کن
                    if (cardData.expanded) {
                        // استفاده از requestAnimationFrame برای اطمینان از رندر شدن
                        requestAnimationFrame(() => {
                            cardEl._setExpanded(true);
                        });
                    }
                });
            }

            // نخستین رندر
            renderCards();

            // رندر مجدد در صورت تغییر اندازه (با debounce ساده)
            let resizeTimer;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    renderCards();
                }, 150);
            });
        })();

        