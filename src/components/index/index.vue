<template>
  <div class="index">
    <div class="header">
      <div class="logo">
        LOGO
      </div>
      <div class="topmenu">
        <el-menu
          :default-active="this.$route.path.split('/')[1]"
          class="el-menu-demo"
          mode="horizontal"
          menu-trigger="click"
          @select="topMenuClick"
          background-color="#262626"
          text-color="#bbb"
          active-text-color="#fff">
          <el-menu-item index="home">
            首页
          </el-menu-item>
          <span v-for="item in topMenu" :key="item.index">
            <el-menu-item :index="item.key" v-if="!item.children">
              {{item.name}}
            </el-menu-item>
            <el-submenu :index="item.key" v-else>
              <template slot="title">{{item.name}}</template>
              <el-menu-item :index="data.key" :key="data.key" v-for="data in item.children">{{data.name}}</el-menu-item>
            </el-submenu>  
          </span>
        </el-menu>      
      </div>
      <div class="user">
        <div>
          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link user-title">
              你好，admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><span @click="infoSetting">安全设置</span></el-dropdown-item>
              <el-dropdown-item divided><span @click="logOut">退出</span></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="content" v-bind:class="{'content-close':isClose, 'content-dh':isDh}">
      <div class="aside">
        <div v-if="isHome">
        <div class="aside-title">
            <p>{{asideTitle}}</p>
            <span 
              class="btn-fold-menu"
              v-bind:class="[isClose ? 'btn-fold-menu-close' : 'btn-fold-menu-open']"
              @click="btnFoldMenu">
            </span>
        </div>
        <div class="aside-menu" style="padding-top:20px;">
          <el-menu
            :default-active="$route.path"
            :default-openeds="$route.path.split('/')"
            class="el-menu-vertical-demo"
            @open=""
            @close=""
            :router="true"
            background-color="#f0f6f6"
            text-color="#586376"
            active-text-color="#2277da">
            <div v-for="item in asideMenu">
              <el-menu-item :index="item.path":key="item.name" v-if="!item.children">
                <span slot="title">{{item.title}}</span>
              </el-menu-item>
              <el-submenu :index="item.name" v-else>
                <template slot="title">
                  <span>{{item.title}}</span>
                </template>
                  <el-menu-item v-for="data in item.children" :index="data.path" :key="data.path">
                    {{data.title}}
                  </el-menu-item>
              </el-submenu>   
            </div> 
          </el-menu>      
        </div>
        </div>
      </div>
      <div class="main">
        <div>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  name: 'index',
  data () {
    return {
      topMenu: [
        {
          name: '用户',
          index: '1',
          key: 'user'
        }, {
          name: '测试',
          index: '2',
          key: 'test'
        }
      ],
      topMenuActive: '',
      asideMenus: {
        user: [
          {
            title: '微信管理',
            name: 'wxManage',
            path: '/user/wxManage'
          },
          {
            title: '权限管理',
            name: 'authManage',
            path: '/user/authManage',
            children: [
              {
                title: '权限设置',
                name: 'authSetting',
                path: '/user/authManage/authSetting'
              }, {
                title: '权限列表',
                name: 'authList',
                path: '/user/authManage/authList'
              }, {
                title: '我的权限',
                name: 'myAuth',
                path: '/user/authManage/myAuth'
              }
            ]
          }
        ],
        test: [
          {
            title: '测试1',
            name: 'test1',
            path: '/test/test1',
            children: [
              {
                title: '测试11',
                name: 'test11',
                path: '/test/test1/test11'
              }, {
                title: '测试12',
                name: 'test12',
                path: '/test/test1/test12'
              }
            ]
          },
          {
            title: '测试2',
            name: 'test2',
            path: '/test/test2'
          }
        ]
      },
      asideMenu: [],
      asideActiveOpen: [],
      asideTitle: '',
      userName: '',
      isClose: true,
      isHome: false,
      isDh: false
    }
  },
  mounted: function () {
    let _index = this.$route.path.split('/')[1]
    if (_index === 'home' || _index === 'info_setting') {
      this.isHome = false
      this.isClose = true
    } else {
      this.isClose = false
      this.isHome = true
      this.asideMenu = [...this.asideMenus[_index]]
      for (let i in this.topMenu) {
        if (this.topMenu[i].key === _index) {
          this.asideTitle = this.topMenu[i].name
        }
      }
    }
  },
  methods: {
    clickAside () {
    },
    topMenuClick (index) {
      this.isDh = false
      if (index === 'home') {
        this.$router.push('/home')
        this.isClose = true
        this.isHome = false
      } else {
        this.asideTitle = event.target.innerText
        this.isClose = false
        this.isHome = true
        this.asideMenu = [...this.asideMenus[index]]
        if (this.asideMenu[0].children) {
          this.$router.push(this.asideMenu[0].children[0].path)
        } else {
          this.$router.push(this.asideMenu[0].path)
        }
      }
    },
    logOut () {
      Cookies.remove('userName')
      Cookies.remove('token')
      window.location.href = ''
    },
    infoSetting () {
      this.isDh = false
      this.$router.push('/info_setting')
      this.isClose = true
      this.isHome = false
    },
    btnFoldMenu () {
      this.isDh = true
      this.isClose = !this.isClose
    }
  }
}
</script>
<style lang="less">
  @import "./index.less";
  div{
    display: block;
  }
</style>
<style lang="less">
  @import "../../styles/table.less";
</style>
<style lang="less">
  @import "../../styles/page.less";
</style>