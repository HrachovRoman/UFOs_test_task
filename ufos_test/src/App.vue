<template>
<div class='container'>
  <h4 class="stats__main">"Общих задач: + {{ MainTasks }}"</h4>
    
    <ul class="nav nav-tabs">
        <li role="presentation" @click="currentTab = 'home'"><a>Home Tasks</a></li>
        <li role="presentation" @click="currentTab = 'work'"><a>Work Tasks</a></li>
    </ul>

  <div class="tab-content">
    <div v-if="currentTab === 'home'">
        <div class="stats"> 
        <h3 class="stats__title">"Текущих задач: + {{ homeTasks.length }}"</h3>
          <div :data="data" 
                class="add_task"
                v-for="(task, index) in homeTasks" 
                :key="index">

            <GeneralTasks :data='task' @task_done="delete_task(index)"/>
            
          </div>   
        </div>
            <InputArea @add_new_task='add_task'/>
    </div>

    <div v-if="currentTab === 'work'">
        <div class="stats"> 
          <h3 class="stats__title">"Текущих задач: + {{ workTasks.length }}"</h3>
          <div :data="data" 
                class="add_task"
                v-for="(task, index) in workTasks" 
                :key="index">

            <GeneralTasks :data='task' @task_done="delete_task(index)"/>

          </div>   
        </div>
            <InputArea @add_new_task='add_task'/>
    </div>
  </div>
</div>
</template>

<script>
import GeneralTasks from './components/GeneralTasks.vue'
import InputArea from './components/InputArea.vue'

export default {
  name: 'App',
  components: {
    GeneralTasks,
    InputArea
  },
  data() {
    return {
      homeTasks: [],
      workTasks: [],
      currentTab: 'home'
    }
  },
  methods: {
    delete_task(id) {
      if (this.currentTab === 'home') {
        this.homeTasks.splice(id, 1)
      } else {
        this.workTasks.splice(id, 1)
      }
  },
    add_task(data_input) {
      if (this.currentTab === 'home') {
        this.homeTasks.push({
          title: data_input.title,
          desc: data_input.desc
        })
        } else {
        this.workTasks.push({
          title: data_input.title,
          desc: data_input.title
        })
      }
    }
  },
  computed: {
    MainTasks: function () {
      return this.homeTasks.length + this.workTasks.length
    }
  }
}
</script>