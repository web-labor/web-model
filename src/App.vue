<script>
import { systemName, logo } from '@/config/env'
export default {
    name: 'app',
    created() {},
    computed: {
        activeTitle() {
            return '/' + this.$route.path.split('/')[1]
        }
    },
    data() {
        return {
            isCollapse: false
        }
    },
    methods: {
        getItem(list) {
            if (!list) return []
            return list.map(i => {
                // const index = this.independentList.indexOf(i.name)
                // // 权限有交集则不过滤
                // const intersection = this.allowList.filter(v =>
                //     i.meta.permissions.includes(v)
                // )
                // if (
                //     index !== -1 ||
                //     intersection.length === 0 ||
                //     (i.path === '/area' &&
                //         this.getCurrentMode.level !== 'BRANCH')
                // ) {
                //     return null
                // }

                if (Array.isArray(i.children) && i.children.length) {
                    return (
                        <el-submenu index={i.path}>
                            <template slot="title">
                                {i.icon ? <i class={i.icon}></i> : ''}
                                <span slot="title">{i.rname}</span>
                            </template>
                            {this.getItem(i.children)}
                        </el-submenu>
                    )
                }

                return (
                    <el-menuItem index={i.path} key={i.name}>
                        {i.icon ? <i class={i.icon}></i> : ''}
                        <span slot="title">{i.rname}</span>
                    </el-menuItem>
                )
            })
        }
    },
    // eslint-disable-next-line no-unused-vars
    render(h) {
        return (
            <el-container class="container">
                <div class="aside">
                    <div
                        class={this.isCollapse ? 'fold icon' : 'unfold icon'}
                        ref="title"
                    >
                        <img src={logo} />
                        {!this.isCollapse ? (
                            <div class="main-tile">{systemName}</div>
                        ) : null}
                        {this.isCollapse ? (
                            <i
                                class="collapse-bt el-icon-caret-right"
                                onClick={() => {
                                    this.isCollapse = !this.isCollapse
                                }}
                            ></i>
                        ) : (
                            <i
                                class="collapse-bt el-icon-caret-left"
                                onClick={() => {
                                    this.isCollapse = !this.isCollapse
                                }}
                            ></i>
                        )}
                    </div>
                    <el-menu
                        default-active={this.activeTitle}
                        class="el-menu-vertical-demo"
                        router
                        collapse={this.isCollapse}
                    >
                        {this.getItem(this.$router.options.routes)}
                    </el-menu>
                </div>
                <el-container>
                    <el-main class="main">
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
        )
    }
}
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px !important;
    // transition-duration: .5s;
}
#app {
    height: 100%;
    width: 100%;
}
.aside {
    // width: 220px;
    height: 100%;
    background-color: rgb(255, 255, 255);
    border-right: 1px solid #e1eaf1;
    .fold {
        width: 64px;
        display: flex;
        transition-duration: 0.5s;
        justify-content: center !important;
    }
    .unfold {
        width: 200px;
        padding: 0 20px;
        transition-duration: 0.5s;
    }
    .icon {
        display: flex;
        height: 56px;
        overflow: hidden;
        text-overflow: ellipsis;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        img {
            height: 30px;
            width: 30px;
        }
        .main-tile {
            line-height: 56px;
            text-align: center;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .collapse-bt {
            cursor: pointer;
        }
    }
}
.container {
    height: 100%;
}
.header {
    height: 56px;
    position: relative;
}
/deep/ .el-header {
    padding: 0;
}
/deep/ .el-main {
    padding: 0;
}
.main {
    // height: calc(100% - 61px);
}
/deep/ .el-menu {
    border: none;
}
</style>
