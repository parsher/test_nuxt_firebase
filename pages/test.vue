<template>
  <v-card>
    <v-card-title primary-title>
      title
    </v-card-title>
    <v-card-text>
      <v-text-field v-model="text" textarea></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn color="success" @click.prevent="test">button</v-btn>
      <v-btn color="success" @click.prevent="hello">hello</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      text: 'wwww'
    }
  },
  methods: {
    async test() {
      const r = await this.$axios.get('/api')
      this.text = r.data
    },
    async hello() {
      const r = await this.$axios.get('/api/hello')
      this.text = r.data
    }
  }
}
</script>

<style lang="scss" scoped></style>
