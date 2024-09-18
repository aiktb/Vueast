<script setup lang="ts">
import { vue } from "@codemirror/lang-vue";
import { basicSetup, EditorView } from "codemirror";
import type { HTMLAttributes } from "vue";

import { cn } from "~/lib/utils";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();

const editor = useTemplateRef("editor");
const model = defineModel<string>();
const view = ref<EditorView>();

onMounted(() => {
  if (!editor.value) {
    return;
  }
  view.value = new EditorView({
    extensions: [
      basicSetup,
      vue(),
      EditorView.theme({
        ".cm-scroller": {
          fontFamily: "Ubuntu Mono, monospace",
        },
      }),
    ],
    parent: editor.value,
    doc: model.value,
  });
});

const emitChangeEvent = () => {
  if (!view.value) {
    return;
  }
  model.value = view.value.state.doc.toString();
};
</script>

<template>
  <div
    ref="editor"
    :class="cn('relative size-full overflow-hidden font-mono', props.class)"
    translate="no"
    @keydown.ctrl.s.prevent="emitChangeEvent"
    @keydown.meta.s.prevent="emitChangeEvent"
    @blur="emitChangeEvent"
  />
</template>
