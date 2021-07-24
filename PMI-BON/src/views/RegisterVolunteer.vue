<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Register Relawan</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <img src="../image/blood.jpg" alt="" />
      <Form @submit="onSubmit">
        <ion-grid>
          <ion-row>
            <p>Nama</p>
          </ion-row>
          <ion-row class="input-login">
            <Field
              name="username"
              as="input"
              placeholder="nama"
              :rules="isRequired"
              autocomplete="off"
            >
            </Field>
            <ion-icon :icon="person" />
          </ion-row>
          <ion-row class="error-message">
            <error-message name="username"></error-message>
          </ion-row>
          <!-- username end -->
          <ion-row>
            <p>Email</p>
          </ion-row>
          <ion-row class="input-login">
            <Field
              name="email"
              as="input"
              placeholder="email"
              :rules="isEmail"
              autocomplete="off"
            >
            </Field>
            <ion-icon :icon="mail" />
          </ion-row>
          <ion-row class="error-message">
            <error-message name="email"></error-message>
          </ion-row>
          <!-- email end -->
          <ion-row>
            <p>Phone</p>
          </ion-row>
          <ion-row class="input-login">
            <Field
              name="no_hp"
              as="input"
              placeholder="+62"
              :rules="isRequired"
              autocomplete="off"
            >
            </Field>
            <ion-icon :icon="phonePortraitOutline" />
          </ion-row>
          <ion-row class="error-message">
            <error-message name="no_hp"></error-message>
          </ion-row>

          <ion-row>
            <p>Alamat</p>
          </ion-row>
          <ion-row class="input-login">
            <Field
              name="alamat"
              as="input"
              placeholder="alamat"
              :rules="isRequired"
              autocomplete="off"
            >
            </Field>
            <ion-icon :icon="map" />
          </ion-row>
          <ion-row class="error-message">
            <error-message name="alamat"></error-message>
          </ion-row>

          <ion-row>
            <p>Gol Darah</p>
          </ion-row>
          <ion-row class="input-login">
            <Field
              name="gol_darah"
              as="input"
              placeholder="Golongan Darah"
              :rules="isValidBlood"
              autocomplete="off"
            >
            </Field>
            <ion-icon :icon="water" />
          </ion-row>
          <ion-row class="error-message">
            <error-message name="gol_darah"></error-message>
          </ion-row>

          <ion-row>
            <p>Tanggal Lahir</p>
          </ion-row>
          <ion-row class="input-login date">
            <Field
              name="tanggal_lahir"
              as="input"
              :rules="isRequired"
              autocomplete="off"
              type="date"
            >
            </Field>
            <ion-icon :icon="time" />
          </ion-row>
          <ion-row class="error-message">
            <error-message name="tanggal_lahir"></error-message>
          </ion-row>

          <ion-row>
            <p>Password</p>
          </ion-row>
          <ion-row class="input-login">
            <Field
              name="password"
              as="input"
              placeholder="password"
              :rules="isRequired"
              type="password"
            >
            </Field>
            <ion-icon :icon="key" />
          </ion-row>
          <ion-row class="error-message">
            <error-message name="password"></error-message>
          </ion-row>
          <ion-row>
            <p>Konfirmasi password</p>
          </ion-row>
          <ion-row class="input-login">
            <Field
              name="confirm_password"
              as="input"
              placeholder="password"
              :rules="isRequired"
              type="password"
            >
            </Field>
            <ion-icon :icon="key" />
          </ion-row>
          <ion-row class="error-message">
            <error-message name="confirm_password"></error-message>
          </ion-row>
          <p class="error-message">{{ registerMessage }}</p>
          <ion-row>
            <ion-button color="danger" class="btn-login" type="submit"
              >Registrasi</ion-button
            >
          </ion-row>
        </ion-grid>
      </Form>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonGrid,
  IonRow,
  IonIcon,
  IonButton,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import {
  person,
  key,
  mail,
  phonePortraitOutline,
  time,
  water,
  map,
} from "ionicons/icons";
import { Field, ErrorMessage, Form } from "vee-validate";
import { Http } from "@capacitor-community/http";

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
    IonIcon,
    IonButton,
    Field,
    ErrorMessage,
    Form,
  },

  data() {
    return {
      time,
      person,
      key,
      mail,
      water,
      map,
      phonePortraitOutline,
      API: process.env.VUE_APP_API,
      registerMessage: "",
    };
  },

  methods: {
    async onSubmit(values) {
      try {
        const options = {
          url: `${this.API}/v1/auth/volunteer/register`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          data: values,
        };

        const response = await Http.request({ ...options, method: "POST" });
        if (response.status == !200) {
          this.registerMessage = response.data.message;
          setTimeout(() => {
            this.$router.push("/tabs/login-volunteer");
          }, 5000);
        }
      } catch (error) {
        console.log(error);
      }
    },
    isRequired(value) {
      // if the field is empty
      if (!value) {
        return "Input Tidak Boleh Kosong";
      }

      // All is good
      return true;
    },
    isEmail(value) {
      if (!value) {
        return "Email Tidak Boleh Kosong";
      }
      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value
        )
      ) {
        return "Email Tidak Valid";
      }

      return true;
    },
    isValidBlood(value) {
      const bloodType = ["A", "B", "AB", "O"];
      if (!bloodType.includes(value)) {
        return "Golongan Darah Tidak Valid";
      }

      return true;
    },
  },
};
</script>
<style scoped>
p {
  font-size: 12px !important;
  margin-left: 26px;
}
.input-login {
  border-bottom: 1px solid rgb(109, 106, 106);
  margin: auto !important;
  width: 90% !important;
}
.btn-login {
  width: 90% !important;
  margin: 8px auto;
}
img {
  height: 30%;
  margin: auto;
  display: block;
}

input {
  border: none;
  outline: none;
  width: 90%;
  padding: 8px !important;
}

input:focus {
  border: none;
  outline: none;
}

.error-message {
  font-size: 12px !important;
  margin-left: 21px;
  color: red !important;
  font-style: italic;
  margin-top: 2px !important;
}
input[type="date"]::-webkit-calendar-picker-indicator {
  background: none;
}
</style>
