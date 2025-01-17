<template>
    <form @submit.prevent="submit">
        <input v-model="localCourse.name" placeholder="Nom del curs" />
        <input v-model="localCourse.duration" placeholder="Duració" />
        <select v-model="localCourse.level">
            <option>Principiant</option>
            <option>Intermedi</option>
            <option>Avançat</option>
        </select>
        <button type="submit" :disabled="!isFormValid">{{ buttonText }}</button>
    </form>
</template>

<script>
export default {
    props: {
        course: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            localCourse: { ...this.course }
        }
    },
    emits: ['submit'],
    methods: {
        submit() {
            this.$emit('submit', this.localCourse)
        }
    },
    computed: {
        isFormValid() {
            return  this.localCourse.name.trim() !== '' && 
                    this.localCourse.duration.trim() !== '' && 
                    this.localCourse.level.trim() !== '';
        },
        buttonText() {
            return this.isFormValid ? 'Guardar' : ' Completar tots els camps';
        }  
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
    margin: 0 auto;
}

input, select {
    padding: 8px;
    margin: 5px 0;
}

button:disabled {
    color: #35495E;
    font-weight: bold;
    cursor: not-allowed;
}
</style>
