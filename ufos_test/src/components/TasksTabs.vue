<template>
  <div>
      <span class="tab"
      :class="{ activeTab: selectedTab === tab }"
      v-for="(tab, index) in tabs"
      :key="index" 
      @click="selectedTab = tab"
    >{{ tab }}</span>
  </div>
<div v-show="selectedTab === 'Home Tasks'">
  <div class="stats"> 
        <h3 class="stats__title">"Текущих задач: + {{data}}"</h3>
        <h4 class="stats__title">"Общих задач: + {{MainTasks}}"</h4>
        <div :data="data" class="add_task" v-for="(task, index) in homeTasks" :key="index">
          <HomeTasks :data='task' @task_done="delete_task(index)"/>
        </div>   

    <div class="add_task">
      <div class="add_task__input">
          <input placeholder="Новая задача..." type="text" v-model="data">
          <textarea placeholder="Описание" type="text" v-model="data"></textarea>
      </div>
      <button class="add_task__btn" @click="add_task">➕</button>    
  </div>
  </div>
</div>

  <div v-show="selectedTab === 'Work Tasks'">
    <div class="stats"> 
        <h3 class="stats__title">"Текущих задач на работе: + {{data}}"</h3>
        <h4 class="stats__title">"Общих задач: + {{MainTasks}}"</h4>
        <div :data="data" class="add_task" v-for="(task, index) in homeTasks" :key="index">
          <HomeTasks :data='task' @task_done="delete_task(index)"/>
        </div>   

    <div class="add_task">
      <div class="add_task__input">
          <input placeholder="Новая задача..." type="text" v-model="data">
          <textarea placeholder="Описание" type="text" v-model="data"></textarea>
      </div>
      <button class="add_task__btn" @click="add_task">➕</button>    
    </div>
    </div>
  </div>



</template>


<script>
export default {
  name: 'TasksTabs',
  props: {
    data: {
        type: Object,
        required: false
    }
  },
  data() {
    return {
      tabs: ['Home Tasks', 'Work Tasks'],
      selectedTab: 'Home Tasks'    
    }
  }
}
</script>

<style scoped>
.tab {
    /* display: inline-block;
    margin: 10px 10px 10px 10px;
    padding: 10px;
    background-color: var(--main);
    color: var(--white);
    font-weight: 500; */

    /* display: inline-block;
    border: 1px solid #e0e0e0;
    padding: 10px 15px;
    font-size: 16px; */
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: #f5f5f5;
    border: 1px solid #e0e0e0;
    padding: 2px 8px;
    font-size: 16px;
    line-height: 1.5;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
    cursor: pointer;
    position: relative;
    margin: 12px;
    top: 1px;
  }
.activeTab {
    color: #16C0B0;
    text-decoration: underline;
}
</style>