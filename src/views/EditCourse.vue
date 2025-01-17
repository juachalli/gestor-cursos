<!-- Utilitzarà CourseForm.vue per a editar un curs existent -->

<template>
<div>
    <h1>Editar Curs</h1>
    <CourseForm 
        v-if="course"
        :course="course"
        @submit="putCourseFetch"
    />
</div>
</template>

<script>
import CourseForm from '@/components/CourseForm.vue'

export default {
    components: {
        CourseForm
    },
    data() {
        return {
            course: null,
        }
    },
    created() {
        this.getCourseFetch()
    },
    methods: {
        async getCourseFetch() {
            try {
                const response = await fetch(`http://localhost:3000/courses/${this.$route.params.id}`)
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                this.course = await response.json()
            } catch (error) {
                alert('Error al obtindre el curs => ' + error);
                this.$router.push('/')
            }
        },
        async putCourseFetch(course) {
            try {
                const response = await fetch(`http://localhost:3000/courses/${this.$route.params.id}`, {
                    method: 'PUT',
                    headers: { 'Content-type': 'application/json; charset=UTF-8' },
                    body: JSON.stringify(course),
                });   
                if (!response.ok) {
                    throw new Error(response.statusText);
                }   
                this.$router.push('/')
            } catch (error) {
                alert('Error al actualitzar el curs => ' + error);
                this.$router.push('/')
            }
        }
    }
}
</script>

<style scoped>
</style>