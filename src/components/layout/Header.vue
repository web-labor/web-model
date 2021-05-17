<template>
    <div class="layout-header">
        <i
            :class="
                `operation-icon ${
                    isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
                }`
            "
            @click="updateMenuCollapse"
        />
        <div class="layout-page-haeder-content">
            <b v-show="!$slots.default">{{ curPage }}</b>
            <slot></slot>
        </div>
    </div>
</template>
<script>
import * as types from '@/store/types'

export default {
    name: 'LayoutHeader',
    data() {
        return {}
    },
    created() {},
    methods: {
        updateMenuCollapse() {
            this.$store.commit(`system/${types.SYSTEM_UPDATE}`, {
                menuCollapse: !this.isCollapse
            })
        }
    },
    computed: {
        isCollapse() {
            return this.$store.state.system.menuCollapse
        },
        curPage() {
            return this.$route.matched.map(v => v?.meta?.title).join(' / ')
        }
    }
}
</script>
<style lang="less" scoped>
.layout-header {
    height: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    box-shadow: 0 2px 2px 0 rgba(66, 64, 86, 0.05);
    .operation-icon {
        flex-shrink: 0;
        padding-right: 20px;
        font-size: 25px;
        cursor: pointer;
    }
    .layout-page-haeder-content {
        height: 100%;
        flex: 1;
        display: flex;
        align-items: center;
    }
}
</style>
