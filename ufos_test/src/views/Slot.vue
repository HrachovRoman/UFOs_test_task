<template>
    <div class="slot">
        <h2>Slot</h2>
            <code>&lt;slot>&lt;/slot></code>
    </div>
    <div class="test-layout"></div>
</template>

<script>
export default {

}
</script>

<style scoped>
.slot {
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