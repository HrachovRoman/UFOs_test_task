<template>
  <div class="task">
    <div>
      <h3 class="task__title">{{data.title}}</h3>
      <p v-if="data.desc!=''" class="task__desc ">{{data.desc}}</p>
    </div>
    
    <button @click="task_done" class="task__done">✔️</button>
    
  </div>
</template>

<script>
export default {
  name: 'WorkTasks',
  props: {
    data: {
      type: Object,
      required: false
    }
  },
  data() {
    return this.data
  },
  methods: {
    task_done() {
      this.$emit('task_done')
    }
  },
}
</script>


