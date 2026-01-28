<script lang="ts">
  import ProfileModal from '../MemberProfile/ProfileModal.svelte';
  import type { Profile } from '$lib/types/profile';
  import divider from '$lib/Icons/Dividers/BlueDivider.png';
  import listIcon from '$lib/Icons/SmallIcons/Wing.webp';
  import listGif from '$lib/Icons/Gifs/Dawn.webp';

  /* -------------------------------------------------------------------------- */
  /*                            Frida's Profile Data                            */
  /* -------------------------------------------------------------------------- */
  const fridaProfile: Profile = {
    name: 'Frida',
    img: '/assets/images/frida/frida.png',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    likes: ['Lorem ipsum', 'Dolor', 'Sit amet'],
    favSong: {
      title: 'September Gurls',
      artist: 'The Bangles',
      songLink: 'soundcloud%253Atracks%253A255915799&color=%23955b4c'
    },
    favImg: '/assets/images/frida/frida-fav-img.jpg',
    listIcon,
    listGif,
    divider,
    themeClass: 'fridas-theme'
  };
</script>

<ProfileModal profile={fridaProfile} />
