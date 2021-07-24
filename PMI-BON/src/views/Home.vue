<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <swiper>
        <swiper-slide v-for="event in eventsData" :key="event.id">
          <ion-list>
            <ion-item>
              <ion-grid>
                <ion-row>
                  <ion-col>
                    <ion-label>
                      <h2>{{ event.judul_agenda }}</h2></ion-label
                    >
                  </ion-col>
                  <ion-col>
                    <ion-label>
                      <h2 class="waktu">{{ event.waktu }}</h2></ion-label
                    >
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col>
                    <p class="desc">{{ event.deskripsi }}</p>
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col>
                    <ion-icon :icon="navigateCircle"></ion-icon>
                  </ion-col>
                  <ion-col>
                    <ion-label>
                      <p>{{ event.lokasi }}</p>
                    </ion-label>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-item>
          </ion-list>
        </swiper-slide>
      </swiper>

      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-text color="dark">
              <h5>Current Blogs</h5>
            </ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-list>
        <ion-item v-for="blog in blogsData" :key="blog.id" :href="blog.url">
          <ion-thumbnail item-start>
            <img :src="blog.blog.thumbnail" />
          </ion-thumbnail>
          <ion-label>
            <h2>{{ blog.blog.judul_blog }}</h2>
            <p v-html="blog.preview"></p>
          </ion-label>
        </ion-item>
      </ion-list>
      <ion-grid class="container">
        <ion-row class="thead">
          <ion-col size="4">Kategori</ion-col>
          <ion-col>A</ion-col>
          <ion-col>B</ion-col>
          <ion-col>AB</ion-col>
          <ion-col>O</ion-col>
        </ion-row>
        <ion-row v-for="blood in bloodData" :key="blood.id">
          <ion-col size="4">{{ blood.kategori }}</ion-col>
          <ion-col>{{ blood.jumlah_gol_A }}</ion-col>
          <ion-col>{{ blood.jumlah_gol_B }}</ion-col>
          <ion-col>{{ blood.jumlah_gol_AB }}</ion-col>
          <ion-col>{{ blood.jumlah_gol_O }}</ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCol,
  IonGrid,
  IonRow,
  IonText,
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonIcon,
} from "@ionic/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

import { navigateCircle } from "ionicons/icons";

export default {
  name: "Tab1",
  components: {
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonCol,
    IonGrid,
    IonRow,
    IonText,
    IonList,
    IonItem,
    IonLabel,
    IonThumbnail,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      bloodData: [],
      eventsData: [],
      blogsData: [],
      navigateCircle,
    };
  },
  created() {
    this.getBloodData();
    this.getEventsData();
    this.getAllBlogs();
  },
  methods: {
    getBloodData() {
      const API = process.env.VUE_APP_API;
      fetch(`${API}/v1/bloods`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.bloodData = data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getEventsData() {
      const API = process.env.VUE_APP_API;
      fetch(`${API}/v1/events`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.eventsData = data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getAllBlogs() {
      try {
        const API = process.env.VUE_APP_API;
        const response = await fetch(`${API}/v1/blogs`);
        const result = await response.json();
        const temp = [];
        result.data.forEach((element) => {
          const tempData = {
            blog: element,
            preview: element.content
              .split(" ")
              .slice(0, 10)
              .join(" "),
            url: `/tabs/details-blog/${element.id}`,
          };
          temp.push(tempData);
        });

        this.blogsData = temp;
      } catch (error) {
        console.lo(error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 90% !important;
  margin: auto !important;
}
.thead {
  background-color: rgb(206, 197, 197) !important;
  margin: 15px 0 15px 0 !important;
}
/* img {
  width: 150px !important;
  height: 150px !important;
  margin: auto !important;
  display: block;
} */

h5 {
  margin-left: 28px !important;
}

ion-list {
  margin: 20px;
  border-radius: 5px;
}
ion-list {
  border-radius: 5px;
  margin-top: 10px;
}
ion-title {
  font-family: sans-serif;
  font-weight: bold;
}

p {
  color: #666 !important;
  font-size: 12px;
}
.desc {
  margin-left: 8px !important;
  color: #666 !important;
}

ion-list ion-label {
  padding: 10px;
}

swiper-slide,
swiper-slide-active {
  width: 100% !important;
}
</style>
