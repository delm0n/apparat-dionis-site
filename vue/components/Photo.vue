<template>
  <section id="photo">
    <div class="container">
      <div class="title-box">
        <h2>Реальные фото аппарата «Дионис»</h2>
      </div>

      <div class="photo-wrapper">
        <template v-if="!mobile">
          <div class="photo-wrapper__gallery">
            <a
              v-for="(photo, index) in photoes"
              :key="index"
              data-fancybox="gallery"
              :href="
                'build/images/photo/' +
                photo.ref +
                (getWebp == 'webp' ? '.webp' : '.png')
              "
            >
              <my-image
                :alt="'Фотографии аппарата Дионис'"
                :floder="'photo'"
                :lazyLoad="false"
                :imgName="photo.img"
              />
            </a>
          </div>
        </template>

        <template v-if="mobile">
          <div class="photo-wrapper__swiper">
            <div class="swiper-wrapper">
              <a
                v-for="(photo, index) in photoes"
                :key="index"
                :href="
                  'build/images/photo/' +
                  photo.ref +
                  (getWebp == 'webp' ? '.webp' : '.png')
                "
                data-fancybox="gallery"
                class="swiper-slide"
              >
                <my-image
                  :alt="'Фотографии аппарата Дионис'"
                  :floder="'photo'"
                  :lazyLoad="false"
                  :media="769"
                  :imgName="photo.img"
                />
              </a>
            </div>
            <div class="photo-pagination"></div>
          </div>
        </template>

        <div class="photo-wrapper__model">
          <my-image
            class="model-icon"
            :alt="'#'"
            :floder="'photo'"
            :imgName="'model'"
            :mobile="false"
          />
          <iframe
            title="model3d"
            src="model3d/model.html"
            width="100%"
            height="100%"
            align="left"
            style="border: none"
          >
            Ваш браузер не поддерживает 3D-графику
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Pagination } from "swiper";
import MyImage from "../UI/MyImage.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      mobile: window.innerWidth < 769,

      photoes: [
        {
          img: "photo-1",
          ref: "photo-big-1",
        },

        {
          img: "photo-4",
          ref: "photo-big-2",
        },

        {
          img: "photo-3",
          ref: "photo-big-3",
        },

        {
          img: "photo-2",
          ref: "photo-big-4",
        },

        {
          img: "photo-5",
          ref: "photo-big-5",
        },
      ],
    };
  },

  computed: mapGetters(["getWebp"]),

  mounted() {
    let myPhotoSwiper;
    const PhotoSwiper = () => {
      myPhotoSwiper = new Swiper(".photo-wrapper__swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        pagination: {
          el: ".photo-pagination",
          type: "progressbar",
        },
        loop: true,
        modules: [Pagination],
      });
    };

    const windowbreakpoint = window.matchMedia("(max-width: 768px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        this.mobile = false;
        setTimeout(function () {
          if (myPhotoSwiper) {
            return myPhotoSwiper.destroy(true, true);
          }
        }, 100);
      } else {
        this.mobile = true;
        setTimeout(function () {
          return PhotoSwiper();
        }, 100);
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },

  components: {
    MyImage,
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#photo {
  overflow: hidden;
  @extend %padd;

  canvas {
    width: 100%;
    height: 99%;
    border-radius: 10px;
  }

  .photo-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    @media (max-width: 1280px) {
      gap: 20px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      max-width: 420px;
      margin: 0 auto;
      width: 100%;
    }

    &__model {
      position: relative;
      border-radius: 10px;
      background: #f4f4f4;

      .model-icon {
        position: absolute;
        right: 30px;
        top: 30px;

        @media (max-width: 1280px) {
          right: 20px;
          top: 20px;

          img {
            max-width: 60px;
          }
        }
      }
    }

    &__swiper {
      overflow: hidden;
      @media (max-width: 768px) {
        padding-bottom: 24px;
      }
      img {
        max-width: 100%;
      }
    }

    &__gallery {
      display: grid;
      grid-template-columns: 65% auto;
      gap: 30px;

      a {
        display: block;
        overflow: hidden;
        cursor: zoom-in;

        border-radius: 10px;
        background: #f4f4f4;

        &:hover {
          img {
            transform: scale(1.1);
          }
        }

        &:first-child {
          grid-row: 1/3;
        }
      }

      @media (max-width: 1280px) {
        gap: 20px;
      }
      .img-wrap {
        img {
          max-width: 100%;
          transition: all 0.4s;
        }
      }
    }
  }

  .photo-pagination {
    @media (min-width: 769px) {
      display: none;
    }
    position: relative;
    margin-top: 10px;
    height: 2px;

    .swiper-pagination-progressbar-fill {
      background: #323232;
    }
  }
}
</style>
