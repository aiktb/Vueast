import { RuleConfigSeverity, type UserConfig } from "@commitlint/types";

const HEADER_MAX_LENGTH = 70;
const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [RuleConfigSeverity.Error, "always", HEADER_MAX_LENGTH],
  },
};

export default config;
