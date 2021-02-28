<template>
    <div 
		class="plus-button plus-button--large"
		@click="$emit('click-btn')"
	>
	</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
$border-color: #39b8d1;
$plus-color: #24b8d6;

.plus-button {
    // outline: none;
	border: 2px solid $border-color;
	background-color: #fff;
	font-size: 16px;
	height: 2.5em;
	width: 2.5em;
	border-radius: 999px;
	position: relative;
    cursor: pointer;
	transition: background-color 0.3s ease;
	
	&:after,
	&:before {
		content: "";
		display: block;
		background-color: $plus-color;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	&:before {
		height: 1em;
		width: 0.2em;
	}

	&:after {
		height: 0.2em;
		width: 1em;
	}

	&:hover{
		background-color: $border-color;
	}

	&:hover:after, &:hover:before{
		background-color: white;
	}
}

.plus-button--large {
	font-size: 4.2rem;
}
</style>