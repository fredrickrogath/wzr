<template>
  <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
</template>

<style>
html {
  background-color: #f9fafb;
}
html.dark {
  background: #1f2937;
  color: #d1d5db;
}
html.dark button:hover{
  background-color: #374151;
}
html.dark .chart{
  border-color: #374151;
}
html.dark .mini{
  border-color: #374151;
}
html.dark #divider{
  background-color: #374151;
}
html.dark #table{
  border-color: #374151;
}
/* html.dark #sidebar a{
  background-color: #374151;
} */
html.dark #sidebar a:hover{
  background-color: #374151;
}

svg > g > g.google-visualization-tooltip { pointer-events: none }
</style>