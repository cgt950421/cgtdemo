<template>
  <div class="wx-manage main-padding-20">
    <div class="title">微信管理</div>
    <div class="tabs">
      <el-tabs v-model="tabs" type="card" @tab-click="">
        <el-tab-pane label="用户管理" name="first"></el-tab-pane>
        <el-tab-pane label="配置管理" name="second"></el-tab-pane>
        <el-tab-pane label="角色管理" name="third"></el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="msg margin-bottom-10">
      <el-alert
        title="消息提示的文案"
        type="info"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon>
      </el-alert>
    </div>
    <div class="table-top-btn margin-bottom-10">
      <div class="table-top-btn-left">
        <el-button class="margin-right-5" type="primary" size="mini" @click="dialogVisible = true">添加微信</el-button>
        <el-date-picker
          v-model="times"
          size="mini"
          class="margin-right-5"
          type="daterange"
          value-format="yyyy-MM-dd"
          @change="selectTime"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <el-select v-model="value" class="margin-right-5 input-width-120" placeholder="请选择" size="mini">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button type="primary" size="mini" @click="dialogVisible = true">添加微信</el-button>
      </div>
      <div class="table-top-btn-right">
        <el-form :inline="true" :model="searchForm" class="demo-form-inline">
          <el-form-item>
            <el-input class="input-width-120" v-model="searchForm.wx" placeholder="请输入微信号" size="mini"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input class="input-width-120" v-model="searchForm.wx" placeholder="请输入微信号" size="mini"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" size="mini">搜索</el-button>
          </el-form-item>
        </el-form>    
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="table">
      <el-table
        header-row-class-name="table-header"
        size="small"
        ref="tableSelect"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="">删除</el-button>
          </template>
        </el-table-column>
      </el-table>      
    </div>
    <div class="page">
      <div class="page-total">
        共 <span class="page-total-num">{{pageConfig.total}}</span> 条
      </div>
      <div class="pages" v-if="pageConfig.total > 0">
        <el-pagination
          @size-change=""
          @current-change=""
          :current-page="pageConfig.newPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageConfig.pageSize"
          layout="sizes, prev, pager, next, jumper"
          :total="pageConfig.total">
        </el-pagination>  
      </div>
      <div class="clearfix"></div>
    </div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialogVisible: false,
        tableSelect: [],
        times: [],
        tabs: 'first',
        options: [],
        value: '',
        pageConfig: {
          newPage: 1,
          total: 100,
          pageSize: 10
        },
        newPage: 1,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        searchForm: {
          wx: ''
        }
      }
    },
    methods: {
      selectTime (time) {
        console.log(time)
      }
    }
  }
</script>
