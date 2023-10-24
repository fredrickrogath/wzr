<template>
  <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  <!-- <div>
  <el-button @click="ElMessage('hello')">button</el-button>
  <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
  <LazyElButton type="warning">lazy button</LazyElButton>

  <p class="text-red-700">

    {{isDark}}
  </p>
  
  <el-switch
    v-model="isDark"
    :before-change="notifyDarkChanged"
    :active-action-icon="Moon"
    :inactive-action-icon="Sunny"
    
  />
  </div> -->
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useDark, useToggle } from '@vueuse/core'
import { Moon, Sunny } from '@element-plus/icons-vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const notifyDarkChanged = () => {
  const toggleDark = useToggle(isDark)
  return new Promise((resolve) => {
    setTimeout(() => {
      ElMessage.success(!isDark.value ? 'Dark Mode' : 'Light Mode')
      return resolve(true)
    }, 1)
  })
}


</script>

<style scoped>
html.dark {
  /* custom dark bg color */
  --el-bg-color: #626aef;
}

</style>