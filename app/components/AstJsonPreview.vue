<script setup lang="ts">
import type { SFCParseResult } from "@vue/compiler-sfc";
import { codeToHtml } from "shiki";
import type { HTMLAttributes } from "vue";

import { cn } from "~/lib/utils";

const props = defineProps<{
  ast: SFCParseResult;
  class?: HTMLAttributes["class"];
}>();

const highlightedAstJson = await codeToHtml(
  JSON.stringify({ descriptor: props.ast.descriptor, errors: props.ast.errors }, null, 2),
  {
    lang: "json",
    theme: "min-light",
  },
);
</script>

<template>
  <div :class="cn('', props.class)">
    <!-- Input for rendering is from a safe source. -->
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="highlightedAstJson" />
  </div>
</template>
