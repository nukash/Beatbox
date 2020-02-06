<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />-->
        Beatbox
      </div>

      <!-- <v-spacer></v-spacer> -->

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>-->
    </v-app-bar>

    <v-content>
      <!-- <HelloWorld/> -->
      <!-- <div :v-for="item in playList">
        <v-btn fab x-large >{{item.id}}</v-btn>
      </div>-->
      <div >
        <v-btn v-for="item in playList" :key="item.id" fab x-large @click.prevent="playSound(item.url)">{{item.id}}</v-btn>
      </div>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {
    // HelloWorld,
  },
  methods: {
    playSound(url) {
      if(url)
      {
        var audio = new Audio(
          (url)
        );
        audio.play();
      }
    }
  },
  data: () => ({
    playList: [
      {
        id: "1",
        url: "./audio/se/01/drum-japanese2.mp3"
      },
      {
        id: "2",
        url: "./audio/se/02/trumpet1.mp3"
      },
      {
        id: "3",
        url: "./audio/se/03/kotsudumi1.mp3"
      },
      {
        id: "4",
        url: "./audio/se/04/tin1.mp3"
      },
      {
        id: "5",
        url: "./audio/se/05/costume-drama1.mp3"
      },
      {
        id: "6",
        url: "./audio/se/06/boyon1.mp3"
      },
      {
        id: "7",
        url: "./audio/se/07/Motion-Fracture03-1.mp3"
      },
      {
        id: "8",
        url: "./audio/se/08/Cut04-1.mp3"
      },
      {
        id: "9",
        url: "./audio/se/09/tirin1.mp3"
      }
    ]
    //
  })
};
</script>
