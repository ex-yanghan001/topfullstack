<template>
  <div>
    <h3>{{ id ? '编辑' : '创建' }}课程</h3>
    <ele-form :form-data="data" :form-desc="fields" :request-fn="submit"></ele-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class CourseEdit extends Vue {
  @Prop(String) id!:string
  data = {}
  fields = {
    name: {label: '课程名称', type: 'input'},
    cover: {label: '课程封面图', type: 'input'}
  }
  async fetch() {
    const res = await this.$http.get(`/courses/${this.id}`)
    this.data = res.data
  }

  async submit(data) {
    const url = this.id ? `/courses/${this.id}` : '/courses'
    const method = this.id ? 'put' : 'post'
    await this.$http[method](url, data)
    this.$message.success('保存成功')
    this.$router.go(-1)
  }

  created() {
    this.id && this.fetch()
  }
}
</script>

<style>

</style>
