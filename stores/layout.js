export const useLayoutStore = defineStore("counter", () => {
  const isCollapse = ref(false);
  const sidebarWidth = ref("5%");
  // const bodyWidth = ref("92%");

  const getIsCollapse = computed(() => isCollapse.value);
  const getSidebarWidth = computed(() => sidebarWidth.value);
  // const getBodyWidth = computed(() => bodyWidth.value);

  // function setSidebarWidth(width) {
  //   sidebarWidth.value = width;
  // }

  // function setBodyWidth(width) {
  //   sidebarWidth.value = width;
  // }

  function toggleCollapse() {
    // if (getIsCollapse.value) {
    //   bodyWidth.value = "95%";
    //   sidebarWidth.value = "5%";
    // } else {
    //   bodyWidth.value = "85%";
    //   sidebarWidth.value = "15%";
    // }
    isCollapse.value = !isCollapse.value;
  }

  return {
    getIsCollapse,
    getSidebarWidth,
    // getBodyWidth,
    // setSidebarWidth,
    // setBodyWidth,
    toggleCollapse,
  };
});
