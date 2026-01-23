<script lang="ts">
  import ProfileModal from '../MemberProfile/ProfileModal.svelte';
  import type { Profile } from '$lib/types/profile';
  import listIcon from '$lib/Icons/SmallIcons/Sparkle.gif';
  import listGif from '$lib/Icons/Gifs/MetalHeart.gif';
  import divider from '$lib/Icons/Dividers/SkullDivider.png';

  const lunaProfile: Profile = {
    name: 'Luna',
    img: '/assets/images/luna/luna.png',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat.`,
    likes: ['Lorem ipsum', 'Dolor', 'Sit amet'],
    favSong: {
      title: 'PRATA TILL PUNK',
      artist: 'LNK',
      songLink: 'soundcloud%253Atracks%253A1738505556&color=%23ff0099'
    },
    favImg: '/assets/images/luna/luna-fav-img.png',
    listIcon,
    listGif,
    divider,
    themeClass: 'lunas-theme'
  };
</script>

<ProfileModal profile={lunaProfile} />
