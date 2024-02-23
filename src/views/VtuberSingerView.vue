<template>
  <div w-full flex flex-col>
    <div w-fuscll flex items-center>
      <n-avatar size-160px round :src="face" />
      <div m-l-20px>
        <div font-600 text-30px>蝶蝶Hikari</div>
        <div text-18px>共有{{ count }}首歌</div>
        <div>
          <n-button-group>
            <n-button size="small">主页</n-button>
            <n-button size="small">直播间</n-button>
          </n-button-group>
        </div>
      </div>
    </div>

    <div m-t-10px w-full>
      <n-grid x-gap="10" y-gap="10" :cols="12" item-responsive responsive="screen">
        <n-gi span="6 m:4 l:2">
          <n-select
            placeholder="选择语言"
            :options="languages.map((item) => ({ label: item, value: item }))"
          />
        </n-gi>
        <n-gi span="6 m:4 l:2">
          <n-select placeholder="选择类型" />
        </n-gi>
        <n-gi span="12 m:8 l:8">
          <n-input-group w-full>
            <n-input clearable placeholder="搜索歌曲/歌手" />
            <n-button type="primary"> 搜索 </n-button>
          </n-input-group>
        </n-gi>
      </n-grid>
    </div>

    <div m-t-10px h-full>
      <n-data-table
        :data="db"
        :columns="columns"
        :bordered="false"
        :bottom-bordered="false"
      ></n-data-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import db from '@/assets/singer_data/23369901.json'
import languages from '@/assets/config/languages.json'
import face from '@/assets/face.webp'
import { ref } from 'vue'
import type { DataTableColumns } from 'naive-ui'

defineOptions({ name: 'VtuberSingerView' })

const count = ref(db.length)

type RowData = {
  key: number
  name: string
}

const columns: DataTableColumns<RowData> = [
  {
    key: 'name',
    title: '歌名'
  },
  {
    key: 'author',
    title: '歌手'
  }
]
</script>

<style scoped></style>
