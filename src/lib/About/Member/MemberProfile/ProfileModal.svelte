<script lang="ts">
  import type { Profile } from '$lib/types/profile';
  import '$lib/About/Member/BandMembers/member-themes.scss';
  import './profile-modal.scss';

  let { profile } = $props<{ profile: Profile }>();
</script>

<article class={profile.themeClass}>
  <div class="info-box box">
    <div>
      <img src={profile.img} alt={`a portrait of ${profile.name}`} class="profile-img" />
    </div>
    <div class="info-text">
      <h3>{profile.name}</h3>
      <img src={profile.divider} alt="A gif" class="divider" />
      <p>{profile.desc}</p>
    </div>
  </div>

  <div class="likes-list box">
    <h4>Likes</h4>
    <ul>
      {#each profile.likes as like}
        <li>
          <img src={profile.listIcon} alt="List icon" />
          {like}
        </li>
      {/each}
    </ul>
    <img src={profile.listGif} alt="A gif" class="list-img" />
  </div>

  <div class="fav-song box">
    <div>
      <h4>Favorite song</h4>
      <div class="song">
        <p>{profile.favSong.title} by {profile.favSong.artist}</p>
      </div>
      <iframe
        class="fav-song-link"
        title="Music Player"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/{profile
          .favSong
          .songLink}&auto_play=false&hide_related=true&show_comments=true&show_user=false&show_reposts=false&show_teaser=false"
      ></iframe>
    </div>
  </div>

  <div class="fav-img box">
    <img src={profile.favImg} alt="favorite img" class="fav-img" />
  </div>
</article>
