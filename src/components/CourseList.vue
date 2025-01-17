<template>
<div class="course-container">
    <CourseItem
        v-for="course in courses"
        :key="course.id"
        :course="course"
        @edit="editCourse"
        @delete="deleteCourse"
    />
</div>
</template>

<script>
import CourseItem from '@/components/CourseItem.vue';

export default {
    components: {
        CourseItem 
    },
    props: {
        courses: Object
    },
    methods: {
        editCourse(id) {
            this.$router.push('/editar/'+id);
        },
        deleteCourse(id) {
            this.$emit('delete', id);
        },
    }
};
</script>

<style scoped>
.course-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    max-width: 50%;
    margin: 0 auto;
    padding: 20px;
}

.course-container > * {
    flex: 0 1 calc(33.333% - 20px);
}
</style>
