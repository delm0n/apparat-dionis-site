<template>
  <form action="" v-on:submit.prevent method="post" class="spnForm header-form">
    <div class="header-form__wrapper">
      <div class="header-form__offer --mobile">
        <div class="prices">
          <div class="discount-box">
            <div class="discount">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="97"
                height="95"
                viewBox="0 0 97 95"
                fill="none"
              >
                <path
                  d="M0 4C0 1.79086 1.79086 0 4 0H93C95.2091 0 97 1.79086 97 4V90.955C97 93.8211 94.0741 95.7572 91.4361 94.6366L50.0639 77.0625C49.0645 76.638 47.9355 76.638 46.9361 77.0625L5.56388 94.6366C2.92586 95.7572 0 93.8211 0 90.955V4Z"
                  fill="#F55D5D"
                />
              </svg>
              <svg
                class="mobile"
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="97"
                viewBox="0 0 75 97"
                fill="none"
              >
                <path
                  id="Rectangle 2056"
                  d="M0 4C0 1.79086 1.79086 0 4 0H71C73.2091 0 75 1.79086 75 4V92.1713C75 95.2282 71.7101 97.1553 69.0437 95.6603L39.4563 79.0704C38.2411 78.389 36.7589 78.389 35.5437 79.0704L5.95629 95.6603C3.28994 97.1553 0 95.2282 0 92.1713V4Z"
                  fill="#F55D5D"
                />
              </svg>
              <p>-14%</p>
            </div>
          </div>
          <div
            v-html="getMainItem.oldPrice.toLocaleString() + ' РУБ.'"
            class="old"
          ></div>
          <div
            class="new"
            v-html="getMainItem.price.toLocaleString() + ' РУБ.'"
          ></div>
        </div>
      </div>

      <div class="inputs-container">
        <div class="header-form__inputs">
          <div class="header-form__toggle">
            <div
              v-for="(item, index) in getMain"
              :key="index"
              :class="[
                'button-volume ',
                item.selected ? 'button-volume--active' : '',
              ]"
              @click="selectMain(item.id)"
            >
              {{ item.volume }}
            </div>
          </div>

          <div class="user-info">
            <div class="dionis-input__container">
              <input
                class="dionis-input"
                aria-label="Ваш номер телефона"
                type="tel"
                name="phone"
                autocomplete="off"
                placeholder="Ваш номер телефона"
                required
              />
            </div>
            <div class="dionis-input__container">
              <input
                class="dionis-input"
                aria-label="Ваше имя"
                type="text"
                name="name"
                autocomplete="off"
                placeholder="Ваше имя"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div class="header-form__offer">
        <div class="prices --desktop">
          <div class="discount-box">
            <div class="discount">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="97"
                height="95"
                viewBox="0 0 97 95"
                fill="none"
              >
                <path
                  d="M0 4C0 1.79086 1.79086 0 4 0H93C95.2091 0 97 1.79086 97 4V90.955C97 93.8211 94.0741 95.7572 91.4361 94.6366L50.0639 77.0625C49.0645 76.638 47.9355 76.638 46.9361 77.0625L5.56388 94.6366C2.92586 95.7572 0 93.8211 0 90.955V4Z"
                  fill="#F55D5D"
                />
              </svg>
              <svg
                class="mobile"
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="97"
                viewBox="0 0 75 97"
                fill="none"
              >
                <path
                  id="Rectangle 2056"
                  d="M0 4C0 1.79086 1.79086 0 4 0H71C73.2091 0 75 1.79086 75 4V92.1713C75 95.2282 71.7101 97.1553 69.0437 95.6603L39.4563 79.0704C38.2411 78.389 36.7589 78.389 35.5437 79.0704L5.95629 95.6603C3.28994 97.1553 0 95.2282 0 92.1713V4Z"
                  fill="#F55D5D"
                />
              </svg>
              <p>-14%</p>
            </div>
          </div>
          <div
            class="old"
            v-html="getMainItem.oldPrice.toLocaleString() + ' РУБ.'"
          ></div>
          <div
            class="new"
            v-html="getMainItem.price.toLocaleString() + ' РУБ.'"
          ></div>
        </div>

        <button @click="openModalSuccessOrder()" type="submit" class="button">
          Заказать аппарат
        </button>

        <p class="decr">
          Мы свяжемся с вами в течения 15 минут <br />
          для уточнения деталей доставки
        </p>
      </div>
    </div>

    <form-helicon :dops="false" :main="true" :rassr="false" />
  </form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import FormHelicon from "../components/FormHelicon.vue";

export default {
  components: { FormHelicon },
  data() {
    return {
      volume15lActive: true,
    };
  },

  computed: mapGetters(["getMain", "getMainItem"]),
  methods: mapMutations(["selectMain", "openModalSuccessOrder"]),
};
</script>

<style lang="scss">
.header-form {
  padding: 30px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);

  @media (max-width: 1480px) {
    padding: 30px 20px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 520px;
    margin: 0 auto;
  }

  @media (max-width: 576px) {
    padding: 20px 10px;
  }

  .--mobile {
    @media (min-width: 769px) {
      display: none;
    }
  }

  .--desktop {
    @media (max-width: 768px) {
      display: none;
    }
  }

  &__wrapper {
    display: flex;
    gap: 30px;

    @media (max-width: 1480px) {
      gap: 20px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0;
    }
  }

  @media (max-width: 1366px) {
    @media (min-width: 769px) {
      .inputs-container {
        width: 50%;
      }
    }
    .header-form__inputs {
      margin: 0 auto;
    }
  }

  &__inputs {
    min-width: 266px;
    max-width: 316px;

    @media (max-width: 576px) {
      min-width: auto;
      max-width: 285px;
    }
  }

  &__offer {
    position: relative;
    flex-grow: 1;

    padding-left: 30px;
    @media (max-width: 1480px) {
      padding-left: 20px;
    }

    @media (min-width: 769px) {
      &::before {
        content: "";
        background: #828282;
        width: 1px;
        height: 100%;
        position: absolute;
        left: 0;
      }
    }

    @media (max-width: 768px) {
      padding-left: 0px;

      &:last-child {
        padding-top: 20px;
      }
    }

    .prices {
      padding-left: 15px;
      padding-top: 20px;
      margin: -30px auto 40px;
      transform: translateX(calc(97px / 2));
      width: max-content;
      position: relative;

      @media (max-width: 768px) {
        transform: translateX(calc(75px / 2));
      }

      .discount-box {
        position: absolute;
        top: -7px;
        left: -97px;

        @media (max-width: 768px) {
          left: -75px;
        }

        svg {
          &:first-child {
            @media (max-width: 768px) {
              display: none;
            }
          }

          &.mobile {
            display: none;
            @media (max-width: 768px) {
              display: block;
            }
          }
        }

        .discount {
          position: relative;

          p {
            top: 20px;
            left: 6px;
            position: absolute;
            color: var(--white, #fff);
            text-align: center;
            font-family: "Stolzl";
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;

            @media (max-width: 768px) {
              font-size: 22px;
              top: 30px;
              left: 8px;
            }
          }
        }
      }

      .old {
        color: var(--gray-2, #4f4f4f);
        font-family: "Stolzl";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration: line-through;
        margin-bottom: 5px;

        @media (max-width: 768px) {
          font-size: 14px;
          margin-bottom: 0;
        }
      }
      .new {
        color: var(--gray-2, #4f4f4f);
        font-family: "Stolzl";
        font-size: 29px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.58px;

        @media (max-width: 768px) {
          font-size: 27px;
        }
      }
    }

    .button {
      margin: 0px auto 15px;
    }

    .decr {
      color: #323232;
      text-align: center;
      font-family: "Inter";
      font-size: 13px;
      font-style: normal;
      font-weight: 200;
      line-height: normal;
      text-align: center;

      @media (max-width: 576px) {
        font-size: 12px;
      }
    }
  }

  &__toggle {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      margin-bottom: 20px;
    }

    .button-volume {
      cursor: pointer;
      flex-grow: 1;
      padding: 14px 20px;
      text-align: center;
      color: rgba(50, 50, 50, 0.5);
      text-align: center;
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border-radius: 30px;
      background: #fff;
      border: 1px solid rgba(50, 50, 50, 0.5);
      transition: all 0.4s;

      @media (max-width: 576px) {
        font-size: 14px;
        padding: 10px;
      }

      &:hover {
        border: 1px solid #5d68a3;
        box-shadow: inset 0px 0px 4px 2px rgba(54, 61, 99, 0.25);
      }

      &--active {
        background: #5d68a3;
        border: 1px solid #5d68a3;
        color: #fff;
        font-weight: 600;
      }
    }
  }

  .user-info {
    .dionis-input {
      color: rgba(50, 50, 50, 0.5);
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      padding: 14px 14px 14px 53px;
      line-height: normal;
      border-radius: 30px;
      border: 1px solid #000;
      width: 100%;
      transition: all 0.4s;
      &:hover,
      &:focus {
        border: 1px solid #5d68a3;
        box-shadow: inset 0px 0px 4px 2px rgba(54, 61, 99, 0.25);
      }

      @media (max-width: 576px) {
        padding: 10px 10px 10px 40px;
        font-size: 14px;
      }
    }

    .dionis-input__container {
      @mixin icon-input() {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        transform: translateY(-50%);
        left: 13px;

        @media (max-width: 576px) {
          width: 26px;
          height: 26px;
          left: 7px;
        }
      }

      position: relative;
      &:first-child {
        margin-bottom: 20px;
        &::before {
          content: "";
          background: url("../images/src/tel.svg");
          background-size: 100%;
          @include icon-input;
        }

        @media (max-width: 768px) {
          margin-bottom: 10px;
        }
      }

      &:last-child {
        &::before {
          @include icon-input;
          content: "";
          background: url("../images/src/usr.svg");
          background-size: 100%;
        }
      }
    }
  }
}
</style>
