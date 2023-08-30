<template>
  <div>
    <div id="modal-review" style="display: none">
      <div class="form">
        <h3>Оставить отзыв</h3>

        <div class="form-call__inputs">
          <input
            class="input"
            type="text"
            name="name"
            placeholder="Имя"
            v-model="name"
          />

          <input
            class="input"
            type="text"
            name="phone"
            placeholder="+7 (___)-___-__-__"
            v-model="phone"
          />

          <textarea
            v-model="text"
            class="input"
            rows="10"
            placeholder="Ваш отзыв"
          ></textarea>
        </div>

        <button @click="sendd()" class="button">Заказать</button>
      </div>
    </div>

    <div id="modal-review-success" style="display: none">
      <div class="form">
        <h3>Благодарим за то, что помогаете нам стать лучше!</h3>

        <my-image
          class="modal-img"
          :alt="'#'"
          :floder="'src'"
          :imgName="'modal-review-success'"
          :mobile="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MyImage from "../UI/MyImage.vue";

export default {
  components: { MyImage },
  data() {
    return {
      text: "",
      name: "",
      phone: "",
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
  },

  methods: {
    sendd() {
      if (
        this.phone.length != 0 &&
        this.name.length > 1 &&
        this.text.length > 11
      ) {
        Fancybox.close();

        setTimeout(() => {
          Fancybox.show([
            {
              src: "#modal-review-success",
            },
          ]);
        }, 10);
      }
    },
  },
};
</script>

<style lang="scss">
#modal-review,
#modal-review-success {
  border-radius: 10px;
  background: #fff;
  max-width: 745px;
  width: 100%;

  textarea {
    height: auto;
    padding-top: 10px;
  }

  @media (max-width: 576px) {
    padding: 30px 20px 20px !important;
    max-width: 300px;
    width: 100%;
  }

  .is-close {
    top: 5px;
    right: 5px;
    color: #323232;
    svg {
      filter: none;
    }
  }

  h3 {
    color: #323232;
    text-align: center;
    font-family: "Roboto";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 39px; /* 121.875% */

    @media (max-width: 576px) {
      font-size: 22px;
      line-height: 29px;
    }
  }

  .form-call__inputs {
    max-width: 358px;
    width: 100%;
    margin: 30px auto;

    input {
      margin-bottom: 20px;
    }

    @media (max-width: 576px) {
      margin: 25px auto;
    }
  }

  .button {
    margin: 0px auto;
  }

  .decr {
    margin: 20px auto 0;
    color: #323232;
    text-align: center;
    font-family: "Roboto";
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: 29px; /* 131.818% */
    max-width: 425px;
    width: 100%;

    @media (max-width: 576px) {
      font-size: 14px;
      line-height: 20px;
    }
  }
}

#modal-review-success {
  padding-bottom: 0 !important;

  .modal-img {
    margin: 0 auto;
    picture {
      justify-content: center;
    }
    img {
      max-width: 452px;
      width: 100%;
    }
  }
}
</style>