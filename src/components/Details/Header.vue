<template>
	<header>
		<div class='header-left' @click='toHome'>
			<i class='iconfont icon-right'></i>
		</div>
		<div class='header-title'>活动详情</div>
		<div class='header-right'>
			<i class='iconfont icon-shezhi'></i>
		</div>
	</header>
</template>

<script>
export default{
	methods:{
		toHome(){
			this.$router.push({
				path:"/"
			})
		}
	}
}
</script>
<style scoped>
header{
	height: 1.2rem;
	background: #f7f7f7;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.header-left{
	padding-left:.5rem;
}
.header-right{
	padding-right:.5rem;
}
.icon-right{
	transform:rotate(180deg);
}
</style>