<template>
  <aside class="">
    <div class="flex h-[100vh]">
      <div class="w-3/5">
        <!-- <ChartsApexChartsBar/> -->
        <div class="flex mt-1">
          <CardsMini period="Today's expenses" count="56" price="12,390,000" />
          <!-- <DividerVertical class="w-[6px]" /> -->
          <CardsMini period="Today's sales" count="23" price="2,670,000" />
          <!-- <DividerVertical class="w-[6px]" /> -->
          <CardsMini period="Today's purchases" count="14" price="1,880,000" />
        </div>

        <!-- <DividerHorizontal /> -->

        <div class="flex justify-between">
          <!-- <ChartsApexChartsPie/> -->
          <!-- <ChartsGoogleChartsPie/> -->
          <div class="w-1/2">
            <ChartsGoogleChartsPie />
          </div>

          <!-- <DividerVertical class="w-[2px]" /> -->

          <div class="w-1/2">
            <ChartsGoogleChartsPie />
          </div>
        </div>

        <!-- <DividerHorizontal /> -->

        <div class="my-1">
          <CardsTableTopSelling />
        </div>
      </div>

      <!-- <DividerVertical class="w-[2px]" /> -->

      <div class="w-2/5 overflow-hidden">
        <!-- <ChartsApexChartsLine/> -->
        <div class="flex mt-1">
          <CardsMini period="Today's expenses" count="56" price="12,390,000" />
          <!-- <DividerVertical class="w-[3px]" /> -->
          <CardsMini period="Today's sales" count="23" price="2,670,000" />
        </div>

        <!-- <DividerHorizontal /> -->

        <div>
          <ChartsGoogleChartsPie />
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

<script setup>
// const { sayHello } = useUtils();
// sayHello("RickGath fredro");
</script>
