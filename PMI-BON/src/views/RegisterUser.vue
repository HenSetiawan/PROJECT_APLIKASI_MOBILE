<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <img src="../image/blood.jpg" alt="" />
      <Form @submit="onSubmit">
        <ion-grid>
          <ion-row>
            <p>Username</p>
          </ion-row>
          <ion-row class="input-login">
            <Field
              name="username"
              as="input"
              placeholder="username"
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
              :rules="isRequired"
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
import { person, key, mail, phonePortraitOutline } from "ionicons/icons";
import { Field, ErrorMessage, Form } from "vee-validate";

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
      person,
      key,
      mail,
      phonePortraitOutline,
      API: process.env.VUE_APP_API,
    };
  },

  methods: {
    onSubmit(values) {
      console.log(values);
      const data = values;
      console.log(data);
      fetch(`${this.API}/v1/auth/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result);
          this.$router.push("/tabs/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    isRequired(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }

      // All is good
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
</style>
