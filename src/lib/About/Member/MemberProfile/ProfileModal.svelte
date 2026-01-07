<script lang="ts">
  import type { Profile } from '$lib/types/profile';
  import '$lib/About/Member/BandMembers/member-themes.scss';
  import './profile-modal.scss';

  export let profile: Profile;

  $: listIcon = profile.listIcon || 'src/lib/Icons/SpinningStar.gif';
  $: cdFrameImg = profile.cdFrameImg || 'src/lib/Icons/cd-frame.png';
</script>

<article class={profile.themeClass}>
  <div class="info-box box">
    <div>
      <img src={profile.img} alt={`a portrait of ${profile.name}`} />
    </div>
    <div class="info-text">
      <h3>{profile.name}</h3>
      <p>{profile.desc}</p>
    </div>
  </div>

  <div class="likes-list box">
    <h4>Likes</h4>
    <ul>
      {#each profile.likes as like}
        <li>
          <img src={listIcon} alt="spinning star gif" />
          {like}
        </li>
      {/each}
    </ul>
  </div>

  <div class="fav-song box">
    <h4>Favorite song</h4>
    <div class="song">
      <div class="album">
        <img src={cdFrameImg} class="cd-frame" alt="cd album frame" />
        <img
          src={profile.favSong.albumCover}
          class="album-cover"
          alt={`${profile.favSong.title} album cover`}
        />
      </div>
      <p>{profile.favSong.title} by {profile.favSong.artist}</p>
    </div>
  </div>

  <div class="fav-img box">
    <img src={profile.favImg} alt="favorite img" />
  </div>
</article>
