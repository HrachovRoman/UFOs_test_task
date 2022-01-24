<template>
<SlotLayout>
 
    <div class="container-slot">
        <h2>Slot</h2>
            <code>&lt;slot>&lt;/slot></code>
            
    </div>
    </SlotLayout>   
        
   
</template>

<script>
import SlotLayout from '../layouts/SlotLayout.vue'
export default {
    components: {SlotLayout}
}
</script>

<style scoped>
.container-slot {
    display: flex;
    flex-direction: column;
    padding: 15px;
    
}
.test-layout {
    display: flex;

    background: lightcoral;
    width: 100px;
    height: 200px;
}
</style>