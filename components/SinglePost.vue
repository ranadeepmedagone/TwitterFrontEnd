<template>
  <div class="todo-item">
    <!-- <div v-if="update"> -->
    <div class="end" v-if="isUpdating">
      <p>
        <input type="text" v-model="title" required />
      </p>
    </div>
    <p v-else>{{ post.title }}</p>
    <!-- </div> -->

    <div class="btns" v-if="post.userId == $store.state.id">
      <button v-if="!isUpdating" class="btn" @click="updatePost">Update</button>
      <button
        v-if="!isUpdating"
        class="btn-danger"
        @click="deletePost(post.id)"
      >
        Delete
      </button>
      <button class="button" v-else @click="submitPost">Submit</button>
    </div>
    <div>
      <h3>Post Comments</h3>
      <div v-for="(comments, i) in comments" :key="i">
        <div>
          {{ comments.commenttext
          }}<button
            class="delete"
            v-if="comments.userId == $store.state.id"
            @click="deleteComment(comments.id)"
          >
            D
          </button>
        </div>
      </div>
      <div>
        <label for="">Comment Here</label>
        <input type="text" v-model="commenttext" />
        <button class="comment" @click="createComment">Comment</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      commenttext: '',
      isUpdating: false,
      title: '',
    }
  },
  //   props: {
  //     item: {
  //       type: Object,
  //       required: true,
  //     },
  //   },
  computed: {
    ...mapState(['post', 'id', 'comments']),
  },
  async created() {
    await this.$store.dispatch('getAllComments')
    return
  },
  methods: {
    async createComment() {
      await this.$store.dispatch('createComment', this.commenttext)
      await this.$store.dispatch('getAllComments')
      this.commenttext = ''
    },
    async deleteComment(id) {
      await this.$store.dispatch('deleteComment', id)
      await this.$store.dispatch('getAllComments')
    },
    updatePost() {
      this.isUpdating = true
      this.title = this.post.title
      // await this.$$store.dispatch('updatePost', this.title)
    },
    // async update(id) {
    //   this.isVisible = false
    //   console.log(id)
    //   console.log(this.title)
    //   await this.$store.dispatch('updateTodo', { id: id, title: this.title })
    // },
    async deletePost(id) {
      console.log(id)
      await this.$store.dispatch('deletePost', id)
      this.$router.push('/UserHome')
    },
    async submitPost() {
      this.isUpdating = false
      await this.$store.dispatch('updatePost', this.title)
      this.$store.commit('updatePost', this.title)
    },
  },
}
</script>

<style>
.todo-item {
  display: flex;
  margin-top: 8px;
  background-color: beige;
  border: 1px solid grey;
  border-radius: 12px;
  justify-content: space-between;
  padding: 4px;
}
.btn {
  margin-top: 15px;
  background-color: rgb(23, 6, 211);
  padding: 5px;
  color: rgb(239, 246, 247);
  border: none;
  border-radius: 10px;
}

.btn-danger {
  margin-top: 15px;
  background-color: rgb(228, 5, 5);
  padding: 5px;
  color: rgb(243, 236, 236);
  border: none;
  border-radius: 10px;
}
.end {
  display: flex;
}
.button {
  margin-top: 17px;
  margin-right: 16px;
  background-color: rgb(168, 10, 131);
  padding: 5px;
  color: rgb(243, 236, 236);
  border: none;
  border-radius: 10px;
}
.delete {
  background-color: red;
  border-radius: 25px;
  color: white;
  border: 0px solid;
  float: right;
}
.comment {
  background-color: rgb(52, 18, 220);
  border-radius: 25px;
  color: white;
  border: 0px solid;
  padding: 4px;
}
</style>