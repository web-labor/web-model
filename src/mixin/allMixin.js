export default {
    data() {
        return {}
    },
    methods: {},
    computed: {
        userInfo() {
            return this.$store.state?.userInfo || {}
        }
    }
}
