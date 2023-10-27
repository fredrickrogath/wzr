<template>
    <!-- component -->
<aside class="flex flex-col w-60 h-full px-5 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">


    <div class="flex flex-col justify-between flex-1">
        <nav class="-mx-2">
            <div class="">
                <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">analytics</label>

                <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
            
                    <IconsHome />

                    <span class="mx-2 text-sm font-medium">Dashboard</span>
                </a>

            </div>
            
            <div class="">
                <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">content</label>

                <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                    <IconsAnalytic/>

                    <span class="mx-2 text-sm font-medium">Sales</span>
                </a>

                <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">

                    <IconsExpense/>

                    <span class="mx-2 text-sm font-medium">Expenses</span>
                </a>

                <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">

                    <IconsPurchase/>

                    <span class="mx-2 text-sm font-medium">Purchases</span>
                </a>
                
            </div>

            <div class="">
                <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">manage</label>

                <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">

                    <IconsUser/>

                    <span class="mx-2 text-sm font-medium">Users</span>
                </a>

                <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">

                    <IconsDocument/>

                    <span class="mx-2 text-sm font-medium">Co documents</span>
                </a>

                <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                    <IconsReport/>

                    <span class="mx-2 text-sm font-medium">Financial Reports</span>
                </a>
            </div>

            <div class="absolute bottom-0">
                <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Log out</label>    

                <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                    <IconsSignOut/>

                    <span class="mx-2 text-sm font-medium">Sign out</span>
                </a>
            </div>
        </nav>
    </div>
</aside>
</template>