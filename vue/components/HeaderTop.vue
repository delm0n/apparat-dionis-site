<template>
  <div class="header-top" :class="{ 'header-top--scroll': scroll }">
    <div class="container">
      <div class="header-top__wrap">
        <div class="header-top__logo">
          <picture>
            <source srcset="build/images/src/logo.webp" type="image/webp" />
            <img src="build/images/src/logo.png" alt="Логотип Helicon" />
          </picture>
          <p>
            Официальный сайт <br />
            завода-производителя
          </p>
        </div>

        <div class="header-top__nav">
          <ul
            ref="menu"
            class="menu-list"
            v-bind:class="{ 'menu-list--open': burger }"
          >
            <li v-for="(item, index) in navigations" v-bind:key="index">
              <p
                v-on:click="scrollToSection(item.selector)"
                v-text="item.name"
              ></p>
            </li>

            <li class="mobile-phone">
              <a class="header-top__contact-phone" href="tel:88002505932">{{
                getPhone
              }}</a>
              <div class="header-top__contact-button" @click="openModalCall()">
                Заказать звонок
              </div>
            </li>
          </ul>
        </div>

        <div class="header-top__contact">
          <a href="tel:88002505932" class="header-top__contact-phone">{{
            getPhone
          }}</a>

          <div class="header-top__contact-button" @click="openModalCall()">
            Заказать звонок
          </div>

          <div
            class="burger-container"
            :class="{ 'burger-container--open': burger }"
            @click="burger = !burger"
          >
            <div class="burger" v-bind:class="{ 'burger--open': burger }">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      scroll: false,
      burger: false,
      navigations: [
        {
          name: "Преимущества",
          selector: "#compare",
        },

        {
          name: "Отзывы",
          selector: "#review",
        },

        {
          name: "Доставка и оплата",
          selector: "#tinkoff-block",
        },

        {
          name: "О производителе",
          selector: "#made",
        },
      ],
    };
  },
  computed: mapGetters(["getPhone"]),
  created() {
    window.addEventListener("scroll", () => {
      this.scroll = window.pageYOffset < 30 ? false : true;
    });
  },

  methods: {
    ...mapMutations(["openModalSuccessManager"]),

    scrollToSection(selector) {
      this.gsap.to(window, {
        duration: 1.5,
        // добавить в +
        scrollTo: { y: selector },

        // scrollTo:
        //   document.querySelector(selector).offsetTop -
        //   document.querySelector(selector).offsetHeight,
      });
      this.burger = false;
    },

    openModalCall() {
      this.openModalSuccessManager();

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#modal-call",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

@mixin flex-center-x($gap) {
  display: flex;
  align-items: center;
  column-gap: $gap;
}

.header-top {
  position: fixed;
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
  transition: all 0.4s ease-in-out;

  z-index: 20;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 576px) {
    padding: 0 10px;
  }

  // &--scroll {
  //   box-shadow: 0 7px 9px 1px transparentize(#323232, 0.95);
  // }

  &__wrap {
    display: flex;
    align-items: center;
    column-gap: 10px;
    justify-content: space-between;
    height: 100px;
    // position: relative;

    @media (max-width: 768px) {
      height: 70px;
    }
  }

  &__logo {
    @include flex-center-x(20px);

    p {
      white-space: nowrap;
      position: relative;
      color: #292929;
      font-family: "Inter";
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 20px;

      &:before {
        content: "";
        position: absolute;
        left: -10px;
        width: 1px;
        height: 38px;
        background: #9b9b9b;
        top: 50%;
        transform: translateY(-50%);
      }

      @media (max-width: 1750px) and (min-width: 1360px) {
        display: none;
      }

      @media (max-width: 768px) {
        font-size: 12px;
        line-height: 130%;
        margin-left: 10px;
      }

      @media (max-width: 576px) {
        display: none;
      }
    }

    img {
      max-width: 189px;
      @media (max-width: 576px) {
        max-width: 130px;
      }
    }
  }

  &__contact {
    &-phone {
      display: block;
      white-space: nowrap;
      transition: all 0.4s;
      color: #292929;
      text-align: right;
      font-family: "Roboto";
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.32px;

      &:hover {
        color: #5d68a3;
      }

      @media (max-width: 1359px) {
        display: none;
      }

      @media (max-width: 768px) {
        font-size: 26px;
        padding: 10px 0 0px;
      }
    }

    &-button {
      cursor: pointer;
      text-align: right;
      color: #292929;
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      letter-spacing: 0.18px;
      text-decoration-line: underline;

      @media (max-width: 1359px) {
        margin-top: 5px;
        display: none;
      }

      @media (max-width: 768px) {
        font-size: 15px;
      }
    }
  }

  &__nav {
    .menu-list {
      @include flex-center-x(20px);
      justify-content: center;

      @media (max-width: 1359px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        position: absolute;
        top: 100px;
        z-index: 10;
        width: 100%;
        right: 0px;
        transform: translateX(100%);
        opacity: 0;
        transition: transform 0.45s 0.1s, opacity 0.25s;
        max-width: 320px;
        background: #f4f4f4;
        border-radius: 0 0 10px 10px;
        box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
        padding: 30px 0;
      }

      @media (max-width: 768px) {
        top: 70px;
      }

      &--open {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 0.4s, opacity 0.3s 0.2s;
      }

      li:not(.mobile-phone) {
        p,
        a {
          transition: all 0.4s;
          cursor: pointer;
          white-space: nowrap;
          color: #292929;
          font-family: "Inter";
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 27px;

          &:hover {
            color: #5d68a3;
          }

          @media (max-width: 1359px) {
            padding: 5px 0;
          }

          @media (max-width: 768px) {
            font-size: 16px;
            padding: 0;
          }
        }
      }

      .mobile-phone {
        display: none;
        @media (max-width: 1359px) {
          display: block;

          .header-top__contact-phone,
          .header-top__contact-button {
            display: block;
            text-align: center;
          }
        }
      }
    }
  }

  .burger {
    &-container {
      @media (min-width: 1360px) {
        display: none;
      }
      position: relative;
      cursor: pointer;
      display: block;
      height: 44px;
      width: 44px;
      background: #323232;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 20;
      transition: all 0.3s;

      @media (max-width: 576px) {
        width: 32px;
        height: 32px;
      }

      // &--open {
      //   border: 1px solid #323232;
      // }
    }

    position: relative;
    width: 40px;
    height: 14px;

    span {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 22px;
      height: 2px;
      border-radius: 0;
      background-color: #fff;
      transition: 0.4s all;

      @media (max-width: 576px) {
        width: 18px;
      }

      &:nth-child(1) {
        top: 1px;
      }

      &:nth-child(2),
      &:nth-child(3) {
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      }

      &:nth-child(4) {
        top: calc(100% - 1px);
        transform: translateX(-50%) translateY(-50%);
      }
    }

    &--open {
      span {
        background-color: #fff;
        &:nth-child(1) {
          transition: 0.2s all;
          opacity: 0;
        }

        &:nth-child(2) {
          transform: translateX(-50%) translateY(-50%) rotate(45deg);

          @media (max-width: 576px) {
            width: 19px;
          }
        }

        &:nth-child(3) {
          transform: translateX(-50%) translateY(-50%) rotate(-45deg);

          @media (max-width: 576px) {
            width: 19px;
          }
        }

        &:nth-child(4) {
          transition: 0.2s all;
          opacity: 0;
        }
      }
    }
  }
}
</style>
