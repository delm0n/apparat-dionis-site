<template>
  <form action="" v-on:submit.prevent method="post" class="spnForm">
    <div class="complectation-form__wrapper">
      <div class="complectation-form__toggle">
        <div
          v-for="(item, index) in getMain"
          :key="index"
          :class="[
            'button-volume ',
            item.selected ? 'button-volume--active' : '',
          ]"
          @click="
            selectMain(item.id);
            $emit('action-click', item.id);
          "
        >
          {{ item.nameModel }}
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

      <div class="complectation-form__offer">
        <div class="prices">
          <div class="new">
            <span class="mob">ИТОГО: </span>
            <span
              v-html="'' + getMainItem.price.toLocaleString() + ' РУБ.'"
            ></span>
          </div>
        </div>

        <button type="submit" @click="openModalSuccessOrder" class="button">
          Заказать аппарат
        </button>
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
  computed: mapGetters(["getMain", "getMainItem"]),
  methods: mapMutations(["selectMain", "openModalSuccessOrder"]),
};
</script>

<style lang="scss">
@mixin line-left-block() {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  position: relative;

  @media (min-width: 577px) {
    &::before {
      content: "";
      position: absolute;
      right: 0;
      width: 2px;
      height: 100%;
      background-color: #fff;
    }
  }
}

.complectation-form {
  padding: 50px 0;

  @media (max-width: 1024px) {
    padding: 35px 0;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: 0.55fr 1.05fr 1fr;

    @media (max-width: 1024px) {
      grid-template-columns: 0.55fr 1.05fr;
      max-width: 620px;
      margin: 0 auto;
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  &__offer {
    @media (max-width: 1024px) and (min-width: 577px) {
      grid-column: 1/3;
      margin-top: 30px;
    }
    .prices {
      .new {
        color: #fff;
        font-family: "Stolzl";
        font-size: 29px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.58px;
        text-align: center;

        @media (max-width: 768px) {
          font-size: 27px;
          .mob {
            display: none;
          }
        }
      }
    }

    .button {
      margin: 20px auto 0px;

      @media (max-width: 576px) {
        max-width: 251px;
      }
    }
  }

  &__toggle {
    @include line-left-block();

    @media (max-width: 576px) {
      flex-direction: row;
      max-width: calc(251px + 20px * 2);

      .button-volume {
        flex-grow: 1;
      }
    }

    .button-volume {
      cursor: pointer;
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
      background: #5d68a3;
      border: 1px solid rgba(50, 50, 50, 0.5);
      transition: all 0.4s;
      border: 1px solid #fff;
      color: #fff;

      @media (max-width: 576px) {
        font-size: 14px;
        padding: 10px;
      }

      &--active {
        background: #fff;
        color: #5d68a3;
        font-weight: 600;
      }
    }
  }

  .user-info {
    @include line-left-block();

    @media (max-width: 1024px) {
      &::before {
        display: none;
      }
    }

    .dionis-input {
      max-width: 282px;

      color: #fff;
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      padding: 14px 14px 14px 53px;
      line-height: normal;
      border-radius: 30px;
      border: 1px solid #fff;
      width: 100%;
      transition: all 0.4s;
      background-color: transparent;
      &:hover,
      &:focus {
        box-shadow: inset 0px 0px 4px 2px rgba(54, 61, 99, 0.25);
      }

      &::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
      &::-moz-placeholder {
        color: rgba(255, 255, 255, 0.5);
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
        &::before {
          content: "";
          background: url("../images/src/tel-white.svg");
          background-size: 100%;
          @include icon-input;
        }
      }

      &:last-child {
        &::before {
          @include icon-input;
          content: "";
          background: url("../images/src/usr-white.svg");
          background-size: 100%;
        }
      }
    }
  }
}
</style>
