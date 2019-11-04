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
      <v-btn color="success" @click.prevent="testMoment">moment</v-btn>
      <v-btn color="success" @click.prevent="dialog">dialog</v-btn>
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
    },
    testMoment() {
      this.text = this.$moment().toLocaleString()
    },
    async dialog() {
      const res = await this.$dialog.confirm({
        text: 'Do you really want to exit?',
        title: 'Warning'
      })
      this.text = res
    }
  }
}
</script>

<style lang="scss" scoped></style>
