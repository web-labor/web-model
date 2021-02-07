<template>
    <div id="app">
        <el-container class="content">
            <el-aside class="aside-wrap" width="auto">
                <w-menu class="menu" :collapse="isCollapse">
                    <h1>
                        <img
                            class="logo-img"
                            :src="userInfo.logo || defaultProjectLogo"
                            alt=""
                        />
                        <span v-show="!isCollapse">
                            {{ $config.PROJECT_NAME_ZHCN }}
                        </span>
                    </h1>
                </w-menu>
            </el-aside>
            <router-view></router-view>
        </el-container>
    </div>
</template>
<script>
import WMenu from '@/components/layout/WMenu'

export default {
    name: 'app',
    data() {
        return {}
    },
    created() {},
    components: {
        WMenu
    },
    computed: {
        activeTitle() {
            return '/' + this.$route.path.split('/')[1]
        },
        defaultProjectLogo() {
            return require('./assets/logo.png')
        },
        getMenuCollapse() {
            return this.isCollapse
        },
        isCollapse() {
            return this.$store.state.system.menuCollapse
        }
    },
    methods: {}
}
</script>
<style lang="less" scoped>
#app {
    position: relative;
    .header {
        position: absolute;
        width: 100%;
        top: 0;
    }
    .content {
        height: 100%;
        .aside-wrap {
            position: relative;
            background: rgb(63, 61, 84);
            h1 {
                flex-shrink: 0;
            }
            .menu {
                flex: 1;
                overflow-y: auto;
            }
        }
    }
    /deep/ .el-menu:not(.el-menu--collapse) {
        width: 220px;
    }
    h1 {
        height: 60px;
        background: #3f3d54;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 60px;
        overflow: hidden;
        .logo-img {
            height: 36px;
            vertical-align: middle;
            margin: 0 14px;
        }
        .el-dropdown-link {
            color: #fff;
            cursor: pointer;
            &:hover {
                color: @--color-primary;
            }
        }
    }
}
</style>
