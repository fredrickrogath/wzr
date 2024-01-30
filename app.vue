<template>
  <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
</template>

<style>
body{
  scroll-behavior: smooth;
}

html {
  background-color: #f9fafb;
  scroll-behavior: smooth;
}
html.dark {
  scroll-behavior: smooth;
  background: hwb(215 12% 78%);
  color: #d1d5db;
}
html.dark button:hover{
  background-color: #374151;
}
html.dark .chart{
  border-color: #374151;
}

html.dark g text {
  fill: #d1d5db
}

html.dark #gauge g text {
  fill: #374151;
  /* font-weight: 600; */
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

/* .el-tabs ,.el-tabs--items {
  background-color: transparent !important;
} */

tr td, th {
  background-color: transparent !important;
}

:root {
  --el-bg-color: green;
}


.el-tabs,
#tab-2,
.el-tabs--items,
.el-tabs--border-card {
  color: black !important;
  border: 0 !important;
  /* background-color: transparent !important; */
}


.google-visualization-tooltip > ul > li { 
width: 150px !important;
border: none !important;
border-radius: 21px !important;
/* background-color: rgb(30, 50, 230)!important; */
position: absolute !important;
box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75) !important;
background: -moz-linear-gradient(30deg, rgb(30, 50, 230) 30%, rgb(90, 140, 250) 70%) !important;
background: -webkit-linear-gradient(30deg, rgb(30, 50, 230) 30%, rgb(90, 140, 250) 70%) !important;
background: -o-linear-gradient(30deg, rgb(30, 50, 230) 30%, rgb(90, 140, 250) 70%) !important;
background: -ms-linear-gradient(30deg, rgb(30, 50, 230) 30%, rgb(90, 140, 250) 70%) !important;
background: linear-gradient(120deg, rgb(30, 50, 230) 30%, rgb(90, 140, 250) 70%) !important;
font-size:  10px !important;
}
</style>