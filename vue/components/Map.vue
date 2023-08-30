<template>
  <section id="map">
    <div class="container">
      <div class="title-map">
        <h2>
          Наши магазины <br />
          — теперь и сервисные центры
        </h2>
        <p class="subtitle">В них вы сможете:</p>
      </div>
      <div class="list-box">
        <ul class="list-box__list list-box__list_1">
          <li>
            Приобрести коптильни, автоклавы, мангалы и множество других товаров
            для хобби.
          </li>
          <li>
            Оформить заявку на самовывоз и забрать товар, купленный в
            интернет-магазине.
          </li>
        </ul>
        <ul class="list-box__list list-box__list_2">
          <li>Оформить скидочную карту.</li>
          <li>
            Сдать товар по гарантии, оформить возврат или обмен <br />
            без лишней бюрократии.
          </li>
          <li>Получить консультацию специалистов.</li>
        </ul>
      </div>
    </div>
    <div class="content-container_map">
      <div id="shop-map" class="map-item"></div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Map",

  mounted() {
    this.gsap.timeline({
      delay: 4,
      scrollTrigger: {
        once: true,
        trigger: "#map",
        start: "-60% bottom",
        onEnter: this.getShops,
        onEnterBack: this.getShops,
      },
    });
  },

  methods: {
    async getShops() {
      await axios
        .get("https://apispn.ru/json/shops/")
        .then(function (response) {
          // handle success
          let citiesJSON = JSON.parse(response.data);

          // создание карты с метками
          let script = document.createElement("script");
          script.setAttribute("async", "");
          script.type = "text/javascript";
          script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
          document.querySelector("body").appendChild(script);

          script.onload = function () {
            ymaps.ready(function () {
              let myMap = new ymaps.Map("shop-map", {
                center: [55.75222, 37.61556],
                zoom: 10,
                controls: ["zoomControl"],
              });

              myMap.behaviors.disable("scrollZoom");

              citiesJSON.forEach(function (inx) {
                let city = inx.city;
                inx.shops.forEach(function (shop) {
                  let mark = new ymaps.Placemark(
                    shop.coords,
                    {
                      hasHint: true,
                      hintContent:
                        "Градус Хаус в г. " + city + ", " + shop.name,
                    },
                    {
                      iconLayout: "default#image",
                      iconImageHref:
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzkiIGhlaWdodD0iOTUiIHZpZXdCb3g9IjAgMCA3OSA5NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF8xNjlfOTA1KSI+CjxwYXRoIGQ9Ik02My4zMzIgMjQuMzY5MkM2My4zMzIgMzUuNDYyMyA0OC43MDcgNTUuMjExNSA0Mi4yOTQ1IDYzLjM2QzQwLjc1NyA2NS4zMDE5IDM3LjkwNyA2NS4zMDE5IDM2LjM2OTUgNjMuMzZDMjkuODQ0NSA1NS4yMTE1IDE1LjMzMiAzNS40NjIzIDE1LjMzMiAyNC4zNjkyQzE1LjMzMiAxMC45MTAzIDI2LjA3NyAwIDM5LjMzMiAwQzUyLjU4MiAwIDYzLjMzMiAxMC45MTAzIDYzLjMzMiAyNC4zNjkyWiIgZmlsbD0iIzVENjhBMyIvPgo8L2c+CjxjaXJjbGUgY3g9IjM5LjMzMzMiIGN5PSIyMy43MzE4IiByPSI5LjMzMzMzIiBmaWxsPSJ3aGl0ZSIvPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kXzE2OV85MDUiIHg9IjAuMzMyMDMxIiB5PSIwIiB3aWR0aD0iNzgiIGhlaWdodD0iOTQuODE2NCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR5PSIxNSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI3LjUiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuMzY0NzA2IDAgMCAwIDAgMC40MDc4NDMgMCAwIDAgMCAwLjYzOTIxNiAwIDAgMCAwLjE5IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfMTY5XzkwNSIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd18xNjlfOTA1IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=",
                      iconImageSize: [56, 42],
                      iconImageOffset: [-33, -38],
                    }
                  );

                  mark.events.add("click", function (e) {
                    myMap.hint.open(
                      shop.coords,
                      " Градус Хаус в г. " + city + ", " + shop.name
                    );
                  });

                  myMap.geoObjects.add(mark);
                });
              });
            });
          };
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#map {
  overflow: hidden;
  padding-top: 100px;
  @media (max-width: 992px) {
    padding-top: 60px;
  }
  @media (max-width: 768px) {
    padding-top: 30px;
  }

  .title-map {
    margin-bottom: 20px;
    h2 {
      color: rgb(0, 0, 0, 0.75);
      font-family: "Inter";
      font-size: 44px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      opacity: 0.75;
      margin-bottom: 20px;

      @media (max-width: 768px) {
        font-size: 27px;
        line-height: 140%;
      }
    }

    .subtitle {
      color: #323232;
      font-family: "Inter";
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      opacity: 0.75;
      line-height: 160%;

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 25px;
      }
    }
  }

  .list-box {
    display: flex;
    justify-content: space-between;
    column-gap: 16px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 992px) {
      flex-direction: column;
      row-gap: 20px;
    }

    &__list {
      display: flex;
      flex-direction: column;
      row-gap: 9px;
      width: 100%;

      @media (max-width: 992px) {
        row-gap: 20px;
      }

      li {
        position: relative;
        padding-left: 20px;

        color: rgb(50, 50, 50, 0.75);
        font-family: "Inter";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;

        @media (max-width: 768px) {
          font-size: 15px;
          line-height: 22px;
        }

        &:before {
          position: absolute;
          left: 0;
          top: 9px;
          background: #5d68a3;
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;

          @media (max-width: 768px) {
            top: 7.5px;
          }
        }
      }
    }
  }

  .content-container_map {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0;
    margin-top: 77px;
    height: 745px;
    max-height: 66vh;
    overflow: hidden;
    margin-top: 50px;

    .map-item {
      height: 745px;
      max-height: 67vh;
    }

    .ymaps-2-1-79-ground-pane {
      filter: grayscale(100%);
    }
  }

  .page-loader-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $gray;
    transform: scale(1.5);
    opacity: 0.8;
    z-index: 10000;
  }
}
</style>
