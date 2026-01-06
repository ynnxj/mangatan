<article>
  <div class="info-box box">
    <div>
      <img src="/assets/images/angela.png" alt="a portrait of angela" />
    </div>
    <div class="info-text">
      <h3>Angela Rocky</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>

  <div class="likes-list box">
    <h4>Likes</h4>
    <ul>
      <li><img src="src/lib/Icons/SpinningStar.gif" alt="spinnin star gif" />Lorem ipsum</li>
      <li><img src="src/lib/Icons/SpinningStar.gif" alt="spinnin star gif" />Dolor</li>
      <li><img src="src/lib/Icons/SpinningStar.gif" alt="spinnin star gif" />Sit amet</li>
    </ul>
  </div>

  <div class="fav-song box">
    <h4>Favorite song</h4>
    <div class="song">
      <div class="album">
        <img src="src/lib/Icons/cd-frame.png" class="cd-frame" alt="cd album frame" />
        <img
          src="/assets/images/meltdown-album-cover.jfif"
          class="album-cover"
          alt="meltdown album cover"
        />
      </div>
      <p>A Song Here by An Artist</p>
    </div>
  </div>

  <div class="fav-img box">
    <img src="/assets/images/angela-full-cold.jpg" alt="favorite img" />
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
      background-color: rgb(0, 0, 0);
      padding: 10px 20px;
      background-color: rgb(0, 0, 0);
      border: 20px solid transparent;
      background-clip: padding-box;
      border-image: url('/assets/images/blacklacelarge.png') 37 round;
    }

    h3,
    h4 {
      color: hotpink;
      border-bottom: 1px solid hotpink;
      font-family: 'Comic Sans MS';
      font-size: 1.7rem;
      margin: 10px 0;
      padding-bottom: 5px;
    }

    p,
    li {
      font-family: 'Courier New', Courier, monospace;
      color: white;
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
        border: 1px solid white;
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
          border: 1px solid white;

          .album-cover,
          .cd-frame {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
          }

          .cd-frame {
            z-index: 10;
            filter: opacity(70%) brightness(80%);
          }
        }
      }
    }

    .fav-img {
      img {
        width: 150px;
        border: 1px solid white;
      }
    }
  }
</style>
