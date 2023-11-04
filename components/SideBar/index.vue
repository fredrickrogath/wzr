<template>
  <!-- component -->
  <aside
    class="flex flex-col h-full px-4 overflow-hidden border-r rtl:border-r-0 rtl:border-l"
  >
    <div class="flex flex-col justify-between flex-1">
      <nav class="-mx-3">
        <div class="mx-auto">
          <label class="text-xs px-auto uppercase"
            >home</label
          >

          <a
            class="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg"
            href="#"
            ><el-tooltip content="Home" placement="right" effect="dark">
              <IconsHome />
            </el-tooltip>

            <span class="mx-2 text-sm font-medium absolute -left-36" id="word"
              >Home</span
            >
          </a>
        </div>

        <div class="">
          <label class="text-xs uppercase"
            >content</label
          >

          <a
            class="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg"
            href="#"
          >
            <el-tooltip content="Sales" placement="right" effect="dark">
              <IconsAnalytic />
            </el-tooltip>

            <span class="mx-2 text-sm font-medium absolute -left-36" id="word"
              >Sales</span
            >
          </a>

          <a
            class="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg"
            href="#"
          >
            <el-tooltip content="Expenses" placement="right" effect="dark">
              <IconsExpense />
            </el-tooltip>

            <span class="mx-2 text-sm font-medium absolute -left-36" id="word"
              >Expenses</span
            >
          </a>

          <a
            class="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg"
            href="#"
          >
            <el-tooltip content="Purchases" placement="right" effect="dark">
              <IconsPurchase />
            </el-tooltip>

            <span class="mx-2 text-sm font-medium absolute -left-36" id="word"
              >Purchases</span
            >
          </a>
        </div>

        <div class="">
          <label class="text-xs uppercase"
            >manage</label
          >

          <a
            class="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg"
            href="#"
          >
            <el-tooltip content="Users" placement="right" effect="dark">
              <IconsUser />
            </el-tooltip>

            <span class="mx-2 text-sm font-medium absolute -left-36" id="word"
              >Users</span
            >
          </a>

          <a
            class="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg"
            href="#"
          >
            <el-tooltip content="Documents" placement="right" effect="dark">
              <IconsDocument />
            </el-tooltip>

            <span class="mx-2 text-sm font-medium absolute -left-36" id="word"
              >Co documents</span
            >
          </a>

          <a
            class="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg"
            href="#"
          >
            <el-tooltip content="Reports" placement="right" effect="dark">
              <IconsReport />
            </el-tooltip>

            <span class="mx-2 text-sm font-medium absolute -left-36" id="word"
              >Financial Reports</span
            >
          </a>
        </div>

        <div class="absolute bottom-0">
          <label class="text-xs text-gray-500 uppercase dark:text-gray-400"
            >Log out</label
          >

          <a
            class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <el-tooltip content="Logout" placement="right" effect="dark">
              <IconsSignOut />
            </el-tooltip>

            <span class="mx-2 text-sm font-medium absolute -left-36" id="word"
              >Logout</span
            >
          </a>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useLayoutStore } from "@/stores/layout";
const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp();

const props = defineProps({
  isCollapse: { type: Boolean, required: true },
});

watch(
  () => props.isCollapse,
  (newValue, oldValue) => {
    const t1 = gsap.timeline({ paused: false, reversed: false });
    if (newValue) {
      t1.fromTo(
        "#word",
        {
          left: "-144px ",
        },
        {
          duration: 0.5,
          left: "35px",
          ease: "power2.inOut",
        }
      );
    } else {
      t1.fromTo(
        "#word",
        {
          left: "35px",
        },
        {
          duration: 0.5,
          left: "-144px ",
          ease: "power2.inOut",
        }
      );
    }
  }
);
</script>
