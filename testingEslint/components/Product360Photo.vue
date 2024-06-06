<template>
    <div class="body">
        <TresCanvas clear-color="#F0F1F3">
            <TresPerspectiveCamera
                :scale-z="2"
                :position="[1, 1, 1]"
                :fov="45"
                :aspect="1"
                :near="0.1"
                :far="100"
            />
            <OrbitControls />
            <Suspense>
                <!-- <TresBoxGeometry /> -->
                <ProductModel />
                <!-- <TresMeshNormalMaterial /> -->
            </Suspense>
            <TresAmbientLight :intensity="1" />
            <TresDirectionalLight
                :position="[-4, 8, -4]"
                :intensity="30"
            />
        </TresCanvas>
    </div>
</template>

<script setup>
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
// import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'

import ProductModel from '~/components/ProductModel.vue'
const suspense = ref()

onMounted(() => {
    // suspense.value.setCenter()
    console.log(suspense)
})
</script>

<style lang="scss">
.body {
    width: 50vw;
    height: 50vh;
}
</style>
