<template>
  <div class="dark">
  <el-button @click="ElMessage('hello')">button</el-button>
  <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
  <LazyElButton type="warning">lazy button</LazyElButton>

  
{{isDark}}
  <el-switch
    v-model="isDark"
    :before-change="notifyDarkChanged"
    :active-action-icon="View"
    :inactive-action-icon="Hide"
     loading
  />
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { useDark, useToggle } from '@vueuse/core'
import { Hide, View } from '@element-plus/icons-vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const notifyDarkChanged = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      ElMessage.success(!isDark.value ? 'Dark Mode' : 'Light Mode')
      return resolve(true)
    }, 1)
  })
}


</script>
