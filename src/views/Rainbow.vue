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
            <v-toolbar-title>Colors table</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="colors"
              hide-default-footer
            >
              <template v-slot:item.name="{item}">
                <span :style="`color: ${item.hex}`">{{item.name}}</span>
              </template>
              <template v-slot:item.hex="{item}">
                <span :style="`color: ${item.hex}`">{{item.hex}}</span>
              </template>
            </v-data-table>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              @click="logout"
            >Logout</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";

@Component({
  beforeRouteEnter(to, from, next) {
    if (store.state.userIsLoggedIn) {
      next();
    } else {
      next("/");
    }
  }
})
export default class RainbowView extends Vue {
  headers = [
    {
      text: "Цвет",
      align: "start",
      sortable: true,
      value: "name"
    },
    {
      text: "Hex",
      align: "start",
      sortable: true,
      value: "hex"
    }
  ];

  get colors() {
    return this.$store.state.colors;
  }

  beforeMount() {
    this.$store.dispatch("loadColors");
  }

  logout() {
    this.$store.dispatch("unauthorizeUser");
    this.$router.push("/");
  }
}
</script>
