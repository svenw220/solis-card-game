<template>
  <div class="container landing">
    <Navbar />
    <Hero />
    <Lure />
    <How />
    <BuildingBlocks />
    <Footer />
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import Navbar from '@/layouts/Navbar/Index.vue';
import Hero from '@/components/Hero/Index.vue';
import Lure from '@/components/Lure/Index.vue';
import How from '@/components/How/Index.vue';
import BuildingBlocks from '@/components/BuildingBlocks/Index.vue';

import Footer from '@/layouts/Footer/Index.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'Landing',

  /**
   * The components that the page can use.
   */
  components: {
    Navbar,
    Hero,
    Lure,
    How,
    BuildingBlocks,
    Footer,
  },
};
</script>
