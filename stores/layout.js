export const useLayoutStore = defineStore("counter", () => {
  const isCollapse = ref(false);
  const sidebarWidth = ref("w-[5%]");
  const bodyWidth = ref("w-[95%]");

  const getIsCollapse = computed(() => isCollapse.value);
  const getSidebarWidth = computed(() => sidebarWidth.value);
  const getBodyWidth = computed(() => bodyWidth.value);

  function setSidebarWidth(width) {
    sidebarWidth.value = width;
  }

  function setBodyWidth(width) {
    sidebarWidth.value = width;
  }

  function toggleCollapse() {
    if (getIsCollapse.value) {
      bodyWidth.value = "w-[95%]";
      sidebarWidth.value = "w-[5%]";
    } else {
      bodyWidth.value = "w-[90%]";
      sidebarWidth.value = "w-[10%]";
    }
    isCollapse.value = !isCollapse.value;
  }

  return {
    getIsCollapse,
    getSidebarWidth,
    getBodyWidth,
    setSidebarWidth,
    setBodyWidth,
    toggleCollapse,
  };
});
