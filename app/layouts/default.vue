<script setup lang="ts">
const { appDictionary } = useLookup()
const { appOptions } = useOptions()
const sidebarIsOpen = ref(true)

function clearLocalStorage() {
  localStorage.clear()
}
</script>

<template>
  <div>
    <aside
      class="sidebar"
      :class="{ isOpen: sidebarIsOpen }"
      @click.self="sidebarIsOpen = !sidebarIsOpen"
    >
      <div class="sidebar__top-panel">
        <Icon name="tabler:x" @click.stop="sidebarIsOpen = false" />
        <div class="space"></div>
        <NuxtLink to="/options">Settings</NuxtLink>
      </div>

      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/info">About</NuxtLink>
      </nav>

      <SectorDetails text="Test Animation">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia ea
          quaerat commodi laboriosam perferendis voluptas qui tenetur, rerum,
          aspernatur, tempora consequuntur? Corporis voluptatum minima ab
          aspernatur ut necessitatibus officiis mollitia incidunt quis. Facilis
          voluptate odio eos ea harum velit corporis commodi! Voluptates,
          similique laborum. Explicabo, placeat quis reprehenderit adipisci
          animi eligendi minima voluptatum vero cum eveniet qui. Vitae
          laboriosam cumque sed veniam fugiat quis.
        </p>
      </SectorDetails>

      <SectorDetails icon="tabler:settings" text="アプリの設定">
        <div>
          <h3>Card Preferences</h3>
          <ActionCheckbox
            v-model="appOptions.wordShowDicts"
            id="check-show-links"
            text="Dictionary Links"
            subtext="Show dictionary links at the bottom of the word card."
          />
          <ActionCheckbox
            v-model="appOptions.otherLinkDecor"
            id="check-show-decor"
            text="External Link Underline"
            subtext="Show the underline decoration from external links."
          />
          <h3>Text Preferences</h3>
          <ActionCheckbox
            v-model="appOptions.wordBiggerJpText"
            id="check-bigger-jp"
            text="Enlarge Japanese Texts"
          />
          <ActionCheckbox
            v-model="appOptions.wordBiggerEnText"
            id="check-bigger-en"
            text="Enlarge English Texts"
          />
        </div>

        <div>
          <h1>Lookup Preferences</h1>
          <ActionSelect
            v-model="appDictionary.limit"
            id="select-limit"
            text="Limit"
            subtext="Set the lookup limit. This will automatically search the dictionary again."
          >
            <option :value="10">Default (10)</option>
            <option :value="20">Many (20)</option>
            <option :value="30">Excessive (30)</option>
          </ActionSelect>
        </div>

        <div>
          <h3>Storage</h3>
          <p>Clear <code class="subtext">localStorage</code></p>
          <ActionButton
            id="click-clear-storage"
            text="Clear localStorage"
            :opt="{ isAlert: true }"
            @click="clearLocalStorage()"
          />
        </div>
      </SectorDetails>

      <SectorDetails text="Test Animation 2">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste animi
          doloribus aperiam incidunt dicta vero voluptas cupiditate iure ipsam!
          Minus fugiat, doloremque dicta saepe vel modi suscipit commodi! Modi
          quae sint maiores sit minus ducimus deleniti, reprehenderit
          exercitationem ex sed? Labore aspernatur ducimus facilis fugit
          voluptates, vitae impedit quisquam voluptatem quas maiores iure quae
          sint veniam, modi exercitationem debitis ipsa dicta quos eaque velit,
          deserunt atque quia. Quibusdam atque beatae repellat similique
          pariatur consequatur fugiat enim eius fugit reiciendis recusandae,
          sint voluptatem modi eveniet, nostrum impedit consectetur nisi
          doloribus a autem. Odit, modi minus quaerat voluptatum minima, ab
          perferendis fuga voluptates earum exercitationem voluptas ratione
          fugit. Laboriosam facilis deserunt distinctio aliquam vel ab qui et
          sed temporibus, itaque ad est?
        </p>
      </SectorDetails>

      <SectorDetails text="Test Animation 3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eum
          qui quibusdam eaque! Eaque assumenda nobis doloribus ex quasi
          veritatis natus consectetur molestias numquam culpa sit, sint magnam
          quo aspernatur ratione recusandae veniam nulla corrupti consequatur
          harum suscipit dolores! Nesciunt obcaecati optio iusto dolorem
          deserunt, accusantium reprehenderit molestiae, dolores beatae numquam
          voluptas ex quidem nulla dolorum! Voluptatibus suscipit nam cum
          quisquam deleniti quis. Perferendis error facilis culpa, similique
          distinctio sit ab obcaecati quae minus ducimus iste laborum, omnis,
          quisquam blanditiis provident alias vel! Exercitationem, esse,
          voluptas facilis obcaecati quis maxime quasi suscipit id incidunt nam,
          dolores blanditiis? Dolorem, illum? Exercitationem mollitia voluptates
          laborum quas adipisci aspernatur hic suscipit, nesciunt minus
          excepturi iure tempore vel quia magnam sapiente aut! Perferendis eum
          eius deserunt unde dolorum dolorem, exercitationem quo excepturi
          eligendi quibusdam eos aut ullam cum consequatur sint accusamus
          impedit, magni laborum suscipit nesciunt vel ipsa. Explicabo commodi
          magnam beatae cupiditate consequatur illo ipsum mollitia aperiam
          impedit quam repellat quia quibusdam voluptatem possimus nemo harum
          quasi voluptate voluptatum ipsa maiores enim, quae nam delectus quos!
          Nobis id consectetur natus numquam. Numquam assumenda dolore
          repellendus mollitia reiciendis totam dolor sint impedit officiis
          magnam. Placeat omnis vel, nostrum repellat magni natus ipsam eaque in
          dicta laboriosam similique quasi nisi unde, consequatur praesentium
          aperiam sequi iste. Distinctio sit voluptatibus nemo, odio harum quo!
          Perferendis aliquam in illo recusandae. Dicta ex porro vero explicabo
          nemo saepe inventore repellendus, doloremque fugiat quo laboriosam,
          nesciunt neque eaque numquam, reiciendis corrupti tempora ratione rem
          harum ad? Nesciunt a repellat ab dicta enim natus, hic laudantium
          impedit non modi quisquam ut exercitationem praesentium maxime
          inventore odio placeat. Commodi consequuntur nemo consectetur rem
          saepe possimus. Ex at dolore quasi, voluptatum, inventore molestiae
          hic eius eaque porro, illo labore assumenda quaerat quae ullam ad
          soluta? Expedita delectus, ratione vitae recusandae aspernatur
          numquam!
        </p>
      </SectorDetails>
    </aside>

    <slot />
  </div>
</template>

<style lang="scss">
.sidebar {
  height: 100%;
  // position: fixed;
  // width: 100dvw;
  // min-height: 100dvh;
  // overflow: auto;
  // translate: -90dvw;

  //
  //
  //
  //
  //
  //

  background: root.$black-dark-00;
  isolation: isolate;
  z-index: 999;
  padding: 1.5em;

  @include util.animation("translate");
  @include util.flex(column, nowrap, 1em);

  &.isOpen {
    translate: 0dvw;
  }

  &__top-panel {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    & > .space {
      flex: 999 1;
      text-align: right;
    }
  }
}
</style>
