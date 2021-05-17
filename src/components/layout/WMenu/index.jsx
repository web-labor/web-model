import './index.less'

export default {
    name: 'WMenu',
    data() {
        return {}
    },
    props: {
        collapse: {
            type: Boolean,
            default: false
        }
    },
    render() {
        return <div class="page-menu">{this.menu}</div>
    },
    methods: {
        /**
         * @desc 深度遍历菜单数组
         * @param arr 菜单数组
         */
        mapMenu(arr) {
            const res = []
            let routerArr = []
            routerArr = this.sortRoute(arr)
            routerArr.forEach(v => {
                // 不放入菜单 (notmenu 为true 或者 title 不存在的时候)
                if (v?.meta?.notmenu || !v?.meta?.title) {
                    return
                }
                const icon = this.getIcon(v?.meta?.icon ?? 'el-icon-menu')
                if (v.children && v.children.length > 0) {
                    res.push(
                        <el-submenu
                            index={v.path}
                            class={icon ? '' : 'no-icon'}
                        >
                            <template slot="title">
                                {icon}
                                <span>{v?.meta?.title}</span>
                            </template>
                            {this.mapMenu(v.children)}
                        </el-submenu>
                    )
                } else {
                    res.push(
                        <el-menu-item
                            index={v.path}
                            class={icon ? '' : 'no-icon'}
                        >
                            {icon}
                            <span>{v?.meta?.title}</span>
                        </el-menu-item>
                    )
                }
            })
            return res
        },
        /**
         * @desc 菜单的图表
         * @param icon 图表的class
         */
        getIcon(icon) {
            if (!icon) {
                return
            }
            return <i class={icon}></i>
        },
        /**
         * @desc 给路由排序 默认用meta里面的index字段，优先排有index字段的
         * @param routerArr 路由数组
         */
        sortRoute(routerArr) {
            return routerArr.sort(function(v1, v2) {
                const a = v2?.meta?.index ?? 999
                const b = v1?.meta?.index ?? 999
                return b - a
            })
        },
        handleOpen(key, keyPath) {
            this.$emit('handleOpen', key, keyPath)
        },
        handleClose(key, keyPath) {
            this.$emit('handleClose', key, keyPath)
        }
    },
    computed: {
        menu() {
            const routes = [...this.$router.options.routes].filter(
                v => !v.redirect
            )
            return (
                <el-menu
                    class="w-menu"
                    router
                    collapse={this.collapse}
                    text-color="#807e96"
                    active-text-color="#fff"
                    background-color="#3f3d54"
                    on-open={() => this.handleOpen()}
                    on-close={(key, keyPath) => {
                        this.handleClose(key, keyPath)
                    }}
                    default-active={this.activePath}
                >
                    {this.$slots.default}
                    {this.mapMenu(routes)}
                </el-menu>
            )
        },
        activePath() {
            return this.$route.path
        }
    }
}
