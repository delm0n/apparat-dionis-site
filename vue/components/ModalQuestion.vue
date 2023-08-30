<template>
  <div id="modal-que" style="display: none">
    <form action="" v-on:submit.prevent method="post" class="spnForm">
      <h3>Отправить вопрос</h3>

      <div class="form-call__inputs">
        <input
          class="input"
          type="text"
          name="name"
          placeholder="Имя"
          v-model="getUser.name"
        />

        <input
          class="input"
          type="text"
          name="phone"
          placeholder="+7 (___)-___-__-__"
          v-model="getUser.phone"
        />

        <textarea class="input" rows="10" placeholder="Ваш отзыв"></textarea>
      </div>

      <button @click="openModalSuccessManager" type="submit" class="button">
        Отправить
      </button>

      <form-helicon />
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import FormHelicon from "./FormHelicon.vue";

export default {
  components: { FormHelicon },
  computed: mapGetters(["getUser"]),
  methods: mapMutations(["openModalSuccessManager"]),
};
</script>

<style lang="scss">
#modal-que {
  border-radius: 10px;
  background: #fff;
  max-width: 745px;
  width: 100%;

  @media (max-width: 576px) {
    padding: 30px 20px 20px !important;
    max-width: 300px;
    width: 100%;
  }

  textarea {
    height: auto;
    padding-top: 10px;
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
</style>