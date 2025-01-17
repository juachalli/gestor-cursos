<template>
<div>
    <h3><u>{{ course.name }}</u></h3>
    <p><strong>Duració:</strong> {{ course.duration }}</p>
    <p><strong>Nivell:</strong> {{ course.level }}</p>
    <button @click="$emit('edit', course.id)">Editar</button>
    &nbsp;&nbsp;&nbsp;
    <button @click="$emit('delete', course.id)">Esborrar</button>
</div>
</template>

<script>
export default {
    props: {
        course: Object
    }
};
</script>

<style scoped>
div {
    border: 1px solid #2c3e50;
    border-radius: 10px;
    padding-bottom: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    margin:0px auto 20px auto;
    max-width: 500px;
}
</style>
