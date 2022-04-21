const state = () => ({
    token: null,
    id: null,
    fullname: null,
    email: null,
    Posts: [],
    comments: [],
    post: [],
    errorMsg: null

})

const getters = {}

const mutations = {
    Login(state, data) {
        state.token = data.token
        state.id = data.id
        state.fullname = data.full_name
        state.email = data.email
    },
    allPosts(state, data) {
        state.Posts = data;
        console.log(state.Posts);
    },
    allComments(state, data) {
        state.comments = data;
        console.log(state.comments);
    },
    CreatePost(state, data) {
        //    state.CreateTodo = data;
    },
    setPost(state, data) {
        state.post = data;
    },
    updatePost(state, data) {
        state.post.title = data;
    },
    updateUser(state, data) {
        state.fullname = data;
    },
    setError(state, data) {
        state.errorMsg = data
    }


}

const actions = {

    async login({ commit }, data) {
        try {
            const res = await this.$axios.post('http://localhost:5000/api/user/login', data)
            console.log(res.data)
            commit('Login', res.data)
            this.$axios.setHeader('Authorization', 'Bearer ' + res.data.token)
        }
        catch (error) {
            if (error.response.data) {
                commit('setError', error.response.data);
            }

        }
    },
    async registerUser({ commit, state }, data) {
        console.log(data);
        const res = await this.$axios.post('http://localhost:5000/api/user/register', data).then((res) => {
            commit('createUser', res.data)
        })

    },

    async getAllPosts({ commit, state }) {
        await this.$axios.get("http://localhost:5000/api/post",).then((res) => {
            console.log(res.data);
            // this.$router.push('/');
            commit('allPosts', res.data);
        })
    },

    async getAllComments({ commit, state }) {
        await this.$axios.get("http://localhost:5000/api/comment?id=" + state.post.id).then((res) => {
            console.log(res.data);
            // this.$router.push('/');
            commit('allComments', res.data);
        })
    },

    async CreatePosts({ commit, state }, data) {

        await this.$axios.post("http://localhost:5000/api/post", {
            title: data.title,
        }, { headers: { 'Authorization': 'Bearer ' + state.token } }).then((res) => {
            console.log(res.data);
            commit('CreatePost', res.data);
        })
    },
    async goToPost({ commit }, data) {
        console.log(data)
        const res = await this.$axios.get('http://localhost:5000/api/post/' + data);
        console.log(res.data)
        commit('setPost', res.data)
    },
    async createComment({ commit, state }, data) {
        const res = await this.$axios.post('http://localhost:5000/api/comment?id=' + state.post.id, { commenttext: data });
        // commit('commentCreate', data);
    },
    async deleteComment({ }, data) {
        const res = await this.$axios.delete('http://localhost:5000/api/comment/id?id=' + data);
        console.log(res.data);
    },
    async deletePost({ }, data) {
        const res = await this.$axios.delete('http://localhost:5000/api/post/' + data);
        console.log(res.data);
    },
    async updatePost({ state }, data) {
        const res = await this.$axios.put('http://localhost:5000/api/post/' + state.post.id, { title: data });
        console.log(res.data);
    },
    async updateUser({ state }, data) {
        const res = await this.$axios.put('http://localhost:5000/api/user/id', { full_name: data });
    }


}

export default {
    state,
    mutations,
    actions,
    getters,

}