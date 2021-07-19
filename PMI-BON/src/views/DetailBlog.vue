<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Blogs</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <h4 class="judul">{{ blog.judul_blog }}</h4>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-text>
              <p class="penulis">{{ blog.username }}</p>
            </ion-text>
          </ion-col>
          <ion-col>
            <ion-text>
              <p class="tanggal">{{ blog.created_at }}</p>
            </ion-text>
          </ion-col>
        </ion-row>
        <ion-row>
          <img :src="blog.thumbnail" class="img" />
        </ion-row>
        <ion-row>
          <ion-text>
            <p class="content" v-html="blog.content">
            </p>
          </ion-text>
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
  IonGrid,
  IonRow,
  IonCol,
  IonText,
} from "@ionic/vue";

export default {
  name: "Tab3",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
  },
  props: ["id"],
  data() {
    return {
      blog: "",
    };
  },
  methods: {
    async getBlogById() {
      try {
        const API = process.env.VUE_APP_API;
        const response = await fetch(`${API}/v1/blog/${this.id}`);
        const result = await response.json();
        this.blog = result.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getBlogById();
  },
};
</script>
<style scoped>
.img {
  height: 240px !important;
  width: 100% !important;
  object-fit: cover;
}
.penulis {
  margin: 10px 20px 20px 20px;
  text-transform: capitalize;
}
.tanggal {
  margin: 10px 20px 20px 20px;
  font-style: italic;
  text-align: end;
}
.judul {
  text-transform: uppercase;
  margin: 20px 20px 10px 20px;
}
.content {
  margin: 20px 20px 10px 20px;
  line-height: 150%;
  text-align: justify;
  /* font-weight: inherit;
  font-stretch: semi-expanded; */
}
</style>
