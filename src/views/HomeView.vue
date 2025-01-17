<!-- Home.vue mostrarà la llista de cursos amb CourseList.vue -->

<template>
<div>
    <button @click="addCourse">Afegir Nou Curs</button>
    <hr>  
    <h1 v-if="courses.length==0">No hi han cursos actualment</h1>
    <h1 v-else-if="courses.length==1">Llistat del curs actual</h1>    
    <h1 v-else>Llistat dels {{ courses.length }} cursos actuals</h1>  
    <CourseList :courses="courses" @delete="deleteCourseFetch"/>  
</div>    
</template>

<script>
import CourseList from '@/components/CourseList.vue';

export default {
    components: {
        CourseList
    },
    data() {
        return { 
            courses: [] 
        }
    },
    created() {
        this.getCoursesFetch()
    },
    methods: {
        addCourse() {
            this.$router.push('/nou')
        },    
        //Utilitzem API Fetch per a consumir l'API, ja que està incoporada en JavaScript de forma nativa
        async getCoursesFetch() {
            try {
                const response = await fetch('http://localhost:3000/courses');
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                this.courses = await response.json();
            } catch (error) {
                alert('Error al obtindre els cursos => ' + error);
            }
        },
        async deleteCourseFetch(id) {
            try {
                const response = await fetch(`http://localhost:3000/courses/${id}`, {
                    method: 'DELETE'
                });
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                this.getCoursesFetch()
            } catch (error) {
                alert('Error al esborrar el curs => ' + error);
            }
        }             
    }
};
</script>

<style scoped>
button {
    font-size: 17px;
}
</style>

