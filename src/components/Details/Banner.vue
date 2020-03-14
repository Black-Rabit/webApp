<template>
	<div class='banner'>
		<div class='banner-img'>
			<img :src="item.imgUrl" alt="">
		</div>
		<div class='banner-title'>
			{{item.title}}

			
		</div>

		<h1>因为本人不会写后台数据，所以写这个页面就是实际记录下项目
				的路径传值以及接收并放到页面上，
				布局如果有心的人随便布布吧，千篇一律的东西 <br>
				上面的图标随便放的，布局布的心碎
			</h1>
	</div>
</template>

<script>
export default{
	data () {
		return {
			item:''
		}
	},
	activated(){
		console.log(this.$route);
		this.item = this.$route.query.items;
		
	}
}
</script>

<style scoped>
.banner{
	height: 5.65rem;
	width: 100%;
}
.banner img{
	width: 100%;
	height: 100%;
}
.banner-title{
	padding:.3rem;
	font-size:.5rem;
}
h1{
	margin-top: 5rem;
}
</style>