<template>
  <div>
    <header-top />
    <header-main />
    <features />
    <hobbie />
    <detali />
    <compare />
    <effective />
    <transformer />
    <info />
    <models />
    <complectation />
    <tinkoff-block />
    <made />
    <review />
    <faq />
    <photo />
    <kit />
    <question />
    <map-vue />
    <footer-dionis />

    <modal-call />
    <modal-review />
    <modal-order />
    <modal-question />
    <modal-success />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { defineAsyncComponent } from "vue";
import MapVue from "../components/Map.vue";
import Features from "../components/Features.vue";
import HeaderTop from "../components/HeaderTop.vue";
import HeaderMain from "../components/HeaderMain.vue";
import Hobbie from "../components/Hobbie.vue";
import TinkoffBlock from "../components/TinkoffBlock.vue";
import Compare from "../components/Compare.vue";
// import Faq from "../components/FAQ.vue";
// import Photo from "../components/Photo.vue";
// import Review from "../components/Review.vue";
// import Question from "../components/Question.vue";
import Effective from "../components/Effective.vue";
// import FooterDionis from "../components/Footer.vue";
import Detali from "../components/Detali.vue";
import ModalCall from "../components/ModalCall.vue";
import ModalReview from "../components/ModalReview.vue";
// import Info from "../components/Info.vue";
import ModalOrder from "../components/ModalOrder.vue";
import Kit from "../components/Kit.vue";
import ModalQuestion from "../components/ModalQuestion.vue";
import Models from "../components/Models.vue";
import Complectation from "../components/Complectation.vue";
// import Made from "../components/Made.vue";
import ModalSuccess from "../components/ModalSuccess.vue";
import Transformer from "../components/Transformer.vue";

export default {
  components: {
    MapVue,
    Features,
    HeaderTop,
    HeaderMain,
    Hobbie,
    TinkoffBlock,
    Compare,
    Faq: defineAsyncComponent(() => import("../components/FAQ.vue")),
    Photo: defineAsyncComponent(() => import("../components/Photo.vue")),
    Review: defineAsyncComponent(() => import("../components/Review.vue")),
    Question: defineAsyncComponent(() => import("../components/Question.vue")),
    Effective,
    FooterDionis: defineAsyncComponent(() =>
      import("../components/Footer.vue")
    ),
    Detali,
    ModalCall,
    ModalReview,
    Info: defineAsyncComponent(() => import("../components/Info.vue")),
    ModalOrder,
    Kit,
    ModalQuestion,
    Models,
    Complectation,
    Made: defineAsyncComponent(() => import("../components/Made.vue")),
    ModalSuccess,
    Transformer,
  },
};
</script>

<style lang="scss">
@import "../../scss/_fonts.scss";
@import "../../scss/_normalize.scss";
@import "../../scss/_main.scss";
</style>
