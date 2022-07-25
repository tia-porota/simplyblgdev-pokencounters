import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery'
import { DropdownPlugin, TablePlugin, CardPlugin, NavPlugin, NavbarPlugin, CarouselPlugin } from 'bootstrap-vue'
import Layout from './layouts/Main.vue'
import NiceDatalist from './components/NiceDatalist.vue'
import UTNNavBar from './components/UTNNavBar.vue';

Vue.use(VueRouter)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
Vue.use(CardPlugin)
Vue.use(NavPlugin)
Vue.use(NavbarPlugin)
Vue.use(CarouselPlugin)

Vue.config.productionTip = false

const routes = [
  { path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */'./pages/Home.vue'),
    meta: {
      title: 'Simply BLG'
    }
  },
  { path: '/Portfolio',
    name: 'Portfolio',
    component: () => import(/* webpackChunkName: "Portfolio" */'./pages/Portfolio.vue'),
    meta: {
      title: 'Digital Portfolio'
    }
  },
  { path: '/Pokemon',
    name: 'Pokemon',
    component: () => import(/* webpackChunkName: "Pokemon" */'./pages/Pokemon/PokemonIndex.vue'),
    meta: {
      title: 'Pokémon interactive maps'
    }
  },
  { path: '/Pokemon/Kanto',
    name: 'Kanto',
    component: () => import(/* webpackChunkName: "Pokemon" */'./pages/Pokemon/Pokemon.vue'),
    meta: {
      title: 'Kanto interactive map for RBY'
    },
    props: {
      'mapJSON': require('@/assets/Pokemon/Maps/data/KantoMaps.json'),
      'encountersJSON': require('@/assets/Pokemon/Maps/data/KantoEncounters.json'),
      'mapIMGsrc': [ require('@/assets/Pokemon/Maps/regions/Kanto.png') ]
    }
  },
  { path: '/Pokemon/Johto',
    name: 'Johto',
    component: () => import(/* webpackChunkName: "Pokemon" */'./pages/Pokemon/Pokemon.vue'),
    meta: {
      title: 'Johto interactive map for GSC'
    },
    props: {
      'mapJSON': require('@/assets/Pokemon/Maps/data/JohtoMaps.json'),
      'encountersJSON': require('@/assets/Pokemon/Maps/data/JohtoEncounters.json'),
      'mapIMGsrc': [ require('@/assets/Pokemon/Maps/regions/Johto.png') ]
    }
  },
  { path: '/Pokemon/Kanto3',
    name: 'Kanto Gen 3',
    component: () => import(/* webpackChunkName: "Pokemon" */'./pages/Pokemon/Pokemon.vue'),
    meta: {
      title: 'Kanto interactive map for FRLG'
    },
    props: {
      'mapJSON': require('@/assets/Pokemon/Maps/data/Kanto3Maps.json'),
      'encountersJSON': require('@/assets/Pokemon/Maps/data/Kanto3Encounters.json'),
      'mapIMGsrc': [
        require('@/assets/Pokemon/Maps/regions/Kanto3.png'),
        require('@/assets/Pokemon/Maps/regions/Kanto3_1.png'),
        require('@/assets/Pokemon/Maps/regions/Kanto3_2.png'),
        require('@/assets/Pokemon/Maps/regions/Kanto3_3.png')
      ]
    }
  },
  { path: '/Pokemon/Hoenn',
    name: 'Hoenn',
    component: () => import(/* webpackChunkName: "Pokemon" */'./pages/Pokemon/Pokemon.vue'),
    meta: {
      title: 'Hoenn interactive map for RSE'
    },
    props: {
      'mapJSON': require('@/assets/Pokemon/Maps/data/HoennMaps.json'),
      'encountersJSON': require('@/assets/Pokemon/Maps/data/HoennEncounters.json'),
      'mapIMGsrc': [ require('@/assets/Pokemon/Maps/regions/Hoenn.png') ]
    }
  },
  { path: '/Pokemon/Sinnoh',
    name: 'Sinnoh',
    component: () => import(/* webpackChunkName: "Pokemon" */'./pages/Pokemon/Pokemon.vue'),
    meta: {
      title: 'Sinnoh interactive map for DPPt'
    },
    props: {
      'mapJSON': require('@/assets/Pokemon/Maps/data/SinnohMaps.json'),
      'encountersJSON': require('@/assets/Pokemon/Maps/data/SinnohEncounters.json'),
      'mapIMGsrc': [ require('@/assets/Pokemon/Maps/regions/Sinnoh.png') ]
    }
  },
  { path: '/Pokemon/Johto4',
    name: 'Johto4',
    component: () => import(/* webpackChunkName: "Pokemon" */'./pages/Pokemon/Pokemon.vue'),
    meta: {
      title: 'Johto interactive map for HGSS'
    },
    props: {
      'mapJSON': require('@/assets/Pokemon/Maps/data/Johto4Maps.json'),
      'encountersJSON': require('@/assets/Pokemon/Maps/data/Johto4Encounters.json'),
      'mapIMGsrc': [ require('@/assets/Pokemon/Maps/regions/Johto4.png') ]
    }
  },
  { path: '/Pokemon/GoogleTranslatedEmerald',
    name: 'Google Translated Pokémon Emerald',
    component: () => import(/* webpackChunkName: "GoogleTranslate" */'./pages/Pokemon/GoogleTranslate.vue'),
    meta: {
      title: 'Google Translated Pokémon Emerald'
    }
  },
  { path: '/Pokemon/ROWE',
    name: 'HoennROWE',
    component: () => import(/* webpackChunkName: "PokemonRH" */'./pages/Pokemon/Pokemon.vue'),
    meta: {
      title: 'Hoenn interactive map for ROWE'
    },
    props: {
      'mapJSON': require('@/assets/Pokemon/Maps/data/ROWEMaps.json'),
      'encountersJSON': require('@/assets/Pokemon/Maps/data/ROWEEncounters.json'),
      'mapIMGsrc': [ require('@/assets/Pokemon/Maps/regions/Hoenn.png') ]
    }
  },
  { path: '/science/graficadora',
    name: 'Graficadora',
    component: () => import(/* webpackChunkName: "Encodings" */'./pages/Science/Encodings.vue'),
    meta: {
      title: 'Graficadora para señales'
    }
  },
  { path: '/science/graficadora/informacion',
    name: 'Información/Contacto',
    component: () => import(/* webpackChunkName: "Encodings" */'./pages/Science/EncodingsInformation.vue'),
    meta: {
      title: 'Información'
    }
  },
  { path: '/science/sim/pseudorandom',
    name: 'Pseudoaleatorio',
    component: () => import(/* webpackChunkName: "SIM" */'./pages/Science/SIM/pseudoaleatorio.vue'),
    meta: {
      title: 'Generador de Números pseudo-aleatorios'
    }
  },
  { path: '/science/sim/jisquare',
    name: 'JiSquare',
    component: () => import(/* webpackChunkName: "SIM" */'./pages/Science/SIM/chi.vue'),
    meta: {
      title: 'Prueba Ji-Cuadrado'
    }
  },
  { path: '/science/sim/tp3',
    name: 'TP3',
    component: () => import(/* webpackChunkName: "SIM" */'./pages/Science/SIM/TP3.vue'),
    meta: {
      title: 'TP3'
    }
  },
  { path: '/science/sim/tp4',
    name: 'TP4',
    component: () => import(/* webpackChunkName: "SIM" */'./pages/Science/SIM/TP4.vue'),
    meta: {
      title: 'TP4'
    }
  },
  { path: '/science/sim/tp5',
    name: 'TP5',
    component: () => import(/* webpackChunkName: "SIM" */'./pages/Science/SIM/TP5.vue'),
    meta: {
      title: 'TP5'
    }
  },
  { path: '/science/sim/tp6',
    name: 'TP6',
    component: () => import(/* webpackChunkName: "SIM" */'./pages/Science/SIM/TP6.vue'),
    meta: {
      title: 'TP6'
    }
  },
  { path: '/science/sim/tpf',
    name: 'TPF',
    component: () => import(/* webpackChunkName: "SIM" */'./pages/Science/SIM/TPF.vue'),
    meta: {
      title: 'TPF'
    }
  },
  { path: '/science/sim/tpf2',
    name: 'TPF2',
    component: () => import(/* webpackChunkName: "SIM" */'./pages/Science/SIM/TPF2.vue'),
    meta: {
      title: 'TPF2'
    }
  },
  { path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */'./pages/404.vue'),
    meta: {
      title: '404 - Page not found'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})

// eslint-disable-next-line
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Simply BLG';
  next();
});

Vue.component('NiceDatalist', NiceDatalist);
Vue.component('UTNNavBar', UTNNavBar);

new Vue({
  el: '#app',
  render: h => h(Layout),
  router
}).$mount('#app')