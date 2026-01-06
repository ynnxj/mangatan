<script lang="ts">
  import ProfileModal from './ProfileModal.svelte';
  import type { Profile } from '$lib/types/index';

  const fridaProfile: Profile = {
    name: 'Frida',
    img: '/assets/images/frida.png',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat.`,
    likes: ['Lorem ipsum', 'Dolor', 'Sit amet'],
    favSong: {
      title: 'September Gurls',
      artist: 'The Bangles',
      albumCover: '/assets/images/september-gurls-cover.jfif'
    },
    favImg: '/assets/images/frida-guitar-live.jpg',
    themeClass: 'fridas-theme'
  };
</script>

<ProfileModal profile={fridaProfile} />
