import VueRouter from "vue-router";
import HomeCm from "./components/HomeCm.vue";
import TvShows from "./components/TvShows.vue";

import ShowInfo from "./components/Header/ShowInfo.vue";
import ExploreCmp from "./components/Explore/ExploreCmp.vue";
import EnglishCmp from "./components/Explore/EnglishCmp.vue";
import KoreanCmp from "./components/Explore/KoreanCmp.vue";
import ChineseCmp from "./components/Explore/ChineseCmp.vue";
import TurkishCmp from "./components/Explore/TurkishCmp.vue";
import CompletedCmp from "./components/Explore/CompletedCmp.vue";
import ShowCmp from "./components/Explore/ShowCmp.vue";
import ActorsCmp from "./components/Actors/ActorsCmp.vue";
import ActorDetails from "./components/Actors/ActorDetails.vue";

let router = new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/",
            name:"home",
            component:HomeCm,
        },
        {
            path:"/tvshows/:data",
            name:"TvShows",
            component:TvShows,
        },
        { path: '/Header/ShowInfo',
        name: 'ShowInfo',
        component: ShowInfo
        },
        { path: '/Explore/EnglishCmp/:data',
        name: 'EnglishCmp',
        component: EnglishCmp
        },
        { path: '/Explore/KoreanCmp/:data',
        name: 'KoreanCmp',
        component: KoreanCmp
        },
        { path: '/Explore/ChineseCmp/:data',
        name: 'ChineseCmp',
        component: ChineseCmp
        },
        { path: '/Explore/TurkishCmp/:data',
        name: 'TurkishCmp',
        component: TurkishCmp
        },
        { path: '/Explore/CompletedCmp/:data',
        name: 'CompletedCmp',
        component: CompletedCmp
        },
        { path: '/ExploreCmp/:data',
        name: 'ExploreCmp',
        component: ExploreCmp
        },
        { path: '/Explore/showcmp/:data',
        name: 'showcmp',
        component: ShowCmp
        },
      
        { path: '/ActorsCmp/:data',
        name: 'ActorsCmp',
        component: ActorsCmp
        },
        { path: '/ActorDetails',
        name: ' ActorDetails',
        component:  ActorDetails
        },
       
    ],
});

export default router;