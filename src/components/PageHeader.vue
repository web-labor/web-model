<template>
    <header class="header-wraper">
        <div class="title" @click.stop="goBack">
            <span class="icon-back" @click="goBack" v-if="whetherBack">
                <i class="el-icon-arrow-left"></i>
            </span>
            {{ title }}
        </div>
        <div class="options">
            <slot></slot>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        title: {},
        whetherBack: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {}
    },
    created() {},
    mounted() {},
    computed: {},
    methods: {
        goBack() {
            this.$router.push('/').catch(() => {
                console.warn('it is ok!')
            })
        }
    }
}
</script>

<style lang="less" scoped>
.header-wraper {
    height: 56px;
    // width: 100%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 2px 2px 0 rgba(66, 64, 86, 0.05);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    .title {
        .icon-back {
            cursor: pointer;
        }
    }
}
</style>
