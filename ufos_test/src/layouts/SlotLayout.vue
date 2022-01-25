<template>
    <div class="test-layout">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'Slotlayout',

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
