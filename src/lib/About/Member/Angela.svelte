<script lang="ts">
  import ProfileModal from './ProfileModal.svelte';
  import type { Profile } from '$lib/types/index';

  const angelaProfile: Profile = {
    name: 'Angela Rocky',
    img: '/assets/images/angela.png',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat.`,
    likes: ['Lorem ipsum', 'Dolor', 'Sit amet'],
    favSong: {
      title: '炉心融解(Meltdown)',
      artist: '鏡音リン',
      albumCover: '/assets/images/meltdown-album-cover.jfif'
    },
    favImg: '/assets/images/angela-full-cold.jpg'
  };
</script>

<ProfileModal profile={angelaProfile} />
