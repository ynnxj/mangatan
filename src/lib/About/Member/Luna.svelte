<script lang="ts">
  import ProfileModal from './ProfileModal.svelte';
  import type { Profile } from '$lib/types/index';

  const lunaProfile: Profile = {
    name: 'Luna',
    img: '/assets/images/luna.png',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat.`,
    likes: ['Lorem ipsum', 'Dolor', 'Sit amet'],
    favSong: {
      title: 'Pozxa',
      artist: 'Cortex',
      albumCover: '/assets/images/poxa-cover.jfif'
    },
    favImg: '/assets/images/luna-drums-live.jpg',
    themeClass: 'lunas-theme'
  };
</script>

<ProfileModal profile={lunaProfile} />
