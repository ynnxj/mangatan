<script lang="ts">
  import type { Profile } from '$lib/types/index';
  import '$lib/About/Member/profile-themes.scss';
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

<style lang="scss">
  article {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas:
      'info likes'
      'song image';
    align-items: start;
    justify-items: start;
    gap: 20px;

    .box {
      background-color: var(--profile-bg-color);
      padding: 10px 20px;
      border: 20px solid transparent;
      background-clip: padding-box;
      border-image: var(--profile-border-img);
    }

    h3,
    h4 {
      color: var(--profile-title-color);
      border-bottom: 1px solid var(--profile-border-bottom-color);
      font-family: var(--profile-title-font);
      font-size: 1.7rem;
      margin: 10px 0;
      padding-bottom: 5px;
    }

    p,
    li {
      font-family: var(--profile-font-family);
      color: var(--profile-color);
      font-size: 1.5rem;
    }

    li {
      display: flex;
      padding: 5px 0;
      gap: 10px;
    }

    .info-box {
      display: flex;
      flex-direction: row;
      align-items: center;

      p {
        width: 200px;
        text-align: justify;
        font-size: 1rem;
      }

      img {
        width: 100px;
        margin-right: 30px;
        border: var(--profile-img-border);
      }
    }

    .fav-song {
      margin-left: 70px;
      margin-top: 20px;

      .song {
        display: flex;
        flex-direction: row;
        gap: 10px;

        .album {
          position: relative;
          width: 115px;
          height: 100px;
          border: var(--profile-img-border);

          .album-cover,
          .cd-frame {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
          }

          .cd-frame {
            z-index: 10;
          }
        }
      }
    }

    .fav-img {
      img {
        width: 150px;
        border: var(--profile-img-border);
      }
    }
  }
</style>
