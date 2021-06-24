<template>
    <el-container class="layout-page">
        <el-header>
            <layout-header v-if="!$slots.header" />
            <slot name="header" />
        </el-header>
        <el-main class="main-wrap">
            <div class="main-content">
                <slot></slot>
            </div>
        </el-main>
    </el-container>
</template>
<script>
export default {
    name: 'LayoutPage',
    data() {
        return {}
    }
}
</script>
<style lang="less" scoped>
.layout-page {
    /deep/ .el-header {
        background: #fff;
    }
    .main-wrap {
        flex: 1;
    }
    .main-content {
        height: 100%;
        background: #fff;
        box-shadow: 0 1px 6px 0 rgba(49, 114, 149, 0.1);
        border-radius: 4px;
    }
    .transitionRouter-enter-active,
    .transitionRouter-leave-active {
        transition: opacity 0.4s;
    }

    .transitionRouter-enter,
    .transitionRouter-leave {
        opacity: 0;
    }
}
</style>
