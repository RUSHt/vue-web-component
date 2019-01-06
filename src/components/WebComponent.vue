<template>
    <div>
        <h1>Web Component Template</h1>
        <div>{{ msg }}</div>
    </div>
</template>

<script>
export default {
    name: 'my-custom-element',
    props: [ 'msg', 'testArr' ],
    mounted: function() {
        console.log('Mounted',this);
    }
}    
</script>