<template>
  <section id="kit">
    <div class="container">
      <div class="title-box">
        <h2>Откройте <span> больше возможностей </span> «Крестьянки»</h2>
        <p class="subtitle">Вместе с полезными дополнениями</p>
      </div>

      <div class="kit-wrapper">
        <div v-if="!mobile" class="kit-wrapper__dops">
          <kit-dops @action-modal="actionModal" />
        </div>

        <div class="kit-wrapper__img">
          <div class="kit-images">
            <my-image
              v-for="(item, index) in getDops"
              :key="index"
              :class="
                'dops-img ' +
                item.kit +
                (item.selected ? ' dops-img--active ' : '')
              "
              :alt="'#'"
              :floder="'kit'"
              :imgName="item.kit"
              :mobile="false"
            />

            <my-image
              class="kit-main"
              :alt="'#'"
              :floder="'kit'"
              :imgName="getMainItem.img"
              :mobile="false"
              :lazyLoad="false"
            />
          </div>
        </div>
        <div class="kit-wrapper__form">
          <kit-form @action-modal="actionModal" :mobileProp="mobile" />
        </div>
      </div>
    </div>

    <div id="kit-modal" style="display: none">
      <div class="kit-modal__wrapper">
        <my-image
          class="kit-modal__img"
          :alt="'#'"
          :floder="'kit'"
          :imgName="modalContent.img"
          :lazyLoad="false"
          :mobile="false"
        />
        <div class="kit-modal__content">
          <p class="title" v-html="modalContent.title"></p>
          <p
            v-for="(par, index) in modalContent.text"
            :key="index"
            class="text"
            v-html="par"
          ></p>
          <ul>
            <li
              v-for="(li, index) in modalContent.list"
              :key="index"
              class="list-item"
              v-html="li"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import MyImage from "../UI/MyImage.vue";
import KitDops from "./KitDops.vue";
import KitForm from "./KitForm.vue";

export default {
  components: { MyImage, KitForm, KitDops },
  data() {
    return {
      mobile: window.innerWidth < 993,
      modalContent: {
        title: "",
        img: "defleg-modal",
        text: [],
        list: [],
      },
    };
  },

  methods: {
    setModalContent(i) {
      this.modalContent = {
        title: this.getDops[i].name,
        img: this.getDops[i].kitModal.img,
        text: this.getDops[i].kitModal.text,
        list: this.getDops[i].kitModal.list,
      };
    },

    actionModal(index) {
      this.setModalContent(index);

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#kit-modal",
          },
        ]);
      }, 10);
    },
  },

  mounted() {
    const windowbreakpoint = window.matchMedia("(max-width: 992px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        this.mobile = false;
      } else {
        this.mobile = true;
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
  computed: { ...mapGetters(["getDops", "getMainItem"]) },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#kit {
  @extend %padd;
  overflow: hidden;

  .title-box {
    @media (max-width: 1280px) {
      margin-bottom: 10px;
    }
  }

  .kit-wrapper {
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(390px, 30%) auto minmax(270px, 342px);
    grid-template-rows: auto;
    width: 100%;

    @media (max-width: 1280px) {
      grid-template-columns: 1fr 370px;
      gap: 50px 30px;
    }

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      max-width: 520px;
      margin: 0 auto;
      gap: 50px;
    }

    &__dops {
      padding: 20px 15px;
      border-radius: 10px;
      background: #f5f5f5;

      @media (max-width: 1280px) {
        grid-column: 1/2;
        grid-row: 2/3;
      }
    }

    &__form {
      border-radius: 10px;
      background: #fff;
      box-shadow: 0px 4px 15px 0px rgba(170, 170, 170, 0.2);

      @media (max-width: 1280px) {
        grid-column: 2/3;
        grid-row: 2/3;
      }

      @media (max-width: 992px) {
        grid-row: 2/3;
        grid-column: 1/2;
      }
    }

    &__img {
      align-self: center;
      max-width: 490px;
      width: 100%;
      margin: 0 auto;
      min-width: 400px;
      height: 662px;

      @media (max-width: 1440px) {
      }

      @media (max-width: 1280px) {
        grid-column: 1/3;
        grid-row: 1/2;
        // height: 521px;
      }

      @media (max-width: 992px) {
        grid-row: 1/2;
        grid-column: 1/2;
        min-width: auto;
      }

      @media (max-width: 576px) {
        height: 448px;
      }

      .kit-images {
        height: 100%;
        position: relative;
        img {
          max-width: 100%;
        }

        .kit-main {
          position: absolute;
          bottom: 150px;
          left: 50%;
          width: 188px;
          transform: translateX(-50%);

          @media (max-width: 576px) {
            width: 110px;
          }
        }

        .dops-img {
          position: absolute;
          transition: all 0.2s;
          opacity: 0.3;
          z-index: 5;

          &--active {
            opacity: 1;
          }
        }

        .defleg-kit {
          left: 38%;
          bottom: 0;
          width: 17%;
          z-index: 6;
        }

        .rpn_nerj-kit {
          right: 2%;
          width: 20%;
          bottom: 73px;
        }

        .rpn_cu-kit {
          right: 26%;
          width: 20%;
          bottom: 86px;
        }

        .spn_nerj-kit {
          right: 0;
          width: 13.8%;
          bottom: 116px;
        }

        .spn_cu-kit {
          right: 13.3%;
          width: 13.8%;
          bottom: 116px;
        }

        .gusset-kit {
          width: 16.5%;
          right: 26.5%;
          bottom: 43px;
        }

        .hidroz-kit {
          right: 17%;
          width: 20%;
          bottom: 11px;
        }

        .uzel-kit {
          width: 49%;
          left: 0;
          bottom: 46px;
        }

        .coal_column-kit {
          width: 10.2%;
          bottom: 125px;
          left: 6%;
          z-index: 6;
        }

        .coal_column_tips-kit {
          width: 10.2%;
          bottom: 92px;
          left: 25%;
          z-index: 6;
        }

        .parrot-kit {
          width: 10.7%;
          left: 16%;
          bottom: 181px;
        }

        .parrot_tips-kit {
          width: 9.8%;
          bottom: 75px;
          left: 39%;
        }
      }
    }
  }
}

#kit-modal {
  border-radius: 10px;
  background: #fff;
  max-width: 936px;
  width: 100%;
  padding: 30px 20px 20px !important;

  @media (max-width: 768px) {
    max-width: 386px;
  }

  .is-close {
    top: 5px;
    right: 5px;
    color: #323232;
    svg {
      filter: none;
    }
  }

  .kit-modal {
    &__wrapper {
      align-items: center;
      display: flex;
      gap: 55px;

      @media (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 20px;
      }
    }

    &__img {
      display: flex;
      justify-content: center;

      @media (min-width: 769px) {
        width: calc(45% - 27.5px);
      }

      img {
        max-width: 100%;
      }
    }

    &__content {
      @media (min-width: 769px) {
        width: calc(55% - 27.5px);
      }
      .title {
        color: #323232;
        font-family: "Roboto";
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 30px;

        @include fluidFontSize(26, 30, 992, 1920);

        @media (max-width: 768px) {
          font-size: 20px;
          line-height: 24px;
          margin-bottom: 15px;
        }
      }

      ul {
        padding-left: 20px;
      }

      li {
        font-weight: 300;
        list-style-type: disc;

        &.list-item {
          color: #323232;
          font-family: "Roboto";
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 135%;

          @include fluidFontSize(16, 20, 992, 1920);
        }

        span {
          font-weight: 500;
        }
      }

      p.text {
        color: #323232;
        font-family: "Roboto";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 135%;
        margin-bottom: 20px;
        @include fluidFontSize(16, 20, 992, 1920);
      }
    }
  }
}
</style>
