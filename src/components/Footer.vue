<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'Transformons vos idées en solutions innovantes et efficaces.',
			author: 'Délanno',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center bg-gray-600 text-white py-2 md:py-5">
		<div class="font-general-regular text-sm md:text-lg text-ternary-dark dark:text-ternary-light">

			<p
				class="font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500">
				{{ projectName }}
			</p>

			<p> &copy; Délanno {{ copyrightDate }}. Tous droits réservés.</p>
			<!-- . Développer par
			<a
				href="https://delanno.me"
				target="__blank"
				class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
				>{{ author }}</a
			> -->
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
