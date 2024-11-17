<template>
  <main class="test">
    <h1>Testing page</h1>

    <DevOnly>
      <div class="test__div">
        <span>Text only</span>
        <ActionButton id="btn-test-2" text="Button" />

        <span>Text with emoji</span>
        <ActionButton id="btn-test-text-emoji" text="Nuclear button! ☢️" />

        <span>Icon only</span>
        <ActionButton id="btn-test-1" icon="tabler:layout-list-filled" />

        <span>Text and Icon</span>
        <ActionButton
          id="btn-test-2"
          text="Navigation"
          icon="tabler:navigation-filled" />

        <span>Text and Icon Reversed</span>
        <ActionButton
          id="btn-test-2"
          text="Reversed Navigation"
          icon="tabler:navigation-filled"
          :opt="{ isReversed: true }" />

        <span>Is this computer free to use?</span>
        <ActionButton
          text="I hereby declare that this computer is free to use"
          :opt="{ isWarning: true, isReversed: true }" />

        <span>Proceed deleting your entire computer?</span>
        <div class="multiple">
          <ActionButton text="Cancel" />

          <ActionButton
            text="Proceed"
            icon="tabler:arrow-right"
            :opt="{ isAlert: true, isReversed: true }" />
        </div>

        <span>Everything in one</span>
        <div class="multiple">
          <ActionButton text="This is a normal button" />
          <ActionButton
            text="This is a warning button"
            :opt="{ isWarning: true }" />
          <ActionButton
            text="This is an alert button"
            :opt="{ isAlert: true }" />
          <ActionButton
            text="This is an accent button"
            :opt="{ isAccent: true }" />
        </div>
      </div>
    </DevOnly>
  </main>
</template>

<style lang="scss">
.test {
  &__div {
    @include util.flex(column, nowrap, 0.4em);
  }
}

.multiple {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.4em;
}
</style>
