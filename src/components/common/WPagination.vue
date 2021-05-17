<template>
    <div class="wpagination-wrap">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            background
            :current-page="page.pageNum"
            :page-sizes="pageSizeArr"
            :page-size="page.pageSize"
            :layout="layout"
            :total="total"
        >
            <div class="page-pre">
                <span>共{{ total }}条记录</span>
                <span>第{{ page.pageNum }}/{{ pageCount }}页</span>
            </div>
        </el-pagination>
    </div>
</template>
<script>
export default {
    name: 'WPagination',
    model: {
        prop: 'page',
        event: 'pageChange'
    },
    props: {
        page: {
            type: Object,
            default: () => ({
                pageNum: 1,
                pageSize: 50
            })
        },
        pageSizeArr: {
            type: Array,
            default: () => [10, 20, 50, 100]
        },
        total: {
            type: Number,
            required: true,
            default: 20
        },
        layout: {
            type: String,
            default: 'slot, prev, pager, next, sizes, jumper'
        }
    },
    data() {
        return {
            pageItem: {
                pageNum: 1,
                pageSize: 20
            }
        }
    },
    methods: {
        handleSizeChange(val) {
            this.$emit('size-change', val)
            const currentParams = Object.assign({}, this.page, {
                pageSize: val
            })
            this.$emit('pageChange', currentParams)
            // this.$emit('pageChange', {
            //   pageNum: this.page.pageNum,
            //   pageSize: val
            // })
            this.notify()
        },
        handleCurrentChange(val) {
            this.$emit('current-change', val)
            const currentParams = Object.assign({}, this.page, { pageNum: val })
            this.$emit('pageChange', currentParams)
            // this.$emit('pageChange', {
            //   pageNum: val,
            //   pageSize: this.page.pageSize
            // })
            this.notify()
        },
        notify() {
            this.$emit('refresh')
        }
    },
    computed: {
        pageCount() {
            return Math.ceil(this.total / this.page.pageSize)
        }
    }
}
</script>
<style lang="less" scoped>
.wpagination-wrap {
    // padding-right: 20px;
    /deep/ .el-pagination {
        position: relative;
        text-align: right;
    }
    .page-pre {
        position: absolute;
        left: 0;
        display: inline-block;
        font-size: 12px;
        font-weight: 400;
        font-style: normal;
        color: rgba(0, 0, 0, 0.427450980392157);
        line-height: 22px;
        span {
            display: inline-block;
            margin-left: 5px;
            letter-spacing: 2px;
        }
    }
}
</style>
