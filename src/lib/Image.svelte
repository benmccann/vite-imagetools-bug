<script>
	export let src;
	export let alt;
	export let width = undefined;
	export let height = undefined;
</script>

{#if typeof src === 'string'}
	<img {src} {alt} {width} {height} />
{:else}
	<picture>
		{#each src as image}
			<source srcset={image.src} type={'image/' + image.format} /> 
			{#if image.format === 'jpeg'}
				<img src={image.src} {alt} />
			{/if}
		{/each}
	</picture>
{/if}
