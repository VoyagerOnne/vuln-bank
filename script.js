<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>БанкПрестиж - Надежный финансовый партнер</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- Заголовок -->
    <header class="header">
        <div class="container header-container">
            <div class="logo">
                <img src="images/g5928181c72657886cec515f005213071a9875e213ccf275b0017f21d102e0b5a04376e8b14e119fa4d7d092a894d10187bbb19ba1d1c46c4d8ee466755c42bd8_1280.png" alt="БанкПрестиж">
                <h1>БанкПрестиж</h1>
            </div>
            <nav class="nav-menu">
                <ul class="nav-list">
                    <li class="nav-item"><a href="#services" class="nav-link">Услуги</a></li>
                    <li class="nav-item"><a href="#about" class="nav-link">О нас</a></li>
                    <li class="nav-item"><a href="#features" class="nav-link">Преимущества</a></li>
                    <li class="nav-item"><a href="#testimonials" class="nav-link">Отзывы</a></li>
                    <li class="nav-item"><a href="#" class="nav-link" onclick="openModal('loginModal')">Вход</a></li>
                    <li class="nav-item"><a href="#" class="btn" onclick="openModal('registerModal')">Регистрация</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Главный раздел -->
    <section class="hero" id="hero">
        <div class="container">
            <div class="hero-content">
                <h2>Ваше финансовое будущее в надежных руках</h2>
                <p>БанкПрестиж предлагает инновационные финансовые решения, разработанные для вашего комфорта и успеха. Откройте новые возможности с нами.</p>
                <div class="hero-buttons">
                    <a href="#" class="btn">Открыть счет</a>
                    <a href="#" class="btn btn-outline">Узнать больше</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Услуги -->
    <section class="section services" id="services">
        <div class="container">
            <div class="section-title">
                <h2>Наши услуги</h2>
                <p>Мы предлагаем широкий спектр банковских услуг, которые помогут вам достичь ваших финансовых целей</p>
            </div>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-credit-card"></i>
                    </div>
                    <h3>Банковские карты</h3>
                    <p>Дебетовые и кредитные карты с кэшбэком, бонусами и специальными предложениями для любых потребностей.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-home"></i>
                    </div>
                    <h3>Ипотека</h3>
                    <p>Выгодные условия ипотечного кредитования с низкими процентными ставками и гибкими сроками погашения.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3>Инвестиции</h3>
                    <p>Инвестиционные продукты, разработанные для роста вашего капитала с учетом ваших целей и риск-профиля.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- О нас -->
    <section class="section about" id="about">
        <div class="container">
            <div class="section-title">
                <h2>О БанкПрестиж</h2>
                <p>Надежность, инновации и клиентоориентированность - основные ценности нашего банка</p>
            </div>
            <div class="about-content">
                <div class="about-image">
                    <img src="images/g1951d41f86e934bb84085420cce7daa5b492d3b4b4e198506ad54ab05ab6348e8e7efa8e7a2bb12ab48397f02a93214020507b8a1fbd0b69b92a8cba046b14b0_1280.jpeg" alt="О БанкПрестиж">
                </div>
                <div class="about-text">
                    <h3>Более 25 лет на финансовом рынке</h3>
                    <p>БанкПрестиж основан в 1998 году и за это время стал одним из лидеров банковской отрасли. Мы гордимся нашей историей и достижениями, которые стали возможны благодаря доверию наших клиентов.</p>
                    <p>Наша миссия - обеспечивать клиентов инновационными финансовыми решениями, которые помогают им достигать своих целей и строить устойчивое финансовое будущее.</p>
                    <div class="stats">
                        <div class="stat-item">
                            <div class="stat-number" data-value="5000000">5,000,000+</div>
                            <div class="stat-label">Клиентов</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" data-value="350">350+</div>
                            <div class="stat-label">Отделений</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" data-value="95">95%</div>
                            <div class="stat-label">Удовлетворенность</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Преимущества -->
    <section class="section features" id="features">
        <div class="container">
            <div class="section-title">
                <h2>Почему выбирают нас</h2>
                <p>Инновационные технологии, индивидуальный подход и надежность - вот что делает нас особенными</p>
            </div>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="feature-content">
                        <h3>Безопасность на высшем уровне</h3>
                        <p>Мы используем передовые технологии шифрования для защиты ваших данных и финансов.</p>
                    </div>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="feature-content">
                        <h3>Мобильный банкинг 24/7</h3>
                        <p>Управляйте финансами из любой точки мира с помощью нашего удобного мобильного приложения.</p>
                    </div>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-percentage"></i>
                    </div>
                    <div class="feature-content">
                        <h3>Выгодные условия</h3>
                        <p>Мы предлагаем конкурентные процентные ставки по вкладам и кредитам для всех клиентов.</p>
                    </div>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-headset"></i>
                    </div>
                    <div class="feature-content">
                        <h3>Круглосуточная поддержка</h3>
                        <p>Наша команда поддержки всегда готова помочь вам с любыми вопросами.</p>
                    </div>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-gift"></i>
                    </div>
                    <div class="feature-content">
                        <h3>Программа лояльности</h3>
                        <p>Получайте бонусы и специальные предложения за использование наших услуг.</p>
                    </div>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <div class="feature-content">
                        <h3>Быстрые операции</h3>
                        <p>Мгновенные платежи и переводы между счетами без задержек и комиссий.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Отзывы -->
    <section class="section testimonials" id="testimonials">
        <div class="container">
            <div class="section-title">
                <h2>Отзывы наших клиентов</h2>
                <p>Что говорят о нас люди, которые уже выбрали БанкПрестиж</p>
            </div>
            <div class="testimonial-slider">
                <div class="testimonial-card">
                    <div class="testimonial-text">
                        <p>"Я пользуюсь услугами БанкПрестиж уже 5 лет и очень доволен. Отличное обслуживание, удобное мобильное приложение и выгодные условия по кредитам. Рекомендую всем!"</p>
                    </div>
                    <div class="testimonial-author">
                        <div class="author-image">
                            <img src="images/g34ec311bf484b183dfd836ea2e4c1798aa60fc59cd9526acf9b8b324d1b03e74bc0fcadea35c4339f22122827dcdf572bb097af5e903e274081bfba8e717c9b6_1280.jpeg" alt="Александр">
                        </div>
                        <div class="author-info">
                            <h4>Александр Петров</h4>
                            <p>Предприниматель</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="testimonial-text">
                        <p>"Оформила ипотеку в БанкПрестиж по рекомендации друзей и не пожалела. Низкая процентная ставка, быстрое оформление и внимательный персонал. Теперь я рекомендую банк своим знакомым."</p>
                    </div>
                    <div class="testimonial-author">
                        <div class="author-image">
                            <img src="images/g34ec311bf484b183dfd836ea2e4c1798aa60fc59cd9526acf9b8b324d1b03e74bc0fcadea35c4339f22122827dcdf572bb097af5e903e274081bfba8e717c9b6_1280.jpeg" alt="Екатерина">
                        </div>
                        <div class="author-info">
                            <h4>Екатерина Смирнова</h4>
                            <p>Врач</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="testimonial-text">
                        <p>"Лучший банк для бизнеса! Пользуюсь расчетным счетом и эквайрингом от БанкПрестиж. Все работает без сбоев, комиссии ниже, чем у конкурентов, а поддержка отвечает моментально."</p>
                    </div>
                    <div class="testimonial-author">
                        <div class="author-image">
                            <img src="images/g34ec311bf484b183dfd836ea2e4c1798aa60fc59cd9526acf9b8b324d1b03e74bc0fcadea35c4339f22122827dcdf572bb097af5e903e274081bfba8e717c9b6_1280.jpeg" alt="Дмитрий">
                        </div>
                        <div class="author-info">
                            <h4>Дмитрий Иванов</h4>
                            <p>Владелец магазина</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Призыв к действию -->
    <section class="cta">
        <div class="container">
            <h2>Станьте клиентом БанкПрестиж уже сегодня</h2>
            <p>Присоединяйтесь к миллионам наших довольных клиентов и откройте новые финансовые возможности с БанкПрестиж</p>
            <a href="#" class="btn" onclick="openModal('registerModal')">Открыть счет</a>
        </div>
    </section>

    <!-- Подвал -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-column">
                    <h3>О банке</h3>
                    <ul class="footer-menu">
                        <li><a href="#">История</a></li>
                        <li><a href="#">Руководство</a></li>
                        <li><a href="#">Карьера</a></li>
                        <li><a href="#">Пресс-центр</a></li>
                        <li><a href="#">Инвесторам</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Услуги</h3>
                    <ul class="footer-menu">
                        <li><a href="#">Кредиты</a></li>
                        <li><a href="#">Вклады</a></li>
                        <li><a href="#">Карты</a></li>
                        <li><a href="#">Ипотека</a></li>
                        <li><a href="#">Инвестиции</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Помощь</h3>
                    <ul class="footer-menu">
                        <li><a href="#">Вопросы и ответы</a></li>
                        <li><a href="#">Тарифы</a></li>
                        <li><a href="#">Безопасность</a></li>
                        <li><a href="#">Документы</a></li>
                        <li><a href="#">Обратная связь</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Контакты</h3>
                    <ul class="footer-contact">
                        <li><i class="fas fa-map-marker-alt contact-icon"></i> Москва, ул. Банковская, 123</li>
                        <li><i class="fas fa-phone contact-icon"></i> 8 (800) 123-45-67</li>
                        <li><i class="fas fa-envelope contact-icon"></i> info@bankprestige.ru</li>
                    </ul>
                    <div class="footer-social">
                        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 БанкПрестиж. Все права защищены. Лицензия ЦБ РФ №1234</p>
            </div>
        </div>
    </footer>

    <!-- Модальное окно для входа -->
    <div class="modal" id="loginModal">
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal('loginModal')">&times;</span>
            <h2>Вход в личный кабинет</h2>
            <form class="login-form">
                <div class="form-group">
                    <label for="login-email">Email</label>
                    <input type="email" id="login-email" required>
                </div>
                <div class="form-group">
                    <label for="login-password">Пароль</label>
                    <input type="password" id="login-password" required>
                </div>
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" id="remember-me">
                        <span>Запомнить меня</span>
                    </label>
                </div>
                <button type="submit" class="btn">Войти</button>
                <p class="form-footer">Забыли пароль? <a href="#">Восстановить</a></p>
            </form>
        </div>
    </div>

    <!-- Модальное окно для регистрации -->
    <div class="modal" id="registerModal">
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal('registerModal')">&times;</span>
            <h2>Регистрация</h2>
            <form class="register-form">
                <div class="form-group">
                    <label for="register-name">Имя</label>
                    <input type="text" id="register-name" required>
                </div>
                <div class="form-group">
                    <label for="register-email">Email</label>
                    <input type="email" id="register-email" required>
                </div>
                <div class="form-group">
                    <label for="register-phone">Телефон</label>
                    <input type="tel" id="register-phone" required>
                </div>
                <div class="form-group">
                    <label for="register-password">Пароль</label>
                    <input type="password" id="register-password" required>
                </div>
                <div class="form-group">
                    <label for="register-confirm-password">Подтвердите пароль</label>
                    <input type="password" id="register-confirm-password" required>
                </div>
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" id="terms" required>
                        <span>Я согласен с <a href="#">условиями</a> и <a href="#">политикой конфиденциальности</a></span>
                    </label>
                </div>
                <button type="submit" class="btn">Зарегистрироваться</button>
            </form>
        </div>
    </div>

    <script src="js/script.js"></script>
</body>
</html>
CSS код (styles.css)
/* Банковский сайт - основные стили */

:root {
  --primary-color: #1a4b8c;
  --secondary-color: #0071bc;
  --accent-color: #ffb81c;
  --text-dark: #333333;
  --text-light: #ffffff;
  --text-medium: #777777;
  --background-light: #f8f9fa;
  --background-dark: #1a4b8c;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', Arial, sans-serif;
  line-height: 1.6;
  color: var(--text-dark);
  background-color: var(--background-light);
}

a {
  text-decoration: none;
  color: var(--secondary-color);
  transition: var(--transition);
}

a:hover {
  color: var(--primary-color);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Заголовок */
.header {
  background-color: var(--background-dark);
  color: var(--text-light);
  box-shadow: var(--shadow);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.logo h1 {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-light);
}

.nav-menu {
  display: flex;
}

.nav-list {
  display: flex;
  list-style: none;
}

.nav-item {
  margin-left: 30px;
}

.nav-link {
  color: var(--text-light);
  font-weight: 500;
  position: relative;
}

.nav-link:hover {
  color: var(--accent-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: var(--accent-color);
  transition: var(--transition);
}

.nav-link:hover::after {
  width: 100%;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--accent-color);
  color: var(--text-dark);
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.btn:hover {
  background-color: #e9a600;
  transform: translateY(-2px);
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
}

.btn-outline:hover {
  background-color: var(--accent-color);
  color: var(--text-dark);
}

/* Главный раздел */
.hero {
  background: linear-gradient(rgba(26, 75, 140, 0.8), rgba(26, 75, 140, 0.9)), url('../images/g6d58665ac8aff42b74c863f2c9ee29df43172f2fb3c73e1768ee26a58ad4f24bd60808e644d7db93bdd0f14df0d525061e40daa243875999b5757214eb9b47c0_1280.jpeg');
  background-size: cover;
  background-position: center;
  color: var(--text-light);
  padding: 180px 0 100px;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h2 {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 20px;
  margin-bottom: 30px;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* Секции */
.section {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 36px;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.section-title p {
  color: var(--text-medium);
  max-width: 700px;
  margin: 0 auto;
}

/* Сервисы */
.services {
  background-color: #ffffff;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.service-card {
  background-color: var(--background-light);
  border-radius: 8px;
  padding: 30px;
  box-shadow: var(--shadow);
  transition: var(--transition);
  text-align: center;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.service-icon {
  background-color: var(--primary-color);
  color: var(--text-light);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 30px;
}

.service-card h3 {
  margin-bottom: 15px;
  color: var(--primary-color);
}

/* О нас */
.about {
  background-color: var(--background-light);
}

.about-content {
  display: flex;
  align-items: center;
  gap: 50px;
}

.about-image {
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.about-image img {
  width: 100%;
  height: auto;
  display: block;
}

.about-text {
  flex: 1;
}

.about-text h3 {
  font-size: 28px;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.about-text p {
  margin-bottom: 20px;
}

.stats {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}

.stat-item {
  flex: 1;
  text-align: center;
}

.stat-number {
  font-size: 36px;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 10px;
}

.stat-label {
  color: var(--text-medium);
}

/* Функции и преимущества */
.features {
  background-color: #ffffff;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  display: flex;
  gap: 20px;
}

.feature-icon {
  font-size: 24px;
  color: var(--primary-color);
  min-width: 50px;
}

.feature-content h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: var(--primary-color);
}

/* Отзывы */
.testimonials {
  background-color: var(--background-light);
}

.testimonial-slider {
  padding: 20px 0;
}

.testimonial-card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: var(--shadow);
  margin: 20px;
}

.testimonial-text {
  font-style: italic;
  margin-bottom: 20px;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
}

.author-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info h4 {
  font-weight: 600;
}

.author-info p {
  color: var(--text-medium);
  font-size: 14px;
}

/* Призыв к действию */
.cta {
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  color: var(--text-light);
  text-align: center;
  padding: 80px 0;
}

.cta h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.cta p {
  font-size: 18px;
  margin-bottom: 30px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* Подвал */
.footer {
  background-color: var(--background-dark);
  color: var(--text-light);
  padding: 60px 0 30px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-column h3 {
  font-size: 18px;
  margin-bottom: 20px;
  position: relative;
}

.footer-column h3::after {
  content: '';
  position: absolute;
  width: 40px;
  height: 3px;
  background-color: var(--accent-color);
  bottom: -10px;
  left: 0;
}

.footer-menu {
  list-style: none;
}

.footer-menu li {
  margin-bottom: 10px;
}

.footer-menu a {
  color: #cccccc;
  transition: var(--transition);
}

.footer-menu a:hover {
  color: var(--accent-color);
  padding-left: 5px;
}

.footer-contact li {
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
}

.contact-icon {
  margin-right: 10px;
  min-width: 20px;
  color: var(--accent-color);
}

.footer-social {
  display: flex;
  gap: 15px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: var(--transition);
}

.social-icon:hover {
  background-color: var(--accent-color);
  transform: translateY(-5px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  text-align: center;
  font-size: 14px;
  color: #aaaaaa;
}

/* Адаптивная верстка */
@media (max-width: 992px) {
  .hero h2 {
    font-size: 36px;
  }
  
  .about-content {
    flex-direction: column;
  }
  
  .about-image, .about-text {
    flex: 1 1 100%;
  }
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    padding: 15px;
  }
  
  .logo {
    margin-bottom: 15px;
  }
  
  .nav-item {
    margin-left: 15px;
  }
  
  .hero {
    padding: 150px 0 80px;
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: 10px;
  }
  
  .section {
    padding: 60px 0;
  }
  
  .stats {
    flex-direction: column;
    gap: 20px;
  }
}

@media (max-width: 576px) {
  .nav-list {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .nav-item {
    margin: 5px 10px;
  }
  
  .hero h2 {
    font-size: 28px;
  }
  
  .hero p {
    font-size: 16px;
  }
  
  .section-title h2 {
    font-size: 28px;
  }
}

/* Модальные окна */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1500;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 90%;
  padding: 40px;
  position: relative;
}

.close-modal {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 28px;
  cursor: pointer;
  color: #aaaaaa;
  transition: var(--transition);
}

.close-modal:hover {
  color: var(--primary-color);
}

.modal-content h2 {
  margin-bottom: 25px;
  color: var(--primary-color);
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 16px;
  transition: var(--transition);
}

.form-group input:focus {
  border-color: var(--secondary-color);
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 113, 188, 0.2);
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkbox-label input {
  margin-right: 10px;
  width: auto;
}

.form-footer {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
}

/* Кнопки навигации для слайдера отзывов */
.testimonial-navigation {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.testimonial-nav {
  width: 50px;
  height: 50px;
  background-color: var(--primary-color);
  color: var(--text-light);
  border: none;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  transition: var(--transition);
}

.testimonial-nav:hover {
  background-color: var(--secondary-color);
  transform: scale(1.1);
}

/* Стили для полей с ошибками */
.error {
  border-color: #ff3b30 !important;
  background-color: rgba(255, 59, 48, 0.05);
}

.success-message {
  background-color: #4cd964;
  color: white;
  padding: 10px;
  border-radius: 4px;
  margin-top: 20px;
  text-align: center;
}

/* Адаптивные стили для мобильного меню */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: var(--text-light);
  transition: var(--transition);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: var(--background-dark);
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    transition: var(--transition);
    z-index: 999;
  }
  
  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
  }
  
  .nav-list {
    flex-direction: column;
    align-items: center;
  }
  
  .nav-item {
    margin: 10px 0;
  }
  
  .modal-content {
    padding: 30px 20px;
  }
}
JavaScript код (script.js)
// Банковский сайт - основные скрипты

// Инициализация при загрузке документа
document.addEventListener('DOMContentLoaded', function() {
    // Фиксированная навигация при прокрутке
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Счетчики статистики
    const statElements = document.querySelectorAll('.stat-number');
    if (statElements.length > 0) {
        const statsSection = document.querySelector('.stats');
        
        const animateStats = function() {
            statElements.forEach(stat => {
                const targetValue = parseInt(stat.getAttribute('data-value'));
                const duration = 2000; // 2 секунды для анимации
                const startTime = Date.now();
                let currentValue = 0;
                
                function updateCounter() {
                    const elapsedTime = Date.now() - startTime;
                    if (elapsedTime < duration) {
                        const progress = elapsedTime / duration;
                        currentValue = Math.floor(targetValue * progress);
                        stat.textContent = currentValue.toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        stat.textContent = targetValue.toLocaleString();
                    }
                }
                
                updateCounter();
            });
        };
        
        // Запуск анимации при прокрутке до секции
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
    
    // Простой слайдер для отзывов
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        const testimonials = testimonialSlider.querySelectorAll('.testimonial-card');
        let currentIndex = 0;
        
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = i === index ? 'block' : 'none';
            });
        }
        
        // Показываем первый отзыв при загрузке
        showTestimonial(currentIndex);
        
        // Кнопки для навигации по отзывам
        const prevButton = document.createElement('button');
        prevButton.classList.add('testimonial-nav', 'prev');
        prevButton.innerHTML = '&larr;';
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentIndex);
        });
        
        const nextButton = document.createElement('button');
        nextButton.classList.add('testimonial-nav', 'next');
        nextButton.innerHTML = '&rarr;';
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        });
        
        const navContainer = document.createElement('div');
        navContainer.classList.add('testimonial-navigation');
        navContainer.appendChild(prevButton);
        navContainer.appendChild(nextButton);
        testimonialSlider.appendChild(navContainer);
        
        // Автоматическое переключение отзывов
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }, 5000);
    }
    
    // Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Форма отправки сообщения
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Простая валидация формы
            const inputs = contactForm.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.remove('error');
                }
                
                if (input.type === 'email' && input.value) {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(input.value)) {
                        input.classList.add('error');
                        isValid = false;
                    }
                }
            });
            
            if (isValid) {
                // Имитация отправки формы
                const submitButton = contactForm.querySelector('button[type="submit"]');
                submitButton.disabled = true;
                submitButton.textContent = 'Отправка...';
                
                setTimeout(() => {
                    contactForm.reset();
                    submitButton.disabled = false;
                    submitButton.textContent = 'Отправить';
                    
                    // Показать сообщение об успешной отправке
                    const successMessage = document.createElement('div');
                    successMessage.classList.add('success-message');
                    successMessage.textContent = 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.';
                    contactForm.appendChild(successMessage);
                    
                    setTimeout(() => {
                        successMessage.remove();
                    }, 5000);
                }, 1500);
            }
        });
    }
});

// Модальные окна для кнопок Вход и Регистрация
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Закрытие модального окна при клике вне его содержимого
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = '';
    }
});
