<script>
  export let segment;

  let isMenuHidden = true;

  function hideMenu() {
    isMenuHidden = true;
  }

  function toggleMenu() {
    isMenuHidden = !isMenuHidden;
    document.body.classList.toggle("noscroll");
  }
</script>

<style>
  nav {
    display: flex;
    align-items: center;
    height: 4.8rem;
    border-bottom: 1px solid #ec225f44;
    padding: 0 1rem;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    height: 4.8rem;
    border-bottom: 0.2rem solid transparent;
    padding: 0.2rem 1rem 0;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .current {
    border-bottom: 0.2rem solid #ec225e;
  }

  .current a {
    color: #ec225e;
  }

  .menu_button {
    display: flex;
    align-items: center;
    height: 4rem;
    border: 0;
    padding: 0;
    background: none;
    color: white;
  }

  @media screen and (min-width: 769px) {
    .menu_button {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      position: fixed;
      top: 4.8rem;
      left: 0;
      z-index: 1;
      flex-direction: column;
      height: 100%;
      width: 100%;
      background: #000000cc;
      transition: height 0.2s, visibility 0.2s;
      overflow: hidden;
    }

    li {
      background: black;
    }

    .hidden {
      height: 0;
      visibility: hidden;
    }
  }
</style>

<nav>
  <ul class:hidden={isMenuHidden}>
    <li class:current={segment === undefined}>
      <a href="." on:click={hideMenu}>home</a>
    </li>
    <li class:current={segment === 'about'}>
      <a href="about" on:click={hideMenu}>about</a>
    </li>
  </ul>
  <div class="menu_button" on:click={toggleMenu}>
    <i class="material-icons">{isMenuHidden ? 'subject' : 'clear'}</i>
  </div>
</nav>
