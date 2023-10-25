<template>
  <div class="flex py-2 bg-red-400">
    <div class="grow">hello 1</div>

    <div class="grow">hello 2</div>

    <div class="grow">hello 2</div>

    <div class="">
      <el-dropdown size="small" split-button type="primary">
        Theme
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Dim light</el-dropdown-item>
            <el-dropdown-item>Dark theme</el-dropdown-item>
            <el-dropdown-item>Light theme</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<style scoped>
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
</style>
