<template>
  <div class="add_task">
      <div class="add_task__input">
          <input placeholder="Новая задача..." type="text" v-model="title">
          <textarea placeholder="Описание" type="text" v-model="desc"></textarea>
      </div>
      <button class="add_task__btn" @click="add_new_task">➕</button>    
  </div>
</template>

<script>

export default {
  name: 'InputArea',
  data() {
    return {
      title: '',
      desc: '',
    }
  },
  methods: {
    add_new_task() {
      this.$emit('add_new_task', 
      {
        title: this.title,
        desc: this.desc
      })
      return this.title = '', this.desc = '';
    }
  },
}
</script>


