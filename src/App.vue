<template>
	<div class="m-2">
		<div class="text-center m-2">
			<div class="btn-group">
				<router-link to="/display" exact-active-class="btn-warning"
						class="btn btn-secondary">
					Prosty wyświetlacz
				</router-link>
				<router-link to="/list" exact-active-class="btn-info"
						class="btn btn-secondary">
					Generator list
				</router-link>
				<router-link to="/numbers" exact-active-class="btn-success"
						class="btn btn-secondary">
					Liczby
				</router-link>
			</div>
		</div>
		<router-view v-slot="{ Component }">
			<transition enter-active-class="animate__animated animate__fadeIn quick"
					leave-active-class="animate__animated animate__fadeOut quick"
					mode="out-in" >
				<component :is="Component"></component>
			</transition>
		</router-view>			
	</div>
</template>
<script>
export default {
	name: "App"
}
</script>
<style>
	.quick {
		animation-duration: 200ms;
	}
</style>