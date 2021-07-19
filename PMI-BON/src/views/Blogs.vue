<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Blogs</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="blog in blogsData" :key="blog.id" :href="blog.url">
          <ion-thumbnail item-start>
            <img :src="blog.blog.thumbnail" />
          </ion-thumbnail>
          <ion-label>
            <h2>{{ blog.blog.judul_blog }}</h2>
            <p v-html="blog.blog.content"></p>
          </ion-label>
        </ion-item>
      </ion-list>
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
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail,
} from "@ionic/vue";

export default {
  name: "Tab3",
  components: {
    IonThumbnail,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonList,
    IonItem,
    IonLabel,
  },
  data() {
    return {
      blogsData: [],
    };
  },
  created() {
    this.getAllBlogs();
  },
  methods: {
    async getAllBlogs() {
      try {
        const API = process.env.VUE_APP_API;
        const response = await fetch(`${API}/v1/blogs`);
        const result = await response.json();
        const temp = [];
        result.data.forEach((element) => {
          const tempData = {
            blog: element,
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
ion-list {
  margin: 20px;
  border-radius: 5px;
}

ion-list ion-label {
  padding: 10px;
}
</style>
