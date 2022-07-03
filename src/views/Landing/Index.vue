<template>
  <div class="container is-fullhd landing">
    <Navbar />
    <Hero />
    <Lure />
    <How />
    <BuildingBlocks />
    <NftLaunching />
    <FAQ />
    <Community />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/layouts/Navbar/Index.vue';
import Hero from '@/components/Hero/Index.vue';
import Lure from '@/components/Lure/Index.vue';
import How from '@/components/How/Index.vue';
import BuildingBlocks from '@/components/BuildingBlocks/Index.vue';
import NftLaunching from '@/components/NftLaunch/Index.vue';
import FAQ from '@/components/FAQ/Index.vue';
import Community from '@/components/Community/Index.vue';
import Footer from '@/layouts/Footer/Index.vue';

export default {
  name: 'Landing',
  components: {
    Navbar,
    Hero,
    Lure,
    How,
    BuildingBlocks,
    NftLaunching,
    FAQ,
    Community,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.landing {
  padding: 24px 80px;
}
</style>
