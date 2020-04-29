<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-10">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-form @submit.prevent="onLoginSubmit">
            <v-card-text>
              <v-text-field
                label="Login"
                name="login"
                prepend-icon="person"
                type="text"
                v-model="model.loginForm.login"
                :error="model.loginForm.error"
              />
              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="lock"
                type="password"
                v-model="model.loginForm.password"
                :error="model.loginForm.error"
              />
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                type="submit"
              >Login</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AuthService from "@/core/AuthService";

export interface HomeViewModel {
  loginForm: {
    login: string;
    password: string;
    error: boolean;
  };
}

@Component
export default class HomeView extends Vue {
  model: HomeViewModel = {
    loginForm: {
      login: "",
      password: "",
      error: false
    }
  };

  mounted() {
    if (this.$store.state.userIsLoggedIn) {
      this.$router.replace("/rainbow");
    }
  }

  onLoginSubmit() {
    if (
      AuthService.validateUserLogin(
        this.model.loginForm.login,
        this.model.loginForm.password
      )
    ) {
      this.$store.dispatch("authorizeUser");
      this.$router.push("/rainbow");
    } else {
      this.model.loginForm.error = true;
    }
  }
}
</script>
