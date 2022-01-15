<template>
<div class='container'>
  <h4 class="stats__main">"Общих задач: + {{ MainTasks }}"</h4>
  <div class="tabs">
      <span class="tab"
      :class="{ activeTab: selectedTab === tab }"
      v-for="(tab, index) in tabs"
      :key="index" 
      @click="selectedTab = tab"
    >{{ tab }}</span>
  </div>

<div v-show="selectedTab === 'Home Tasks'">
  <div class="stats"> 
      <h3 class="stats__title">"Текущих задач: + {{ homeTasks.length }}"</h3>
      <div :data="data" 
            class="add_task"
            v-for="(task, index) in homeTasks" 
            :key="index">
        <HomeTasks :data='task' @task_done="delete_task(index)"/>
      </div>   
  </div>
  <!-- <InputArea @add_new_task='add_task'/> -->
  <div class="add_task">
      <div class="add_task__input">
          <input placeholder="Новая задача..." type="text" v-model="new_task.title">
          <textarea placeholder="Описание" type="text" v-model="new_task.desc"></textarea>
      </div>
      <button class="add_task__btn" @click="add_task">➕</button>    
  </div>
</div> 

<div v-show="selectedTab === 'Work Tasks'">
  <div class="stats"> 
      <h3 class="stats__title">"Текущих задач: + {{ workTasks.length }}"</h3>
      <div :data="data" 
            class="add_task"
            v-for="(task, index) in workTasks" 
            :key="index">
        <WorkTasks :data='task' @task_done="delete_task(index)"/>
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

</div>
</template>

<script>
import HomeTasks from './components/HomeTasks.vue'
import WorkTasks from './components/WorkTasks.vue'
import InputArea from './components/InputArea.vue'

export default {
  name: 'App',
  components: {
    HomeTasks,
    WorkTasks,
    InputArea
  },
  data() {
    return {
      tabs: ['Home Tasks', 'Work Tasks'],
      selectedTab: 'Home Tasks',

      new_task: [
        {
          title: '',
          desc: ''
        }
      ],
      homeTasks: [],
      workTasks: []
    }
  },
  methods: {
    delete_task(id) {
      if (this.selectedTab === 'Home Tasks') {
        this.homeTasks.splice(id, 1)
      } else {
        this.workTasks.splice(id, 1)
      }
  },

    add_task() {
      if (this.selectedTab === 'Home Tasks') {
        this.homeTasks.push({
          title: this.new_task.title,
          desc: this.new_task.desc
        })
        } else {
        this.workTasks.push({
          title: this.new_task.title,
          desc: this.new_task.desc
        })
      }
        this.new_task.title = '';
        this.new_task.desc = '';
    }
  },

  computed: {
    MainTasks: function () {
      return this.homeTasks.length + this.workTasks.length
    }
  }
}
</script>
