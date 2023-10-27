<template>
  <!-- component -->
  <aside
    class="flex flex-col h-full px-0 overflow-x-hidden bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700"
  >
    <div class="flex flex-col justify-between flex-1">
      <nav class="-mx-2">
        <div class="">
          <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400"
            >analytics</label
          >

          <a
            class="flex items-center justify-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <el-tooltip content="Home" placement="right" effect="dark">
              <IconsHome />
            </el-tooltip>

            <!-- <span class="mx-2 text-sm font-medium">Dashboard</span> -->
          </a>
        </div>

        <div class="">
          <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400"
            >contents</label
          >

          <a
            class="flex items-center justify-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <el-tooltip content="Sales" placement="right" effect="dark">
              <IconsAnalytic />
            </el-tooltip>

            <!-- <span class="mx-2 text-sm font-medium">Sales</span> -->
          </a>

          <a
            class="flex items-center justify-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <el-tooltip content="Expenses" placement="right" effect="dark">
              <IconsExpense />
            </el-tooltip>

            <!-- <span class="mx-2 text-sm font-medium">Expenses</span> -->
          </a>

          <a
            class="flex items-center justify-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <el-tooltip content="Purchases" placement="right" effect="dark">
              <IconsPurchase />
            </el-tooltip>

            <!-- <span class="mx-2 text-sm font-medium">Purchases</span> -->
          </a>

        </div>

        <div class="">
          <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400"
            >manage</label
          >

          <a
            class="flex items-center justify-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <el-tooltip content="Users" placement="right" effect="dark">
              <IconsUser />
            </el-tooltip>

            <!-- <span class="mx-2 text-sm font-medium">Co documents</span> -->
          </a>

          <a
            class="flex items-center justify-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <el-tooltip content="Documents" placement="right" effect="dark">
              <IconsDocument />
            </el-tooltip>

            <!-- <span class="mx-2 text-sm font-medium">Co documents</span> -->
          </a>

          <a
            class="flex items-center justify-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <el-tooltip content="Reports" placement="right" effect="dark">
              <IconsReport />
            </el-tooltip>

            <!-- <span class="mx-2 text-sm font-medium">Financial Reports</span> -->
          </a>
        </div>

        <div class="absolute bottom-0">
          <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400"
            >Log out</label
          >

          <a
            class="flex items-center justify-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <el-tooltip content="Sign out" placement="right" effect="dark">
              <IconsSignOut />
            </el-tooltip>

            <!-- <span class="mx-2 text-sm font-medium">Sign out</span> -->
          </a>
        </div>
      </nav>
    </div>
  </aside>
</template>
