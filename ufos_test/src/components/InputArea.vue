<template>
  <div class="add_task">
      <div class="add_task__input">
          <input placeholder="Новая задача..." type="text" v-model="data">
          <textarea placeholder="Описание" type="text" v-model="data"></textarea>
      </div>
      <button class="add_task__btn" @click="add_new_task">➕</button>    
  </div>
</template>

<script>

export default {
    name: 'InputArea',
    props: {
       data: {
           type: Object,
           required: false
       }
    },
    methods: {
        add_new_task() {
            this.$emit('add_task')
        }
    },

    mounted() {
        console.log(this.data);
    },
    data() {
        return this.data
},
   
}
</script>


