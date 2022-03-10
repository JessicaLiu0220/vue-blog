import blog from "../../store/modules/blog";
export default {
    data() {
        return {
            title: '',
            content: '',
            descriptions: '',
            atIndex: false
        }
    },
    methods: {
        onCreate() {
            blog.createBlog({ title: this.title, content: this.content, descriptions: this.descriptions, atIndex: this.atIndex })
                .then(res => {
                    this.$message.success(res.msg)
                    this.$router.push({ path: `/detail/${res.data.id}` })
                })
        }
    }
};