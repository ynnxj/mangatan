<script lang="ts">
  import ProfileModal from '../MemberProfile/ProfileModal.svelte';
  import type { Profile } from '$lib/types/profile';
  import listIcon from '$lib/Icons/SmallIcons/Cross.gif';
  import listGif from '$lib/Icons/Gifs/Crow.gif';
  import divider from '$lib/Icons/Dividers/SwordDivider.png';

  /* -------------------------------------------------------------------------- */
  /*                           Benjamin's Profile Data                          */
  /* -------------------------------------------------------------------------- */
  const benjaminProfile: Profile = {
    name: 'Benjamin',
    img: '/assets/images/benjamin/benjamin.png',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat.`,
    likes: ['Lorem ipsum', 'Dolor', 'Sit amet'],
    favSong: {
      title: 'When It Rains',
      artist: 'Paramore',
      songLink: 'soundcloud%253Atracks%253A256142132&color=%23000000'
    },
    favImg: '/assets/images/benjamin/benjamin-half-portrait.png',
    listIcon,
    listGif,
    divider,
    themeClass: 'benjamins-theme'
  };
</script>

<ProfileModal profile={benjaminProfile} />
