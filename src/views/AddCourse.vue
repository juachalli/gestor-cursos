<!-- Utilitzarà CourseForm.vue per a crear nous cursos -->

<template>
<div>
    <h1>Afegir Nou Curs</h1>
    <CourseForm 
        :course="emptyCourse"
        @submit="insertNewCourse"
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
            emptyCourse: {
                id: '',
                name: '',
                duration: '',
                level: ''
            },
        }
    },
    methods: {
        async insertNewCourse(newCourse) {
            try {
                const response = await fetch('http://localhost:3000/courses')
                if (!response.ok) {
                    throw new Error('Error fetching courses')
                }
                const courses = await response.json()
                const maxId = courses.reduce((max, course) => 
                    Math.max(max, parseInt(course.id)), 0)
                newCourse.id = (maxId + 1).toString()
                this.postCourseFetch(newCourse)
            } catch (error) {
                alert('Error al obtindre el ID per al curs => ' + error)
            }
        },      
        async postCourseFetch(newCourse) {
            try {
                const response = await fetch('http://localhost:3000/courses', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(newCourse)
                })
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                this.$router.push('/')
            } catch (error) {
                alert('Error al insertar el curs => ' + error)
            }
        }
    }
}
</script>

<style scoped>
</style>

