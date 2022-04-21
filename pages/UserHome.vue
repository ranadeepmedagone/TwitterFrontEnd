<template>
  <div class="container">
    <UserHeader />
    <div class="title">
      <!-- <h1>MY TODO LIST</h1> -->
      <!-- <h6>What are you doing today?</h6> -->
    </div>

    <!-- <p id="error">Nothing to do today?</p> -->

    <table id="customers">
      <h1>All Posts</h1>

      <tr v-for="(post, i) in $store.state.Posts" :key="i">
        <td>{{ i + 1 }}</td>
        <td>
          {{ post.title
          }}<button class="button" @click="goToPost(post.id)">►</button>
        </td>
      </tr>
    </table>
    <!-- <br />
    <br />
    <br /> -->
    <!-- <div class="done"><input type="text" /><button>DONE</button></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorMsg: '',
    }
  },
  async mounted() {
    await this.$store.dispatch('getAllPosts')
    // await this.$store.dispatch('getAllComments')
    return
  },

  methods: {
    async goToPost(id) {
      console.log(id)
      await this.$store.dispatch('goToPost', id)
      await this.$router.push('/Post')
    },
  },
}
</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
.button {
  border-radius: 40px;
  padding: 8px;
  border: 0px solid gray;
  /* color: rgb(12, 12, 45); */
  background-color: #1123ed;
  color: white;
  float: right;
  cursor: pointer;
}

#customers td,
#customers th {
  border: 1px solid rgb(200, 225, 243);
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #aecbef;
}

#customers tr:hover {
  background-color: rgb(205, 229, 239);
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
h1 {
  display: flex;
  text-align: center;
  color: rgb(16, 70, 189);
}
</style>