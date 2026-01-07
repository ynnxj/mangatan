<script lang="ts">
  import ProfileModal from '../MemberProfile/ProfileModal.svelte';
  import type { Profile } from '$lib/types/profile';

  const angelaProfile: Profile = {
    name: 'Angela Rocky',
    img: '/assets/images/angela.png',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat.`,
    likes: ['Lorem ipsum', 'Dolor', 'Sit amet'],
    favSong: {
      title: 'Meltdown',
      artist: 'Iroha(sasaki)',
      albumCover: '/assets/images/meltdown-album-cover.jfif'
    },
    favImg: '/assets/images/angela-full-cold.jpg',
    themeClass: 'angelas-theme'
  };
</script>

<ProfileModal profile={angelaProfile} />
