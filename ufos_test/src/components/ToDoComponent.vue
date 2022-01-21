<template>
<div class='container'>
  <h4 class="stats__main">"Общих задач: + {{ MainTasks }}"</h4>
    
    <ul class="nav nav-tabs">
        <li @click="currentTab = 'home'"><a :class="['li-item', {active: currentTab === 'home'}]">Home Tasks</a></li>
        <li @click="currentTab = 'work'"><a :class="['li-item', {active: currentTab === 'work'}]">Work Tasks</a></li>
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
import GeneralTasks from './GeneralTasks.vue'
import InputArea from './InputArea.vue'

export default {
  name: 'ToDoComponent',
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

<style scoped>
ul {
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  
}
  .nav-tabs {
    border-bottom: 1px solid #ddd;
    
  }
  .nav-tabs {
    border-bottom: 0px solid #ddd;
    margin-bottom: 15px;
    margin-left: -4px;
    
  }
  /* .nav-tabs>li>a:active {
    color:honeydew;
    background: crimson;
    text-decoration: none;
  } */
  li {
    list-style-type: none;
    display: inline;

   }
  ul {
    margin-left: 0;
    padding-left: 0;
   }
  .nav-tabs>li>a:active {
    
    margin-right: 2px;
    line-height: 1.42857143;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
    color:honeydew;
    background: crimson;
  }
  
   .nav>li>a {
    position: relative;
    display: inline;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 4px 4px 0 0; 
  }
  a {
    color: #337ab7;
    /* text-decoration: none; */
    box-shadow: 3px -2px 3px rgb(0 0 0 / 30%);
    user-select: none;
  }
  a:hover{ color: red; }
  a.active{ color: red; transition: background 0s; }
  

  .li-item.active {
    color: red;
  }

</style>