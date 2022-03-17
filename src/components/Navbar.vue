<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class="navbar__logo-container">
        <Logo />
      </div>
      <div class="navbar__logo-container navbar__desktop-element">
        <TextLogo />
      </div>
      <div class="navbar__btn-menu-container">
        <button class="navbar__btn navbar__desktop-element" @click="openFileMenu">File</button>
        <div class="navbar__btn-menu" :class="{'show--flex': isFileMenuOpen}">
          <div class="navbar__menu-section navbar__menu-section--border">
            <a class="navbar__menu-link" href="#">Settings</a>
            <a class="navbar__menu-link" href="#">Version history</a>
            <a class="navbar__menu-link" href="#">Presentation mode</a>
          </div>
          <div class="navbar__menu-section navbar__menu-section--border">
            <a class="navbar__menu-link" href="#">Import</a>
            <a class="navbar__menu-link" href="#">Export</a>
          </div>
          <div class="navbar__menu-section">
            <h4 class="navbar__menu-title">New</h4>
            <a class="navbar__menu-link" href="#">Create a new diagram</a>
            <a class="navbar__menu-link" href="#">Load from templates</a>
            <a class="navbar__menu-link" href="#">Make a copy</a>
          </div>
        </div>
      </div>
      <div class="navbar__btn-menu-container">
        <button class="navbar__btn navbar__desktop-element" @click="openShareMenu">
          Share
          <Share />
        </button>
        <div class="navbar__btn-menu" :class="{'show--flex': isShareMenuOpen}">
          <a class="navbar__menu-link" href="#">Diagram Link</a>
          <a class="navbar__menu-link" href="#">Embed</a>
          <a class="navbar__menu-link" href="#">Twitter</a>
        </div>
      </div>
    </div>
    <div class="navbar__container navbar__desktop-element">
      <p class="navbar__file-name">
        <a class="navbar__link" href="#">Diagrams &#62;</a> Demo
      </p>
    </div>
    <div class="navbar__container">
      <p class="navbar__save-status">
        <span class="js-save-status"> All changes saved </span>
      </p>
      <div class="navbar__btn-container">
        <button class="navbar__btn navbar__save-btn">
          <span class="navbar__save-icon">
            <Save />
          </span>
          Save
        </button>
        <button class="navbar__btn navbar__chvron-btn">
          <ChevronDown />
        </button>
      </div>
      <img
        class="navbar__profile-img"
        src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
        alt="Profile picture"
      />
    </div>
  </nav>
</template>

<script>
import { ref } from "vue"
import Logo from "../assets/icons/logo.vue"
import TextLogo from "../assets/icons/text-logo.vue"
import Share from "../assets/icons/share.vue"
import Save from "../assets/icons/save.vue"
import ChevronDown from "../assets/icons/chevron-down.vue"

export default {
  name: "Navbar",
  components: {
    Logo,
    TextLogo,
    Share,
    Save,
    ChevronDown,
  },
  setup() {
    let isFileMenuOpen = ref(false)
    let isShareMenuOpen = ref(false)

    const openFileMenu = () => {
      isFileMenuOpen.value = !isFileMenuOpen.value
    }

    const openShareMenu = () => {
      isShareMenuOpen.value = !isShareMenuOpen.value
    }

    return {
      isFileMenuOpen,
      isShareMenuOpen,
      openFileMenu,
      openShareMenu,
    }
  }
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 0 1rem;
  width: 100%;
  background-color: #515ea6;
  box-shadow: 0 4px 6px -1px #0000001a, 0 2px 4px -1px #0000000f;
}

.navbar * {
  color: white;
}

.navbar__container {
  display: flex;
  align-items: center;
}

/*=== Navbar File section ===*/

.navbar__logo-container {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.navbar__btn-menu-container {
  position: relative;
}

.navbar__btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: transparent;
}

.navbar__btn:hover {
  background-color: #667eea;
}

/*=== Navbar menu ===*/

.navbar__btn-menu {
  position: absolute;
  top: 42px;
  left: -4px;
  display: none;
  flex-direction: column;
  width: 15rem;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px #0000001a, 0 2px 4px -1px #0000000f;
}

.navbar__menu-section--border {
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eaeceecd;
}

.navbar__menu-section {
  display: flex;
  flex-direction: column;
}

.navbar__menu-title {
  margin: 0;
  padding: 0rem 1rem;
  font-weight: bold;
  text-align: left;
  color: #A0AEC0;
}

.navbar__menu-link {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  text-align: left;
  text-decoration: none;
  color: #4A5568;
}

/*=== Navbar Share section ===*/

.navbar__file-name {
  font-size: 1.125rem;
}

.navbar__link {
  color: #acb7f2;
  text-decoration: none;
}

/*=== Navbar third section ===*/

.navbar__save-status {
  margin-right: 1rem;
}

.navbar__btn-container {
  display: flex;
  border: 1px solid white;
  border-radius: 0.25rem;
}

.navbar__save-btn {
  display: inline-flex;
  align-items: center;
  font-size: 1.125rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.navbar__save-btn,
.navbar__chvron-btn {
  padding: 0.25rem 0.5rem;
}

.navbar__save-btn:hover,
.navbar__chvron-btn:hover {
  color: #515ea6;
  background-color: white;
}

.navbar__share-logo {
  position: relative;
  top: 0.25rem;
  margin-left: 0.5rem;
  width: 1rem;
  height: 1rem;
  fill: currentColor;
}

.navbar__save-icon {
  display: flex;
  align-items: center;
  margin-bottom: 1px;
  margin-right: 0.5rem;
  width: 0.5rem;
  height: 1rem;
}

.navbar__save-btn:hover .navbar__save-svg {
  stroke: #515ea6;
}

.navbar__chvron-btn {
  border-left: 1px solid white;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.navbar__chvron-btn:hover .chevron-down {
  fill: #515ea6;
}

.navbar__desktop-element {
  display: none;
}

.navbar__profile-img {
  margin-left: 1rem;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
}

/*=== Other classes ===*/

@media (min-width: 770px) {
  .navbar__desktop-element {
    display: initial;
  }
}
</style>
