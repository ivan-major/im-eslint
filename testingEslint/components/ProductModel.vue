<script setup>
import { useGLTF } from '@tresjs/cientos'

const { scene: model } = await useGLTF('/models/Koli-45-s-GS.glb')
</script>

<template>
    <primitive :object="model" />
</template>
