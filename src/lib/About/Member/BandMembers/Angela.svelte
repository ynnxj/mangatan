<script lang="ts">
  import ProfileModal from '../MemberProfile/ProfileModal.svelte';
  import type { Profile } from '$lib/types/profile';

  const angelaProfile: Profile = {
    name: 'Angela Rocky',
    img: '/assets/images/angela/angela.png',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat.`,
    likes: ['Lorem ipsum', 'Dolor', 'Sit amet'],
    favSong: {
      title: 'Meltdown',
      artist: 'Iroha(sasaki)',
      songLink: 'soundcloud%253Atracks%253A1062635944&color=%23ff01e3'
    },
    favImg: '/assets/images/angela/angela-full-cold.jpg',
    listIcon: '/src/lib/Icons/SmallIcons/PinkBow.gif',
    listGif: '/src/lib/Icons/Gifs/Gyaru.webp',
    divider: '/src/lib/Icons/Dividers/PinkDivider.webp',
    themeClass: 'angelas-theme'
  };
</script>

<ProfileModal profile={angelaProfile} />
