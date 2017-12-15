<template>
  <div class="home">
    <p style="margin:20px 0 0 20px;line-height:40px;font-size:20px;">home页面</p>
    <div>
      <div>
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
      <div>
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
      <div>
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
    </div>
    <div>
      <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
    <div>
      <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
  </div>
</template>
<style>
  .home{
    width: 100%;
    height: 100%;
    background: #edf4f5;
    overflow: hidden;
  }
  .home>div{
    display: flex;
  }
  .home>div>div{
    margin: 20px;
    flex:1;
    line-height: 40px;
  }
</style>