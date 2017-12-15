<template>
  <div class="wx-manage main-padding-20">
    <div class="title">微信管理</div>
    <div class="tabs">
      <el-tabs v-model="tabs" type="card" @tab-click="clickTabs">
        <el-tab-pane label="用户管理" name="tabs1"></el-tab-pane>
        <el-tab-pane name="tabs2">
          <span slot="label" class="tabs-badge">我的行程<el-badge class="mark" :value="12" /></span>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tabs: 'tabs1'
      }
    },
    methods: {
      clickTabs () {
        this.$router.push('/test/test1/test11/' + this.tabs)
      }
    },
    created () {
      this.$router.push('/test/test1/test11/' + this.tabs)
    }
  }
</script>
