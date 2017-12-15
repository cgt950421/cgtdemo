<template>
  <div>
    <div class="screen-type">
      <el-form ref="form" :model="screenForm" label-width="80px" size="mini" label-position="left">    
        <el-form-item label="到期时间">
          <el-radio-group v-model="screenForm.time" size="mini">
            <el-radio border label="all">全部</el-radio>
            <el-radio border label="1">七天内到期</el-radio>
            <el-radio border label="2">一个月内到期</el-radio>
            <el-radio border label="3">三个月内到期</el-radio>
          </el-radio-group>
        </el-form-item>   
        <el-form-item label="状态">
          <el-radio-group v-model="screenForm.status" size="mini">
            <el-radio border label="all">全部</el-radio>
            <el-radio border label="0">启用</el-radio>
            <el-radio border label="1">禁止</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>     
    </div>
    <div class="msg margin-bottom-10">
      <el-alert
        title="tabs2"
        type="info"
        description="tabs2"
        show-icon>
      </el-alert>
    </div>
    <div class="count-btn-box margin-bottom-10">
      <p class="margin-right-5">我的工单提醒：</p>
      <el-button type="text" class="margin-right-5">待您补充(0)</el-button>
      <el-button type="text" class="margin-right-5">待确认结单(0)</el-button>
    </div>
    <div class="count-num-box">
      <div>张数：<span>0张</span></div>
      <div>总额：<span>0.00元</span></div>
      <div>可用余额：<span>0.00元</span></div>
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
        tabs: 'first',
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
        screenForm: {
          time: 'all',
          status: 'all'
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