<script lang="ts">
  import ProfileModal from '../MemberProfile/ProfileModal.svelte';
  import type { Profile } from '$lib/types/profile';

  const benjaminProfile: Profile = {
    name: 'Benjamin',
    img: '/assets/images/benjamin.png',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat.`,
    likes: ['Lorem ipsum', 'Dolor', 'Sit amet'],
    favSong: {
      title: 'When It Rains',
      artist: 'Paramore',
      albumCover: '/assets/images/when-it-rains-cover.jfif'
    },
    favImg: '/assets/images/benjamin-smoke-live.jpg',
    themeClass: 'benjamins-theme'
  };
</script>

<ProfileModal profile={benjaminProfile} />
