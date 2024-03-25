<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__row">
        <div class="footer__column-logo">
          <div class="footer__logo">
            <span class="footer__logo-name">
              <my-image
                class="footer-logo"
                :alt="'helicon'"
                :floder="'src'"
                :imgName="'footer-logo'"
                :mobile="false"
              /> </span
            ><span class="footer__logo-border"></span
            ><span class="footer__logo-info"
              >Официальный сайт производителя</span
            >
          </div>
          <a class="footer__phone" href="tel:88002505932">8 800 250 59 32</a
          ><span class="footer__text">Телефон горячей линии</span>
        </div>
        <div class="footer__column-info">
          <p class="footer__info">
            <span>ИНН:</span> 432500888349<br /><span>ОГРНИП:</span>
            314744919000039
          </p>
          <p class="footer__info">
            <span>Адрес почтовый (фактический):</span><br />610006,
            г.&nbsp;Киров, Октябрьский&nbsp;пр-т, д.&nbsp;24
          </p>
          <p class="footer__info">
            <span>Для корреспонденции: </span>610000, а/я&nbsp;154
          </p>
        </div>
        <div class="footer__column-links">
          <ul class="footer__list">
            <li class="footer__item">
              <a target="_blank" class="footer__link" href=""
                >Политика конфиденциальности</a
              >
            </li>
            <li class="footer__item">
              <a target="_blank" class="footer__link" href="">Договор оферты</a>
            </li>
          </ul>
          <a href="" class="button footer__btn">
            {{ !opt ? "Купить оптом" : "Купить в розницу" }}</a
          >
        </div>
      </div>
    </div>
    <div class="footer__border"></div>
    <div class="container">
      <p class="footer__copyright">
        © 2010 - 2023 apparat-dionis.ru Все права защищены.<br />Использование
        материалов разрешено только с согласия правообладателей. Полное или
        частичное копирование сайта запрещено и преследуется по закону.
      </p>
    </div>
  </footer>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
export default {
  components: { MyImage },
  props: {
    opt: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss">
.footer {
  padding: 60px 0 30px 0;
  background: #2f2f2f;
  @media (max-width: 575px) {
    padding: 30px 0;
  }
  &__row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    // gap: 170px;
    margin-bottom: 68px;
    @media (max-width: 1280px) {
      gap: 30px;
      margin-bottom: 38px;
    }
    @media (max-width: 991px) {
      flex-wrap: wrap;
      max-width: 700px;
      margin: 0 auto 30px auto;
    }
    @media (max-width: 768px) {
      gap: 20px;
      flex-direction: column;
    }
  }
  &__column-logo {
    // flex-grow: 1;
    flex-shrink: 0;
    padding-top: 15px;
    @media (max-width: 1280px) {
      flex-grow: 0;
    }
    @media (max-width: 991px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 0 1 100%;
    }
    @media (max-width: 768px) {
      align-items: flex-start;
      padding-bottom: 5px;
    }
  }
  &__column-info,
  &__column-links {
    @media (max-width: 991px) {
      flex: 0 1 calc(50% - 15px);
    }
    @media (max-width: 575px) {
      flex: 0 1 100%;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 50px;
    @media (max-width: 575px) {
      margin-bottom: 20px;
    }

    .footer-logo {
      max-width: 189px;
      width: 100%;

      @media (max-width: 1280px) {
        max-width: 159px;
      }

      @media (max-width: 768px) {
        max-width: 130px;
      }
    }

    img {
      max-width: 100%;
      width: 100%;
    }
  }
  &__logo-name {
    font-family: "Gilroy";
    font-weight: 900;
    font-size: 52px;
    line-height: 1;
    letter-spacing: 0.01em;
    color: #ffffff;
    @media (max-width: 575px) {
      font-size: 32px;
    }
  }
  &__logo-border {
    display: block;
    height: 38px;
    width: 1px;
    background: #9b9b9b;
    @media (max-width: 575px) {
      height: 30px;
    }
  }
  &__logo-info {
    max-width: 155px;
    font-family: "Inter";
    font-weight: 200;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    @media (max-width: 575px) {
      font-size: 12px;
      line-height: 15px;
    }
  }

  &__phone {
    font-size: 32px;
    font-family: "Roboto";
    font-weight: 600;
    color: #ffffff;
    transition: 0.3s opacity ease;
    &:hover {
      opacity: 0.5;
    }

    @media (max-width: 575px) {
      margin-top: 5px;
      font-size: 20px;
    }
  }
  &__text {
    display: block;
    font-family: "Roboto";
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    font-weight: 300;
    @media (max-width: 575px) {
      font-size: 14px;
    }
  }
  &__info {
    font-family: "Inter";
    color: rgba(255, 255, 255, 0.7);
    font-size: 18px;
    line-height: 25px;
    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 140%;
    }
    span {
      color: rgba(255, 255, 255, 1);
    }
  }
  &__info:first-child {
    margin-bottom: 50px;
    @media (max-width: 991px) {
      margin-bottom: 30px;
    }
    @media (max-width: 575px) {
      margin-bottom: 20px;
    }
  }
  &__info:last-child {
    margin-top: 30px;
    @media (max-width: 575px) {
      margin-top: 20px;
    }
  }
  &__item:not(:last-child) {
    margin-bottom: 15px;
  }
  &__link {
    font-family: "Inter";
    font-size: 18px;
    color: #ffffff;
    text-decoration-line: underline;
    transition: 0.3s opacity ease;
    &:hover {
      opacity: 0.5;
    }
    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 140%;
    }
  }
  &__btn {
    margin-top: 50px;

    @media (max-width: 1280px) {
      width: 100%;
    }
    @media (max-width: 575px) {
      max-width: 205px;
      margin-top: 20px;
    }
  }
  &__border {
    height: 1px;
    background: #fff;
    opacity: 0.1;
  }
  &__copyright {
    align-self: flex-start;
    font-family: "Inter";
    max-width: 479px;
    margin-top: 30px;
    font-size: 12px;
    line-height: 140%;
    color: #ffffff;
    @media (max-width: 575px) {
      font-size: 10px;
    }
  }
}
</style>