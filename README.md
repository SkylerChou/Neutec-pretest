## Live Demo

[GitHub Page](https://skylerchou.github.io/pretest/)

## 額外需求

### 主頁面九宮格動畫

2. 或許可以用 inline style 指定座標位置 搭配 transition 定義過度效果

### 側邊選單

1. 將名稱整理成麵包屑，跑forEach 對應 Key 值更改 isExpand 參數
2. 使用 localStorage 來記錄上次選取的項目。
3. 或許可以改成用 Map 的方式改寫，在查找對應 key 時會更為快速，時間複雜度為 O(1)
