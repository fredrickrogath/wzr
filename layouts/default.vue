<template>
  <div class="my-1 mx-1 flex justify-between">
    <div class="flex row gap-3 bg-red-300 w-[33%]">
      <div class="flex flex-col">
        <div>
          <HeaderAvatar />
        </div>
        <div class="mx-auto">
          <el-switch
            @click="toggleCollapse"
            v-model="isCollapse"
            :active-action-icon="ArrowRight"
            :inactive-action-icon="ArrowLeft"
          />
        </div>
      </div>
      <div class="">
        <HeaderBreadCrumb />
        <div>hello world</div>
        <div>hello world</div>
      </div>
    </div>

    <div class="bg-green-700 w-[33%]">
      <ClientOnly fallback-tag="span">
        <ClockDigital />
        <template #fallback>
          <!-- this will be rendered on server side -->
          <div class="h-[10vh] mt-2 flex items-center justify-center">
            <el-button loading></el-button>
          </div>
        </template>
      </ClientOnly>
    </div>

    <div class="bg-blue-500 w-[33.3%]">
      <!-- <IconsHome/> -->
      <div class="h-1/2 flex justify-end mx-1">
        Login as <span class="mx-1">Manager</span>,
        <span class="ml-1">Last Login was </span>
        <span class="mx-1 tracking-wide">02:03:14 ,12 May 2023</span>
      </div>
      <div class="h-1/2 bg-green-900">
        <HeaderMenuRight />
      </div>
    </div>
  </div>

  <DividerHorizontal />

  <div class="flex w-full bg-yellow-400">
    <div class="mt-[2px] sidebarWidth" :style="{ width: sidebarWidth }">
      <ClientOnly fallback-tag="span">
        <SideBarUnCollapsed v-show="isCollapse" />
        <SideBarCollapsed v-show="!isCollapse" />
        <template #fallback>
          <div class="h-[70vh] flex items-center justify-center">
            <el-button loading></el-button>
          </div>
        </template>
      </ClientOnly>
    </div>

    <DividerVertical />

    <div class="mt-[2px] ml-[2px] w-full bodyWidth" :style="{ width: bodyWidth }">
      <!-- <div style="height: 100%"> -->
      <!-- <el-scrollbar height="100%" class=""> -->
      <slot />
      <!-- </el-scrollbar> -->
      <!-- </div> -->
      <!-- <el-backtop :right="20" :bottom="20" /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useDark, useToggle } from "@vueuse/core";
import { useLayoutStore } from "@/stores/layout";
const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp();
import { ArrowRight, ArrowLeft } from "@element-plus/icons-vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const isDark = useDark();
const isCollapse = ref(false);
const bodyWidth = ref("95%");
const sidebarWidth = ref("5%");
const layoutStore = useLayoutStore();
const toggleDark = useToggle(isDark);

// console.log('gsap:', gsap);

// bodyWidth.value = layoutStore.getBodyWidth;
isCollapse.value = layoutStore.getIsCollapse;
// sidebarWidth.value = layoutStore.getSidebarWidth;

const errorHandler = () => true;
const handleOpen = (key: string, keyPath: string[]) => {};
const handleClose = (key: string, keyPath: string[]) => {};

const toggleCollapse = () => {
  layoutStore.toggleCollapse();
  // sidebarWidth.value = layoutStore.getSidebarWidth;
  // bodyWidth.value = layoutStore.getBodyWidth;
  
};

watch(isCollapse, (newValue) => {
  const t1 = gsap.timeline();

  // Animate sidebar width
  t1.to('.sidebarWidth', {
    duration: 0.5,
    width: layoutStore.getSidebarWidth, // Adjust the width values according to your needs
    ease: 'power2.inOut',
  });

  // Animate body width
  // if (newValue) {
  //   // If collapsing, animate body width from 100% to 95%
  //   t1.fromTo('.bodyWidth', {
  //     width: '100%',
  //   }, {
  //     duration: 0.5,
  //     width: '95%', // Adjust the width values according to your needs
  //     ease: 'power2.inOut',
  //   });
  // } else {
  //   // If expanding, animate body width from 95% to 100%
  //   t1.fromTo('.bodyWidth', {
  //     width: '95%',
  //   }, {
  //     duration: 0.5,
  //     width: '100%', // Adjust the width values according to your needs
  //     ease: 'power2.inOut',
  //   });
  // }

  // Play the timeline
  // t1.play();
});


// watch(isCollapse, (newValue) => {

//   const t1 = gsap.timeline({ paused: true, reversed: false });
// // console.log(newValue)
// t1.play();
// if(newValue){
//   // Animate sidebar width
//   t1.to('.sidebarWidth', {
//     duration: 0.5,
//     width: layoutStore.getSidebarWidth, // Adjust the width values according to your needs
//     ease: 'power2.inOut',
//   });

//   // Animate body width
//   t1.to('.bodyWidth', {
//     duration: 0.5,
//     width: '95%', // Adjust the width values according to your needs
//     ease: 'power2.inOut',
//   });
// }else{
//   t1.to('.sidebarWidth', {
//     duration: 0.5,
//     width: layoutStore.getSidebarWidth, // Adjust the width values according to your needs
//     ease: 'power2.inOut',
//   });

//   // Animate body width
//   t1.from('.bodyWidth', {
//     duration: 0.5,
//     width: '95%', // Adjust the width values according to your needs
//     ease: 'power2.inOut',
//   });
//   t1.to('.bodyWidth', {
//     duration: 0.5,
//     width: '100%', // Adjust the width values according to your needs
//     ease: 'power2.inOut',
//   });
// }
// });

</script>
