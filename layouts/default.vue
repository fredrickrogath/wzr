<template>
  <div class="my-1 mx-1 flex justify-between">
    <div class="flex row gap-3 bg-red-300 w-[33%]">
      <div class="flex flex-col">
        <div>
          <HeaderAvatar />
        </div>
        <div class="mx-auto">
          <el-switch
          v-model="isCollapse"
          :active-action-icon="Moon"
          :inactive-action-icon="Sunny"
        />
        </div>
      </div>
      <div class="">
        <HeaderBreadCrumb />
        <div>
          hello world
        </div>
        <div>
          hello world
        </div>
      </div>
    </div>

    <div class="bg-green-700 w-[33%]">
      <ClientOnly fallback-tag="span">
      <ClockDigital/>
      <template #fallback>
          <!-- this will be rendered on server side -->
          <div class="h-[10vh] mt-2 flex items-center justify-center">
            <el-button loading></el-button>
          </div>
        </template>
      </ClientOnly>
    </div>

    <div class="bg-blue-500 w-[33.3%]">
      <div class="h-1/2 flex justify-end mx-1">
        Login as <span class="mx-1">Manager</span>, <span class="ml-1">Last Login was </span> <span class="mx-1 tracking-wide">02:03:14 ,12 May 2023</span>
      </div>
      <div class="h-1/2 bg-green-900">
        <HeaderMenuRight/>
      </div>
    </div>
  </div>

  <DividerHorizontal />

  <div class="flex w-full">
    <div class="mt-[2px]" :class="sidebarWidth">
      <!-- <div class="bg-red-500">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button
            :label="false"
            @click="toggleWidth"
            v-show="isCollapse"
            >expand</el-radio-button
          >
          <el-radio-button
            :label="true"
            @click="toggleWidth"
            v-show="!isCollapse"
            >collapse</el-radio-button
          >
        </el-radio-group>
      </div> -->
      <ClientOnly fallback-tag="span">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
          style="height: 0vh"
        >
          <el-menu-item index="1">
            <el-icon><setting /></el-icon>
            <template #title>Sales</template>
          </el-menu-item>
          
          <el-menu-item index="2">
            <el-icon><setting /></el-icon>
            <template #title>Expenses</template>
          </el-menu-item>
          
          <el-menu-item index="3">
            <el-icon><setting /></el-icon>
            <template #title>Purchases</template>
          </el-menu-item>
          
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <template #title>Co documents</template>
          </el-menu-item>

          <el-menu-item index="5">
            <el-icon><setting /></el-icon>
            <template #title>Reports</template>
          </el-menu-item>

          <div class="h-[35vh]"></div>

          <DividerHorizontal />

          <el-menu-item index="6">
            <el-icon><SwitchButton /></el-icon>
            <template #title>Sign out</template>
          </el-menu-item>
        </el-menu>

        <template #fallback>
          <!-- this will be rendered on server side -->
          <div class="h-[70vh] flex items-center justify-center">
            <el-button loading></el-button>
          </div>
        </template>
      </ClientOnly>
    </div>

    <DividerVertical />

    <div class="mt-[2px] ml-[2px]" :class="bodyWidth">
      <div style="height: 87vh" class="">
        <el-scrollbar height="4000px">
        <slot />
      </el-scrollbar>
      </div>
      <el-backtop :right="20" :bottom="20" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { Moon, Sunny, SwitchButton } from "@element-plus/icons-vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const isCollapse = ref(true);
const sidebarWidth = ref("w-[5%]");
const bodyWidth = ref("w-[95%]");

const errorHandler = () => true;
const handleOpen = (key: string, keyPath: string[]) => {};
const handleClose = (key: string, keyPath: string[]) => {};

const toggleWidth = () => {
  if (isCollapse.value) {
    sidebarWidth.value = "w-[15%]";
    bodyWidth.value = "w-[85%]";
  } else {
    sidebarWidth.value = "w-[5%]";
    bodyWidth.value = "w-[95%]";
  }
  isCollapse.value = !isCollapse.value;
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
