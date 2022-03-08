<template>
	<component :is="componentFile"></component>
</template>
<script>
export default{
	name: "DynamicComponent",
	data() {
		return{
			componentFile: null
		}
	},
	props: {
		filepath: {
			type: String,
			required: true
		},
	},
	computed: {
		loader() {
			return () => import(`@/components/Sections/${this.filepath}/${this.filepath}.vue`);
		},
	},
	mounted() {
		this.loader()
			.then(() => {
				this.componentFile = () => this.loader()
			})
			.catch(() => {
				this.componentFile = () => import(`@/components/Sections/Default.vue`)
			})
	},
}
</script>