<template>
  <div class="sidebar">
    <ul>
      <li v-for="item in showList" :key="item.key" @click="clickItem(item.key)">
        {{ item.text }}
        <ul v-if="item.children" class="list-none pl-4">
          <template v-for="child in item.children" :key="child.key">
            <li @click="clickItem(item.key)">
              {{ child.text }}
            </li>
            <ul v-if="child.children" class="list-none pl-4">
              <li v-for="grandChild in child.children" :key="grandChild.key">
                {{ grandChild.text }}
              </li>
            </ul>
          </template>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  menuItems: { type: Array, default: () => [] }
})
const tmpArr = []
const sidebarMap = new Map()
const showList = ref([])

// 檢查是否為最底層
function checkChildren(node) {
  // 最底層的判斷，如果節點沒有 children 或 children 陣列為空
  return !node.children || node.children.length === 0
}

function setLayer(node, children) {
  if (node.children) {
    if (children) {
      const tmpArr = []
      node.children.forEach((childNode) => {
        if (!checkChildren(childNode)) {
          let newObject = JSON.parse(JSON.stringify(childNode))
          delete newObject.children
          tmpArr.push(newObject)
          setLayer(childNode, childNode.children)
        } else {
          tmpArr.push(childNode)
        }
      })
      sidebarMap.set(node.key, tmpArr)
    }
  }
}

// 先用 Map 整理出每一個層級的 item，並先選染 layer 1
function setMap() {
  props.menuItems.forEach((node) => {
    let newObject = JSON.parse(JSON.stringify(node))

    delete newObject.children
    tmpArr.push(newObject)
    setLayer(node, node.children)
  })
  console.log(sidebarMap)
  showList.value = tmpArr
}

onMounted(() => {
  setMap()
})

function resetShowList() {
  showList.value = tmpArr
}

// 依照父層id 取 子層陣列
function clickItem() {
  resetShowList()
}
</script>

<style scoped>
</style>