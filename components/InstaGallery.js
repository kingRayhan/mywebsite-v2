<template>
	<div class="pt-5 insta-gallery">
		
		<div class="pb-5 text-center">
			<a href="https://www.instagram.com/king_rayhan/" target="_blank" class="insta-url">
				<img src="../../images/insta-logo.png">
				&nbsp;
				king_rayhan
			</a>
		</div>
		
		<div class="text-center" v-if="!images">
			<loader />
		</div>

		<Carousel v-if="images" :autoplay="true" :loop="true" :perPageCustom="[[320, 2], [768, 3], [769, 5]]">
			<Slide v-for="image in images" :key="image.id">
				<img :src="image.images.standard_resolution.url">
			</Slide>
		</Carousel>
	</div>
</template>
<style lang="scss">
	.VueCarousel-slide{
		img{
			height: 300px;
			width: auto;
		}
	}
	.insta-url{
		font-size: 25px;
	}
</style>
<script>
	import { Carousel, Slide } from 'vue-carousel'
	export default{
		components: {
		    Carousel,
		    Slide
		},
		mounted()
		{
			const api = `https://api.instagram.com/v1/users/self/media/recent/?access_token=2286603943.7a4623b.d9d4b1b436734bc293c21df23ef4f8d2`
			
			$.ajax({
		        method: "GET",
		        url: api,
		        dataType: "jsonp",
		        jsonp: "callback",
		        jsonpCallback: "jsonpcallback",
		        success: ({ data }) => this.images = data
		    });		
		},
		data()
		{
			return{
				images: ''
			}
		}
	}
</script>