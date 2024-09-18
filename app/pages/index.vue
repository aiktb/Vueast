<script setup lang="ts">
import { parse, type SFCParseResult } from "@vue/compiler-sfc";

// The closing tag of "script" will cause JS parsing error.
/* eslint-disable no-useless-escape */
const exampleCode = `<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
<\/script>

<template>
  <span>{{ count }}</span>
  <button @click="count++">Add</button>
</template>
`;
const code = ref<string>(exampleCode);
const ast = ref<SFCParseResult>(parse(code.value));

watchEffect(() => {
  ast.value = parse(code.value);
});
</script>

<template>
  <VResizablePanelGroup direction="horizontal" class="w-full overflow-scroll">
    <VResizablePanel :default-size="50">
      <div class="max-h-screen items-center justify-center overflow-scroll p-6">
        <CodeMirrorEditor v-model="code" />
      </div>
    </VResizablePanel>
    <VResizableHandle :with-handle="true" />
    <VResizablePanel :default-size="50">
      <div class="max-h-screen items-center justify-center overflow-scroll p-6">
        <AstJsonPreview :ast />
      </div>
    </VResizablePanel>
  </VResizablePanelGroup>
</template>
