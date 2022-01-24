<template>
    <div class="test-layout">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'SlotLayot',

}
</script>

<style scoped>
.test-layout {
    position: relative;
    background: lightcoral;
    width: 720px;
    height: 200px;
}

</style>>
