<template>
  <div class="">
    <div class="flex justify-end mx-1">
      Login as <span class="mx-1">Manager</span>,
      <span class="ml-1">Last Login was </span>
      <span class="mx-1 tracking-wide">02:03:14 ,12 May 2023</span>
    </div>

    <div class="flex py-2">
      <div class="grow">hello 1</div>

      <div class="grow">hello 2</div>

      <div class="grow">hello 2</div>

      <div class="mx-auto">
        <el-switch
          v-model="isDark"
          :active-action-icon="Moon"
          :inactive-action-icon="Sunny"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from "@vueuse/core";
import { ref, watch, onMounted } from "vue";
import { Sunny, Moon } from "@element-plus/icons-vue";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style scoped>
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
</style>