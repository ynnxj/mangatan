<script lang="ts">
  import ProfileModal from '../MemberProfile/ProfileModal.svelte';
  import type { Profile } from '$lib/types/profile';

  const fridaProfile: Profile = {
    name: 'Frida',
    img: '/assets/images/frida/frida.png',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat.`,
    likes: ['Lorem ipsum', 'Dolor', 'Sit amet'],
    favSong: {
      title: 'September Gurls',
      artist: 'The Bangles',
      albumCover: '/assets/images/albums/september-gurls-cover.jfif'
    },
    favImg: '/assets/images/frida/frida-guitar-live.jpg',
    themeClass: 'fridas-theme'
  };
</script>

<ProfileModal profile={fridaProfile} />
