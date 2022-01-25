<template>
    <Slotlayout>
        <div class="container-slot">
            <h2>Slot</h2>
                <code>&lt;slot>&lt;/slot></code>
        </div>
    </Slotlayout>   
</template>

<script>
import Slotlayout from '@/layouts/Slotlayout.vue'
export default {
    components: {Slotlayout} 
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