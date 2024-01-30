<template>
  <aside class="">
    <div class="flex flex-col md:flex-row h-[100vh]">
      

      <!-- <DividerVertical class="w-[2px]" /> -->

      <div class="w-3/5">
        <!-- <ChartsApexChartsBar/> -->
        <div class="flex flex-col md:flex-row mt-1">
          <div
            class="mini border border-gray-200 rounded-xl mx-1 relative w-full bg-center group rounded-lg overflow-hidden my-1 py-1 transition duration-300 ease-in-out"
          >
            <CardsMini
              id="animate-1"
              period="Today's expenses"
              count="56"
              price="12,390,000"
            />
          </div>
          <!-- <DividerVertical class="w-[6px]" /> -->
          <div
            class="mini border border-gray-200 rounded-xl mx-1 relative w-full bg-center group rounded-lg overflow-hidden my-1 py-1 transition duration-300 ease-in-out"
          >
            <CardsMini
              id="animate-2"
              period="Today's sales"
              count="23"
              price="2,670,000"
            />
          </div>
          <!-- <DividerVertical class="w-[6px]" /> -->

          <div
            class="mini border border-gray-200 rounded-xl mx-1 relative w-full bg-center group rounded-lg overflow-hidden my-1 py-1 transition duration-300 ease-in-out"
          >
            <CardsMini
              id="animate-3"
              period="Today's purchases"
              count="14"
              price="1,880,000"
            />
          </div>
        </div>

        <!-- <DividerHorizontal /> -->

        <div class="mb-2">
          <ChartsGoogleChartsLine
            title="Weekly Statistics on Sales vs Expenses"
          />
        </div>
        

        <!-- <DividerHorizontal /> -->

        <div class="my-1">
          <CardsTableTopSelling />
        </div>
      </div>

      <div class="w-2/5">
        <!-- <ChartsApexChartsLine/> -->
        <div class="flex flex-col md:flex-row mt-1">
          <!-- <div
            class="mini border border-gray-200 rounded-xl mx-1 relative w-full bg-center group rounded-lg overflow-hidden my-1 py-1 transition duration-300 ease-in-out"
          > -->
          <!-- <CardsMini
              period="Today's expenses"
              count="56"
              price="12,390,000"
            /> -->

          <ChartsGoogleChartsGauge title="Goal 01"/>
          <!-- </div> -->

          <!-- <div
            class="mini border border-gray-200 rounded-xl mx-1 relative w-full bg-center group rounded-lg overflow-hidden my-1 py-1 transition duration-300 ease-in-out"
          > -->
          <ChartsGoogleChartsGauge title="Goal 02"/>
          <!-- <CardsMini period="Today's sales" count="23" price="2,670,000" /> -->
          <!-- </div> -->
          <ChartsGoogleChartsGauge title="Goal 03"/>
          <!-- <DividerVertical class="w-[3px]" /> -->
        </div>

        <!-- <DividerHorizontal /> -->

        <div>
          <!-- <ChartsGoogleChartsLine
            title="Weekly Statistics on Sales vs Expenses"
          /> -->

          <div class="flex flex-col md:flex-row justify-between">
          <!-- <ChartsApexChartsPie/> -->
          <!-- <ChartsGoogleChartsPie/> -->
          <div class="w-1/2">
            <ChartsGoogleChartsPie title="Expenses" />
          </div>

          <!-- <DividerVertical class="w-[2px]" /> -->

          <div class="w-1/2">
            <ChartsGoogleChartsPie title="Purchases" />
          </div>
        </div>
        </div>

        <!-- <DividerHorizontal /> -->

        <div class="my-2">
          <CardsTableDebts />
        </div>
      </div>
    </div>
    <DividerHorizontal />

    <!-- <div class="flex h-[30vh] py-1">
      <div class="mx-1">
        hello 123
      </div>
    </div> -->

    <!-- <DividerHorizontal /> -->

    <!-- <div class="flex h-[30vh]">
      <div class="w-1/2 mx-1">hello 4</div>

      <DividerVertical />

      <div class="w-1/2 mx-1">hello 5</div>

      <DividerVertical />

      <div class="w-1/2 mx-1">hello 6</div>
    </div> -->

    <!-- <DividerHorizontal /> -->
  </aside>
</template>

<script lang="ts" setup>
// const route = useRoute();
// console.log(route.path === '/')

// import { ref, watch, onMounted } from "vue";
// const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp();
// const { sayHello } = useUtils();
// sayHello("RickGath fredro");

// onMounted(() => {
//   const t1 = gsap.timeline();
//   const t2 = gsap.timeline();
//   const t3 = gsap.timeline();
//   const t4 = gsap.timeline();
//   const t5 = gsap.timeline();
//   t1.fromTo(
//     "#animate-1",
//     {
//       marginTop: "-100%",
//     },
//     {
//       duration: 0.5,
//       marginTop: "0px",
//       ease: "power2.inOut",
//     }
//   );
//   t1.fromTo(
//     "#animate-2",
//     {
//       marginTop: "-100%",
//     },
//     {
//       duration: 0.6,
//       marginTop: "0px",
//       ease: "power2.inOut",
//     }
//   );
//   t1.fromTo(
//     "#animate-3",
//     {
//       marginTop: "-100%",
//     },
//     {
//       duration: 0.6,
//       marginTop: "0px",
//       ease: "elastic.inOut",
//     }
//   );
// });
</script>
<!-- animate-3 -->
