import './index.less'
import WPagination from '@/components/common/WPagination.vue'

/**
 * @emit refresh 分页改变
 * @emit clickRow 点击某一列
 * @emit handleSelectionChange 开启select下，选项值改变触
 */

export default {
    name: 'WTable',
    components: {
        WPagination
    },
    data() {
        return {
            msg: 'default',
            pageInfo: {
                pageSize: 10,
                pageNum: 1
            }
        }
    },
    props: {
        // 表格数据
        tableData: {
            type: Array,
            default: () => []
        },
        // 表格每一列配置
        cols: {
            type: Array,
            default: () => []
        },
        // 是否为加载状态
        loading: {
            type: Boolean,
            default: false
        },
        // 表头
        tableHead: {
            type: Object,
            default: () => {
                return {
                    treeProps: {},
                    rowKey: ''
                }
            }
        },
        // 是否开启合并行或者列
        openSpanMethod: {
            type: Boolean,
            default: false
        },
        // 每一项数据为空时占位
        nullText: {
            type: String,
            default: '--'
        },
        // 整个表的占位符
        emptyText: {
            type: String,
            default: '暂无数据'
        },
        // Table 的最大高度。合法的值为数字或者单位为 px 的高度。
        maxHeight: {
            type: [String, Number],
            default: '--'
        },
        // 页码数据
        page: {
            type: Object,
            default: () => {
                return {
                    pageSize: 10,
                    pageNum: 1
                }
            }
        },
        // 是否使用分页
        ispagination: {
            type: Boolean,
            default: true
        },
        // 在使用分页下 -- 数据总数量
        total: {
            type: Number,
            default: 0
        }
    },
    created() {
        this.pageInfo = this.page
    },
    render() {
        const defaultType = ['selection', 'index']
        return (
            <div class="w-table">
                <el-table
                    ref="wTable"
                    data={this.tableData}
                    on-selection-change={this.handleSelectionChange}
                    span-method={this.spanMethod}
                    width="100%"
                    max-height={this.maxHeight}
                    v-loading={this.loading}
                    treeProps={this.tableHead.treeProps}
                    rowKey={this.tableHead.rowKey}
                    on-row-click={this.clickRow}
                    empty-text={this.emptyText}
                >
                    {this.cols.map(col => {
                        return (
                            <el-table-column
                                type={col.type}
                                prop={col.prop}
                                label={col.label}
                                width={col.width}
                                fixed={col.fixed}
                                min-width={col.minWidth}
                                sortable={col.sort}
                                align={col.align}
                                render-header={col.header}
                            >
                                {col.render || defaultType.includes(col.type)
                                    ? col.render
                                    : this.defaultRender}
                            </el-table-column>
                        )
                    })}
                </el-table>
                {this.pagination}
                {this.slots}
            </div>
        )
    },
    methods: {
        spanMethod({ row, columnIndex }) {
            if (this.openSpanMethod) {
                if (columnIndex === 0 || columnIndex === 1) {
                    if (row.isMergeNum !== -1) {
                        return {
                            rowspan: row.isMergeNum,
                            colspan: 1
                        }
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        }
                    }
                }
            }
        },
        clickRow(row, column) {
            this.$emit('clickRow', { row, column })
        },
        handleSelectionChange(val) {
            this.$emit('handleSelectionChange', val)
        },
        toggleRowSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.wTable.toggleRowSelection(row)
                })
            } else {
                this.$refs.wTable.clearSelection()
            }
        },
        // 默认渲染， 如果改元素值为空，就渲染默认的占位
        defaultRender({ row, column }) {
            if (!column.property) {
                return this.nullText
            }
            const val = row[column.property]
            return val || val === 0 ? val : this.nullText
        },
        async refresh() {
            await this.$nextTick()
            this.$emit('refresh', this.pageInfo)
        }
    },
    computed: {
        slots() {
            if (!this.$slots.default) {
                return
            }
            return (
                <div class="table-pagination">
                    {this.$slots.default.map(v => {
                        return v
                    })}
                </div>
            )
        },
        pagination() {
            if (!this.ispagination || this.tableData.length === 0) {
                return
            }
            return (
                <w-pagination
                    v-model={this.pageInfo}
                    total={this.total || this.tableData.length}
                    on-refresh={this.refresh}
                />
            )
        }
    },
    watch: {
        page(val) {
            this.pageInfo = val
        },
        pageInfo(val) {
            this.$emit(
                'update:page',
                Object.assign(val, {
                    pageSize: val.pageSize,
                    pageNum: val.pageNum
                })
            )
        }
    }
}
