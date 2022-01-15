<template>
<TasksTabs />
<div class="container">
  <div class="stats"> 
      <h3 class="stats__title">"Текущих задач: + {{homeTasks.length}}"</h3>
      <h4 class="stats__title">"Общих задач: + {{MainTasks}}"</h4>
      <div :data="data" class="add_task" v-for="(task, index) in homeTasks" :key="index">
        <HomeTasks :data='task' @task_done="delete_task(index)"/>
      </div>   
  </div>

  <div class="add_task">
      <div class="add_task__input">
          <input placeholder="Новая задача..." type="text" v-model="new_task.title">
          <textarea placeholder="Описание" type="text" v-model="new_task.desc"></textarea>
      </div>
      <button class="add_task__btn" @click="add_task">➕</button>    
  </div>
</div>

</template>

<script>
import HomeTasks from './components/HomeTasks.vue'
import WorkTasks from './components/WorkTasks.vue'
import TasksTabs from './components/TasksTabs.vue'

export default {
  name: 'App',
  components: {
    HomeTasks,
    WorkTasks,
    TasksTabs
  },
  data() {
    return {
      new_task: [
        {
          title: '',
          desc: ''
        }
      ],

      homeTasks: []
    }
  },
  methods: {
    delete_task(id) {
      this.homeTasks.splice(id, 1)
  },

    add_task() {
      if (this.new_task.title != '') {
        this.homeTasks.push({
          title: this.new_task.title,
          desc: this.new_task.desc
        });
        this.new_task.title = '';
        this.new_task.desc = '';
      }
    }
  },

  computed: {
    MainTasks: function () {
      return this.homeTasks.length + this.homeTasks.length
    }
  }


}
</script>

