;(function() {
    if (sessionStorage.getItem('store')) {
        // 从sessionStorage中取数据到vuex中
        this.$store.replaceState(
            Object.assign(
                {},
                this.$store.state,
                JSON.parse(sessionStorage.getItem('store'))
            )
        )
    }
    // 刷新页面把vuex中的数据存入sessionStorage
    window.addEventListener('beforeunload', this.saveTosesstion, false)
})
