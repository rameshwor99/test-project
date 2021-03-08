<script>
    import {onMount} from 'svelte';
    // Please fix the following bug.

    export let name = 'Harold';

    onMount(() => {
        let child = document.getElementById('my-name');
        child["style"] = 'font-size: 2rem;';
    });
</script>

<p id="my-name">My name is {name}</p>
